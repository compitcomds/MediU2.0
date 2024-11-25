<template>
  <nav class="mb-8 flex flex-col space-y-2 md:hidden">
    <nuxt-link
      to="/dashboard/profile"
      class="flex items-center justify-center rounded-lg bg-white px-6 py-5 text-center text-[#238878] transition hover:bg-gray-200"
    >
      <span class="mx-auto inline-block">Profile</span>
      <ChevronRight />
    </nuxt-link>
    <nuxt-link
      to="/dashboard/orders"
      class="flex items-center justify-center rounded-lg bg-white px-6 py-5 text-center text-[#238878] transition hover:bg-gray-200"
    >
      <span class="mx-auto inline-block">Orders</span>
      <ChevronRight />
    </nuxt-link>
    <nuxt-link
      to="/dashboard/consultancy"
      class="flex items-center justify-center rounded-lg bg-white px-6 py-5 text-center text-[#238878] transition hover:bg-gray-200"
    >
      <span class="mx-auto inline-block">Consultancy</span>
      <ChevronRight />
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
</script>

<style scoped></style>
