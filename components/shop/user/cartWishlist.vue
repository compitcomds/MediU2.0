<template>
  <UTabs :items="items" class="w-full">
    <template #default="{ item, index, selected }">
      <span
        class="truncate"
        :class="[selected && 'text-primary-500 dark:text-primary-400']"
        >{{ index + 1 }}. {{ item.label }}</span
      >
    </template>
  </UTabs>
</template>

<script setup lang="ts">
const items = [
  {
    label: "cart",
    icon: "i-heroicons-information-circle",
    content: "This is the content shown for Tab1",
  },
  {
    label: "wishlist",
    icon: "i-heroicons-arrow-down-tray",
    content: "And, this is the content for Tab2",
  },
];
</script>
