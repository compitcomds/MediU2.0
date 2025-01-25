<template>
  <div class="flex min-h-screen bg-[#edf8f3] px-1 py-6 md:px-6" v-if="UserData">
    <DashboardSidenav class="hidden lg:block" :UserData="UserData || ''" />

    <main class="mb-16 min-h-screen w-full md:p-6 lg:w-3/4">
      <div class="w-full bg-white px-3 py-6 md:px-6">
        <DashboardProfileEditForm :user="user" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const UserData = ref<any>(null);
const router = useRouter();

import { logoutUser } from "~/appwrite/auth";
import fetchCustomerDetails from "~/shopify/user/userDetails";

let user: any = null;

try {
  user = await fetchCustomerDetails();
} catch (error) {}

if (!user) {
  await logoutUser();
  reloadNuxtApp();
}

async function fetchUserData() {
  try {
    const result = await getUser();
    UserData.value = result;
  } catch (error) {
    UserData.value = null;
    router.push("/auth/login");
  }
}

fetchUserData();

useHead({
  title: "Profile - Mediu",
  meta: [
    { name: "description", content: "Profile" },
    { name: "og:title", content: "Profile - Mediu" },
    { name: "og:description", content: "Profile" },
  ],
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
