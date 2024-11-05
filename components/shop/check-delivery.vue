<template>
  <form @submit.prevent="checkPincode" class="flex items-center gap-10">
    <label for="check-pincode">Delivery</label>
    <div class="relative">
      <input
        type="number"
        id="check-pincode"
        class="border-b-2 border-[#28574e] bg-transparent px-3 py-1 transition-colors duration-300 [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        placeholder="Enter Pincode"
        v-model="pincode"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="absolute right-0 top-1/2 block -translate-y-1/2 text-[#28574e] disabled:animate-pulse disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? "Checking..." : "Check" }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import axios from "axios";

const { weight } = defineProps({
  weight: {
    type: Number,
    default: undefined,
  },
});

const isSubmitting = ref(false);
const pincode = ref("");

const checkPincode = async () => {
  if (!pincode.value) {
    alert("Please enter valid pincode.");
    return;
  }
  isSubmitting.value = true;
  try {
    const backendApi = import.meta.env.VITE_BACKEND_API_ROUTE;
    const { data } = await axios.post(
      `${backendApi}/api/shiprocket/check-pincode`,
      {
        pincode: pincode.value,
        weight: weight || undefined,
      },
      { headers: { "Content-Type": "application/json" } },
    );

    console.log(data);
  } catch (error) {
  } finally {
    isSubmitting.value = false;
  }
};
</script>
