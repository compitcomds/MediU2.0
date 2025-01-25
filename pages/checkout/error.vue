<template>
  <div
    class="flex h-[70vh] flex-col items-center justify-center text-center lg:h-screen"
  >
    <!-- Placeholder for Error SVG -->
    <div class="mb-4 text-red-500">
      <CircleX :size="70" />
    </div>

    <h1 class="text-5xl font-bold text-red-500">Error!</h1>
    <p class="mt-2 text-gray-600">
      Something went wrong. Please try again later.
    </p>

    <div class="mt-6">
      <h2 class="text-lg font-semibold text-gray-800">Contact Us:</h2>
      <p class="text-gray-600">
        Email:
        <a
          href="mailto:mediu2420@gmail.com"
          class="text-[#238878] hover:underline"
          >mediu2420@gmail.com</a
        >
      </p>
      <p class="text-gray-600">
        Phone:
        <a href="tel:+917728026044" class="text-[#238878] hover:underline"
          >+91 7728026044</a
        >
      </p>
    </div>
    <nuxt-link
      to="/dashboard"
      class="mt-4 inline-block rounded bg-[#238878] px-4 py-2 text-white transition hover:bg-[#2a7c5e]"
    >
      Go Back to Dashboard
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { CircleX } from "lucide-vue-next";

useHead({
  title: "Checkout - Error - Mediu",
});
</script>

<style scoped>
/* Additional styles if necessary */
</style>
