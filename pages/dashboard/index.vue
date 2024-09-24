<template>
  <div class="min-h-screen bg-[#edf8f3] lg:mt-12 p-6" v-if="UserData">
    <div class="flex gap-6">
      <!-- Sidebar -->
      <DashboardSidenav :UserData="UserData || ''"/>
      <!-- Main Dashboard -->
      <DashboardMain />
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


<style scoped>
/* Layout for dashboard */
body {
  font-family: "Arial", sans-serif;
}

nav ul li a {
  display: block;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

a:hover {
  text-decoration: underline;
}
</style>
