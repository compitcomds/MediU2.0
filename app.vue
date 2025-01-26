<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from "vue-sonner";

const userStore = useUserStore();

await userStore.initialiseUserStore();
</script>

<style>
html,
body {
  background-color: white !important;
}
</style>
