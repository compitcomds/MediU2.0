<template>
    <div class="flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div class="bg-white rounded-lg p-8 w-full flex flex-col lg:flex-row">
        
        <!-- Form Section -->
        <div class="w-full lg:w-1/2 p-6">
          <h2 class="text-2xl lg:text-4xl font-semibold text-center text-[#28574e] mb-6">Consultation Form</h2>
          
          <form @submit.prevent="handleNextPage">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required 
                class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300"
              >
            </div>
            
            <div class="mb-4">
              <label for="sex" class="block text-sm font-medium text-gray-700">Sex</label>
              <select 
                id="sex" 
                v-model="formData.sex" 
                required 
                class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
  
            <div class="mb-4">
              <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
              <input 
                type="number" 
                id="age" 
                v-model="formData.age" 
                required 
                class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300"
              >
            </div>
  
            <!-- Conditional Pregnancy Status Field -->
            <div v-if="showConditionalFields" class="mb-4">
              <label for="pregnancyStatus" class="block text-sm font-medium text-gray-700">Pregnancy Status</label>
              <select 
                id="pregnancyStatus" 
                v-model="formData.pregnancyStatus" 
                required 
                class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
  
            <!-- Conditional Breastfeeding Field -->
            <div v-if="showConditionalFields" class="mb-4">
              <label for="breastfeeding" class="block text-sm font-medium text-gray-700">Breastfeeding</label>
              <select 
                id="breastfeeding" 
                v-model="formData.breastfeeding" 
                required 
                class="mt-1 p-3 w-full text-[#28574e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28574e] focus:border-transparent transition duration-300"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
  
            <nuxt-link to="/self_assissment/concern_about"
               
              class="w-full text-right flex items-center space-x-2 justify-end text-[#28574e] py-3 rounded-md transition duration-300 font-semibold"
            >
              <p class="text-lg">Next Page</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </nuxt-link>
          </form>
        </div>
        
        <!-- Illustration Section -->
        <div class="hidden lg:flex items-center justify-center w-1/2">
          <img src="https://placehold.co/600x400" alt="Form Illustration" class="w-full h-[500px]">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useRouter } from 'nuxt/app';
  
  export default {
    setup() {
      const formData = ref({
        name: '',
        sex: '',
        age: '',
        pregnancyStatus: '',
        breastfeeding: '',
      });
  
      const showConditionalFields = ref(false);
      const router = useRouter();
  
      watch([() => formData.value.sex, () => formData.value.age], () => {
        showConditionalFields.value = formData.value.sex === 'female' && formData.value.age >= 18 && formData.value.age <= 40;
      });
  
      const handleNextPage = () => {
        // Redirect to the next page after form submission
        router.push('/next-page');
      };
  
      return { formData, showConditionalFields, handleNextPage };
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
  }
  
  .bg-gradient-to-r {
    background-color: #f0f9ff;
  }
  
 
  
  input, select {
    background-color: white;
  }
  </style>
  