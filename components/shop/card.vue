<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
    <div
      class="bg-slate-600 p-4 rounded"
      v-for="(product, index) in productDetails"
      :key="index"
    >
      <img :src="product.image" alt="" class="h-16 w-16 mb-4" />
      <div class="text-white">
        {{ index }} <br />
        {{ product.id }} <br />
        {{ product.title }} <br />
        {{ product.currency }} {{ product.price }} <br />
        {{ product.handle }}
      </div>

      <hr class="my-4" />
      
      <!-- Add your component code here -->
      <ShopAddingToCartBtn :productID="product.id" cartID="#cartID" />
      <shopQuickview :singleProduct="product" />
      <ShopAddingToWishList :productID="product.id" />

      <nuxt-link :to="`shop/product/${product.handle}`" class="text-blue-500 hover:underline">
        Open the product
      </nuxt-link>
    </div>
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
