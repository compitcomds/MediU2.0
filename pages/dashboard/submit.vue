<template>
    <div class="min-h-screen bg-[#edf8f3] p-6 flex">
      <!-- Sidebar -->
            <DashboardSidenav :UserData="UserData || ''"/>

  
      <!-- Main Layout -->
      <div class="w-3/4 px-8 flex flex-col items-center justify-center">
        <!-- Cancellation Confirmation Box -->
        <div
          class="border border-gray-200 w-[600px] p-8 bg-white rounded-lg shadow-md flex flex-col items-center"
        >
          <!-- Checkmark Icon -->
          <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
  
          <!-- Cancellation Message -->
          <h1 class="text-2xl font-semibold text-gray-700 mb-6">
            Cancellation Confirmed
          </h1>
  
          <!-- Button to Check Status -->
          <div>
            <nuxt-link
              to="/dashboard/view-order"
              class="bg-white text-black border border-gray-400 py-2 px-6 rounded-md hover:bg-gray-100 transition"
            >
              Check Status
            </nuxt-link>
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
  
  <style  scoped></style>
  