<template>
    <section class="min-h-screen lg:p-6 bg-[#edf8f3] flex" v-if="UserData">
      <!-- Sidebar -->
            <DashboardSidenav class="hidden lg:block" :UserData="UserData || ''"/>

  
      <!-- Main Content -->
      <DashboardReturn />
    </section>
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
  
  <style scoped>
  /* Optional styling */
  </style>