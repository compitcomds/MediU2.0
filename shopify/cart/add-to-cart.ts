import shopifyClient from "../shopify-client";
import createShopifyCart from "./create-cart";

const addToCartMutation = `
mutation addToCartMutation($cartId: ID!, $lines:[CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
    }
    userErrors {
      message
      field
      code
    }
  }
}
`;

export default async function addToCart({
  merchandiseId,
  cartId,
}: {
  merchandiseId: string;
  cartId?: string;
}) {
  if (!cartId) {
    await createShopifyCart();
    return await addToCart({ merchandiseId });
  }

  const { data, errors } = await shopifyClient.request(addToCartMutation, {
    variables: { cartId, lines: [{ merchandiseId }] },
  });
console.log(data)
  if (data.cartLinesAdd?.userErrors?.length > 0) {
    throw new Error(
      data.cartLinesAdd.userErrors.map((error: any) => error.message).join(", ")
    );
  }

  if (errors) {
    console.log(errors);
    throw new Error(
      "Error while addToCart. (Probably some error in implementation, see for yourself)."
    );
  }
}
