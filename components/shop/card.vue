<template>
  <div class="my-2">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="(product, index) in productDetails"
        :key="index"
        class="flex justify-center p-4"
      >
        <div
          class="flex w-full flex-col rounded-lg border border-gray-300 bg-white px-4 pb-4 pt-2 shadow-md"
        >
          <nuxt-link
            :to="`/shop/product/${product.handle}`"
            class="relative block"
          >
            <!-- Sale badge -->
            <span
              v-if="
                parseFloat(product.compareAtPrice) > parseFloat(product.price)
              "
              class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white"
            >
              Save
              {{
                Math.floor(
                  ((parseInt(product.compareAtPrice) -
                    parseInt(product.price)) *
                    100) /
                    parseInt(product.compareAtPrice),
                )
              }}%
            </span>

            <!-- Product image -->
            <img
              :src="product.image"
              class="h-[200px] w-full rounded-t-lg object-cover lg:hover:scale-105"
              alt=""
            />
          </nuxt-link>

          <div class="mt-4 flex flex-1 flex-col gap-y-4">
            <!-- Product title -->
            <a
              :href="`/shop/product/${product.handle}`"
              class="block max-w-full overflow-clip"
            >
              <h3
                class="font-serif text-sm font-semibold capitalize text-black lg:text-sm"
              >
                {{ product.title }}
              </h3>
            </a>

            <!-- Price and discount -->
            <div class="flex justify-between text-xl">
              <div>
                <p class="font-bold text-[#28574E]">
                  {{ product.currency }} {{ product.price }}
                </p>
                <p class="mt-1 text-sm font-bold text-gray-500 line-through">
                  {{ product.currency }} {{ product.compareAtPrice }}
                </p>
              </div>
              <div>
                <ShopSharebtn
                  :product-link="`shop/product/${product.handle}`"
                />
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
            <div class="mt-auto flex gap-2">
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="text-md flex-1 cursor-pointer rounded-full bg-[#28574E] p-2 text-center font-semibold text-white shadow"
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
  },
);
</script>
