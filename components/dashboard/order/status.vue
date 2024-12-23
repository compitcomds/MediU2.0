<template>
  <div class="mb-2 flex items-center gap-3">
    <h2 class="font-bold text-[#238878] md:text-lg">Order Status:</h2>
    <p class="mr-3">{{ orderStatus }}</p>
  </div>
  <div class="mb-2 flex items-center gap-3">
    <p class="font-bold text-[#238878] md:text-lg">Estimated Delivery:</p>
    <p class="mr-3">{{ estimatedDelivery || "In Packaging" }}</p>
  </div>
  <a
    target="_blank"
    :href="shiprocketOrder.track_url"
    class="cursor-pointer underline hover:no-underline"
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
const orderStatus =
  shiprocketOrder?.shipment_track?.[0].current_status || "Confirmed";
const estimatedDelivery = !!shiprocketOrder?.shipment_track?.[0].edd
  ? new Date(shiprocketOrder.shipment_track[0].edd).toLocaleDateString()
  : "";
</script>
