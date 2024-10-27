import shopifyClient from "../shopify-client";
import { type CartItemType } from "../_types/cart";

const getCartDataQuery = `
query getCartData($cartId: ID!) {
  cart(id: $cartId) {
    checkoutUrl
    id
    note
    discountCodes {
      applicable
      code
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
      subtotalAmount: { amount: string; currencyCode: string };
      totalTaxAmount: { amount: string; currencyCode: string };
      discountCodes: Array<{
        applicable: boolean;
        code: string;
      }>;
      totalAmount: { amount: string; currencyCode: string };
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

  console.log(data, errors);

  if (data?.cart) {
    const items: Array<CartItemType> = [];
    items.push(...convertCartLinesToCartItemType(data.cart.lines.nodes));

    const shopStore = useShopStore();
    shopStore.updateTotalItemsInShop(items.length);

    return {
      items,
      checkoutUrl: data.cart.checkoutUrl,
      subtotalAmount: data.cart.cost.subtotalAmount,
      totalTaxAmount: data.cart.cost.totalTaxAmount,
      totalAmount: data.cart.cost.totalAmount,
      buyerIdentity: data.cart.buyerIdentity,
      note: data.cart.note || "",
      discountCodes: data.cart.discountCodes,
    };
  }

  throw new Error(
    "Unable to fetch the cart. Try logging in the error from shopifyClient.request to see what might have happened.",
  );
}

export default async function getCartData() {
  const cartId = await useUserStore().getShopifyCartId();
  console.log(cartId);
  return await getCartDataThroughCartId(cartId);
}
