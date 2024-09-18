<template>
  <div class="min-h-screen bg-[#edf8f3] p-6 flex">
    <!-- Main Layout -->

    <!-- Sidebar -->
    <DashboardSidenav />

    <!-- Content Section -->
    <div class="w-3/4 px-8">
      <!-- Order Info -->
      <div
        class="border border-gray-200 p-6 bg-white rounded-lg shadow-md space-y-8"
      >
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(order, index) in orders" :key="index">
            <h3 class="font-semibold text-gray-600">
              Request No:
              <span class="text-[#28574e]">#{{ order.requestNumber }}</span>
            </h3>
            <div class="p-2 border border-dashed border-[#28574e]">
              <div class="flex space-x-6">
                <img :src="order.image" alt="Product Image" />
                <div class="flex flex-col">
                  <p class="mt-2">{{ order.date }}</p>
                  <p class="font-semibold text-gray-800">
                    {{ order.productName }}
                  </p>
                  <p>Quantity: {{ order.quantity }}</p>
                  <p class="font-semibold text-gray-800">${{ order.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reason for Cancellation -->
        <div class="border-t border-gray-200 pt-4 flex">
          <div class="w-1/2">
            <h3 class="font-semibold text-gray-600 mb-2">
              Reason For Cancellation
            </h3>
            <ul class="space-y-2">
              <li v-for="(reason, index) in reasons" :key="index">
                <label class="inline-flex items-center">
                  <!-- Hidden default radio button -->
                  <input
                    type="radio"
                    name="reason"
                    class="hidden"
                    :value="reason"
                    v-model="selectedReason"
                  />
                  <!-- Custom radio button -->
                  <span
                    class="custom-radio w-5 h-5 inline-block border border-[#28574e] rounded-full flex-shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    <span
                      v-if="selectedReason === reason"
                      class="w-3 h-3 bg-white rounded-full"
                    ></span>
                  </span>
                  <!-- Label Text -->
                  <span class="ml-2 text-[#28574e]">{{ reason }}</span>
                </label>
              </li>
            </ul>
          </div>
          <!-- Refund Status and Submit Button -->
          <div class="w-1/2 space-y-4">
            <p class="text-gray-600">
              There will be no refund as the order is purchased using
              Cash-On-Delivery
            </p>
            <div>
              <nuxt-link
                to="/dashboard/submit"
                class="bg-[#28574e] text-white py-2 px-4 text-right"
              >
                Submit Request
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          requestNumber: 1374837,
          date: "March 21, 2024",
          productName: "Collar Casual Shirt",
          quantity: 1,
          price: 105,
          image: "https://via.placeholder.com/150x50",
        },
        {
          requestNumber: 1374837,
          date: "March 21, 2024",
          productName: "Collar Casual Shirt",
          quantity: 1,
          price: 304,
          image: "https://via.placeholder.com/150x50",
        },
      ],
      reasons: [
        "I have changed my mind",
        "Expected delivery time is very long",
        "I want to change address for the order",
        "I want to convert my order to Prepaid",
        "Price for the product has decreased",
        "I have purchased the product elsewhere",
      ],
      selectedReason: "",
    };
  },
  methods: {
    submitRequest() {
      console.log("Submitting request with reason:", this.selectedReason);
    },
  },
};
</script>

<style scoped>
/* Custom Radio Button Styling */
.custom-radio {
  border-width: 2px;
  transition: all 0.3s ease;
}

.custom-radio:hover {
  border-color: #28574e;
}

input[type="radio"]:checked + .custom-radio {
  background-color: #28574e;
}

.custom-radio > span {
  display: none;
}

input[type="radio"]:checked + .custom-radio > span {
  display: block;
}
</style>
