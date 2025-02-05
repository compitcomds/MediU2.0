<script setup lang="ts">
import { getProductBasicDetails } from "~/shopify/shop/get-products-by-handle";
import AddingToCartBtn from "../shop/addingToCartBtn.vue";

const props = defineProps<{
  handle: string;
}>();

const { data: product } = useLazyAsyncData(`wishlist-${props.handle}`, () =>
  getProductBasicDetails(props.handle),
);
</script>

<template>
  <div
    v-if="product"
    class="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
  >
    <div class="relative py-2">
      <nuxt-link :to="`/shop/product/${props.handle}`">
        <img
          :src="
            product.featuredImage?.url ||
            `https://placehold.co/400x400/png?text=${product.title}`
          "
          :alt="product.title"
          class="aspect-square h-full max-h-52 w-full object-cover"
        />
      </nuxt-link>
      <WishlistButton
        :handle="props.handle"
        type="product"
        class="absolute right-2 top-2 rounded-full bg-white/80 p-2 transition-colors duration-200 hover:bg-white"
      />
    </div>
    <div class="flex flex-1 flex-col p-4">
      <h3 class="text-lg font-semibold text-gray-800">
        <nuxt-link
          :to="`/shop/product/${props.handle}`"
          class="hover:text-[#238878]"
          >{{ product.title }}</nuxt-link
        >
      </h3>
      <p class="mb-4 mt-1 line-clamp-2 text-sm text-gray-600">
        {{ product.description }}
      </p>
      <div class="mt-auto flex items-center justify-between">
        <span class="text-lg font-bold text-[#238878]"
          >Rs. {{ product.price.amount.toFixed(2) }}</span
        >
        <AddingToCartBtn
          :product-id="product.variantId"
          class="rounded-md bg-[#238878] px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-[#1b6a5d]"
        />
      </div>
    </div>
  </div>
</template>
