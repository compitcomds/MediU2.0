<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Appointment Summary</h2>

    <div class="bg-gray-100 p-6 rounded mb-6">
      <p><strong>Service:</strong> Illness</p>
      <p><strong>Date & Time:</strong> October 10, 2024, 11:00 AM</p>
      <p><strong>Total Amount Payable:</strong> $100.00</p>
    </div>

    <button @click="bookAppointment" class="bg-blue-500 text-white px-4 py-2 rounded">
      Book Appointment
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    bookAppointment() {
      this.$emit("appointmentBooked", true); // Notify the parent component that the appointment has been booked
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
