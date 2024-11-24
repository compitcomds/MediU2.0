<template>
  <div class="grid grid-cols-12 pt-2 lg:pt-10">
    <div class="ms-7 hidden sm:block md:col-span-4 lg:col-span-3 xl:col-span-2">
      <ShopFilterbar :hideProductType="true" />
    </div>

    <div
      class="col-span-12 mt-3 md:col-span-8 md:me-7 lg:col-span-9 xl:col-span-10"
    >
      <ShopBanner />
      <ShopCard :productDetails="data.products" name="Add To Cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchProducts } from "~/shopify/products";

const route = useRoute();

const data = useState("data", () => ({
  products: [],
}));

watch(
  () => route.query,
  async (newQuery: any) => {
    const queryString = convertQueryParamsToQueryString({
      selectedSkinConcern: newQuery.selectedSkinConcern,
      selectedHairConcern: newQuery.selectedHairConcern,
      selectedNutrionAndDiet: newQuery.selectedNutrionAndDiet,
      selectedPediatric: newQuery.selectedPediatric,
      selectedIngredent: newQuery.selectedIngredent,
      selectedSkinIngredent: newQuery.selectedSkinIngredent,
      selectedSkinCare: newQuery.selectedSkinCare,
      selectedHairCare: newQuery.selectedHairCare,
    });
    const newData = await fetchProducts({ query: queryString });

    data.value = {
      ...newData,
      products: newData.products.filter((product: any) => {
        const prodPrice = parseFloat(product.price);
        if (!!newQuery.min && parseInt(newQuery.min) > prodPrice) return false;
        else if (!!newQuery.max && parseInt(newQuery.max) < prodPrice)
          return false;
        return true;
      }),
    };
  },
  { immediate: true },
);
</script>
