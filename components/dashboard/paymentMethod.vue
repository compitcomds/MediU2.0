<template>
  <section class="w-full lg:w-3/4 rounded-lg lg:p-6 lg:ml-6 p-2 my-10 lg:my-0 pb-20 lg:pb-0  border space-y-6">
    <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">Payment Methods</h2>
    <div class="space-y-10">
      <!-- Shipping Method Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Shipping Option 1 -->
        <label
          class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors"
        >
          <div class="flex items-center space-x-4">
            <img
              src="https://glower.indiankoder.com/xhtml/images/shop/payment/paypal.svg"
              alt="Paypal"
              class="w-12"
            />
            <div>
              <h3 class="font-semibold text-[#28574e]">Paypal</h3>
              <!-- <p class="text-black">Delivery, Tomorrow</p> -->
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <!-- <p class="text-black">$0.99</p> -->
            <input
              type="radio"
              name="shipping"
              value="Paypal"
              class="custom-radio"
            />
          </div>
        </label>

        <!-- Shipping Option 2 -->
        <label
          class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors"
        >
          <div class="flex items-center space-x-4">
            <img
              src="https://glower.indiankoder.com/xhtml/images/shop/payment/debit.svg"
              alt="Credit or Debit Card"
              class="w-12"
            />
            <div>
              <h3 class="font-semibold text-[#28574e]">Credit or Debit Card</h3>
              <!-- <p class="text-black">Delivery, Today</p> -->
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <!-- <p class="text-black">$0.99</p> -->
            <input
              type="radio"
              name="shipping"
              value="Credit or Debit Card"
              class="custom-radio"
            />
          </div>
        </label>
        <label
          class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors"
        >
          <div class="flex items-center space-x-4">
            <img
              src="https://glower.indiankoder.com/xhtml/images/shop/payment/bank.svg"
              alt="Direct bank Transfer"
              class="w-12"
            />
            <div>
              <h3 class="font-semibold text-[#28574e]">Direct bank Transfer</h3>
              <!-- <p class="text-black">Delivery, Today</p> -->
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <!-- <p class="text-black">$0.99</p> -->
            <input
              type="radio"
              name="shipping"
              value="Direct bank Transfer"
              class="custom-radio"
            />
          </div>
        </label>
        <label
          class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors"
        >
          <div class="flex items-center space-x-4">
            <img
              src="https://glower.indiankoder.com/xhtml/images/shop/payment/cash.svg"
              alt="Cash on Delivery"
              class="w-12"
            />
            <div>
              <h3 class="font-semibold text-[#28574e]">Cash on Delivery</h3>
              <!-- <p class="text-black">Delivery, Today</p> -->
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <!-- <p class="text-black">$0.99</p> -->
            <input
              type="radio"
              name="shipping"
              value="Cash on Delivery"
              class="custom-radio"
            />
          </div>
        </label>
      </div>

      <div class="rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Card Number -->
          <div>
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="card-number"
              >Card Number</label
            >
            <input
              type="text"
              id="card-number"
              placeholder="1234 4567 8910 1112"
              class="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <!-- Expiry Date -->
          <div>
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="expiry-date"
              >Expiry Date</label
            >
            <div class="relative">
              <input
                type="text"
                id="expiry-date"
                placeholder="mm/dd/yyyy"
                class="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <!-- Calendar Icon (can use a library like Font Awesome or similar) -->
              <span
                class="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <!-- CVC/CVV -->
          <div>
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="cvv"
              >CVC/CVV</label
            >
            <input
              type="text"
              id="cvv"
              placeholder="1234"
              class="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Continue to Payment Button -->
    <div class="mt-4">
      <nuxt-link
        to="/dashboard/orderComplete"
        class="w-full bg-[#28574e] text-white mt-4 text-lg font-semibold p-3 rounded-lg hover:bg-[#437e73]"
      >
        Confirm Order
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Custom radio button styling */
.custom-radio {
  appearance: none;
  border: 2px solid #d1d5db; /* Default Tailwind gray-300 border color */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: border-color 0.2s ease;
  position: relative;
}

.custom-radio:checked {
  border-color: #28574e; /* Custom green border when checked */
}

.custom-radio:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #28574e;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
