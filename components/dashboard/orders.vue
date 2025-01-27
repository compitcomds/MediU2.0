<template>
  <main class="w-full pb-20 pt-5 lg:w-3/4 lg:pl-8">
    <div
      class="mb-6 w-full max-w-[500px] overflow-auto rounded-lg bg-white p-2 shadow-lg md:max-w-full"
    >
      <table class="min-w-full table-auto border-collapse text-left">
        <thead>
          <tr class="border-b-2 text-sm font-semibold text-gray-700">
            <th class="pb-3">ORDER #</th>
            <th class="pb-3">DATE PURCHASED</th>
            <th class="pb-3">STATUS</th>
            <th class="pb-3">TOTAL</th>
            <th class="pb-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-b text-sm">
            <td class="py-4">{{ order.orderNumber }}</td>
            <td>{{ new Date(order.processedAt).toLocaleDateString() }}</td>
            <td>
              <span
                :class="[
                  'rounded-full px-2 py-1 text-xs font-semibold',
                  order.status === 'IN PROGRESS'
                    ? 'bg-blue-100 text-blue-600'
                    : '',
                  order.status === 'CANCELED' ? 'bg-red-100 text-red-600' : '',
                  order.status === 'DELIVERED'
                    ? 'bg-green-100 text-green-600'
                    : '',
                  order.status === 'DELAYED'
                    ? 'bg-yellow-100 text-yellow-600'
                    : '',
                ]"
              >
                {{
                  order.fulfillmentStatus === "UNFULFILLED"
                    ? "Will be confirmed within 12 hours."
                    : "Confirmed"
                }}
              </span>
            </td>
            <td>
              {{ order.totalPrice.currencyCode }}
              {{ order.totalPrice.amount }}
            </td>
            <td>
              <nuxt-link
                :to="`/dashboard/orders/${getOrderId(order.id)}`"
                class="text-green-600 hover:underline"
                >View
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="mt-6 flex justify-between">
        <button class="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">
          Prev
        </button>
        <div class="space-x-2">
          <button class="rounded bg-green-600 px-4 py-2 text-white">1</button>
          <button
            class="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
          >
            2
          </button>
          <button
            class="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
          >
            3
          </button>
        </div>
        <button class="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
const { orders } = defineProps(["orders"]);

const getOrderId = (id) => {
  return id.replace("gid://shopify/Order/", "").split("?")[0];
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 0.75rem;
}
</style>
