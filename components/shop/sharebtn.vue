<template>
  <div
    class="flex items-center justify-center rounded-badge bg-gray-200 px-2 py-2"
  >
    <button @click="shareProduct">
      <span class="sr-only">Share {{ props.productLink }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#238878"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-share-2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";
const props = defineProps({
  productLink: {
    type: String,
    required: true,
  },
});

const shareProduct = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Check out this product!",
        url: props.productLink,
      });
      console.log("Product shared successfully!");
    } catch (error) {
      console.error("Error sharing product:", error);
    }
  } else {
    copyToClipboard(props.productLink);
  }
};

const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
  toast.success("Link copied to clipboard! You can share it manually.");
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
