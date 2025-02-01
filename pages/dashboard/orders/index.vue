<template>
  <DashboardAttachSidenav>
    <DashboardOrders :orders="orders" />
  </DashboardAttachSidenav>
</template>

<script setup>
import getAllUserOrders from "~/shopify/user/orders/all-orders";

const orders = await getAllUserOrders();

useHead({
  title: "Orders - Mediu",
  meta: [
    { name: "description", content: "Orders" },
    { name: "og:title", content: "Orders - Mediu" },
    { name: "og:description", content: "Orders" },
  ],
});
</script>
