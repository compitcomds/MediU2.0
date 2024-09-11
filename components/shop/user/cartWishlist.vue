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
  <div class="p-4 max-w-md mx-auto bg-white shadow-lg h-screen -mr-2 -mt-2 flex flex-col">
  <!-- Free Shipping Banner -->
  <div class="bg-purple-200 text-purple-800 text-center py-2 rounded-md">
    🎉 CONGRATS! You get <span class="font-semibold">FREE SHIPPING</span>
  </div>

  <!-- Scrollable Cart Items Section -->
  <div class="mt-4 flex-1 overflow-y-auto">
    <div v-for="(item, index) in cartItems" :key="index" class="mt-4">
      <div class="flex justify-between items-center">
        <div class="flex space-x-4">
          <img :src="item.image" class="w-12 h-12" :alt="item.name" />
          <div>
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.quantity }} {{ item.unit }}</p>
          </div>
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <button @click="decreaseQuantity(index)" class="bg-gray-200 px-2 py-1 rounded">-</button>
            <span>{{ item.cartQuantity }}</span>
            <button @click="increaseQuantity(index)" class="bg-gray-200 px-2 py-1 rounded">+</button>
          </div>
          <p class="text-green-600 font-semibold">₹ {{ item.price }} <span class="line-through text-gray-500">₹ {{ item.originalPrice }}</span></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Sticky Subtotal and Checkout Button Section -->
  <div class="mt-4">
    <!-- Subtotal -->
    <div class="flex justify-between items-center">
      <p class="font-semibold">Subtotal ({{ totalItems }} items)</p>
      <p class="text-green-600 font-bold">₹ {{ totalPrice }} <span class="line-through text-gray-500">₹ {{ totalOriginalPrice }}</span></p>
    </div>

    <!-- Sticky Secure Checkout Button -->
    <div class="mt-auto">
      <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
        🔒 SECURE CHECKOUT
      </button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      // Cart items will be populated dynamically
      cartItems: [
        
        {
          name: 'Clinikally HydraSoothe Moisturiser',
          quantity: '100 gm',
          price: 899,
          originalPrice: 999,
          image: 'https://via.placeholder.com/50x50',
          cartQuantity: 1,
          unit: 'gm',
        },
        {
          name: 'Clinikally HydraSoothe Moisturiser',
          quantity: '100 gm',
          price: 899,
          originalPrice: 999,
          image: 'https://via.placeholder.com/50x50',
          cartQuantity: 1,
          unit: 'gm',
        },
        {
          name: 'Clinikally HydraSoothe Moisturiser',
          quantity: '100 gm',
          price: 899,
          originalPrice: 999,
          image: 'https://via.placeholder.com/50x50',
          cartQuantity: 1,
          unit: 'gm',
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
    },
    totalOriginalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.originalPrice * item.cartQuantity), 0);
    },
    totalItems() {
      return this.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].cartQuantity += 1;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].cartQuantity > 1) {
        this.cartItems[index].cartQuantity -= 1;
      }
    }
  }
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
