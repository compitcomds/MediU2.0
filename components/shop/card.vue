<template>
  <ShopBanner />
  <!-- <div class="flex flex-col w-full h-full px-4 space-y-8"> 
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        class="relative bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg "
        v-for="(product, index) in productDetails"
        :key="index"
      >

        

        <div class="relative overflow-hidden">
          
          <img
            :src="product.image"
            alt=""
            class="w-full h-56 object-cover rounded-lg"
          />
          <button
          class="absolute  top-0 right-1  p-2 rounded-full "
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
          <div class="mt-4">
            <h3 class="text-lg font-semibold uppercase text-black truncate">
              {{ product.title }}
            </h3>
            <div class="flex justify-between items-center mt-2">
              <p class="text-black text-base">
                {{ product.currency }} {{ product.price }}
              </p>
             
              <button
                class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200"
              > 
                <ShopAddingToCartBtn :productId="product.id"/>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div> -->


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
