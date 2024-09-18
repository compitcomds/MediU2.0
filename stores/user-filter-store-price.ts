import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const usePriceFilterStore = defineStore('priceFilter', {
  state: () => ({
    // Use useStorage to persist the price range in localStorage
    minPrice: useStorage<number>('min-price', 0),
    maxPrice: useStorage<number>('max-price', 10000),
  }),
  actions: {
    setMinPrice(price: number) {
      this.minPrice = price;
    },
    setMaxPrice(price: number) {
      this.maxPrice = price;
    },
    setPriceRange(min: number, max: number) {
      this.minPrice = min;
      this.maxPrice = max;
    }
  }
});
