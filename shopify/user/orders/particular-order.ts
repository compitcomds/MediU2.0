import shopifyClient from "~/shopify/shopify-client";

const getParticularUserOrderQuery = `
query getParticularUserOrders($accessToken: String!, $query: String) {
  customer(customerAccessToken: $accessToken) {
    email 
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
              sku
              image {
                altText
                height
                width
                url
              }
              product {
                gstApplied: metafield(key: "gst_applied", namespace: "custom") {
                  value
                }
              }
              price {
                amount
                currencyCode
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
          phone
        }
      }
    }
  }
}`;

type OrderType = {
  id: string;
  fulfillmentStatus: string;
  processedAt: string;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  orderNumber: string;
  lineItems: {
    nodes: {
      title: string;
      quantity: number;
      originalTotalPrice: {
        amount: string;
        currencyCode: string;
      };
      discountedTotalPrice: {
        amount: string;
        currencyCode: string;
      };
      variant?: {
        sku?: string;
        image?: {
          altText?: string;
          height?: number;
          width?: number;
          url: string;
        };
        product?: {
          gstApplied?: {
            value: string;
          };
        };
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
  shippingAddress: {
    address1: string;
    address2?: string;
    city: string;
    province: string;
    country: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};

export default async function getUserOrder(orderNumber: string) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) throw new Error("Invalid user...");

  const { data, errors } = await shopifyClient.request(
    getParticularUserOrderQuery,
    {
      variables: { accessToken, query: `id:${orderNumber}` },
    },
  );

  const customer = data.customer;

  if (customer.orders.nodes.length < 1)
    throw new Error("Unable to find the order.");

  const foundOrder = customer.orders.nodes[0] as OrderType;

  return {
    ...foundOrder,
    email: customer.email,
    lineItems: foundOrder.lineItems.nodes,
  };

  throw new Error("Unable to find the order with the given order number.");
}
