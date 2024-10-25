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
  const orders = await getAllUserOrders();
  const foundOrder = orders.find((order) => order.orderNumber == orderNumber);

  if (foundOrder)
    return { ...foundOrder, lineItems: foundOrder.lineItems.nodes };

  throw new Error("Unable to find the order with the given order number.");
}
