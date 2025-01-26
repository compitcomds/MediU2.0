<template>
  <div class="hidden w-3/12 items-center justify-end space-x-6 lg:flex">
    <div class="">
      <nuxt-link
        to="/cart"
        class="relative rounded-full border-2 border-transparent text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none"
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
        <span class="absolute -right-10 top-2">
          <div
            class="inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white"
          >
            {{ totalItems }}
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
          class="h-12 w-12 rounded-full bg-cover bg-no-repeat"
          :style="{
            backgroundImage:
              'url(https://ccdstest.b-cdn.net/Medi%20u/profile.svg)',
          }"
        ></div>
      </button>

      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-2 w-48 scale-100 transform rounded-md bg-white opacity-100 shadow-lg transition duration-300 ease-in-out"
      >
        <ul class="py-1">
          <li v-if="!user">
            <nuxt-link
              to="/auth/login"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Log In</nuxt-link
            >
          </li>
          <li v-if="!user">
            <nuxt-link
              to="/auth/register"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Register</nuxt-link
            >
          </li>

          <li v-if="!!user">
            <nuxt-link
              to="/dashboard"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Dashboard</nuxt-link
            >
          </li>

          <li v-if="!!user">
            <button
              :disabled="isLoggingOut"
              @click="logout"
              class="block w-full px-4 py-2 text-start text-black hover:bg-gray-100 disabled:animate-pulse disabled:cursor-not-allowed"
            >
              {{ isLoggingOut ? "Logging out..." : "Logout" }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toast } from "vue-sonner";
import { getUser, logoutUser } from "~/appwrite/auth";

const isOpen = ref(false);
const isLoggingOut = ref(false);

const shopStore = useShopStore();
const { totalItems } = storeToRefs(shopStore);
let user: any;

try {
  user = await getUser();
} catch (error) {
  user = null;
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const logout = async () => {
  isLoggingOut.value = true;
  try {
    await logoutUser();
    reloadNuxtApp();
  } catch (error: any) {
    toast.error(error.message, { richColors: true });
  } finally {
    isLoggingOut.value = false;
  }
};
</script>
<style scoped></style>
