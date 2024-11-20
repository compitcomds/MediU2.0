<template>
  <aside class="w-full lg:w-1/4 bg-white rounded-lg pb-20 p-6">
    <!-- Header Title -->
    <h2 class="text-lg font-semibold text-gray-800 mb-6">Your Account</h2>

    <!-- Profile Section -->
    <div class="flex flex-col items-center p-6 mb-6 bg-gray-100 rounded-lg">
      <div class="relative">
        <img src="https://via.placeholder.com/80" alt="Profile"
          class="h-20 w-20 rounded-full border-2 border-gray-200 object-cover" />
      </div>
      <div class="mt-4 text-center">
        <h2 class="text-lg font-semibold text-gray-800">{{ props.UserData.name }}</h2>
        <p class="text-sm text-gray-600">{{ props.UserData.email }}</p>
        <p class="text-sm text-gray-600">{{ props.UserData.phone }}</p>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav>
      <ul class="space-y-4">
        <li class="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
          <img src="https://placehold.co/24x24?text=AI" alt="Account Information Icon" class="w-6 h-6" />
          <a href="/dashboard/">Account Information</a>
        </li>

        <!-- Menu Items with Icons -->
        <li v-for="item in menuItems" :key="item.text"
          class="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
          <div class="flex items-center gap-2">
            <img :src="item.icon" alt="icon" class="w-6 h-6"
              :class="{ 'text-blue-500': $route.path === item.link, 'text-black': $route.path !== item.link }" />
            <nuxt-link :to="item.link" class="flex-1"
              :class="{ 'text-blue-500 font-semibold': $route.path === item.link, 'text-black': $route.path !== item.link }">{{ item.text }}</nuxt-link>
          </div>
          <span>&#8250;</span>
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

// Sidebar menu items with icons
const menuItems = [
  { text: "My Profile", link: "/dashboard/profile", icon: "https://placehold.co/24x24?text=MP" },
  { text: "Orders", link: "/dashboard/orders", icon: "https://placehold.co/24x24?text=O" },
  { text: "My Wallet", link: "/dashboard/", icon: "https://placehold.co/24x24?text=W" },
  { text: "My WishList", link: "/dashboard/", icon: "https://placehold.co/24x24?text=WL" },
  { text: "Downloads", link: "/dashboard/downloads", icon: "https://placehold.co/24x24?text=D" },
  { text: "Delivery Addresses", link: "/dashboard/address", icon: "https://placehold.co/24x24?text=DA" },
  { text: "Return request", link: "/dashboard/return", icon: "https://placehold.co/24x24?text=RR" },
  { text: "Shipping methods", link: "/dashboard/shippingMethod", icon: "https://placehold.co/24x24?text=SM" },
  { text: "Payment Methods", link: "/dashboard/paymentMethod", icon: "https://placehold.co/24x24?text=PM" },
  { text: "Review", link: "/dashboard/reviews", icon: "https://placehold.co/24x24?text=RW" },
  { text: "Help?", link: "/dashboard/", icon: "https://placehold.co/24x24?text=H" },
  { text: "Consultancy", link: "/dashboard/", icon: "https://placehold.co/24x24?text=C" },
];
</script>

<style scoped>
/* Adjust colors, fonts, and spacing */
aside {
  background-color: #f9fafb;
}

h2 {
  font-size: 1.125rem;
  color: #238878;
}

nav ul li {
  font-size: 1.0rem;
  font-weight: 500;
}

.text-blue-500 {
  color: #5885ff;
}

.text-black {
  color: #000;
}
</style>
