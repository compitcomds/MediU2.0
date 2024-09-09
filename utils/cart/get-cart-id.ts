import createShopifyCart from "~/shopify/cart/create-cart";

export default async function getCartIdOrCreateOne() {
  const cartId = useUserStore().shopifyCartId;
  if (!cartId) {
    await createShopifyCart();
  }
}
