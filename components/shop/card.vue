<template>

<div class="m-2">
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
    <div v-for="(product, index) in productDetails" :key="index" class="flex justify-center">
      <div class="card bg-base-100 shadow-xl w-full max-w-xs">
        <figure>
          <NuxtImg :src="product.image" alt="Shoes" class="object-cover h-48 w-full" />
        </figure>
        <div class="card-body bg-slate-400 p-4">
          <h2 class="card-title text-lg font-semibold truncate">
            {{ product.title }}
        

          </h2>
          <p class="mt-2">{{ product.currency }} {{ product.price }}</p>
          
          <!-- <ShopQuickview :singleProduct="product.id"/> -->
          <NuxtLink :to="`/shop/product/${product.handle}`">open</NuxtLink>
   
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
const props = defineProps({
  productDetails: {
    type: Object, // Change this to an array if productDetails is an array of products
    required: true,
  },
});

const { productDetails } = props;
</script>
