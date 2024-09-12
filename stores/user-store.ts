import { defineStore } from "pinia";
import createShopifyCart from "~/shopify/cart/create-cart";

export const useUserStore = defineStore("userStore", {
  state: (): { shopifyCartId: null | string; wishlist: string[] } => ({
    shopifyCartId: null,
    wishlist: [],
  }),

  actions: {
    setShopifyCartId(newCartId: string) {
      this.shopifyCartId = newCartId;
    },

    async getShopifyCartId() {
      if (!this.shopifyCartId) {
        const newCart = await createShopifyCart();
        this.shopifyCartId = newCart.id;
        return newCart.id;
      }
      return this.shopifyCartId;
    },

    toggleProductIdFromWishlist(productId: string) {
      this.wishlist = toggleElementFromArray(this.wishlist, productId);
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
