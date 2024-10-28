<template>
  <div class="grid grid-cols-12">
    <div class="ms-7 hidden sm:block md:col-span-4 lg:col-span-3 xl:col-span-2">
      <ShopFilterbar />
    </div>

    <div
      class="lg:co l-span-9 col-span-12 mt-3 md:col-span-8 md:me-7 xl:col-span-10"
    >
      <ShopBanner />
      <ShopCard :productDetails="productDetails" name="Add To Cart" />
    </div>
  </div>
</template>

<script setup>
import shopifySearchProducts from "~/shopify/search/search";
// import { getFilters } from "~/shopify/productFilters";

const route = useRoute();

const productDetails = ref([]);

const fetchProductsUsingSearchQuery = async (newQuery) => {
  const products = await shopifySearchProducts(newQuery?.search || "");
  productDetails.value = products;
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
