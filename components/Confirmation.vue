<template>
  <div class="bg-white p-8 rounded-lg text-center max-w-3xl mx-auto">
    <!-- Icon or image at the top -->
    <div class="flex justify-center mb-6">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/customer.svg"  
        alt="Success Icon"
        class="w-16 h-16"
      />
    </div>

    <!-- Booking ID and Success Message -->
    <h2 class="text-xl font-semibold text-[#28574e] mb-2">Booking ID: {{ bookingID }}</h2>
    <p class="text-xl font-semibold text-[#28574e] mb-4">Your Appointment Booked successfully!</p>
    <p class="text-gray-600 mb-6">
      We have sent your booking information to your email address.
    </p>

    <!-- Booking Details (Service, Date & Time, Customer Name) -->
    <div class="grid grid-cols-2 gap-6 mb-8">
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg text-[#28574e]">{{ service.name }}</p>
      </div>
      
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Customer Name</h4>
        <p class="text-lg text-[#28574e]">{{ customerName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingID: "", // Placeholder for the booking ID
    };
  },
  props: {
    service: Object, // The selected service object
    customerName: String, // The full name of the customer
  },
  methods: {
    generateBookingID() {
      // Generate a random booking ID (this is just an example)
      return `#${Math.floor(Math.random() * 1000000) + 1}`;
    },
  },
  mounted() {
    // Generate the booking ID when the component is mounted
    this.bookingID = this.generateBookingID();
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

.text-center {
  text-align: center;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.text-lg {
  font-size: 1.125rem;
}
</style>