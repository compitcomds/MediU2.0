<template>
  <div class="grid grid-cols-12 lg:pt-10 pt-2">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar :hideProductType="true" />
    </div>

    <div
      class="lg:col-span-9 md:col-span-8 col-span-12 xl:col-span-10 md:me-7 mt-3"
    >
      <ShopBanner />
      <ShopCard :productDetails="data.products" name="Add To Cart" />
    </div>
  </div>
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";
// import { getFilters } from "~/shopify/productFilters";

const route = useRoute();

const data = useState("data", () => ({
  products: [],
}));

watch(
  () => route.query,
  async (newQuery) => {
    const queryString = convertQueryParamsToQueryString(newQuery);
    const newData = await fetchProducts({ query: queryString });
    console.log(queryString, newData);
    data.value = newData;
  },
  { immediate: true }
);
</script>
