import { defineStore } from "pinia";

export const useShopStore = defineStore("shopStore", {
  state: (): {totalItems: number} => ({totalItems: 0}),
  actions: {
    updateTotalItemsInShop(noOfItems: number){
      this.totalItems = noOfItems
    }
  },
});
