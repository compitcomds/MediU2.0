<template>

</template>
<script setup lang="ts">
import { getProductData } from "~/shopify/productDetails";

const props = defineProps({
  singleProduct: {
    type: Object,
    required: true,
  },
});

</script>
