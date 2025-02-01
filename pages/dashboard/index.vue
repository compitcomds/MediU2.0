<template>
  <DashboardAttachSidenav :is-dashboard="true">
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
