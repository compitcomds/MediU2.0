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
}: {
  merchandiseId: string;
}) {
  const cartId = await useUserStore().getShopifyCartId();
  if (!cartId) {
    await createShopifyCart();
    return await addToCart({ merchandiseId });
  }
  const { data, errors } = await shopifyClient.request(addToCartMutation, {
    variables: { cartId, lines: [{ merchandiseId }] },
  });

  if (data.cartLinesAdd?.userErrors?.length > 0) {
    throw new Error(
      data.cartLinesAdd.userErrors.map((error: any) => error.message).join(", ")
    );
  }

  if (errors) {
    console.log("Error occurred while attaching identity.");
    console.log(errors);
    throw new Error(
      "Error while addToCart. (Probably some error in implementation, see for yourself)."
    );
  }
}
