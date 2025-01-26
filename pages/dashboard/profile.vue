<template>
  <DashboardAttachSidenav>
    <main class="mb-16 min-h-screen w-full md:p-6 lg:w-3/4">
      <div class="w-full bg-white px-3 py-6 md:px-6">
        <DashboardProfileEditForm :user="user" />
      </div>
    </main>
  </DashboardAttachSidenav>
</template>

<script setup lang="ts">
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
