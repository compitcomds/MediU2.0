<template>
    <main class="w-3/4 h-screen">
        <!-- Greeting and Info -->
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
          <p>
            Hello <span class="font-bold text-green-600">John Doe</span> (not John Doe? <a href="#" class="text-blue-500">Log out</a>)
          </p>
          <p class="text-sm text-gray-500">
            From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
          </p>
        </div>

        <!-- Statistics Cards -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <p class="text-gray-500">Total Order</p>
            <h3 class="text-3xl font-semibold text-gray-800">3658</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <p class="text-gray-500">Total Pending Order</p>
            <h3 class="text-3xl font-semibold text-gray-800">215</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <p class="text-gray-500">Total Wishlist</p>
            <h3 class="text-3xl font-semibold text-gray-800">31,576</h3>
          </div>
        </div>

        <!-- Top Countries -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h4 class="font-semibold text-lg mb-4">Your Top Countries</h4>
          <ul class="space-y-3">
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/us.png" class="inline-block mr-2" alt="US flag" /> United States</span>
              <span>$130.00</span>
            </li>
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/in.png" class="inline-block mr-2" alt="India flag" /> India</span>
              <span>$110.00</span>
            </li>
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/za.png" class="inline-block mr-2" alt="Africa flag" /> Africa</span>
              <span>$90.00</span>
            </li>
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/ca.png" class="inline-block mr-2" alt="Canada flag" /> Canada</span>
              <span>$75.00</span>
            </li>
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/br.png" class="inline-block mr-2" alt="Brazil flag" /> Brazil</span>
              <span>$60.00</span>
            </li>
            <li class="flex justify-between">
              <span><img src="https://flagcdn.com/w40/jo.png" class="inline-block mr-2" alt="Jordan flag" /> Jordan</span>
              <span>$50.00</span>
            </li>
          </ul>
        </div>
      </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>