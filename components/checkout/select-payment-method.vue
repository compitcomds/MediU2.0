<template>
  <div class="mx-auto mb-4 max-w-full">
    <h3 class="mb-4 text-lg font-medium text-gray-900">
      Select Payment Method
    </h3>

    <div class="space-y-3">
      <label
        class="relative flex cursor-pointer items-center rounded-lg border p-4 transition-colors duration-200"
        :class="
          selectedMethod === 'online'
            ? 'border-[#238878] bg-[#238878]/5'
            : 'border-gray-200 hover:border-[#238878]/50'
        "
      >
        <input
          type="radio"
          name="payment"
          value="online"
          v-model="selectedMethod"
          class="hidden"
        />
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center">
            <div
              class="mr-3 flex h-5 min-w-5 items-center justify-center rounded-full border-2"
              :class="
                selectedMethod === 'online'
                  ? 'border-[#238878]'
                  : 'border-gray-300'
              "
            >
              <div
                class="h-2.5 w-2.5 rounded-full transition-all duration-200"
                :class="selectedMethod === 'online' ? 'bg-[#238878]' : ''"
              ></div>
            </div>
            <div>
              <h4 class="font-medium text-gray-900">Online Payment</h4>
              <p class="text-sm text-gray-500">
                Pay securely with your card, upi or netbanking.
              </p>
            </div>
          </div>
          <CreditCard
            class="h-6 w-6"
            :class="
              selectedMethod === 'online' ? 'text-[#238878]' : 'text-gray-400'
            "
          />
        </div>
      </label>

      <label
        class="relative flex cursor-pointer items-center rounded-lg border p-4 transition-colors duration-200"
        :class="
          selectedMethod === 'cash'
            ? 'border-[#238878] bg-[#238878]/5'
            : 'border-gray-200 hover:border-[#238878]/50'
        "
      >
        <input
          type="radio"
          name="payment"
          value="cash"
          v-model="selectedMethod"
          class="hidden"
        />
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center">
            <div
              class="mr-3 flex h-5 min-w-5 items-center justify-center rounded-full border-2"
              :class="
                selectedMethod === 'cash'
                  ? 'border-[#238878]'
                  : 'border-gray-300'
              "
            >
              <div
                class="h-2.5 w-2.5 rounded-full transition-all duration-200"
                :class="selectedMethod === 'cash' ? 'bg-[#238878]' : ''"
              ></div>
            </div>
            <div>
              <h4 class="font-medium text-gray-900">Cash on Delivery</h4>
              <p class="text-sm text-gray-500">Pay when you receive</p>
            </div>
          </div>
          <Banknote
            class="h-6 w-6"
            :class="
              selectedMethod === 'cash' ? 'text-[#238878]' : 'text-gray-400'
            "
          />
        </div>
      </label>
    </div>
  </div>
  <div
    v-if="selectedMethod === 'online'"
    class="rounded-lg border border-[#238878]"
  >
    <div
      class="flex items-center justify-between rounded-t-lg bg-[#f5f5f5] p-4"
    >
      <div class="text-lg font-semibold text-[#238878]">
        PhonePe Payment Gateway (UPI, Cards & NetBanking)
      </div>
      <div class="grid grid-cols-2 items-center space-x-2 xl:flex">
        <img
          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg"
          alt="UPI Logo"
          class="h-8"
        />
        <img
          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
          alt="Visa Logo"
          class="h-8"
        />
        <img
          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
          alt="MasterCard Logo"
          class="h-8"
        />
        <img
          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/rupay.Bl62X6PG.svg"
          alt="RuPay Logo"
          class="h-8"
        />
        <!-- <span class="text-lg font-semibold text-[#238878]">+3</span> -->
      </div>
    </div>
    <div
      class="space-y-4 border-t border-[#238878] bg-[#f9f9f9] p-6 text-center"
    >
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-270.8 371 102 52"
          class="zjrzY w-36"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
          ></path>
          <circle cx="-255.5" cy="376.5" r="1.5" fill="currentColor"></circle>
          <circle cx="-250.5" cy="376.5" r="1.5" fill="currentColor"></circle>
          <circle cx="-245.5" cy="376.5" r="1.5" fill="currentColor"></circle>
        </svg>
      </div>
      <p class="text-sm text-gray-700">
        After clicking "Pay now," you will be redirected to PhonePe Payment
        Gateway (UPI, Cards & NetBanking) to complete your purchase securely.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CreditCard, Banknote } from "lucide-vue-next";

const selectedMethod = defineModel<"online" | "cash">({ default: "online" });
</script>
