<template>
  <div class="grid grid-cols-12 pt-2 lg:pt-10">
    <div class="ms-7 hidden md:col-span-4 md:block lg:col-span-3 xl:col-span-2">
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

useHead({
  title: "Mediu | Shop",
  meta: [
    {
      name: "description",
      content: "Mediu Shop",
    },
    {
      name: "keywords",
      content: "Mediu, Shop, health, wellness",
    },
    {
      name: "author",
      content: "Mediu",
    },
    {
      name: "og:title",
      content: "Mediu | Shop",
    },
    {
      name: "og:description",
      content: "Mediu Shop",
    },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:image:secure_url",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "Mediu",
    },
    {
      name: "og:url",
      content: "https://mediu.in/shop",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Shop",
    },
    {
      name: "twitter:description",
      content: "Mediu Shop",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "twitter:url",
      content: "https://mediu.in/shop",
    },
  ],
});
</script>
