<template>
  <div v-if="data" class="py-6 mt-10 text-black">
    <div
      class="grid grid-cols-8 lg:grid-cols-12 gap-x-3 lg:gap-x-4 gap-y-3 mx-3 relative"
    >
      <div class="col-span-8 lg:col-span-6 relative">
        <img
          :src="
            data.featuredImage?.url ||
            `https://placehold.co/500x500/png?text=${data.title}`
          "
          :alt="data.featuredImage?.altText || `Image | ${data.title}`"
          class="w-full object-cover sticky top-0"
        />
      </div>
      <div class="col-span-8 lg:col-span-6 lg:px-3">
        <h1 class="uppercase text-4xl font-bold lg:text-5xl text-black mb-6">
          {{ data.title }}
        </h1>
        <p v-html="data.descriptionHtml" class="text-black text-sm mb-8"></p>
        <div class="mb-8">
          <h2 class="font-medium text-black">PRICE</h2>
          <p class="uppercase text-xl font-bold">
            {{ data.price?.currencyCode }} {{ data.price?.amount }}
          </p>
        </div>
        <div class="flex gap-5 flex-wrap items-center">
          <div
            class="border-black border w-1/3 py-3 px-4 flex items-center justify-between"
          >
            <button class="text-3xl">-</button>
            <p class="text-2xl">1</p>
            <button class="text-3xl">+</button>
          </div>
          <button
            class="bg-black text-white text-lg flex items-center flex-1 justify-center h-full py-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProductData } from "~/shopify/productDetails";

const route = useRoute();
const productHandle = route.params.productSlug;

const data = ref(null);

onMounted(async () => {
  try {
    const product = await getProductData(productHandle);
    data.value = product;
    console.log(product);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});

// Convert Shopify rich text to HTML
function convertShopifyRichTextToHTML(value) {
  if (!value) return "";
  // Assuming value is a string with HTML content
  return value;
}
</script>

<style scoped>
/* Add your styles here */
</style>
