<template>
    <div>
      this is [category] shop page like hair, skin, baby care {{ category }}
      <ShopFilterbar :category="category" />
      
      <!-- Display products when available -->
      <ShopCard v-if="products.length" :productDetails="products" />
      
      <!-- Loading state -->
      <p v-else>Loading products...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchProductsByCollection } from '~/shopify/collection';
  
  const route = useRoute();
  const category = route.params.category;
  const products = ref([]); // Store products here
  
  // Fetch products when the component is mounted
  onMounted(async () => {
    try {
      const result = await fetchProductsByCollection(category);
      products.value = result.products; // Assign the products to the ref
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  });
  </script>
  