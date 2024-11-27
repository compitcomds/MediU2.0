<template>
  <div class="min-h-screen bg-[#edf8f3] lg:p-6" v-if="user">
    <div class="lg:flex lg:gap-6">
      <DashboardSidenav />
      <slot />
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
