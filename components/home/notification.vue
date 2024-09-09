<template>
    <div v-if="showNotification" class="sticky inset-x-0 top-0 z-50 bg-[#22423C]">
      <div class="max-w-7xl mx-auto lg:py-1 xl:py-2 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex-1 flex justify-center">
            <p class="text-center font-medium text-white flex items-center">
              <span class="">Get 20% OFF on your first order. Subscribe to our newsletter
                and get your coupon!</span>
            </p>
          </div>
          <div class="hidden lg:flex lg:items-center lg:ml-3">
            <a @click="closeNotification"
              class="flex items-center justify-center text-xl font-medium text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </a>
          </div>
        </div>
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
  
  </style>
  