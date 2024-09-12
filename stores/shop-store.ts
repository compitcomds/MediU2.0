import { defineStore } from "pinia";
import { getCartDataThroughCartId } from "~/shopify/cart/get-cart-data";
import { type CartItemType } from "~/shopify/cart/types";

type ShopStoreState = {
  selectedTypeOfProducts: string[];
  selectedSkinConcern: string[];
  selectedHairConcern: string[];
  selectedNutrionAndDiet: string[];
  selectedPediatric: string[];
  selectedIngredent: string[];
};

export const useShopStore = defineStore("userStore", {
  state: (): {
    shopifyProductsQuery: string;
    cart: {
      items: CartItemType[];
      subtotalAmount: { amount: number; currencyCode: string };
      totalAmount: { amount: number; currencyCode: string };
      checkoutUrl: string;
      note: string;
    };
  } => {
    const route = useRoute();
    const shopifyQuery = convertQueryParamsToQueryString(route.query);
    return {
      shopifyProductsQuery: shopifyQuery,

      cart: {
        items: [],
        subtotalAmount: { amount: 0, currencyCode: "INR" },
        totalAmount: { amount: 0, currencyCode: "INR" },
        checkoutUrl: "",
        note: "",
      },
    };
  },
  actions: {
    updateShopifyProductsQuery(newQuery: string) {
      this.shopifyProductsQuery = newQuery;
    },
    async fetchCart() {
      const cartId = await useUserStore().getShopifyCartId();
      const fetchedCart = await getCartDataThroughCartId(cartId);
      if (fetchedCart) this.cart = fetchedCart;
      return this.cart;
    },
  },
});
