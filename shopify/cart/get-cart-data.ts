import shopifyClient from "../shopify-client";
import { type CartItemType } from "./types";

const getCartDataQuery = `
query getCartData($cartId: ID!) {
  cart(id: $cartId) {
    checkoutUrl
    id
    note
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
      totalDutyAmount {
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

export async function getCartDataThroughCartId(cartId: string): Promise<
  | {
      items: CartItemType[];
      checkoutUrl: string;
      note: string;
      subtotalAmount: { amount: number; currencyCode: string };
      totalDutyAmount: { amount: number; currencyCode: string };
      totalAmount: { amount: number; currencyCode: string };
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
  const { data, errors } = await shopifyClient.request(getCartDataQuery, {
    variables: { cartId },
  });

  if (data?.cart) {
    const items: Array<CartItemType> = [];
    items.push(...convertCartLinesToCartItemType(data.cart.lines.nodes));
    return {
      items,
      checkoutUrl: data.cart.checkoutUrl,
      subtotalAmount: data.cart.cost.subtotalAmount,
      totalDutyAmount: data.cart.cost.totalDutyAmount,
      totalAmount: data.cart.cost.totalAmount,
      buyerIdentity: data.cart.buyerIdentity,
      note: data.cart.note || "",
    };
  }

  throw new Error(
    "Unable to fetch the cart. Try logging in the error from shopifyClient.request to see what might have happened."
  );
}

export default async function getCartData() {
  const cartId = await useUserStore().getShopifyCartId();
  return await getCartDataThroughCartId(cartId);
}
