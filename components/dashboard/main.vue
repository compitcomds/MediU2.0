<template>
  <main class="mb-16 min-h-screen md:w-3/4 space-y-4">
    <!-- Top Navigation for Payment Methods, Orders, and Rewards -->
    <div class="grid grid-cols-3 gap-4 p-4 mb-6 bg-gray-100 rounded-lg">
      <a href="/dashboard/" class="flex flex-col items-center border p-2 border-white bg-white rounded-3xl">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/dashboard%20icons/cash-payment.svg" alt="Payment Methods" class="w-10 h-10 mb-2" />
        <p class="text-sm font-semibold text-gray-700">Payment Methods</p>
      </a>
      <a href="/dashboard/orders" class="flex flex-col items-center border p-2 border-white bg-white rounded-3xl">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/dashboard%20icons/check-out.svg" alt="Medicine Orders" class="w-10 h-10 mb-2" />
        <p class="text-sm font-semibold text-gray-700">Medicine Orders</p>
      </a>
      <a href="/dashboard/" class="flex flex-col items-center border p-2 border-white bg-white rounded-3xl">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/dashboard%20icons/gift-box.svg" alt="My Rewards" class="w-10 h-10 mb-2" />
        <p class="text-sm font-semibold text-gray-700">My Rewards</p>
      </a>
    </div>

    <!-- Information Section -->

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
      <!-- Login Information -->
      <div class="space-y-4 flex flex-col items-left justify-center">
        <h2 class="text-lg font-semibold text-gray-600">Login Information</h2>
        <div>
          <p class="text-sm font-semibold text-teal-700">EMAIL</p>
          <p class="text-sm text-gray-800">{{ user.email }}</p>
        </div>
        <div>
          <p class="text-sm font-semibold text-teal-700">MOBILE NUMBER</p>
          <p class="text-sm text-gray-800">{{ user.phone }}</p>
        </div>
      </div>

      <!-- Personal Information -->
      <div class="space-y-4 flex flex-col items-center justify-center">
        <h2 class="text-lg font-semibold text-gray-600">Personal Information</h2>
        <div>
          <p class="text-sm font-semibold text-teal-700">FULL NAME</p>
          <p class="text-sm text-gray-800">{{ user.firstName }} {{ user.lastName }}</p>
        </div>
        <div>
          <p class="text-sm font-semibold text-teal-700">GENDER</p>
          <p class="text-sm text-gray-800">{{ user.gender || 'No-data' }}</p>
        </div>
      </div>


      <div class=" flex flex-col items-center justify-center">
        <div class="flex items-center justify-center border bg-white p-2">
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z"
              fill="#238878"></path>
            <path
              d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z"
              fill="#238878"></path>
            <path
              d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z"
              fill="#238878"></path>
          </svg>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <p class="">Total Orders</p>
          <h3 class="text-3xl font-semibold">{{ user.numberOfOrders }}</h3>
        </div>
      </div>
      
      
    </div>
    <div class=" bg-white p-6 rounded-lg shadow-md w-full">
      <h3 class="mt-6 text-2xl font-semibold text-center my-6">Addresses</h3>
      <div v-for="(address, index) in user.addresses.nodes" :key="index"
        class="mt-2 rounded-md border border-gray-300 p-4">
        <h4 class="font-medium">Address {{ index + 1 }}</h4>
        <p>{{ address.name }}</p>
        <p>{{ address.address1 }} {{ address.address2 }}</p>
        <p>{{ address.city }}, {{ address.country }}</p>
        <p class="text-gray-600">Phone: {{ address.phone }}</p>
      </div></div>
    <!-- Edit Profile Button -->
    <!-- <div class="flex justify-center mt-6">
      <button
        class="flex items-center gap-2 px-6 py-2 font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        Edit Profile
      </button>
    </div> -->
  </main>
</template>

<script setup lang="ts">
import { logoutUser } from "~/appwrite/auth";
import fetchCustomerDetails from "~/shopify/user/userDetails";

// Fetch user data
let user: any = null;
try {
  user = await fetchCustomerDetails();
} catch (error) {
  console.error(error);
}

// If user is not found, log out and reload
if (!user) {
  await logoutUser();
  reloadNuxtApp();
}
</script>

<style scoped>
/* Custom styles */
</style>
