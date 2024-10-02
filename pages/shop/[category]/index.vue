<template>
  <div class="grid grid-cols-12 pt-10">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar />
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

const route = useRoute();
const category = route.params.category;

const data = useState("data", () => ({
  products: [],
}));

watch(
  () => route.query,
  async (newQuery) => {
    const queryString = convertQueryParamsToQueryString(newQuery);
    const newData = await fetchProducts({
      query: queryString,
    });
    data.value = {
      ...newData,
      products: newData.products.filter((product) =>
        product.collections.includes(category.toLowerCase())
      ),
    };
  },
  { immediate: true }
);
console.log(category);
</script>
