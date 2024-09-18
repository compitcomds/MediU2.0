// stores/shopFilterStore.ts
import { defineStore } from "pinia";

export const useShopFilterStore = defineStore("shopFilter", {
  state: (): { tags: string[]; selectedTags: string[] } => ({
    tags: [],
    selectedTags: [],
  }),
  actions: {
    toggleTagSelection(tag: string) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
  },
});
