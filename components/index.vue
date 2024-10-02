<template>
    <div class="flex">
      <!-- Sidebar Navigation -->
      <nav class="w-1/4 p-4 bg-gray-100">
        <ul>
          <li :class="{ 'text-blue-500': currentTab === 'service' }" @click="currentTab = 'service'">
            Service
          </li>
          <li :class="{ 'text-blue-500': currentTab === 'basicDetails' }" @click="currentTab = 'basicDetails'">
            Basic Details
          </li>
          <li :class="{ 'text-blue-500': currentTab === 'summary' }" @click="currentTab = 'summary'">
            Summary
          </li>
        </ul>
      </nav>
  
      <!-- Right Content Area -->
      <div class="w-3/4 p-8">
        <component :is="currentTabComponent"></component>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTab: 'service',
      };
    },
    computed: {
      currentTabComponent() {
        return this.currentTab;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  