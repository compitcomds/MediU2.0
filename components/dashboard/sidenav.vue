<template>
  <aside class="hidden h-full w-1/4 rounded-lg bg-white shadow-lg md:block">
    <!-- Profile Section -->
    <div class="mb-6 flex items-center p-6 md:flex-col lg:flex-row">
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        class="h-20 w-20 rounded-full border-2 border-gray-200 object-cover"
      />
      <div class="ml-4">
        <h2 class="text-lg font-semibold text-[#28574e]">
          {{ props.UserData.name }}
        </h2>
        <p class="text-xs text-gray-500 xl:text-sm">
          {{ props.UserData.email }}
        </p>
        <p class="text-xs text-gray-500 xl:text-sm">
          {{ props.UserData.phone }}
        </p>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav>
      <ul class="space-y-4 pb-4 text-sm">
        <li class="bg-[#edf8f3] p-3 font-semibold text-gray-700">DASHBOARD</li>
        <li>
          <nuxt-link
            to="/dashboard/"
            class="p-3 text-black hover:text-[#28574E]"
            >Dashboard</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/orders"
            class="p-3 text-black hover:text-[#28574E]"
            >Orders</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/downloads"
            class="p-3 text-black hover:text-[#28574E]"
            >Downloads</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/return"
            class="p-3 text-black hover:text-[#28574E]"
            >Return request</nuxt-link
          >
        </li>

        <li class="mt-6 bg-[#edf8f3] p-3 font-semibold text-gray-700">
          ACCOUNT SETTINGS
        </li>
        <li>
          <nuxt-link
            to="/dashboard/profile"
            class="p-3 text-black hover:text-[#28574E]"
            >Profile</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/address"
            class="p-3 text-black hover:text-[#28574E]"
            >Address</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/shippingMethod"
            class="p-3 text-black hover:text-[#28574E]"
            >Shipping methods</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/paymentMethod"
            class="p-3 text-black hover:text-[#28574E]"
            >Payment Methods</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/reviews"
            class="p-3 text-black hover:text-[#28574E]"
            >Review</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const props = defineProps({
  UserData: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
