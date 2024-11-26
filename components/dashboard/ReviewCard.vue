<template>
  <div class="rounded-lg bg-white p-6 shadow-lg">
    <div class="mb-4 flex items-center">
      <img :src="img" alt="Profile" class="mr-4 h-20 w-20 rounded-full" />
      <div>
        <h3 class="text-lg font-semibold">{{ name }}</h3>
        <div class="flex items-center">
          <span class="text-yellow-500" v-for="_ in stars">★</span>
          <span class="text-gray-500" v-for="_ in (5 - stars) % 5">★</span>
        </div>
      </div>
    </div>
    <p class="text-gray-600">{{ text }}</p>
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
