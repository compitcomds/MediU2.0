<template>
  <div class="bg-gray-200 px-2 py-2 flex justify-center items-center rounded-badge">
    <button @click="shareProduct">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#28574E"
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
    <!-- <p>Link: {{ productLink }}</p> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

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
    // Fallback for browsers that don't support navigator.share
    copyToClipboard(props.productLink);
    alert("Link copied to clipboard! You can share it manually.");
  }
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => console.log("Link copied to clipboard!"),
    (err) => console.error("Failed to copy link: ", err)
  );
};
</script>

<style scoped>
/* Add your scoped styles here */
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> main
