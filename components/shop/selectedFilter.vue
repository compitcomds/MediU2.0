<template>
  <div class="bg-white rounded px-4 py-2 shadow-md">
    <h3 class="text-lg font-semibold mb-2">Selected Tags</h3>
    <ul v-if="selectedTags.length > 0" class="list-disc pl-4">
      <li v-for="(tag, index) in selectedTags" :key="index" class="mb-1 flex items-center">
        <span class="flex-1">{{ tag }}</span>
        <button 
          @click="removeTag(tag)" 
          class="text-red-500 hover:text-red-700 ml-2"
          aria-label="Remove tag"
        >
          &#x2715; <!-- Unicode for a cross icon (✗) -->
        </button>
      </li>
    </ul>
    <p v-else class="text-gray-500">No tags selected.</p>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useShopFilterStore } from '@/stores/user-filter-store-tags'; // Update the path if necessary

// Use the Pinia store
const store = useShopFilterStore();

// Compute the selected tags
const selectedTags = computed(() => store.selectedTags);

// Function to remove a tag
const removeTag = (tag: string) => {
  store.toggleTagSelection(tag); // This will handle the removal of the tag
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
