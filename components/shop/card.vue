<template>
  <!-- {{ productDetails }} -->
  <div class="my-2">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div
        v-for="(product, index) in productDetails"
        :key="index"
        class="flex justify-center"
      >
        <div
          class="border px-4 py-2 rounded-lg block no-underline border-gray-300 shadow-md"
        >
          <nuxt-link :to="`/shop/product/${product.handle}`" class="relative">
            <span
              v-if="true"
              class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >Sale 5%</span
            >
            <img :src="product.image" class="min-h-48 max-h-52" alt="" />
          </nuxt-link>
          <div class="space-y-4 flex flex-col justify-between">
            <NuxtLink :to="`/shop/product/${product.handle}`">
              <h3
                class="text-black capitalize font-serif text-xl min-h-10 max-h-12 lg:text-lg mt-2"
              >
                {{ product.title }}
              </h3>
            </NuxtLink>
            <div class="flex justify-between text-xl">
              <div>
                <p class="text-[#28574E] font-bold">
                  {{ product.currency }} {{ product.price }}
                </p>
                <p
                  class="text-gray-500 text-sm font-bold line-through"
                  v-if="true"
                >
                  {{ product.currency }} 1000
                </p>
              </div>
              <!-- <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                <a href="#"
                  ><img
                    src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                    class="w-8 p-1"
                    alt=""
                /></a>
              </div> -->
              <!-- <ShopAddingToCartBtn :product-id="product.id" /> -->
            </div>
            <ShopAddToCart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { productDetails } = defineProps({
  productDetails: {
    type: Object, // Change this to an array if productDetails is an array of products
    required: true,
  },
});
</script>
