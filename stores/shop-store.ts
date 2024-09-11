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
  state: (): { shopifyProductsQuery: string } => {
    const route = useRoute();
    const shopifyQuery = convertQueryParamsToQueryString(route.query);
    return {
      shopifyProductsQuery: shopifyQuery,
    };
  },
  actions: {
    updateSHopifyProductsQuery(newQuery: string) {
      this.shopifyProductsQuery = newQuery;
    },
  },
});
