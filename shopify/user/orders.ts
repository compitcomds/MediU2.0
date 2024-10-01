import shopifyClient from "../shopify-client";

const getAllUserOrdersQuery = `
query getAllUserOrders($accessToken: String!) {
  customer(customerAccessToken: $accessToken) {
    orders(first: 100) {
      nodes {
        id
        fulfillmentStatus
        processedAt
        totalPrice {
          amount
          currencyCode
        }
        orderNumber
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
    }>;
  return [];
}
