<template>
    <div class="bg-slate-600 m-4 p-4 rounded" v-for="(product, index) in productDetails" :key="index" >        
        <img :src=product.image alt="" srcset="" class="h-16 w-16">
        {{ index }}
        {{ product.title }} <br>
        {{ product.currency }}
        {{ product.price }} <br>
        
        <hr>
        <nuxt-link to="#">add to cart</nuxt-link> <br>
        <shopQuickview :singleProduct="product" />
        <nuxt-link to="#">open the product </nuxt-link> <br>
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