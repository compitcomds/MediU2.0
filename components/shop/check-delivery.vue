<template>
  <form @submit.prevent="checkPincode" class="mb-6 flex flex-col md:flex-row items-center gap-6 p-4 border-2 border-[#238878] rounded-lg shadow-md">
    <label for="check-pincode" class="text-lg font-semibold text-gray-700 md:w-1/3">Enter Pincode for Delivery</label>
    <div class="relative flex items-center md:w-2/3">
      <input
        type="number"
        id="check-pincode"
        class="border-b-2 border-[#238878] bg-transparent px-4 py-2 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#238878] transition-all duration-300 placeholder:text-gray-400 shadow-sm"
        placeholder="Enter Pincode"
        v-model="pincode"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="absolute right-0 top-1/2 block -translate-y-1/2 px-4 py-2 bg-[#238878] text-white font-semibold rounded-r-lg text-sm disabled:cursor-not-allowed disabled:bg-gray-400 transition-all duration-300 hover:bg-[#1e8b68]"
      >
        <span v-if="isSubmitting">
          <svg class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.5" fill="none"/>
            <path fill="currentColor" d="M4 12a8 8 0 0 1 16 0A8 8 0 0 1 4 12Z" />
          </svg>
        </span>
        <span v-else>Check</span>
      </button>
    </div>
  </form>

  <!-- Delivery Date Info -->
  <div v-if="!!checkedData && (checkedData.minEtd || checkedData.maxEtd)" class="mt-4 text-sm">
    <div class="p-4 bg-[#f4f7f6] border-l-4 border-[#238878] rounded-lg shadow-sm">
      <p class="font-medium text-gray-700">
        Estimated Delivery Date: 
        <span class="text-[#238878]">{{ checkedData.minEtd }}</span> - 
        <span class="text-[#238878]">{{ checkedData.maxEtd }}</span>
      </p>
    </div>
  </div>

  <!-- Error Message -->
  <div v-if="!!checkedData && checkedData.message && !(checkedData.minEtd || checkedData.maxEtd)" class="mt-4 p-4 bg-[#fff3f3] text-xs text-red-500 font-medium border-l-4 border-red-500 rounded-lg shadow-sm">
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
    alert("Please enter a valid pincode.");
    return;
  }
  isSubmitting.value = true;
  checkedData.value = null;
  try {
    const data = await appwriteCheckPincode(pincode.value, weight);
    console.log(data);
    checkedData.value = data;
  } catch (error) {
    console.error("Error checking pincode:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Enhanced Input Field */
input,
button {
  transition: all 0.3s ease;
}

input:focus {
  border-color: #238878;
  box-shadow: 0 0 0 2px rgba(35, 136, 120, 0.2);
}





.border-l-4 {
  border-left-width: 4px;
}



.text-red-500 {
  color: #f87171;
}

/* Spinning Loader */
svg.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
