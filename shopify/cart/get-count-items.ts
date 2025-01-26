import shopifyClient from "../shopify-client";
import { type CartItemType } from "../_types/cart";

const getCountOfCartDataItemsQuery = `
query getCountOfCartDataItems($cartId: ID!) {
  cart(id: $cartId) {
    lines(first: 100) {
      nodes {
        id
      }
    }
  }
}
`;

export async function getCountOfCartDataItemsThroughCartId(
  cartId: string,
): Promise<number> {
  const { data } = await shopifyClient.request(getCountOfCartDataItemsQuery, {
    variables: { cartId },
  });

  return data?.cart?.lines?.nodes?.length || 0;
}

export default async function getCountOfCartDataItems() {
  const cartId = await useUserStore().getShopifyCartId();
  return await getCountOfCartDataItemsThroughCartId(cartId);
}
