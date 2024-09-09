<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
</template>

<style>

</style>

<script setup>
import { onMounted } from "vue";
import createShopifyCart from "~/shopify/cart/create-cart";

async function handleCreateCart() {
  try {
    const cart = await createShopifyCart();
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart created successfully:", cart);
  } catch (error) {
    console.error("Error creating cart:", error);
  }
}
onMounted(() => {
  handleCreateCart();
});
</script>