<template>
  <aside class="w-full lg:w-1/4 bg-white rounded-lg pb-20 p-6">
    <!-- Header Title -->
    <h2 class="text-lg font-semibold text-gray-800 mb-6">Your Account</h2>

    <!-- Profile Section -->
    <div class="flex flex-col items-center p-6 mb-6 bg-gray-100 rounded-lg">
      <div class="relative">
        <img src="https://via.placeholder.com/80" alt="Profile"
          class="h-20 w-20 rounded-full border-2 border-gray-200 object-cover" />
      </div>
      <div class="mt-4 text-center">
        <h2 class="text-lg font-semibold text-gray-800">{{ props.UserData.name }}</h2>
        <p class="text-sm text-gray-600">{{ props.UserData.email }}</p>
        <p class="text-sm text-gray-600">{{ props.UserData.phone }}</p>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav>
      <ul class="space-y-4">
        <!-- Account Information -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="../../assets/images/user.svg" alt="Account Information Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/profile" class="flex-1 text-black hover:text-blue-500">Account Information</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Orders -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\check-out (1).svg" alt="Orders Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/orders" class="flex-1 text-black hover:text-blue-500">Orders</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- My Wallet -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\wallet.svg" alt="Wallet Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/" class="flex-1 text-black hover:text-blue-500">My Wallet</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- My WishList -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\shopping-cart.svg" alt="Wishlist Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/" class="flex-1 text-black hover:text-blue-500">My WishList</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Downloads -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\file.svg" alt="Downloads Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/downloads" class="flex-1 text-black hover:text-blue-500">Downloads</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Delivery Addresses -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\home-address.svg" alt="Delivery Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/address" class="flex-1 text-black hover:text-blue-500">Delivery Addresses</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Return Request -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\return-box.svg" alt="Return Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/return" class="flex-1 text-black hover:text-blue-500">Return Request</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Shipping Methods -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\shipped.svg" alt="Shipping Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/shippingMethod" class="flex-1 text-black hover:text-blue-500">Shipping Methods</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Payment Methods -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\pay.svg" alt="Payment Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/paymentMethod" class="flex-1 text-black hover:text-blue-500">Payment Methods</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Review -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="../../assets/images/review.svg" alt="Review Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/reviews" class="flex-1 text-black hover:text-blue-500">Review</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Help -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\question.svg" alt="Help Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/" class="flex-1 text-black hover:text-blue-500">Help?</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>

        <!-- Consultancy -->
        <li class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img src="assets\images\discussion.svg" alt="Consultancy Icon" class="w-6 h-6" />
            <nuxt-link to="/dashboard/" class="flex-1 text-black hover:text-blue-500">Consultancy</nuxt-link>
          </div>
          <span>&#8250;</span>
        </li>
        
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const props = defineProps({
  UserData: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Adjust colors, fonts, and spacing */
aside {
  background-color: #f9fafb;
}

h2 {
  font-size: 1.125rem;
  color: #238878;
}

nav ul li {
  font-size: 1.0rem;
  font-weight: 500;
}

.text-blue-500 {
  color: #5885ff;
}

.text-black {
  color: #000;
}
</style>
