<template>
    <div class="min-h-screen lg:p-6 bg-[#edf8f3] flex" v-if="UserData">
        
            <DashboardSidenav class="hidden lg:block" :UserData="UserData || ''"/>

  
      <div class="w-full lg:px-8 my-10 lg:my-0 pb-20 lg:pb-0 bg-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#238878]">
          <DashboardReviewCard
            name="Michel Poe"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Celesto Anderson"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Monsur Rahman Lito"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Johan Doe"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <!-- Add more cards as needed -->
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