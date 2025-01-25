<template>
  <DashboardAttachSidenav>
    <DashboardMain class="hidden lg:block" />
  </DashboardAttachSidenav>
</template>

<script setup lang="ts">
useHead({
  title: "Dashboard - Mediu",
  meta: [
    { name: "description", content: "Dashboard" },
    { name: "og:title", content: "Dashboard - Mediu" },
    { name: "og:description", content: "Dashboard" },
  ],
});
</script>

<style scoped>
/* Layout for dashboard */
body {
  font-family: "Arial", sans-serif;
}

nav ul li a {
  display: block;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

a:hover {
  text-decoration: underline;
}
</style>
