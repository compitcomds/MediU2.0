<template>
    <div class="min-h-screen lg:p-6 bg-[#edf8f3] flex" v-if="UserData">
      <!-- Main layout -->
      
        <!-- Sidebar -->
              <DashboardSidenav class="hidden lg:block" :UserData="UserData || ''"/>

  
        <!-- Order Confirmation -->
        <div class="w-full lg:w-3/4 rounded-lg lg:p-6 lg:ml-6 my-10 lg:my-0 border space-y-6">
          <div class="flex flex-col items-center">
            <img
              src="https://glower.indiankoder.com/xhtml/images/confirmation.png"
              alt="Order Complete"
              class="w-80 h-80"
            />
            <h2 class="mt-6 text-2xl font-semibold text-gray-800">Your Order Is Completed!</h2>
            <p class="mt-2 text-sm text-gray-600 text-center">
              You will receive an order confirmation email with details of your order.
            </p>
            <p class="mt-1 text-sm text-gray-600">Order ID: 267676GHERT105467</p>
  
            <!-- Action Buttons -->
            <div class="mt-8 space-x-4">
              <a href="/dashboard/view-order"
                class="bg-[#238878] text-white px-4 py-2 rounded-lg hover:bg-[#809e99]"
              >
                View Order
              </a>
              <a href="/dashboard/"
                class="border border-gray-300 text-gray-700 hover:text-white px-4 py-2 rounded-lg hover:bg-[#238878]"
              >
                Back To Home
              </a>
            </div>
          </div>
        </div>

    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Import useRouter
  import { getUser } from '~/appwrite/auth';
  
  const UserData = ref(null); // Use ref for reactivity
  const router = useRouter(); // Initialize the router
  
  async function fetchUserData() {
    try {
      const result = await getUser();
      console.log("User Data:", result);
      UserData.value = result; // Update the value of UserData
    } catch (error) {
      console.error("Error fetching user data:", error);
      UserData.value = null; // Update the value of UserData
      router.push('/auth/login'); // Redirect to /auth/login
    }
  
    console.log(UserData.value); // Log here to see the final value
  }
  
  fetchUserData();
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  