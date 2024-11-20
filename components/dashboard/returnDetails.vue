<template>
  <!-- Main Content -->
  <div class="w-3/4 pl-8 space-y-6">
    <!-- Request Information Section -->
    <h1 class="text-2xl font-bold mb-4 text-[#238878]">
      Request for Product Return ({{ returnRequests.length }})
    </h1>
    <div class="grid grid-cols-2 gap-8">
      <div
        v-for="(item, index) in returnRequests"
        :key="index"
        :to="`/return/${item.requestNumber}`"
        class="p-4 bg-white rounded-lg shadow-md block hover:bg-green-50"
      >
        <div class="flex justify-between items-center">
          <p>
            <strong class="text-[#238878]"
              >Request No: #{{ item.requestNumber }}</strong
            >
          </p>
          <div
            :class="
              item.status === 'submitted' ? 'text-green-600' : 'text-gray-500'
            "
          >
            {{
              item.status === "submitted" ? "Request Submitted" : "Return Made"
            }}
          </div>
        </div>

        <!-- Dashed Separator Line -->
        <!-- <div class="my-2 border-t border-dashed border-gray-300"></div> -->
        <nuxt-link to="/dashboard/returnDetails">
          <div class="border-dashed border border-[#238878] p-3 m-2">
            <p class="text-sm text-gray-500">{{ item.date }}</p>
            <div class="flex items-center my-2">
              <img :src="item.image" alt="Product" class="w-24 h-24 mr-4" />
              <div>
                <p class="font-semibold text-[#238878]">{{ item.name }}</p>
                <p class="text-slate-400">Quantity: {{ item.quantity }}</p>
                <p class="text-gray-500">INR {{ item.price }}</p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- Return Option -->
    <div>
      <div class="mb-8">
        <p class="text-lg font-semibold mb-2 text-[#238878]">What do you want to return?</p>

        <!-- Refund Option -->
        <div class="flex items-center mb-2">
          <input type="radio" id="refund" name="return" class="hidden" />
          <label for="refund" class="flex items-center cursor-pointer">
            <span class="custom-radio mr-2"></span>
            <span class="text-gray-700">Refund</span>
          </label>
        </div>

        <!-- Replacement Option -->
        <div class="flex items-center">
          <input type="radio" id="replacement" name="return" class="hidden" />
          <label for="replacement" class="flex items-center cursor-pointer">
            <span class="custom-radio mr-2"></span>
            <span class="text-gray-700">Replacement</span>
          </label>
        </div>
      </div>

      <!-- Refund Method -->
      <div class="mb-8">
        <p class="text-lg text-[#238878] font-semibold mb-2">How do you want your refund?</p>
        <div class="grid grid-cols-2 gap-4">
          <!-- Direct Bank Transfer Option -->
          <div
            :class="{
              'border-[#238878] bg-[#8afac870]': selectedMethod === 'bank',
              'border-gray-300': selectedMethod !== 'bank',
            }"
            class="border p-4 rounded-lg flex items-center justify-between"
            @click="selectMethod('bank')"
          >
            <label for="bank" class="text-gray-700">Direct bank Transfer</label>
            <input
              type="radio"
              id="bank"
              name="refund-method"
              value="bank"
              v-model="selectedMethod"
              class="hidden"
            />
            <span
              :class="{
                'border-[#238878] bg-white': selectedMethod === 'bank',
                'border-gray-300 bg-transparent': selectedMethod !== 'bank',
              }"
              class="h-4 w-4 border rounded-full flex items-center justify-center"
            >
              <span
                v-if="selectedMethod === 'bank'"
                class="h-2 w-2 bg-[#238878] rounded-full"
              ></span>
            </span>
          </div>

          <!-- Gift Card Wallet Option -->
          <div
            :class="{
              'border-[#238878] bg-[#8afac870]': selectedMethod === 'wallet',
              'border-gray-300': selectedMethod !== 'wallet',
            }"
            class="border p-4 rounded-lg flex items-center justify-between"
            @click="selectMethod('wallet')"
          >
            <label for="wallet" class="text-gray-700">Gift Card Wallet</label>
            <input
              type="radio"
              id="wallet"
              name="refund-method"
              value="wallet"
              v-model="selectedMethod"
              class="hidden"
            />
            <span
              :class="{
                'border-[#238878] bg-white': selectedMethod === 'wallet',
                'border-gray-300 bg-transparent': selectedMethod !== 'wallet',
              }"
              class="h-4 w-4 border rounded-full flex items-center justify-center"
            >
              <span
                v-if="selectedMethod === 'wallet'"
                class="h-2 w-2 bg-[#238878] rounded-full"
              ></span>
            </span>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-start">
        <button
          class="bg-[#238878] text-white py-2 px-4 rounded-lg hover:bg-[#43756c]"
        >
          Submit Request
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedMethod: "",
      returnRequests: [
        {
          requestNumber: 1374837,
          date: "March 21, 2024",
          name: "Vitamin C Serum",
          quantity: 1,
          price: 105,
          image: "https://via.placeholder.com/100x80",
          status: "submitted",
        },
        {
          requestNumber: 1374838,
          date: "March 21, 2024",
          name: "Moisturizing Body Lotion",
          quantity: 1,
          price: 304,
          image: "https://via.placeholder.com/100x80",
          status: "submitted",
        },
      ],
    };
  },
  methods: {
    selectMethod(method) {
      this.selectedMethod = method;
    },
  },
};
</script>

<style scoped>
.block:hover {
  background-color: #f0fdf4;
}

/* Add a dashed border for the separator */
.border-dashed {
  border-style: dashed;
}
/* Hiding the native radio input */
input[type="radio"] {
    display: none;
  }
  
  /* Custom radio button */
  .custom-radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid gray;
    position: relative;
    cursor: pointer;
  }
  
  /* Selected state (when the radio is checked) */
  input[type="radio"]:checked + label .custom-radio {
    border-color: #238878;
    background-color: white; /* This creates the white background */
  }
  
  input[type="radio"]:checked + label .custom-radio::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #238878;
    border-radius: 50%;
  }
</style>
