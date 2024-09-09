<template>
    <div>
      <button @click="shareProduct">Share this product</button>
      <p>Link: {{ productLink }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
          title: 'Check out this product!',
          url: props.productLink,
        });
        console.log('Product shared successfully!');
      } catch (error) {
        console.error('Error sharing product:', error);
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      copyToClipboard(props.productLink);
      alert('Link copied to clipboard! You can share it manually.');
    }
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => console.log('Link copied to clipboard!'),
      (err) => console.error('Failed to copy link: ', err)
    );
  };
  </script>
  
  <style  scoped>
  /* Add your scoped styles here */
  </style>
  