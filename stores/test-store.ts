import { defineStore } from "pinia";
import createShopifyCart from "~/shopify/cart/create-cart";

export const useTestStore = defineStore("test-store", {
  state: () => ({
    count: 0,
  }),
});
