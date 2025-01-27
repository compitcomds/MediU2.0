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
        class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none"
      >
        <img
          v-if="userImage"
          :src="userImage"
          alt="User Image"
          class="h-10 w-10 rounded-full"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="288"
          height="288"
          class="h-full max-h-full w-full max-w-full"
        >
          <path
            fill="#28574e"
            d="M256 250.8a73.34 73.34 0 1 1 73.33-73.34A73.41 73.41 0 0 1 256 250.8zm0-125.53a52.2 52.2 0 1 0 52.19 52.19A52.25 52.25 0 0 0 256 125.27zm117.07 282.6H138.93l-10.57-10.57a127.64 127.64 0 1 1 255.28 0zM150 386.73h212a106.51 106.51 0 0 0-212 0z"
            class="color231f20 svgShape"
          ></path>
        </svg>
      </button>

      <div
        v-if="isOpen"
        ref="dialogRef"
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
            <h4 class="block px-4 py-2 text-center text-sm text-gray-800">
              Hey! {{ user.name }} 👋
            </h4>
          </li>
          <hr />
          <li v-if="!!user">
            <nuxt-link
              to="/dashboard"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Dashboard</nuxt-link
            >
          </li>
          <li v-if="!!user">
            <nuxt-link
              to="/dashboard/orders"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Your Orders</nuxt-link
            >
          </li>
          <li v-if="!!user">
            <nuxt-link
              to="/dashboard/wallet"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              @click="toggleDropdown"
              >Your Wallet</nuxt-link
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
import getCountOfCartDataItems from "~/shopify/cart/get-count-items";
import { getUser, logoutUser, getUserImage } from "~/appwrite/auth";
import { onClickOutside } from "@vueuse/core";
const isOpen = ref(false);
const isLoggingOut = ref(false);

const shopStore = useShopStore();
const { totalItems } = storeToRefs(shopStore);

const dialogRef = ref(null);

onClickOutside(dialogRef, () => {
  toggleDropdown();
});

const { data: user } = useAsyncData(
  "user",
  async () => {
    try {
      return await getUser();
    } catch (error) {
      return null;
    }
  },
  { server: false },
);

const userImage = computed(() => {
  return !!user.value?.name ? getUserImage(user.value?.name) : null;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const logout = async () => {
  isLoggingOut.value = true;
  try {
    await logoutUser();
    await refreshNuxtData(["user"]);
    reloadNuxtApp();
  } catch (error: any) {
    toast.error(error.message, { richColors: true });
  } finally {
    isLoggingOut.value = false;
  }
};

onMounted(async () => {
  totalItems.value = await getCountOfCartDataItems();
});
</script>
<style scoped></style>
