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
import getProductsInCollection from "~/shopify/shop/get-products-by-collection";

const route = useRoute();
const handle = Array.isArray(route.params.category)
  ? route.params.category[0]
  : route.params.category;

const fetchedData = useState("data", () => ({
  products: [],
}));

const data = useState("data", () => ({
  products: [],
}));

onMounted(async () => {
  const newData = await getProductsInCollection(handle);
  if (!newData) return;
  data.value = { ...newData };
  fetchedData.value = { ...newData };
});

watch(
  () => route.query,
  async (newQuery: any) => {
    data.value.products = fetchedData.value.products.filter((product: any) => {
      const prodPrice = parseFloat(product.price);
      if (!!newQuery.min && parseInt(newQuery.min) > prodPrice) return false;
      else if (!!newQuery.max && parseInt(newQuery.max) < prodPrice)
        return false;
      return true;
    });
  },
  { immediate: true },
);

useHead({
  title: "Shop - Collection - Mediu",
  meta: [
    { name: "description", content: "Shop - Collection" },
    { name: "og:title", content: "Shop - Collection - Mediu" },
    { name: "og:description", content: "Shop - Collection" },
    { name: "keywords", content: `Mediu, Shop, health, wellness` },
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
      name: "og:url",
      content: "https://mediu.in/shop/" + handle,
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
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Shop - Collection",
    },
    {
      name: "twitter:description",
      content: "Mediu Shop - Collection",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
