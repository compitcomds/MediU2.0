import shopifyClient from "../shopify-client";

const createCartMutation = `
mutation createCartMutation {
  cartCreate {
    cart {
      id
      checkoutUrl
    }
  }
}
`;

export default async function createShopifyCart() {
  const { data } = await shopifyClient.request(createCartMutation);
  const cart = data?.cartCreate?.cart as
    | null
    | undefined
    | { id: string; checkoutUrl: string };
  if (cart?.id) {
    return cart;
  }
  console.log("cart", cart);
  throw new Error(
    "Unable to create cart at the time... Please try again later."
  );
}
