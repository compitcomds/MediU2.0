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
    <div
      v-if="service"
      class="grid grid-cols-2 text-center border-b border-gray-300 pb-6 mb-6"
    >
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg">{{ service.title }}</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Date & Time</h4>
        <p class="text-lg">To be confirmed</p>
      </div>
    </div>

    <!-- Total Amount Payable Section -->
    <div
      v-if="service"
      class="flex justify-between items-center text-lg font-bold border-b border-gray-300 pb-4 mb-6"
    >
      <span class="text-[#28574e]">Total Amount Payable</span>
      <span class="text-red-500">₹{{ service.price.amount }}</span>
    </div>

    <!-- Action Buttons -->
    <div class="text-end">
      <button
        @click="goToConfirmation"
        class="bg-[#28574e] text-white px-6 py-2 rounded hover:bg-[#5c998e]"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const consultancyStore = useConsultancyStore();

if (!consultancyStore.step1.category || !consultancyStore.step1.id)
  router.replace("/consultancy/services");
if (!consultancyStore.step2.email) router.replace("/consultancy/basic-details");

const formData = ref(consultancyStore.step2 || {});
const service = consultancyStore.step1;

const goToConfirmation = () => {
  router.push({
    path: "/consultancy/confirmation",
    params: {
      service: service,
      formData: formData.value,
    },
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
