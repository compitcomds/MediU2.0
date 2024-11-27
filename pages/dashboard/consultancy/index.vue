<template>
  <DashboardAttachSidenav>
    <main class="w-full pb-20 pt-5 lg:w-3/4 lg:pl-8">
      <div
        class="mb-6 w-full max-w-[500px] overflow-scroll rounded-lg bg-white p-2 shadow-lg md:max-w-full"
      >
        <table class="min-w-full table-auto border-collapse text-left">
          <thead>
            <tr class="border-b-2 text-sm font-semibold text-gray-700">
              <th>Booking Id #</th>
              <th>DATE PURCHASED</th>
              <th>STATUS</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="booking in bookings.documents"
              :key="booking.$id"
              class="border-b text-sm"
            >
              <td class="py-4">{{ booking.$id }}</td>
              <td>{{ new Date(booking.$createdAt).toLocaleDateString() }}</td>
              <td>
                <span :class="['rounded-full px-2 py-1 text-xs font-semibold']">
                  {{
                    !booking.bookingTime
                      ? "To be confirmed"
                      : new Date(booking.bookingTime).toString()
                  }}
                </span>
              </td>
              <td>Rs. {{ booking.price }}</td>
              <td>{{ booking.paymentStatus }}</td>
              <td>
                <nuxt-link
                  :to="`/dashboard/consultancy/${booking.$id}`"
                  class="text-green-600 hover:underline"
                  >View
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>

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
  </DashboardAttachSidenav>
</template>

<script setup lang="ts">
import { getUserConsultancies } from "~/appwrite/consultancy/get-consultancy";
const bookings = await getUserConsultancies();
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
