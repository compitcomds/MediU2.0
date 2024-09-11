<template>
    <div class="shadow-[#537971] shadow-lg rounded-xl border m-2 p-2">
      <div class="py-2">
        <p class="text-black text-xl font-bold">Categories</p>
      </div>
      <hr>
      <div class="text-black overflow-y-scroll min-h-48 max-h-64 ">
        <div v-for="(item, index) in category" :key="index" class="flex px-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedCategories"
            @change="handleSelectionChange"
            class="mr-2 bg-white"
          />
          <span>{{ item }}</span>
        </div>
      </div>
      
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
