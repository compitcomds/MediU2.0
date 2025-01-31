<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div
      class="flex min-h-screen flex-col justify-between bg-gray-50 text-gray-800"
    >
      <HomeNavbar />
      <main class="flex-grow pt-16 md:pt-20 lg:pt-32 xl:pt-28">
        <NuxtPage />
      </main>
    </div>
    <SiteFooter class="hidden lg:block" />
    <MobileBottomNav />
  </NuxtLayout>
  <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from "vue-sonner";

const userStore = useUserStore();

await userStore.initialiseUserStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

html,
body {
  background-color: white !important;
  font-family: "Inter", sans-serif;
}
</style>
