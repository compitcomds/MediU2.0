<template>
  <h2 class="text-lg font-bold">Order Status</h2>

  <div class="mb-2 flex items-center gap-3">
    <p class="mr-3">{{ orderStatus }}</p>
    <p>Estimated Delivery:</p>
    <p>{{ estimatedDelivery }}</p>
  </div>

  <a
    target="_blank"
    :href="shiprocketOrder.track_url"
    class="underline hover:no-underline"
    >Track Your Order
  </a>
</template>

<script setup lang="ts">
import { appwriteTrackOrder } from "~/appwrite/shiprocket-functions";

const { orderNumber } = defineProps({
  orderNumber: {
    type: String,
    required: true,
  },
});

const shiprocketOrder = await appwriteTrackOrder(orderNumber);
const orderStatus = shiprocketOrder.shipment_track[0].current_status;
const estimatedDelivery = new Date(
  shiprocketOrder.shipment_track[0].edd,
).toLocaleDateString();
</script>
