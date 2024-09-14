<template>
    <aside class="w-1/4 bg-white p-6 rounded-lg shadow-lg h-full">
        <!-- Profile Section -->
        <div class="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            class="w-20 h-20 rounded-full border-2 border-gray-200 object-cover"
          />
          <div class="ml-4">
            <h2 class="font-semibold text-lg">Ronald M. Spino</h2>
            <p class="text-sm text-gray-500">info@example.com</p>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav>
          <ul class="space-y-4 text-sm">
            <li class="font-semibold text-gray-700">DASHBOARD</li>
            <li><a href="#" class="hover:text-green-600">Dashboard</a></li>
            <li><a href="/dashboard/orders" class="hover:text-green-600">Orders</a></li>
            <li><a href="#" class="hover:text-green-600">Downloads</a></li>
            <li><a href="#" class="hover:text-green-600">Return request</a></li>

            <li class="font-semibold text-gray-700 mt-6">ACCOUNT SETTINGS</li>
            <li><a href="#" class="hover:text-green-600">Profile</a></li>
            <li><a href="#" class="hover:text-green-600">Address</a></li>
            <li><a href="#" class="hover:text-green-600">Shipping methods</a></li>
            <li><a href="#" class="hover:text-green-600">Payment Methods</a></li>
            <li><a href="#" class="hover:text-green-600">Review</a></li>
          </ul>
        </nav>
      </aside>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>