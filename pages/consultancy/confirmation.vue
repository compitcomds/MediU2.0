<template>
  <div class="bg-white p-8 rounded-lg text-center max-w-3xl mx-auto">
    <div class="flex justify-center mb-6">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/customer.svg"
        alt="Success Icon"
        class="w-16 h-16"
      />
    </div>

    <h2 class="text-xl font-semibold text-[#28574e] mb-2">
      Booking ID: {{ bookingID }}
    </h2>
    <p class="text-xl font-semibold text-[#28574e] mb-4">
      Your Appointment has been booked successfully!
    </p>
    <p class="text-gray-600 mb-6">
      We have sent your booking information to your email address.
    </p>

    <!-- Booking Details (Service, Date & Time, Customer Name, Total Price) -->
    <div class="grid grid-cols-2 gap-6 mb-8">
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg text-[#28574e]">{{ service.name }}</p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Patient Name</h4>
        <p class="text-lg text-[#28574e]">
          {{ formData.firstName }} {{ formData.lastName }}
        </p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Date & Time</h4>
        <p class="text-lg text-[#28574e]">To be Confirmed</p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">
          Total Amount Payable
        </h4>
        <p class="text-lg text-[#28574e]">₹{{ service.price }}</p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Notes</h4>
        <p class="text-lg text-[#28574e]">{{ formData.note }}</p>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="text-center mt-4">
      <button
        @click="goToHome"
        class="bg-[#28574e] text-white px-6 py-2 rounded hover:bg-[#5c998e]"
      >
        Go to Home
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const consultancyStore = useConsultancyStore();
const service = consultancyStore.service;
const formData = consultancyStore.step2;

// Reactive bookingID
const bookingID = ref("");

// Method to generate a booking ID
const generateBookingID = () => {
  return `#${Math.floor(Math.random() * 1000000) + 1}`;
};

// Generate booking ID when the component is mounted
onMounted(() => {
  bookingID.value = generateBookingID();
});

// Navigate back to the consultancy page
const goToHome = () => {
  router.push({ name: "consultancy" }); // Change 'consultancy' to the correct route name as defined in your router
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
