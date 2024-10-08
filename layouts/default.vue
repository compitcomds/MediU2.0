<template>
  <HomeNavbar />
  <template v-if="!isLoading">
    <template v-if="!preventAccess">
      <slot />
    </template>
    <div v-else class="auth-message">
      <h2 class="auth-title">Not Authenticated</h2>
      <p class="auth-text">
        Please <nuxt-link class="auth-link" to="/auth/login">Login</nuxt-link> or
        <nuxt-link class="auth-link" to="/auth/register">Sign Up</nuxt-link>
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
<style scoped>
.auth-message {
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9fafb; /* Light background */
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 400px; /* Centering effect */
}

.auth-title {
  font-size: 1.5rem; /* Larger font for emphasis */
  font-weight: 700; /* Bold */
  color: #374151; /* Dark gray */
  margin-bottom: 1rem; /* Spacing below title */
}

.auth-text {
  font-size: 1rem; /* Standard text size */
  color: #4b5563; /* Medium gray for readability */
}

.auth-link {
  color: #3b82f6; /* Blue for links */
  text-decoration: none; /* No underline */
  font-weight: 600; /* Slightly bold */
}

.auth-link:hover {
  text-decoration: underline; /* Underline on hover */
  color: #1e40af; /* Darker blue on hover */
}
</style>
