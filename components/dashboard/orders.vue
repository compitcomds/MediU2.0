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
                <td class="py-4">{{ order.id }}</td>
                <td>{{ order.datePurchased }}</td>
                <td>
                  <span
                    :class="[
                      'px-2 py-1 text-xs font-semibold rounded-full',
                      order.status === 'IN PROGRESS' ? 'bg-blue-100 text-blue-600' : '',
                      order.status === 'CANCELED' ? 'bg-red-100 text-red-600' : '',
                      order.status === 'DELIVERED' ? 'bg-green-100 text-green-600' : '',
                      order.status === 'DELAYED' ? 'bg-yellow-100 text-yellow-600' : ''
                    ]"
                  >
                    {{ order.status }}
                  </span>
                </td>
                <td>{{ order.total }}</td>
                <td><a href="#" class="text-green-600 hover:underline">View</a></td>
              </tr>
            </tbody>
          </table>
  
          <!-- Pagination -->
          <div class="flex justify-between mt-6">
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
            <div>
              <button class="px-4 py-2 bg-green-600 text-white rounded">1</button>
              <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">2</button>
              <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">3</button>
            </div>
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
          </div>
        </div>
      </main>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { id: "#34VB5540K83", datePurchased: "May 21, 2024", status: "IN PROGRESS", total: "$358.75" },
        { id: "#78A643CD409", datePurchased: "December 09, 2024", status: "CANCELED", total: "$760.50" },
        { id: "#112P45A90V2", datePurchased: "October 15, 2024", status: "DELAYED", total: "$1,264.00" },
        { id: "#2BBA67U0981", datePurchased: "July 19, 2024", status: "DELIVERED", total: "$198.35" },
        { id: "#502TR872W2", datePurchased: "April 04, 2024", status: "DELIVERED", total: "$2,133.90" },
        { id: "#47H76609F33", datePurchased: "March 30, 2024", status: "DELIVERED", total: "$86.40" },
        { id: "#53U76609E38", datePurchased: "April 21, 2024", status: "DELIVERED", total: "$86.40" },
        { id: "#31M76609G76", datePurchased: "May 07, 2024", status: "DELIVERED", total: "$112.40" }
      ]
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.75rem;
}
</style>