<template>
  <div class="flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
    <div class="bg-white rounded-lg p-8 w-full flex flex-col lg:flex-row">
      <!-- Form Section -->
      <div class="w-full lg:w-1/2 p-6">
        <h2 class="text-2xl lg:text-4xl font-semibold text-center text-[#28574e] mb-6">
          Diagnose Form
        </h2>

        <form @submit.prevent="handleNextPage">
          <!-- Concern Selection Field -->
          <div class="mb-4">
            <label for="concern" class="block text-sm font-medium text-gray-700">Select Problem</label>
            <select id="concern" v-model="formData.concern" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300">
              <option value="">Select</option>
              <option value="skin">Skin</option>
              <!-- <option value="hair">Hair</option>
              <option value="babycare">Baby Care</option> -->
            </select>
          </div>

          <!-- Name Field -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="formData.name" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300" />
          </div>

          <!-- Sex Field -->
          <div class="mb-4">
            <label for="sex" class="block text-sm font-medium text-gray-700">Sex</label>
            <select id="sex" v-model="formData.sex" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <!-- Age Field -->
          <div class="mb-4">
            <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" id="age" v-model="formData.age" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300" />
          </div>

          <!-- Conditional Pregnancy Status Field -->
          <div v-if="showConditionalFields" class="mb-4">
            <label for="pregnancyStatus" class="block text-sm font-medium text-gray-700">Pregnancy Status</label>
            <select id="pregnancyStatus" v-model="formData.pregnancyStatus" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <!-- Conditional Breastfeeding Field -->
          <div v-if="showConditionalFields" class="mb-4">
            <label for="breastfeeding" class="block text-sm font-medium text-gray-700">Breastfeeding</label>
            <select id="breastfeeding" v-model="formData.breastfeeding" required
              class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <!-- Next Page Button --> 
          <button @click.prevent="handleNextPage"
            :disabled="!isFormValid"  
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#28574e] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span
              class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#28574e] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Next
              Page</span>
          </button>
        </form>
      </div>

      <!-- Illustration Section -->
      <div class="hidden lg:flex items-center justify-center w-1/2">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/diagnose.webp" alt="Form Illustration" class="w-full h-[500px]" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router"; // For dynamic routing

export default {
  setup() {
    const formData = ref({
      name: "",
      sex: "",
      age: "",
      pregnancyStatus: "",
      breastfeeding: "",
      concern: "", // Add concern field to formData
    });

    const showConditionalFields = ref(false);
    const router = useRouter();

    // Watch sex and age to conditionally display pregnancy and breastfeeding fields
    watch([() => formData.value.sex, () => formData.value.age], () => {
      showConditionalFields.value =
        formData.value.sex === "female" &&
        formData.value.age >= 18 &&
        formData.value.age <= 40;
    });

    // Computed property to check if the form is valid
    const isFormValid = computed(() => {
      const requiredFields = [
        formData.value.name,
        formData.value.sex,
        formData.value.age,
        formData.value.concern,
      ];
      if (showConditionalFields.value) {
        requiredFields.push(formData.value.pregnancyStatus, formData.value.breastfeeding);
      }
      return requiredFields.every(field => field !== "");
    });

    // Handle form submission and redirect to the next page with query parameters
    const handleNextPage = () => {
      router.push({
        path: "/self_assissment/category",
        query: {
          name: formData.value.name,
          sex: formData.value.sex,
          age: formData.value.age,
          pregnancyStatus: formData.value.pregnancyStatus,
          breastfeeding: formData.value.breastfeeding,
          concernsAbout: formData.value.concern, // Include the selected concern in the query
        },
      });
    };

    return { formData, showConditionalFields, handleNextPage, isFormValid };
  },
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.bg-gradient-to-r {
  background-color: #f0f9ff;
}

input,
select {
  background-color: white;
}
</style>
