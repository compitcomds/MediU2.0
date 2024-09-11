<template>
<!-- {{ productDetails }} -->
<div class=" my-2">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
    <div v-for="(product, index) in productDetails" :key="index" class="flex justify-center">
      <a class="border p-4 rounded-lg block no-underline border-gray-300 shadow-md ">
      <div class="relative">
        <span
          v-if="true"
          class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
          >Sale 50%</span
        >
        <img :src="product.image" class="min-h-48 max-h-52" alt="" />
      </div>
      <div class="mt-4 space-y-2">
        <h3 class="text-black  uppercase text-xl min-h-10 max-h-12 lg:text-lg ">{{product.title}}</h3>
        <div class="flex justify-between items-center text-xl">
          <div >
            <p class="text-[#28574E] font-bold">{{product.currency}} {{product.price}}</p>
            <p class="text-gray-500 text-sm font-bold line-through" v-if="true">
              {{product.currency}} 1000
            </p>
          </div>
          <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
            <a href="#"
              ><img
                src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                class="w-8 p-1"
                alt=""
            /></a>
          </div>
        </div>
        <!-- <div class="flex items-center mt-2">
          <div class="rating">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked="checked"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div> -->
      </div>
    </a>
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
