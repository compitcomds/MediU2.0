import shopifyClient from "~/shopify/shopify-client";

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
            originalTotalPrice {
              amount
              currencyCode
            }
            discountedTotalPrice {
              amount
              currencyCode
            }
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
          province
          country
          firstName
          lastName
        }
      }
    }
  }
}`;

export default async function getUserOrder(orderNumber: string) {
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
