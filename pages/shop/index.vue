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

<script setup lang="ts">
import { fetchProducts } from "~/shopify/products";
// import { getFilters } from "~/shopify/productFilters";

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
  { immediate: true }
);
useSeoMeta({
  title: "Shop Medicines & Healthcare Products Online | Mediu",
  description: "Explore a wide range of medicines, health supplements, and wellness products at Mediu.in. Convenient online shopping with quality assurance, competitive prices, and doorstep delivery. Your one-stop healthcare destination.",
  ogTitle: "Shop Medicines & Healthcare Products Online | Mediu",
  ogDescription: "Explore a wide range of medicines, health supplements, and wellness products at Mediu.in. Convenient online shopping with quality assurance, competitive prices, and doorstep delivery. Your one-stop healthcare destination.",
});
defineOgImageComponent("NuxtSeo", {
  siteName: "mediu",
  description: "Read more...",
  siteLogo: "https://ccdstest.b-cdn.net/Medi%20u/logo%202.png",
  colorMode: "dark",
});

</script>
