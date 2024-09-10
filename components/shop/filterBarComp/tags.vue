<template>
    <div class="bg-white rounded px-2">
      <div class="py-2">
        <p class="text-black">Tags</p>
      </div>
      <hr>
      <div class="h-48 overflow-x-scroll slim-scrollbar">
        <div v-for="(item, index) in tags" :key="index">
          <input
            type="checkbox"
            :value="item"
            :checked="isSelected(item)"
            @change="handleSelectionChange(item)"
            class="mr-2"
          />
          <span>{{ item }}</span>
        </div>
      </div>
      <hr>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useShopFilterStore } from '@/stores/user-filter-store-tags';
  
  // Use the Pinia store
  const store = useShopFilterStore();
  
  // Props for tags
  const props = defineProps<{
    tags: string[];
  }>();
  
  // Computed to check if a tag is selected
  const isSelected = (tag: string) => {
    return store.selectedTags.includes(tag);
  };
  
  // Handle checkbox change
  const handleSelectionChange = (tag: string) => {
    store.toggleTagSelection(tag);
  };
  
  // Optionally, you can also use this function to perform additional actions
  const selectedTags = computed(() => store.selectedTags);
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  