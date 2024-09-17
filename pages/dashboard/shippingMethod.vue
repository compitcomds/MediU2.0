<template>
    <div class="min-h-screen p-6 bg-[#edf8f3] flex">
        <!-- Sidebar -->
        <DashboardSidenav />
  
        <!-- Main Content -->
        <DashboardShippingMethod />
      </div>

  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  