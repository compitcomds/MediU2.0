<template>
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer-4" class=" "
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#287542" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <!-- <span
              v-if="badgeCount > 0"
              class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full bg-red-500 text-white px-1 py- text-xs"
            >
              {{ badgeCount }}
            </span> -->
          </label
        >
      </div>
      <div class="drawer-side z-50">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu text-base-content min-h-full w-96">
          <!-- Sidebar content here -->
          <ShopUserWishList />
        </ul>
      </div>
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
        badgeCount: 3 // Example value, you can dynamically set this
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
  <style scoped></style>
  