<template>
  <div class="bg-white p-8 rounded-lg text-[#28574e]">
    <h2 class="text-2xl font-bold mb-6 text-center">Summary</h2>
    <p class="text-center mb-6">Your appointment booking summary</p>

    <!-- Customer Details -->
    <div v-if="formData" class="text-center mb-8">
      <h3 class="font-bold text-lg">Patient</h3>
      <p class="text-lg">{{ formData.firstName }} {{ formData.lastName }}</p>
    </div>

    <!-- Service Section -->
    <div v-if="service" class="grid grid-cols-2 text-center border-b border-gray-300 pb-6 mb-6">
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg">{{ service.name }}</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Date & Time</h4>
        <p class="text-lg">To be confirmed</p>
      </div>
    </div>

    <!-- Total Amount Payable Section -->
    <div v-if="service" class="flex justify-between items-center text-lg font-bold border-b border-gray-300 pb-4 mb-6">
      <span class="text-[#28574e]">Total Amount Payable</span>
      <span class="text-red-500">₹{{ service.price }}</span>
    </div>

    <!-- Action Buttons -->
    <div class="text-end">
      <button @click="goToConfirmation" class="bg-[#28574e] text-white px-6 py-2 rounded hover:bg-[#5c998e]">
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Access route parameters
const route = useRoute();
const router = useRouter();

// Extract service and formData from route params
const service = ref(route.params.service || {});
const formData = ref(route.params.formData || {});

// Go to Confirmation Page
const goToConfirmation = () => {
  router.push({ 
    name: 'confirmation', 
    params: { 
      service: service.value, 
      formData: formData.value 
    } 
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
