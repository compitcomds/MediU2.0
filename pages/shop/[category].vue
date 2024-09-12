<template>
  <div>
    this is [category] shop page like hair, skin, baby care {{ category }}
    <ShopFilterbar :category="category" />

    <ShopCard v-if="products.length" :productDetails="products" />

    <p v-else>Loading products...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchProductsByCollection } from "~/shopify/collection";

const route = useRoute();
const category = route.params.category;
const products = ref([]); // Store products here

// Fetch products when the component is mounted
onMounted(async () => {
  try {
    const result = await fetchProductsByCollection(category);
    products.value = result.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
