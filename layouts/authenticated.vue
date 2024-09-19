<template>
  {{ isAuthenticated ? "True" : "False" }}

  <HomeNavbar />

  <template v-if="isAuthenticated">
    <slot />
  </template>
  <div v-else>
    <h2>Not authenticated.</h2>
    <p>
      Please <nuxt-link to="/auth/login">Login</nuxt-link> /
      <nuxt-link to="/auth/register">Sign Up</nuxt-link>
    </p>
  </div>

  <SiteFooter class="hidden lg:block" />

  <MobileBottomNav />
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const isAuthenticated = useState("is-authenticated", () => false);

try {
  const user = await getUser();
  isAuthenticated.value = true;
} catch (error: any) {}
</script>
