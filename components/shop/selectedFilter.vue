<template>
  <div>
    <ul class="flex gap-3">
      <li
        v-for="(tag, index) in selectedTags"
        :key="index"
        class="flex items-center rounded-full border-spacing-1 border border-green-900 px-3"
      >
        <div onclick="removeTag(tag)" class="flex">
          <span class="flex mr-2">{{ tag }}</span>
          <button
            @click="removeTag(tag)"
            class="text-red-500 mt-0.5 hover:text-red-700"
            aria-label="Remove tag"
          >
            <div class="flex items-center">
              <UIcon name="i-heroicons-x-mark" />
            </div>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useShopFilterStore } from "@/stores/user-filter-store-tags"; // Update the path if necessary

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
