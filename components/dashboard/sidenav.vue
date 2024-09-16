<template>
    <aside class="w-1/4 bg-white rounded-lg shadow-lg h-full">
        <!-- Profile Section -->
        <div class="flex items-center mb-6 p-6">
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
          <ul class="space-y-4 text-sm pb-4">
            <li class="font-semibold text-gray-700 bg-[#edf8f3] p-3">DASHBOARD</li>
            <li><a href="/dashboard/" class="hover:text-[#28574E] text-black  p-3">Dashboard</a></li>
            <li><a href="/dashboard/orders" class="hover:text-[#28574E] text-black  p-3">Orders</a></li>
            <li><a href="/dashboard/downloads" class="hover:text-[#28574E] text-black  p-3">Downloads</a></li>
            <li><a href="/dashboard/return" class="hover:text-[#28574E] text-black  p-3">Return request</a></li>

            <li class="font-semibold text-gray-700 mt-6 bg-[#edf8f3] p-3">ACCOUNT SETTINGS</li>
            <li><a href="#" class="hover:text-[#28574E] text-black  p-3">Profile</a></li>
            <li><a href="#" class="hover:text-[#28574E] text-black  p-3">Address</a></li>
            <li><a href="#" class="hover:text-[#28574E] text-black  p-3">Shipping methods</a></li>
            <li><a href="#" class="hover:text-[#28574E] text-black  p-3">Payment Methods</a></li>
            <li><a href="#" class="hover:text-[#28574E] text-black  p-3">Review</a></li>
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