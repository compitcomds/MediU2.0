<template>
  <div class="mx-auto w-full border-b pb-4">
    <div class="mb-2 flex items-center gap-2">
      <div class="bg-gray-200 p-2"><UserIcon /></div>
      <div>
        <p class="flex items-center gap-1 text-[#eab308]">
          <Star :size="16" fill="#eab308" v-for="i in 5" />
        </p>
        <p>{{ name }}</p>
      </div>
    </div>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, Star } from "lucide-vue-next";

const review = defineProps<{
  stars: number;
  name: string;
  description: string;
}>();
</script>
