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
  const cart = data?.cartCreate?.cart;
  if (cart?.id) {
    return cart as { id: string; checkoutUrl: string };
  }
  console.log("cart",cart)
  throw new Error(
    "Unable to create create at the time... Please try again later."
  );
}
