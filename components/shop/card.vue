<template>
    <div class="bg-slate-600 m-4 p-4 rounded" v-for="(product, index) in productDetails" :key="index" >        
        {{ product.title }}
        <hr>
        <nuxt-link to="#">click</nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
  productDetails: {
    type: Object,
    required: true,
  },
});
const { productDetails } = props;
</script>