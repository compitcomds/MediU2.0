<template>
  <div v-if="data" class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-blue-500 p-4 text-white">
      <img v-if="data.featuredImage" :src="data.featuredImage.url" :alt="data.featuredImage.altText" />
      
      <div v-if="data.images && data.images.length">
        <div v-for="item in data.images" :key="item.url">
          <img :src="item.url" :alt="item.altText" />
        </div>
      </div>
    </div>

    <div class="bg-green-500 p-4 text-white">
      <h1>{{ data.title }}</h1>
      <div v-html="data.descriptionHtml"></div>
      
      <div>
        <h2>Options:</h2>
        <ul>
          <li v-for="option in data.options" :key="option.name">
            {{ option.name }}: {{ option.values.join(', ') }}
          </li>
        </ul>
      </div>
      
      <div v-html="convertShopifyRichTextToHTML(data.keyBenefits?.value)"></div>
      <div v-html="convertShopifyRichTextToHTML(data.howToUse?.value)"></div>
      <div v-html="convertShopifyRichTextToHTML(data.safetyInformationAndPrecaution?.value)"></div>
      <div v-html="convertShopifyRichTextToHTML(data.otherInfo?.value)"></div>
      
      <div>
        <p>Available: {{ !data.currentlyNotInStock ? 'In Stock' : 'Out of Stock' }}</p>
        <p>Quantity Available: {{ data.quantityAvailable }}</p>
        <p>Price: {{ data.price.currencyCode }} {{ data.price.amount }}</p>
      </div>
      
      <ShopAddingToCartBtn :productId="data.id" cartID="#cartid" />
    </div>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getProductData } from '~/shopify/productDetails';

const route = useRoute();
const productHandle = route.params.productSlug;

const data = ref(null);

onMounted(async () => {
  try {
    data.value = await getProductData(productHandle);
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
});

function convertShopifyRichTextToHTML(value) {
  if (!value) return '';

  return value;
}
</script>

<style scoped>

</style>
