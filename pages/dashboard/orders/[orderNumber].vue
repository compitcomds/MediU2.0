<template>
  <div class="my-40 flex items-center justify-center">
    <div>
      <h1 class="mb-5 text-center text-3xl font-bold">
        ORDER DETAILS #{{ orderNumber }}
      </h1>
      <div class="grid grid-cols-1 gap-6">
        <div
          v-for="(item, index) in orderData.lineItems"
          :key="index"
          class="overflow-hidden rounded-lg bg-white shadow-md"
        >
          <div class="flex p-4">
            <img
              :src="item.variant.image.url"
              :alt="item.variant.image.altText || item.title"
              class="mr-4 h-24 w-24 rounded-md object-cover"
            />
            <div class="flex flex-col justify-between">
              <h2 class="text-lg font-semibold text-gray-800">
                {{ item.title }}
              </h2>
              <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getUserOrder } from "~/shopify/user/orders";

const route = useRoute();
const orderNumber = route.params.orderNumber;

const orderData = await getUserOrder(orderNumber);
</script>

<style lang="scss" scoped></style>
