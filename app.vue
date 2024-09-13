<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <HomeNavbar />
    <NuxtPage />
    <SiteFooter class="hidden lg:block" />

    <MobileBottomNav />
  </NuxtLayout>
</template>

<style>
html,
body {
  background-color: white !important;
}
</style>

<script setup></script>
