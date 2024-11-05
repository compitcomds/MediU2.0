<template>
  <form @submit.prevent="checkPincode" class="mb-4 flex items-center gap-10">
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

  <div v-if="!!checkedData && (checkedData.minEtd || checkedData.maxEtd)">
    <p>
      <span class="text-sm">Estimated Delivery Date: </span>
      <span class="text-[#28574e]">{{ checkedData.minEtd }}</span> -
      <span class="text-[#28574e]"> {{ checkedData.maxEtd }}</span>
    </p>
  </div>
  <div
    v-if="
      !!checkedData &&
      checkedData.message &&
      !(checkedData.minEtd || checkedData.maxEtd)
    "
    class="text-xs text-red-500"
  >
    {{ checkedData.message }}
  </div>
</template>

<script setup lang="ts">
import { appwriteCheckPincode } from "~/appwrite/shiprocket-functions";

const { weight } = defineProps({
  weight: {
    type: Number,
    default: undefined,
  },
});

const isSubmitting = ref(false);
const pincode = ref("");
const checkedData = ref<any>(null);
const checkPincode = async () => {
  if (!pincode.value) {
    alert("Please enter valid pincode.");
    return;
  }
  isSubmitting.value = true;
  checkedData.value = null;
  try {
    const data = await appwriteCheckPincode(pincode.value, weight);
    console.log(data);

    checkedData.value = data;
  } catch (error) {
  } finally {
    isSubmitting.value = false;
  }
};
</script>
