<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-primary mb-6">
      Step 4: Your Results
    </h2>
    <p class="text-lg font-semibold text-primary mb-4">
      Your unique code: {{ uniqueCode }}
    </p>
    <p class="text-lg font-semibold text-primary mb-4">
      Recommended products for you:
    </p>
    <ul class="list-disc pl-6">
      <li
        v-for="product in products"
        :key="product"
        class="text-sm text-gray-700"
      >
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  uniqueCode: String,
  products: Array,
});
</script>
