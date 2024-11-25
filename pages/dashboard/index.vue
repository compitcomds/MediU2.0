<template>
  <div class="min-h-screen bg-[#edf8f3] lg:mt-12 lg:p-6" v-if="UserData">
    <div class="lg:flex lg:gap-6">
      <!-- Sidebar -->
      <DashboardSidenav :UserData="UserData || ''" />
      <!-- Main Dashboard -->
      <DashboardMain class="hidden lg:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const UserData = ref<any>(null);
const router = useRouter();

async function fetchUserData() {
  try {
    const result = await getUser();
    console.log("User Data:", result);
    UserData.value = result;
  } catch (error) {
    UserData.value = null;
    router.push("/auth/login");
  }
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
