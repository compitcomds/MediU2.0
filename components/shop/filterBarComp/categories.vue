<template>
    <div class="bg-white rounded px-2">
      <div class="py-2">
        <p class="text-black text-xl">Categories</p>
      </div>
      <hr>
      <div class="h-80 overflow-x-scroll slim-scrollbar">
        <div v-for="(item, index) in category" :key="index" class="flex items-center py-1.5 px-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedCategories"
            @change="handleSelectionChange"
            class="mr-2"
          />
          <span>{{ item }}</span>
        </div>
      </div>
      <hr>
    </div>
  </template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  category: {
    type: Array,
    required: true,
  },
});

const selectedCategories = ref([]);  // Array to hold selected categories

const handleSelectionChange = () => {
  console.log('Selected Categories:', selectedCategories.value);  // make this to call or filter the product
};
</script>
