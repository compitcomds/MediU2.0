<template>
  <div class="my-40 flex items-center justify-center">
    <div>
      <h1 class="text-center text-3xl font-bold mb-5">
        ORDER DETAILS #{{ orderNumber }}
      </h1>
      <ul class="list-disc">
        <li v-for="item in orderData.lineItems">
          {{ item }}
        </li>
      </ul>
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
