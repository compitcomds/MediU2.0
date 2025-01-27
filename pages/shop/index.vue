<template>
  <div class="grid grid-cols-12 pt-2 lg:pt-10">
    <div class="ms-7 hidden md:col-span-4 md:block lg:col-span-3 xl:col-span-2">
      <ShopFilterbar :hideProductType="true" />
    </div>

    <div
      class="col-span-12 mt-3 md:col-span-8 md:me-7 lg:col-span-9 xl:col-span-10"
    >
      <ShopBanner />
      <ShopCard :productDetails="data?.products || []" name="Add To Cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchProducts } from "~/shopify/products";

const route = useRoute();

const data = useState("data", () => ({
  products: [],
}));

const fetchProductsAccordingToQuery = async (query: any) => {
  const queryString = convertQueryParamsToQueryString({
    selectedSkinConcern: query.selectedSkinConcern,
    selectedHairConcern: query.selectedHairConcern,
    selectedNutrionAndDiet: query.selectedNutrionAndDiet,
    selectedPediatric: query.selectedPediatric,
    selectedIngredent: query.selectedIngredent,
    selectedSkinIngredent: query.selectedSkinIngredent,
    selectedSkinCare: query.selectedSkinCare,
    selectedHairCare: query.selectedHairCare,
  });
  const newData = await fetchProducts({ query: queryString });
  return {
    ...newData,
    products: newData.products.filter((product: any) => {
      const prodPrice = parseFloat(product.price);
      if (!!query.min && parseInt(query.min) > prodPrice) return false;
      else if (!!query.max && parseInt(query.max) < prodPrice) return false;
      return true;
    }),
  };
};

watch(
  () => route.query,
  async (newQuery) => {
    const newData = await fetchProductsAccordingToQuery(newQuery);
    data.value = newData;
  },
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
