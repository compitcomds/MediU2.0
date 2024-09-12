<template>
  <div class="grid grid-cols-12">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar />
    </div>

    <div
      class="lg:co l-span-9 md:col-span-8 col-span-12 xl:col-span-10 md:me-7 mt-3"
    >
      <ShopBanner />
      <LazyShopCard :productDetails="data" />
    </div>
  </div>
</template>

<script setup>
import shopifySearchProducts from "~/shopify/search/search";
// import { getFilters } from "~/shopify/productFilters";

const route = useRoute();

const data = ref([]);

const shopStore = useShopStore();
const { shopifyProductsQuery } = storeToRefs(shopStore);

const fetchProductsUsingSearchQuery = async (newQuery) => {
  const products = await shopifySearchProducts(newQuery?.search || "");
  data.value = products;
  console.log(newQuery, products);
};

watch(() => route.query, fetchProductsUsingSearchQuery, { deep: true });

onMounted(() => {
  fetchProductsUsingSearchQuery(route.query);
});

// const { filters } = await getFilters();
// console.log(filters);
const isDrawerOpen = ref(false);
let currentPage = 1;
const perPage = 30;
</script>
