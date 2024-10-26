<template>
  <div class="min-h-screen bg-[#edf8f3] p-6">
    <div class="flex gap-6">
      <DashboardSidenav :UserData="UserData || ''" />
      <main class="mb-16 min-h-screen md:w-3/4">
        <div class="mx-auto max-w-xl rounded-lg md:p-8">
          <h2 class="mb-6 text-center text-3xl font-bold text-[#28574e]">
            Order Details
          </h2>

          <div class="mb-6 border-b border-gray-200 pb-4">
            <p class="text-lg">
              <strong>Order Number:</strong> {{ orderData.orderNumber }}
            </p>
            <p class="text-lg">
              <strong>Processed At:</strong>
              {{ new Date(orderData.processedAt).toLocaleString() }}
            </p>
            <p class="text-lg">
              <strong>Fulfillment Status:</strong>
              {{
                orderData.fulfillmentStatus === "UNFULFILLED"
                  ? "Would be confirmed within 12 hours"
                  : "FULFILLED"
              }}
            </p>
            <p class="text-lg">
              <strong>Total Price:</strong> {{ orderData.totalPrice.amount }}
              {{ orderData.totalPrice.currencyCode }}
            </p>
          </div>

          <h3 class="mb-4 text-2xl font-semibold">Items Ordered:</h3>
          <ul class="space-y-4">
            <li
              v-for="item in orderData.lineItems"
              :key="item.title"
              class="flex items-center rounded-md bg-gray-100 p-4"
            >
              <img
                :src="item.variant.image.url"
                :alt="item.variant.image.altText"
                class="mr-4 h-20 w-20 rounded"
              />
              <div class="flex-1">
                <p class="font-medium">{{ item.title }}</p>
                <p>Quantity: {{ item.quantity }}</p>
              </div>
              <div class="flex flex-col items-end">
                <p
                  v-if="
                    item.discountedTotalPrice.amount <
                    item.originalTotalPrice.amount
                  "
                  class="text-gray-500 line-through"
                >
                  Original Price: {{ item.originalTotalPrice.amount }}
                  {{ item.originalTotalPrice.currencyCode }}
                </p>
                <p class="font-bold">
                  Price:
                  {{
                    item.discountedTotalPrice.amount <
                    item.originalTotalPrice.amount
                      ? item.discountedTotalPrice.amount
                      : item.originalTotalPrice.amount
                  }}
                  {{ item.discountedTotalPrice.currencyCode }}
                </p>
              </div>
            </li>
          </ul>

          <h3 class="mb-2 mt-6 text-2xl font-semibold">Shipping Address</h3>
          <p>
            {{ orderData.shippingAddress.firstName }}
            {{ orderData.shippingAddress.lastName }}
          </p>
          <p>{{ orderData.shippingAddress.address1 }}</p>
          <p v-if="orderData.shippingAddress.address2">
            {{ orderData.shippingAddress.address2 }}
          </p>
          <p>
            {{ orderData.shippingAddress.city }},
            {{ orderData.shippingAddress.province }},
            {{ orderData.shippingAddress.country }}
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import getUserOrder from "~/shopify/user/orders/particular-order";

const route = useRoute();
const orderNumber = route.params.orderNumber;

const orderData = await getUserOrder(orderNumber);
</script>

<style lang="scss" scoped></style>
