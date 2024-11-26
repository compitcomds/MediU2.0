<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const userStore = useUserStore();

await userStore.initialiseUserStore();
</script>

<style>
html,
body {
  background-color: white !important;
}
</style>
