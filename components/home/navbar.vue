<template>
  <div>
    <!-- Top notification bar -->
    <HomeNotification />

    <!-- Main header -->
    <HomeSearch />

    <!-- navbar2 -->
    <HomeNavItem />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotification: true, // Show notification by default
      isOpen: false,
      lastScrollTop: 0, // Store the last scroll position
      showNavbar: true, // Initially show navbar
    };
  },
  methods: {
    closeNotification() {
      this.showNotification = false; // Hide the notification bar
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Add additional styles if needed */
</style>
