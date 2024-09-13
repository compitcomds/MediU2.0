<template>
    <div class="flex h-screen bg-gray-100  -mr-2 -mt-2">
      <!-- Cart Container -->
      <div class="p-2 bg-white shadow-lg w-96 flex flex-col">
        <!-- Free Shipping Banner -->
        <div
          class="bg-[#b8d5c2] text-[#287542] text-center py-2 px-4 rounded-md"
        >
          🎉 CONGRATS! You get <span class="font-semibold">FREE SHIPPING</span>
        </div>
  
        <!-- Scrollable Cart Items Section -->
        <div class="mt-4 flex-1 overflow-y-auto space-y-2">
          <div
            v-for="(item, index) in cart.items"
            :key="index"
            class="mt-2 border p-2 rounded-xl"
          >
            <div class="flex justify-between items-center space-x-3">
              <div class="">
                <img
                  :src="item.image?.url || 'https://placehold.co/80x80/png'"
                  class="w-20 h-20"
                  :alt="item.image?.altText || item.title"
                />
              </div>
              <div class="flex space-x-4">
                <div>
                  <p class="font-semibold text-black capitalize px-2 text-lg">
                    {{ item.title }}
                  </p>
                  <p class="text-base text-black px-2">{{ item.quantity }}</p>
                </div>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <button
                    @click="decreaseQuantity(index)"
                    class="hover:bg-gray-200 px-2 text-lg rounded border text-black font-bold border-black"
                  >
                    -
                  </button>
                  <span class="text-lg text-black">{{ item.quantity }}</span>
                  <button
                    @click="increaseQuantity(index)"
                    class="hover:bg-gray-200 px-2 text-lg rounded border text-black font-bold border-black"
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
          <div class="flex justify-between items-center my-4 border border-black p-2 rounded-lg text-lg">
            <p class="font-semibold text-slate-700">Subtotal ({{ totalItems }} items)</p>
            <p class="text-green-600 font-bold">
              {{ cart.subtotalAmount?.currencyCode }}
              {{ cart.subtotalAmount?.amount }}
            </p>
          </div>
  
          <div class="mt-auto">
            <button
              class="w-full bg-[#287542] text-white py-3 rounded-lg font-semibold"
            >
              🔒 SECURE CHECKOUT
            </button>
          </div>
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
  /* Additional styles if needed */
  </style>
  