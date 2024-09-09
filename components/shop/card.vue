<template>
    <div class="bg-slate-600 m-4 p-4 rounded" v-for="(product, index) in productDetails" :key="index" >        
        <img :src=product.image alt="" srcset="" class="h-16 w-16">
        {{ index }}
        {{ product.id }} <br>
        {{ product.title }} <br>
        {{ product.currency }}
        {{ product.price }} <br>
        {{ product.handle}}
        
        <hr>
        <!-- <nuxt-link to="#">add to cart</nuxt-link> <br> -->
        <ShopAddingToCartBtn :productID="product.id"  cartID ="#cartID" />
        <shopQuickview :singleProduct="product"  />
        <ShopAddingToWishList :productID="product.id" />

        <nuxt-link :to="`shop/product/${product.handle}`">Open the product</nuxt-link>

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