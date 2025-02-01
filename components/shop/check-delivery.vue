<template>
  <form
    @submit.prevent="checkPincode"
    class="mb-6 flex flex-col items-center gap-6 rounded-lg border-2 border-[#238878] p-4 shadow-md md:flex-row"
  >
    <label
      for="check-pincode"
      class="text-lg font-semibold text-gray-700 md:w-1/3"
      >Enter Pincode for Delivery</label
    >
    <div class="relative flex items-center md:w-2/3">
      <input
        type="number"
        id="check-pincode"
        class="rounded-l-lg border-b-2 border-[#238878] bg-transparent px-4 py-2 text-lg shadow-sm transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:border-[#238878] focus:outline-none focus:ring-2 focus:ring-[#238878] focus:ring-[#238878]/20"
        placeholder="Enter Pincode"
        v-model="pincode"
        min="0"
        @keydown="blockNegativeSign"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="absolute right-0 top-1/2 block -translate-y-1/2 rounded-r-lg bg-[#238878] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#1e8b68] disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        <span v-if="isSubmitting">
          <svg
            class="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke-width="4"
              stroke="currentColor"
              stroke-opacity="0.5"
              fill="none"
            />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 0 1 16 0A8 8 0 0 1 4 12Z"
            />
          </svg>
        </span>
        <span v-else>Check</span>
      </button>
    </div>
  </form>

  <!-- Delivery Date Info -->
  <div
    v-if="!!checkedData && (checkedData.minEtd || checkedData.maxEtd)"
    class="mt-4 text-sm"
  >
    <div
      class="rounded-lg border-l-[4px] border-[#238878] bg-[#f4f7f6] p-4 shadow-sm"
    >
      <p class="font-medium text-gray-700">
        Estimated Delivery Date:
        <span class="text-[#238878]">{{ checkedData.minEtd }}</span> -
        <span class="text-[#238878]">{{ checkedData.maxEtd }}</span>
      </p>
    </div>
  </div>

  <!-- Error Message -->
  <div
    v-if="
      !!checkedData &&
      checkedData.message &&
      !(checkedData.minEtd || checkedData.maxEtd)
    "
    class="mt-4 rounded-lg border-l-[4px] border-red-500 bg-[#fff3f3] p-4 text-xs font-medium text-red-500 shadow-sm"
  >
    {{ checkedData.message }}
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import { appwriteCheckPincode } from "~/appwrite/shiprocket-functions";

const { weight } = defineProps({
  weight: {
    type: Number,
    default: undefined,
  },
});

const deactivate = defineModel("deactivate", {
  type: Boolean,
  default: false,
});

const isSubmitting = ref(false);
const pincode = ref("");
const checkedData = ref<any>(null);

const checkPincode = async () => {
  if (!pincode.value) {
    toast.error("Please enter a valid pincode.", { richColors: true });
    return;
  }
  isSubmitting.value = true;
  checkedData.value = null;
  try {
    const data = await appwriteCheckPincode(pincode.value, weight);
    checkedData.value = data;
    if (data.minEtd || data.maxEtd) {
      deactivate.value = false;
    } else {
      deactivate.value = true;
    }
  } catch (error) {
    console.error("Error checking pincode:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const blockNegativeSign = (event: KeyboardEvent) => {
  if (event.key === "-") {
    event.preventDefault();
  }
};
</script>
