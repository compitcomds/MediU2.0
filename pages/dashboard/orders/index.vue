<template>
  <div class="flex min-h-screen bg-[#edf8f3] p-6" v-if="userData">
    <!-- Sidebar -->
    <DashboardSidenav :UserData="userData || ''" />
    <!-- Orders Table -->
    <DashboardOrders :orders="orders" />
  </div>
</template>

<script setup>
import { getUser } from "~/appwrite/auth";
import getAllUserOrders from "~/shopify/user/orders/all-orders";

const userData = ref(null);
const router = useRouter();

const orders = await getAllUserOrders();

async function fetchUserData() {
  try {
    const result = await getUser();
    userData.value = result;
  } catch (error) {
    console.error("Error fetching user data:", error);
    userData.value = null;
    router.push("/auth/login");
  }
}

fetchUserData();
</script>

<style scoped></style>
