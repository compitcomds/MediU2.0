import shopifyClient from "../shopify-client";

const applyDiscountCodeQuery = `
mutation applyDiscountCodesToCart($cartId: ID!, $discountCodes: [String!] = []) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      discountCodes {
        applicable
        code
      }
    }
  }
}
`;

export async function applyDiscountCodeToCartUsingCartId(
  cartId: string,
  discountCode: string,
) {
  if (!discountCode) throw new Error("No discount code provided.");
  if (!cartId) throw new Error("Invalid cart.");

  const { data, errors } = await shopifyClient.request(applyDiscountCodeQuery, {
    variables: { cartId, discountCodes: [discountCode] },
  });

  const discountApplied = data?.cartDiscountCodesUpdate?.cart
    ?.discountCodes as Array<{ applicable: boolean; code: string }>;
  if (discountApplied.length === 1 && discountApplied[0].applicable)
    return discountApplied;

  await shopifyClient.request(applyDiscountCodeQuery, {
    variables: { cartId, discountCodes: [] },
  });

  console.log(errors);
  throw new Error("Invalid discount code.");
}

export default async function applyDiscountCodeToCart(discountCode: string) {
  const cartId = await useUserStore().getShopifyCartId();
  return await applyDiscountCodeToCartUsingCartId(cartId, discountCode);
}
