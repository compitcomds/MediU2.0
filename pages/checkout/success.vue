<template>
  <div class="flex h-[80vh] flex-col items-center justify-center text-center">
    <!-- Placeholder for Success SVG -->
    <div class="mb-4 text-[#238878]">
      <CircleCheckBig :size="70" />
    </div>

    <h1 class="text-5xl font-bold text-[#238878]">Success!</h1>
    <p class="mt-2 text-gray-600">Your order was placed successfully.</p>

    <nuxt-link
      to="/dashboard/orders"
      class="mt-4 inline-block rounded bg-[#238878] px-4 py-2 text-white transition hover:bg-[#2a7c5e]"
    >
      View Your Orders
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { CircleCheckBig } from "lucide-vue-next";

useHead({
  title: "Checkout - Success - Mediu",
});
</script>
