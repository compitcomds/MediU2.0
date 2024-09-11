import { defineStore } from "pinia";

type ShopStoreState = {
  selectedTypeOfProducts: string[];
  selectedSkinConcern: string[];
  selectedHairConcern: string[];
  selectedNutrionAndDiet: string[];
  selectedPediatric: string[];
  selectedIngredent: string[];
};

export const useShopStore = defineStore("userStore", {
  state: (): { filters: ShopStoreState } => ({
    filters: {
      selectedTypeOfProducts: [],
      selectedSkinConcern: [],
      selectedHairConcern: [],
      selectedNutrionAndDiet: [],
      selectedPediatric: [],
      selectedIngredent: [],
    },
  }),
  actions: {
    updateShopFilterValues(newValues: Partial<ShopStoreState>) {
      this.filters = { ...this.filters, ...newValues };
    },
  },
});
