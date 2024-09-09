import { defineStore } from "pinia";
import createShopifyCart from "~/shopify/cart/create-cart";

export const useUserStore = defineStore("userStore", {
  state: (): { shopifyCartId: null | string } => ({ shopifyCartId: null }),
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
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
