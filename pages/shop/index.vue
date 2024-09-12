<template>
  <div class="grid grid-cols-12">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar />
    </div>

    <div
      class="lg:col-span-9 md:col-span-8 col-span-12 xl:col-span-10 md:me-7 mt-3"
    >
      <ShopBanner />
      <LazyShopCard :productDetails="data.products" />
    </div>
  </div>
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";
// import { getFilters } from "~/shopify/productFilters";

const shopStore = useShopStore();
const { shopifyProductsQuery } = storeToRefs(shopStore);

const data = await fetchProducts({ query: shopifyProductsQuery.value });

// const { filters } = await getFilters();
// console.log(filters);
const isDrawerOpen = ref(false);
let currentPage = 1;
const perPage = 30;
</script>
