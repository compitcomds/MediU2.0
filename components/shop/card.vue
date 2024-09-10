<template>
  <div class="flex flex-col w-full h-full px-4 space-y-8">
    <ShopBanner />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        class="relative bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
        v-for="(product, index) in productDetails"
        :key="index"
      >
        <!-- Heart icon for Add to Wishlist -->
        

        <div class="relative overflow-hidden">
          
          <img
            :src="product.image"
            alt=""
            class="w-full h-56 object-cover rounded-lg transition-transform transform group-hover:scale-105"
          />
          <button
          class="absolute  top-0 right-1  p-2 rounded-full  transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>
          <!-- Quick view button -->
          <div
            class="absolute flex justify-center items-center inset-x-0 bottom-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <button
              class="bg-white text-black rounded-lg font-semibold py-2 px-4 align-middle flex justify-center items-center text-center shadow-md"
            >
              <ShopQuickview :singleProduct="product"/>
            </button>
          </div>
        </div>

        <!-- Dynamic Link for the Product -->
        <!-- <nuxt-link :to="`/shop/product/${product.handle}`"> -->
          <div class="mt-4">
            <h3 class="text-lg font-semibold uppercase text-black truncate">
              {{ product.title }}
            </h3>
            <div class="flex justify-between items-center mt-2">
              <p class="text-black text-base">
                {{ product.currency }} {{ product.price }}
              </p>
              <!-- Add to Cart Icon -->
              <button
                class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200"
              >
                <!-- <nuxt-link :to="`/shop/product/${product.handle}`">
                  <img
                    src="https://ccdstest.b-cdn.net/Medi%20u/add-to-basket.svg"
                    class="w-8 p-1"
                  />
                </nuxt-link> -->
                
                <ShopAddingToCartBtn :productId="product.id"/>
              </button>
            </div>
            <!-- <p class="text-gray-500 text-xs">{{ product.handle }}</p> -->
          </div>
        <!-- </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  productDetails: {
    type: Array, // Change this to an array if productDetails is an array of products
    required: true,
  },
});

const { productDetails } = props;
</script>
