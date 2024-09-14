<template>
    <div class="min-h-screen bg-gray-100 p-6">
      <div class="flex  gap-6">
        <!-- Sidebar -->
        <DashboardSidenav />
  
        <!-- Main Dashboard -->
        <DashboardMain />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
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
  