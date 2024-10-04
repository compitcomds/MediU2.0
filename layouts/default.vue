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
    <h1 class="text-center text-3xl font-bold my-40">LOADING...</h1>
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
