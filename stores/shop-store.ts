import { defineStore } from "pinia";

export const useShopStore = defineStore("userStore", {
  state: (): {totalItems: number} => ({totalItems: 0}),
  actions: {
    updateTotalItemsInShop(noOfItems: number){
      this.totalItems = noOfItems
    }
  },
});
