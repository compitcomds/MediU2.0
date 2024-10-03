import { defineStore } from "pinia";
import { getUser } from "~/appwrite/auth";

import createShopifyCart from "~/shopify/cart/create-cart";

export const useUserStore = defineStore("userStore", {
  state: (): {
    userNmae:null | string;
    userEmail: null | string;
    shopifyCartId: null | string;
    wishlist: string[];
    isAuthenticated: boolean;
  } => ({
    shopifyCartId: "",
    wishlist: [],
    isAuthenticated: false,
    userNmae: null,
    userEmail: null,
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

    async checkAuthenticated() {
      try {
        await getUser();
        this.isAuthenticated = true;
      } catch (error) {
        this.isAuthenticated = false;
      }
    },

    async initialiseUserStore() {
      await this.checkAuthenticated();
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
