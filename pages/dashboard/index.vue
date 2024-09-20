<template>
  <div class="min-h-screen bg-[#edf8f3] p-6">
    <div class="flex gap-6">
      <!-- Sidebar -->
      <DashboardSidenav />

      <!-- Main Dashboard -->
      <DashboardMain />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
