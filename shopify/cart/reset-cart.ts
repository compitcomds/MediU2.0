import shopifyClient from "../shopify-client";

const resetCartMutation = `
mutation cartResetMutation($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
    }
  }
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes:[]) {
    cart {
      id
    }
  }
  cartNoteUpdate(cartId: $cartId, note: "") {
    cart {
      id
    }
  }
}
`;

export default async function resetCart(
  cartId: string,
  lineIds: string[] = []
) {
  await shopifyClient.request(resetCartMutation, {
    variables: { cartId, lineIds },
  });
}
