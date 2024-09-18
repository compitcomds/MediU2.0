<template>
  <!-- {{ productDetails }} -->
  <div class="my-2">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div
        v-for="(product, index) in productDetails"
        :key="index"
        class="flex justify-center p-4"
      >
        <div class="border px-4 py-2 rounded-lg border-gray-300 shadow-md bg-white w-80">
          <a :href="`/shop/product/${product.handle}`" class="relative block">
            <!-- Sale badge -->
            <span
              v-if="true"
              class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
            >
              Sale 5%
            </span>

            <!-- Product image -->
            <img
              :src="product.image"
              class="w-full h-48 object-cover rounded-t-lg"
              alt=""
            />
          </a>

          <div class="space-y-4 mt-4">
            <!-- Product title -->
            <a :href="`/shop/product/${product.handle}`" class="block">
              <h3
                class="text-black font-serif text-xl lg:text-lg font-semibold capitalize truncate"
              >
                {{ product.title }}
              </h3>
            </a>

            <!-- Price and discount -->
            <div class="flex justify-between text-xl">
              <div>
                <p class="text-[#28574E] font-bold">
                  {{ product.currency }} {{ product.price }}
                </p>
                <p class="text-gray-500 text-sm font-bold line-through mt-1" v-if="true">
                  {{ product.currency }} 1000
                </p>
              </div>
              <div>
                <ShopSharebtn :product-link='`shop/product/${product.handle}`' />
              </div>

              <!-- Optional section for additional actions -->
              <!-- <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
            <a href="#">
              <img
                src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                class="w-8 p-1"
                alt=""
              />
            </a>
          </div> -->
              <!-- <ShopAddingToCartBtn :product-id="product.id" /> -->
            </div>

            <!-- Action buttons -->
            <div class="flex gap-2 mt-4">
              <button
                @click="addProductToCart"
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                :disabled="isAddingProductToCart"
              >
                <div class="flex items-center justify-center gap-2">
                  <p>Add To Cart</p>
                </div>
              </button>

              <button
                @click="addProductToCart"
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                :disabled="isAddingProductToCart"
              >
                <div class="flex items-center justify-center gap-2">
                  <p>Buy Now</p>
                </div>
              </button>
            </div>
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