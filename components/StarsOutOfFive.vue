<template>
  <span :class="props.class" class="flex items-center gap-1 text-[#eab308]">
    <Star class="max-h-full max-w-full" fill="#eab308" v-for="_ in rating" />
    <Star
      class="max-h-full max-w-full"
      fill="#e5e7eb"
      v-for="_ in (5 - rating) % 5"
    />
    <Star
      class="max-h-full max-w-full"
      v-if="rating === 0"
      fill="#e5e7eb"
      v-for="_ in 5"
    />
  </span>
</template>

<script setup lang="ts">
import { Star } from "lucide-vue-next";

const props = defineProps<{
  rating: number;
  class?: string;
}>();

const rating = computed(() => {
  return Math.round(props.rating);
});
</script>
