<template>
  <aside class="w-1/4 bg-white rounded-lg shadow-lg h-full hidden md:block">
    <!-- Profile Section -->
    <div class="flex items-center mb-6 p-6">
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        class="w-20 h-20 rounded-full border-2 border-gray-200 object-cover"
      />
      <div class="ml-4">
        <h2 class="font-semibold text-lg text-[#28574e]">
          {{ props.UserData.name }}
        </h2>
        <p class="text-sm text-gray-500">{{ props.UserData.email }}</p>
        <p class="text-sm text-gray-500">{{ props.UserData.phone }}</p>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav>
      <ul class="space-y-4 text-sm pb-4">
        <li class="font-semibold text-gray-700 bg-[#edf8f3] p-3">DASHBOARD</li>
        <li>
          <nuxt-link
            to="/dashboard/"
            class="hover:text-[#28574E] text-black p-3"
            >Dashboard</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/orders"
            class="hover:text-[#28574E] text-black p-3"
            >Orders</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/downloads"
            class="hover:text-[#28574E] text-black p-3"
            >Downloads</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/return"
            class="hover:text-[#28574E] text-black p-3"
            >Return request</nuxt-link
          >
        </li>

        <li class="font-semibold text-gray-700 mt-6 bg-[#edf8f3] p-3">
          ACCOUNT SETTINGS
        </li>
        <li>
          <nuxt-link
            to="/dashboard/profile"
            class="hover:text-[#28574E] text-black p-3"
            >Profile</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/address"
            class="hover:text-[#28574E] text-black p-3"
            >Address</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/shippingMethod"
            class="hover:text-[#28574E] text-black p-3"
            >Shipping methods</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/paymentMethod"
            class="hover:text-[#28574E] text-black p-3"
            >Payment Methods</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/dashboard/reviews"
            class="hover:text-[#28574E] text-black p-3"
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
