<template>
  <div class="grid grid-cols-12">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar />
    </div>

    <div
      class="lg:col-span-9 md:col-span-8 col-span-12 xl:col-span-10 md:me-7 mt-3"
    >
      <ShopBanner />
      <LazyShopCard :productDetails="products" />
    </div>
  </div>
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";
// import { getFilters } from "~/shopify/productFilters";

const route = useRoute();

const query = route.query;

const availableTypeOfTags = [
  "selectedTypeOfProducts",
  "selectedSkinConcern",
  "selectedHairConcern",
  "selectedNutrionAndDiet",
  "selectedPediatric",
  "selectedIngredents",
];

let shopifyQuery = "";

for (const tag of availableTypeOfTags) {
  let miniQuery = "";
  const selectedTags = ifStringMakeArray(query[tag]);
  if (selectedTags.length === 0) continue;
  for (let i = 0; i < selectedTags.length; i++) {
    miniQuery += `(tag:${selectedTags[i]})`;
    if (i < selectedTags.length - 1) miniQuery += " OR ";
  }

  shopifyQuery += miniQuery + " AND ";
}

const { products } = await fetchProducts({ query: shopifyQuery });
// const { filters } = await getFilters();
// console.log(filters);
const isDrawerOpen = ref(false);
let currentPage = 1;
const perPage = 30;
</script>
