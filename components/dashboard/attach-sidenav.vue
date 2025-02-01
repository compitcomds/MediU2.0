<template>
  <div class="min-h-screen bg-[#edf8f3] pt-5 lg:p-6 lg:pt-10" v-if="user">
    <div class="lg:flex lg:gap-6">
      <DashboardSidenav :class="{ 'hidden lg:block': !isDashboard }" />
      <nuxt-link
        to="/dashboard"
        class="flex w-full items-center gap-1 bg-white px-4 py-4 text-[#238878] lg:hidden"
        v-if="!isDashboard"
        ><ChevronLeft :size="14" />Back to dashboard</nuxt-link
      >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
import { getUser } from "~/appwrite/auth";

const router = useRouter();
const user = ref<any>(null);

const props = defineProps<{
  showSidenavOnMobile?: boolean;
  isDashboard?: boolean;
}>();

try {
  const result = await getUser();
  user.value = result;
} catch (error) {
  router.push("/auth/login");
}
</script>
