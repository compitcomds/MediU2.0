<template>
  <div class="flex max-w-sm flex-col rounded-lg bg-white p-6 shadow-md">
    <!-- User Image and Name -->
    <div class="mb-4 flex items-center space-x-4">
      <img
        :src="img"
        :alt="`${name}'s profile picture`"
        class="h-12 w-12 rounded-full object-cover"
      />
      <h3 class="font-semibold text-gray-800">{{ name }}</h3>
    </div>

    <!-- Star Rating -->
    <div class="mb-3 flex space-x-1">
      <StarsOutOfFive :rating="stars" />
    </div>

    <!-- Review Text -->
    <p class="leading-relaxed text-gray-600">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const { name, text, img, stars } = defineProps<{
  name: string;
  img: string;
  text: string;
  stars: number;
}>();
</script>
