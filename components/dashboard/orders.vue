<template>
  <main class="w-3/4 pl-8">
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
      <table class="min-w-full table-auto text-left border-collapse">
        <thead>
          <tr class="text-sm font-semibold text-gray-700 border-b-2">
            <th class="pb-3">ORDER #</th>
            <th class="pb-3">DATE PURCHASED</th>
            <th class="pb-3">STATUS</th>
            <th class="pb-3">TOTAL</th>
            <th class="pb-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="text-sm border-b">
            <td class="py-4">{{ order.orderNumber }}</td>
            <td>{{ new Date(order.processedAt).toLocaleDateString() }}</td>
            <td>
              <span
                :class="[
                  'px-2 py-1 text-xs font-semibold rounded-full',
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
                {{ order.fulfillmentStatus }}
              </span>
            </td>
            <td>
              {{ order.totalPrice.currencyCode }}
              {{ order.totalPrice.amount }}
            </td>
            <td>
              <nuxt-link
                :to="`/dashboard/orders/${order.orderNumber}`"
                class="text-green-600 hover:underline"
                >View</nuxt-link
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex justify-between mt-6">
        <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Prev
        </button>
        <div>
          <button class="px-4 py-2 bg-green-600 text-white rounded">1</button>
          <button
            class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100"
          >
            2
          </button>
          <button
            class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100"
          >
            3
          </button>
        </div>
        <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
const { orders } = defineProps(["orders"]);
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
