<template>
  <!-- {{ productDetails }} -->
  <div class="my-2">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 lg:gap-4"
    >
      <div
        v-for="(product, index) in productDetails"
        :key="index"
        class="flex justify-center p-4"
      >
        <div class="border px-4 py-2 rounded-lg border-gray-300 shadow-md bg-white w-80">
          <nuxt-link :to="`shop/product/${product.handle}`" class="relative block">
            <!-- Sale badge -->
            <span
              v-if="true"
              class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
            >
              Sale
              {{
                Math.floor(
                  ((parseInt(product.compareAtPrice) - parseInt(product.price)) * 100) /
                    parseInt(product.compareAtPrice)
                )
              }}%
            </span>

            <!-- Product image -->
            <img
              :src="product.image"
              class="w-full h-[200px] object-cover rounded-t-lg lg:hover:scale-105"
              alt=""
            />
          </nuxt-link>

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
                  {{ product.currency }} {{ product.compareAtPrice }}
                </p>
              </div>
              <div>
                <ShopSharebtn :product-link="`shop/product/${product.handle}`" />
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
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold text-center cursor-pointer"
              >
                BUY NOW
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  productDetails: {
    type: Array, // Change this to an array since you have multiple products
    required: true,
  },
});

const productDetails = ref({ ...props.productDetails });

watch(
  () => props.productDetails,
  (newVal) => {
    productDetails.value = newVal;
  }
);
</script>
