import shopifyClient from "../shopify-client";
import { type CartItemType } from "../_types/cart";
import convertCartLinesToCartItemType from "~/utils/convertCartLinesToCartItemType";

const getCartDataQuery = `
query getCartData($cartId: ID!) {
  cart(id: $cartId) {
    id
    note
    discountAllocations {
      ... on CartCodeDiscountAllocation {
        __typename
        code
        discountedAmount {
          amount
          currencyCode
        }
      }
      ... on CartAutomaticDiscountAllocation {
        __typename
        title
        discountedAmount {
          amount
          currencyCode
        }
      }
    }
    buyerIdentity {
      email
      customer {
        firstName
        lastName
        email
      }
      deliveryAddressPreferences {
        ... on MailingAddress {
          id
          name
          phone
          zip
          province
          address1
          address2
          city
          company
          country
          firstName
          lastName
        }
      }
    }
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      nodes {
        merchandise {
          ... on ProductVariant {
            id
            selectedOptions {
              name
              value
            }
            product {
              handle
              id
              title
              requiresPrescription: metafield(
                key: "requiresPrescription"
                namespace: "custom"
              ) {
                value
              }
              gstApplied: metafield(
                key: "gst_applied"
                namespace: "custom"
              ) {
                value
              }
            }
            image {
              url
              altText
              height
              width
            }
          }
        }
        quantity
        id
        cost {
          amountPerQuantity {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

export default async function getCartDataForCheckout(cartId: string): Promise<
  | {
      items: CartItemType[];
      note: string;
      subtotalAmount: { amount: number; currencyCode: string };
      totalAmount: { amount: string; currencyCode: string };
      totalTaxAmount: { amount: number; currencyCode: string };
      discountAllocations: Array<{
        __typename:
          | "CartCodeDiscountAllocation"
          | "CartAutomaticDiscountAllocation";
        code?: string;
        title?: string;
        discountedAmount: {
          amount: string;
          currencyCode: string;
        };
      }>;
      buyerIdentity: {
        email: string;
        customer: {
          firstName: string;
          lastName: string;
          email: string;
        };
        deliveryAddressPreferences: Array<{
          id: string;
          name: string;
          phone: string | null;
          zip: string;
          province: string;
          address1: string;
          address2: string | null;
          city: string;
          company: string | null;
          country: string;
          firstName: string;
          lastName: string;
        }>;
      };
    }
  | null
  | undefined
> {
  const { data } = await shopifyClient.request(getCartDataQuery, {
    variables: { cartId },
  });
  if (data?.cart) {
    const items: Array<CartItemType> = [];
    items.push(...convertCartLinesToCartItemType(data.cart.lines.nodes));
    return {
      items,
      subtotalAmount: data.cart.cost.subtotalAmount,
      totalAmount: data.cart.cost.totalAmount,
      buyerIdentity: data.cart.buyerIdentity,
      note: data.cart.note || "",
      discountAllocations: data.cart.discountAllocations,
      totalTaxAmount: data.cart.cost.totalTaxAmount,
    };
  }
}
