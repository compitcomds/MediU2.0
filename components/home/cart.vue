<template>
  <div class="lg:flex xl:flex md:flex items-center justify-end space-x-6 w-3/12 md:block hidden">
    <div>
      <ShopUserSidebar />
    </div>
    <div class="w-5 h-5 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#287542"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-heart"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
      </svg>
    </div>
    <div class="relative inline-block text-left">
      <button @click="toggleDropdown" class="flex items-center focus:outline-none">
        <div
          class="bg-center bg-cover bg-no-repeat rounded-full h-10 w-10"
          :style="{
            backgroundImage: 'url(https://ccdstest.b-cdn.net/Medi%20u/person.png)',
          }"
        ></div>
        <svg
          class="w-5 h-5 ml-2 transition-transform transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
  
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition duration-300 ease-in-out opacity-100 transform scale-100"
        @click.outside="closeDropdown"
      >
        <ul class="py-1">
          <li>
            <a href="/auth/login" class="block px-4 py-2 text-black hover:bg-gray-100">Log In</a>
          </li>
          <!-- <li>
            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Settings</a>
          </li> -->
          <li>
            <a href="/auth/register" class="block px-4 py-2 text-black hover:bg-gray-100">Register</a>
          </li>
        </ul>
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
<style scoped></style>
