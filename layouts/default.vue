<template>
  <HomeNavbar />
  <template v-if="!preventAccess">
    <slot />
  </template>
  <div class="my-20" v-else>
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
const route = useRoute();
const userStore = useUserStore();
const preventAccess = false;
</script>
