import getCartData from "~/shopify/cart/get-cart-data";

export const useCart = () => {
  const { data } = useLazyAsyncData("cart", getCartData);

  const cart = ref(
    data.value ?? {
      items: [],
      subtotalAmount: { currencyCode: "", amount: "" },
      totalAmount: { currencyCode: "", amount: "" },
      totalTaxAmount: { currencyCode: "", amount: "" },
      discountCodes: [],
    },
  );

  return {
    cart,
    refetch: () => refreshNuxtData("cart"),
  };
};
