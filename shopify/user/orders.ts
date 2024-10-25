import shopifyClient from "../shopify-client";

const getAllUserOrdersQuery = `
query getAllUserOrders($accessToken: String!) {
  customer(customerAccessToken: $accessToken) {
    orders(first: 100, reverse: true, sortKey: PROCESSED_AT) {
      nodes {
        id
        fulfillmentStatus
        processedAt
        totalPrice {
          amount
          currencyCode
        }
        orderNumber
        lineItems(first: 100) {
          nodes {
            title
            quantity
            variant {
              image {
                altText
                height
                width
                url
              }
            }
          }
        }
      }
    }
  }
}
`;

const getParticularUserOrderQuery = `
query getParticularUserOrders($accessToken: String!, $query: String) {
  customer(customerAccessToken: $accessToken) {
    orders(first: 1, query: $query) {
      nodes {
        id
        fulfillmentStatus
        processedAt
        totalPrice {
          amount
          currencyCode
        }
        orderNumber
        lineItems(first: 100) {
          nodes {
            title
            quantity
            variant {
              image {
                altText
                height
                width
                url
              }
            }
          }
        }
        shippingAddress {
          address1
          address2
          city
          country
          firstName
          lastName
        }
      }
    }
  }
}`;

export async function getAllUserOrders() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) throw new Error("Invalid user...");

  const { data } = await shopifyClient.request(getAllUserOrdersQuery, {
    variables: { accessToken },
  });

  if (data?.customer?.orders)
    return data.customer.orders.nodes as Array<{
      id: string;
      fulfillmentStatus: string;
      processedAt: string;
      totalPrice: { amount: string; currencyCode: string };
      orderNumber: string;
      lineItems: {
        nodes: Array<{
          title: string;
          quantity: number | string;
          variant: {
            image: {
              altText: string;
              height: number;
              width: number;
              url: string;
            };
          };
        }>;
      };
    }>;
  return [];
}

export async function getUserOrder(orderNumber: string) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) throw new Error("Invalid user...");

  const { data, errors } = await shopifyClient.request(
    getParticularUserOrderQuery,
    {
      variables: { accessToken, query: `id:${orderNumber}` },
    },
  );

  console.log(errors);

  if (data.customer.orders.nodes.length < 1)
    throw new Error("Unable to find the order.");
  const foundOrder = data.customer.orders.nodes[0];
  if (foundOrder)
    return { ...foundOrder, lineItems: foundOrder.lineItems.nodes };

  throw new Error("Unable to find the order with the given order number.");
}
