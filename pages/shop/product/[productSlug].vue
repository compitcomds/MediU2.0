<template>
  <div v-if="data" class="py-6 mt-10 text-black">
    <div
      class="grid grid-cols-8 lg:grid-cols-12 gap-x-3 lg:gap-x-4 gap-y-3 mx-3 relative"
    >
      <div class="col-span-8 lg:col-span-6 relative">
        <div class="sticky top-0">
          <ShopImages :title="data.title" :images="data.images" />
        </div>
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
        <div class="flex gap-5 flex-wrap items-center mb-8">
          <div
            class="border-black border w-1/4 py-3 px-4 flex items-center justify-between"
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
          <ShopAddingToCartBtn :productId="data.id"/>
        </div>
        <div>
          <template v-for="key in accordionKeys">
            <div
              v-if="!!data[key.value]"
              class="collapse collapse-plus border-b-2 shadow-none rounded-none"
            >
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div class="collapse-title text-xl font-medium">
                <h3 class="font-medium uppercase">
                  {{ key.name }}
                </h3>
              </div>
              <div
                class="collapse-content"
                v-html="convertShopifyRichTextToHTML(data[key.value].value)"
              ></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProductData } from "~/shopify/productDetails";

const route = useRoute();
const productHandle = route.params.productSlug;

const data = ref(null);

const accordionKeys = [
  {
    name: "Safety information / Precaution",
    value: "safetyInformationAndPrecaution",
  },
  {
    name: "How to use?",
    value: "howToUse",
  },
  {
    name: "Key benefits",
    value: "keyBenefits",
  },
];

onMounted(async () => {
  try {
    const product = await getProductData(productHandle);
    data.value = product;
    product.images;
    console.log(product.images);
    console.log(product);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
