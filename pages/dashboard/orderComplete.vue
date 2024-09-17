<template>
    <div class="min-h-screen p-6 bg-[#edf8f3] flex">
      <!-- Main layout -->
      
        <!-- Sidebar -->
        <DashboardSidenav />
  
        <!-- Order Confirmation -->
        <div class="w-3/4 rounded-lg p-6 ml-6 border space-y-6">
          <div class="flex flex-col items-center">
            <img
              src="https://glower.indiankoder.com/xhtml/images/confirmation.png"
              alt="Order Complete"
              class="w-80 h-80"
            />
            <h2 class="mt-6 text-2xl font-semibold text-gray-800">Your Order Is Completed!</h2>
            <p class="mt-2 text-sm text-gray-600 text-center">
              You will receive an order confirmation email with details of your order.
            </p>
            <p class="mt-1 text-sm text-gray-600">Order ID: 267676GHERT105467</p>
  
            <!-- Action Buttons -->
            <div class="mt-8 space-x-4">
              <button
                class="bg-[#28574E] text-white px-4 py-2 rounded-lg hover:bg-[#809e99]"
              >
                View Order
              </button>
              <button
                class="border border-gray-300 text-gray-700 hover:text-white px-4 py-2 rounded-lg hover:bg-[#28574E]"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  