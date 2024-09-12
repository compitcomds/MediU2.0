<!-- <template>
<div role="tablist" class="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Cart" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
    <ShopUserCart/>
  </div>

  
  

  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Wishlist" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
   Wishlist
  </div>
</div>
</template>

<script setup lang="ts">

</script> -->

<template>
  <div
    class="p-4 max-w-md mx-auto bg-white shadow-lg h-screen -mr-2 -mt-2 flex flex-col"
  >
    <!-- Free Shipping Banner -->
    <div class="bg-purple-200 text-purple-800 text-center py-2 rounded-md">
      🎉 CONGRATS! You get <span class="font-semibold">FREE SHIPPING</span>
    </div>

    <!-- Scrollable Cart Items Section -->
    <div class="mt-4 flex-1 overflow-y-auto">
      <div v-for="(item, index) in cart.items" :key="index" class="mt-4">
        <div class="flex justify-between items-center">
          <div class="flex space-x-4">
            <img
              :src="item.image?.url || 'https://placehold.co/400x400/png'"
              class="w-12 h-12"
              :alt="item.image?.altText || item.title"
            />
            <div>
              <p class="font-semibold">{{ item.title }}</p>
              <p class="text-sm text-gray-500">
                {{ item.quantity }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <button
                @click="decreaseQuantity(index)"
                class="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                @click="increaseQuantity(index)"
                class="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
            </div>
            <p class="text-green-600 font-semibold">
              {{ item.cost.currencyCode }} {{ item.cost.amount }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex justify-between items-center">
        <p class="font-semibold">Subtotal ({{ totalItems }} items)</p>
        <p class="text-green-600 font-bold">
          {{ cart.subtotalAmount?.currencyCode }}
          {{ cart.subtotalAmount?.amount }}
        </p>
      </div>

      <div class="mt-auto">
        <button
          class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
        >
          🔒 SECURE CHECKOUT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import getCartData from "~/shopify/cart/get-cart-data";

const cart = ref({
  items: [],
  subtotalAmount: { currencyCode: "", amount: "" },
  totalAmount: { currencyCode: "", amount: "" },
});

const increaseQuantity = (index) => {};

const decreaseQuantity = (index) => {};

onMounted(async () => {
  cart.value = await getCartData();
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
