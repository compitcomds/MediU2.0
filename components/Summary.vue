<template>
  <div class="bg-white p-8 rounded-lg text-[#28574e]">
    <!-- Centered Svg Component -->
    <div class="flex justify-center mb-6">
      <Svg />
    </div>
    
    <h2 class="text-2xl font-bold mb-6 text-center">Summary</h2>
    <p class="text-center mb-6">Your appointment booking summary</p>

    <!-- Customer Details -->
    <div class="text-center mb-8">
      <h3 class="font-bold text-lg">Customer</h3>
      <p class="text-lg">{{ customerName }}</p>
    </div>

    <!-- Service and Date & Time Section -->
    <div class="grid grid-cols-2 text-center border-b border-gray-300 pb-6 mb-6">
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg">{{ service.name }}</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Date & Time</h4>
        <p class="text-lg">Schedule By Doctors</p>
      </div>
    </div>

    <!-- Total Amount Payable Section -->
    <div class="flex justify-between items-center text-lg font-bold border-b border-gray-300 pb-4 mb-6">
      <span class="text-[#28574e]">Total Amount Payable</span>
      <span class="text-red-500">₹{{ service.price }}</span>
    </div>

    <!-- Action Buttons -->
    <div class="text-end">
      <!-- <button @click="$emit('goBack')" class="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300">
        ← Go Back
      </button> -->
      <button @click="bookAppointment" class="bg-[#28574e] text-white px-6 py-2 rounded hover:bg-[#5c998e]">
        Book Appointment
      </button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    service: Object, // The selected service object
    customerName: String, // The full name of the customer
    appointmentDateTime: String, // The appointment date and time
  },
  methods: {
    bookAppointment() {
      // Emit an event to notify the parent that the appointment is booked
      this.$emit("appointmentBooked", {
        price: this.service.price,
      });
    },
  },
};
</script>

<style scoped>
/* Additional styling */
.bg-white {
  background-color: #fff;
}

.p-8 {
  padding: 2rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

.font-bold {
  font-weight: bold;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.border-b {
  border-bottom-width: 1px;
}

.border-gray-300 {
  border-color: #e2e8f0;
}

.pb-6, .pb-4 {
  padding-bottom: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-sm {
  font-size: 0.875rem;
}

.bg-gray-200 {
  background-color: #edf2f7;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}

.bg-blue-600 {
  background-color: #3182ce;
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.rounded {
  border-radius: 0.25rem;
}
</style>