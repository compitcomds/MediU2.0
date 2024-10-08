<template>
  <div class="flex items-center justify-end space-x-6 w-3/12">
    <div class="">
      <nuxt-link
        to="/addToCart"
        class="relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Cart"
      >
        <!-- Shopping Cart SVG Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#285742"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
        <!-- Badge for Cart Item Count -->
        <span class="absolute top-2 -right-10">
          <div
            class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
          >
            2
          </div>
        </span>
      </nuxt-link>
    </div>

    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="flex items-center justify-center focus:outline-none"
      >
        <div
          class="bg-cover bg-no-repeat rounded-full h-12 w-12"
          :style="{
            backgroundImage:
              'url(https://ccdstest.b-cdn.net/Medi%20u/profile.svg)',
          }"
        ></div>
      </button>

      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition duration-300 ease-in-out opacity-100 transform scale-100"
        @click.outside="closeDropdown"
      >
        <ul class="py-1">
          <li>
            <nuxt-link
              to="/auth/login"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              >Log In</nuxt-link
            >
          </li>
          <!-- <li>
            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Settings</a>
          </li> -->
          <li>
            <nuxt-link
              to="/auth/register"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              >Register</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
<style scoped></style>
