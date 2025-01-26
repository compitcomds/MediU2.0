<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-gray-50 text-gray-800"
  >
    <header>
      <HomeNavbar />
    </header>

    <main class="flex-grow pt-16 md:pt-20 lg:pt-32 xl:pt-28">
      <slot />
    </main>
  </div>
  <SiteFooter class="hidden lg:block" />
  <MobileBottomNav />
</template>

<script setup lang="ts"></script>

<style scoped></style>
