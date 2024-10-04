<template>
  <HomeNavbar />
  <template v-if="!isLoading">
    <template v-if="!preventAccess">
      <slot />
    </template>
    <div v-else class="my-20">
      <h2>Not authenticated.</h2>
      <p>
        Please <nuxt-link to="/auth/login">Login</nuxt-link> /
        <nuxt-link to="/auth/register">Sign Up</nuxt-link>
      </p>
    </div>
  </template>

  <div v-else>
    <div class="flex my-40 items-center justify-center">
      <div class="animate-spin text-[#28574e]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-loader-circle"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    </div>
    <h1 class="text-center text-3xl font-bold my-40"></h1>
  </div>

  <SiteFooter class="hidden lg:block" />

  <MobileBottomNav />
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const route = useRoute();

const preventAccess = ref(false);
const isLoading = ref(false);

const LOGIN_REQUIRED_ROUTES = ["/checkout", "/dashboard"];

const blockUnauthenticatedUser = async (pathname: string) => {
  preventAccess.value = false;
  isLoading.value = true;
  for (const loginRequiredRoute of LOGIN_REQUIRED_ROUTES) {
    if (pathname.includes(loginRequiredRoute)) {
      try {
        const user = await getUser();
      } catch (error) {
        preventAccess.value = true;
      }
      break;
    }
  }
  isLoading.value = false;
};

watch(() => route.fullPath, blockUnauthenticatedUser, {
  deep: true,
  immediate: true,
});
</script>
