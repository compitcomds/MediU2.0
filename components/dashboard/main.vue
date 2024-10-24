<template>
  <main class="md:w-3/4 min-h-screen mb-16">
    <!-- Greeting and Info -->
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
      <p>
        Hello
        <span class="font-bold text-green-600">{{ user.displayName }}</span>
      </p>
      <p class="text-sm text-gray-500">
        From your account dashboard, you can view your recent orders, manage
        your shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="col-span-3 md:col-span-2 p-6 bg-white rounded-lg shadow-md">
        <form class="space-y-4">
          <h2 class="text-xl font-semibold">Customer Details</h2>
          <div class="form-group">
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700"
              >First Name</label
            >
            <input
              type="text"
              id="firstName"
              v-model="user.firstName"
              disabled
              class="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
            />
          </div>
          <div class="form-group">
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700"
              >Last Name</label
            >
            <input
              type="text"
              id="lastName"
              v-model="user.lastName"
              disabled
              class="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
            />
          </div>
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="user.email"
              disabled
              class="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
            />
          </div>
          <div class="form-group">
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone</label
            >
            <input
              type="tel"
              id="phone"
              v-model="user.phone"
              disabled
              class="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
            />
          </div>
          <h3 class="text-lg font-semibold mt-6">Addresses</h3>
          <div
            v-for="(address, index) in user.addresses.nodes"
            :key="index"
            class="border border-gray-300 p-4 rounded-md mt-2"
          >
            <h4 class="font-medium">Address {{ index + 1 }}</h4>
            <p>{{ address.name }}</p>
            <p>{{ address.address1 }} {{ address.address2 }}</p>
            <p>{{ address.city }}, {{ address.country }}</p>
            <p class="text-gray-600">Phone: {{ address.phone }}</p>
          </div>
        </form>
      </div>
      <div
        class="bg-white col-span-3 md:col-span-1 p-6 max-h-fit rounded-lg shadow-lg hover:bg-[#28574E] text-[#28574E] hover:text-white space-y-3"
      >
        <div
          class="border lg:w-1/6 flex items-center justify-center p-2 bg-white"
        >
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z"
              fill="#28574e"
            ></path>
            <path
              d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z"
              fill="#28574e"
            ></path>
            <path
              d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z"
              fill="#28574e"
            ></path>
          </svg>
        </div>
        <div>
          <p class="">Total Orders</p>
          <h3 class="text-3xl font-semibold">{{ user.numberOfOrders }}</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { logoutUser } from "~/appwrite/auth";
import fetchCustomerDetails from "~/shopify/user/userDetails";

let user: any = null;

try {
  user = await fetchCustomerDetails();
} catch (error) {}

if (!user) {
  await logoutUser();
  reloadNuxtApp();
}
</script>

<style scoped></style>
