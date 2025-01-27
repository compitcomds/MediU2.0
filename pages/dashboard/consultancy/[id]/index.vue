<template>
  <DashboardAttachSidenav>
    <div class="mx-auto w-full rounded-lg bg-white p-8 text-center">
      <div class="mb-6 flex justify-center">
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/customer.svg"
          alt="Success Icon"
          class="h-16 w-16"
        />
      </div>

      <h2 class="mb-2 text-xl font-semibold text-[#238878]">
        Booking ID: {{ id }}
      </h2>
      <p class="mb-4 text-xl font-semibold text-[#238878]">
        Your Appointment has been booked successfully!
      </p>

      <!-- Booking Details (Service, Date & Time, Customer Name, Total Price) -->
      <div class="mb-8 grid grid-cols-2 gap-6">
        <div>
          <h4 class="mb-2 text-sm font-semibold text-gray-500">Service</h4>
          <p class="text-lg text-[#238878]">
            {{
              booking?.consultancy.length > 0
                ? booking?.consultancy[0].title
                : ""
            }}
          </p>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-gray-500">Patient Name</h4>
          <p class="text-lg text-[#238878]">
            {{ booking?.firstName }} {{ booking?.lastName }}
          </p>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-gray-500">Date & Time</h4>
          <p class="text-lg text-[#238878]">
            {{ formatDateTime(booking?.bookingTime) || "To be Confirmed" }}
          </p>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-gray-500">
            Total Amount Paid
          </h4>
          <p class="text-lg text-[#238878]">₹{{ booking?.price }}</p>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-gray-500">Notes</h4>
          <p class="text-lg text-[#238878]">{{ booking?.note }}</p>
        </div>
        <div v-if="booking?.image" class="flex items-center justify-center">
          <div>
            <h4 class="mb-2 text-sm font-semibold text-gray-500">Image</h4>
            <img :src="booking.image" class="w-32" />
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-4 text-center">
        <nuxt-link
          to="/"
          class="rounded bg-[#238878] px-6 py-2 text-white hover:bg-[#5c998e]"
        >
          Go to Home
        </nuxt-link>
      </div>
    </div>
  </DashboardAttachSidenav>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import { getConsultancyById } from "~/appwrite/consultancy/get-consultancy";

const router = useRouter();
const route = useRoute();
const id = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;

const booking = await getConsultancyById(id);

onMounted(() => {
  if (!!booking) return;
  toast.error("Invalid Consultancy.", { richColors: true });
  router.replace("/dashboard/consultancy");
});

useHead({
  title: `Consultancy Booking #${id} - Mediu`,
  meta: [
    { name: "description", content: `Consultancy Booking #${id}` },
    { name: "og:title", content: `Consultancy Booking #${id} - Mediu` },
    { name: "og:description", content: `Consultancy Booking #${id}` },
  ],
});
</script>
