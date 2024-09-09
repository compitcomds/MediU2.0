import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: (): { shopifyCartId: null | string } => ({ shopifyCartId: null }),
  actions: {
    setShopifyCartId(newCartId: string) {
      this.shopifyCartId = newCartId;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
