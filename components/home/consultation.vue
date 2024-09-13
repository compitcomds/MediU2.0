<template>
    <div class="relative w-full ">
      <img src="https://ccdstest.b-cdn.net/Medi%20u/dr%203.jpg" alt="Doctor" class="hidden md:block w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white md:bg-transparent">
        <div class="p-8 w-full md:w-7/12 sm:bg-white lg:bg-transparent bg-opacity-75 rounded-lg md:ml-8 md:mr-auto">
          <h2 class="text-2xl md:text-4xl font-bold text-green-900 mb-6">Book A Free Consultation</h2>
          <form @submit.prevent="submitForm" class="space-y-6 md:space-y-10">
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input type="text" v-model="form.firstName" placeholder="First Name" class="form-input blury w-full" />
              <input type="text" v-model="form.mobileNumber" placeholder="Mobile Number" class="form-input blury w-full" />
            </div>
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input type="text" v-model="form.time" placeholder="Time" class="form-input blury w-full" />
              <input type="date" v-model="form.date" placeholder="Date" class="form-input blury w-full" />
            </div>
            <div>
              <select v-model="form.concern" class="form-select blury w-full">
                <option value="" disabled selected>Hair</option>
                <!-- <option value="concern1">Hair</option> -->
                <option value="concern2">Skin</option>
                <option value="concern3">Baby Care</option>
              </select>
            </div>
            <div>
              <textarea v-model="form.message" placeholder="Message" class="form-textarea blury w-full h-24"></textarea>
            </div>
            <div class="flex justify-start">
              <button type="submit" class="bg-[#28574E] text-white px-4 py-2 rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          mobileNumber: '',
          time: '',
          date: '',
          concern: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
        // Add form submission logic here
      }
    }
  }
  </script>
  
  <style scoped>
  .form-input,
  .form-select,
  .form-textarea {
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 20px;
  }
  
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
  
  .blury {
    background: rgba(255, 255, 255, 0.5); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Adjust the blur intensity */
  }
  </style>
  