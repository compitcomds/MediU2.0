<template>
  <div class="min-h-screen bg-[#edf8f3] lg:mt-12 lg:p-6" v-if="user">
    <div class="lg:flex lg:gap-6">
      <DashboardSidenav />
      <DashboardMain class="hidden lg:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const router = useRouter();
const user = ref<any>(null);

try {
  const result = await getUser();
  user.value = result;
} catch (error) {
  router.push("/auth/login");
}
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
