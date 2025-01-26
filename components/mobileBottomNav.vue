<template>
  <div class="fixed bottom-0 z-50 block w-full bg-[#238878] lg:hidden">
    <div class="btm-nav z-50 flex items-center justify-center bg-[#238878] p-4">
      <nuxt-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-house text-white"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link to="/shop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-store text-white"
        >
          <path
            d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
          />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path
            d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/cart"
        class="relative rounded-full border-2 border-transparent text-white transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none"
        aria-label="Cart"
      >
        <!-- Shopping Cart SVG Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
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
        <span class="absolute -top-5 right-4 md:right-16">
          <div
            class="inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white"
          >
            {{ totalItems }}
          </div>
        </span>
      </nuxt-link>
      <nuxt-link to="/dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-user text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
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
    alert(error.message);
  } finally {
    isLoggingOut.value = false;
  }
};
</script>
<style scoped></style>
