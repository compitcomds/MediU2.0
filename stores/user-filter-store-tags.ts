// stores/shopFilterStore.ts
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useShopFilterStore = defineStore('shopFilter', {
  state: () => ({
    tags: useStorage<string[]>('shop-filter-tags', []),
    selectedTags: useStorage<string[]>('selected-tags', [])
  }),
  actions: {
    toggleTagSelection(tag: string) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
});
