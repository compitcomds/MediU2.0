<template>
  <aside class="w-full rounded-lg bg-[#f9fafb] p-6 pb-20 lg:w-1/4">
    <h2
      class="mb-6 text-[1.125rem] text-lg font-semibold text-[238878] text-gray-800"
    >
      Your Account
    </h2>

    <!-- Profile Section -->
    <div class="mb-6 flex flex-col items-center rounded-lg bg-gray-100 p-6">
      <div class="relative">
        <img
          :src="userImage"
          alt="Profile"
          class="h-20 w-20 rounded-full border-2 border-gray-200 object-cover"
        />
      </div>
      <div class="mt-4 text-center">
        <h2
          class="text-[1.125rem] text-lg font-semibold text-[238878] text-gray-800"
        >
          {{ user.name }}
        </h2>
        <p class="text-sm text-gray-600">{{ user.email }}</p>
        <p class="text-sm text-gray-600">{{ user.phone }}</p>
      </div>
    </div>

    <nav>
      <ul class="space-y-4">
        <li
          v-for="tab in tabs"
          class="flex items-center justify-between rounded-md text-[1rem] font-medium hover:bg-gray-100"
        >
          <nuxt-link :to="tab.href" class="flex w-full items-center gap-2 p-3">
            <component :is="tab.image" class="tab-icon h-6 w-6" />
            <p class="flex-1 text-black hover:text-blue-500">
              {{ tab.name }}
            </p>
            <span class="ml-auto">&#8250;</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { getUser, getUserImage } from "~/appwrite/auth";
import {
  CircleUserRound,
  ShoppingCart,
  Wallet,
  ScrollText,
  Star,
  HandHelping,
  BriefcaseMedical,
  House,
} from "lucide-vue-next";

const user = await getUser();
const userImage = getUserImage(user.name || "U");

const tabs = [
  {
    name: "Dashboard",
    image: House,
    alt: "",
    href: "/dashboard",
  },
  {
    name: "Account Information",
    image: CircleUserRound,
    alt: "",
    href: "/dashboard/profile",
  },
  {
    name: "Orders",
    image: ShoppingCart,
    alt: "",
    href: "/dashboard/orders",
  },
  {
    name: "My Wallet",
    image: Wallet,
    alt: "",
    href: "/dashboard/wallet",
  },
  {
    name: "My Wishlist",
    image: ScrollText,
    alt: "",
    href: "/dashboard/wishlist",
  },
  {
    name: "Review",
    image: Star,
    alt: "",
    href: "/dashboard/reviews",
  },
  {
    name: "Help And Support",
    image: HandHelping,
    alt: "",
    href: "/dashboard/help-and-support",
  },
  {
    name: "Consultancy",
    image: BriefcaseMedical,
    alt: "",
    href: "/dashboard/consultancy",
  },
];
</script>
