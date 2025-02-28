import getCartData from "~/shopify/cart/get-cart-data";

export const useCart = () => {
  const { data } = useLazyAsyncData("cart", getCartData);
  return {
    cart: data,
    refetch: () => refreshNuxtData("cart"),
  };
};
