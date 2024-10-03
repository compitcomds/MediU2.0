<template>
  <div class="text-[#28574e]">
    <h2 class="text-2xl font-bold mb-6">Enter Your Details</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label class="block">First Name</label>
        <input 
          v-model="firstName" 
          type="text" 
          class="border w-full p-2" 
          placeholder="Enter your first name" 
          required 
        />
      </div>
      <div class="mb-4">
        <label class="block">Last Name</label>
        <input 
          v-model="lastName" 
          type="text" 
          class="border w-full p-2" 
          placeholder="Enter your last name" 
          required 
        />
      </div>
      <div class="mb-4">
        <label class="block">Email</label>
        <input 
          v-model="email" 
          type="email" 
          class="border w-full p-2" 
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div class="mb-4">
        <label class="block">Phone Number (+91)</label>
        <input 
          v-model="phone" 
          type="tel" 
          class="border w-full p-2" 
          placeholder="Enter your phone number" 
          required 
          maxlength="12" 
        />
        <small class="text-gray-500">Format: +91XXXXXXXXXX (10 digits)</small>
      </div>

      <div class="mb-4">
        <label class="block">Note or Message</label>
        <textarea 
          v-model="note" 
          class="border w-full p-2" 
          placeholder="Enter your note or message" 
          rows="3"
        ></textarea>
      </div>

      <div class="flex justify-between">
        <button 
          @click="$emit('nextTab', 'service')"
          class="bg-gray-300 text-black px-4 py-2 rounded"
        >
          Back
        </button>
        
        <button 
          class="mt-4 bg-[#28574e] text-white px-4 py-2 rounded" 
          :disabled="!isFormFilled"
        >
          Next: Summary
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "", // Phone number should start with +91
      note: "",   // Field for note or message
    };
  },
  computed: {
    isFormFilled() {
      // Check if all fields are filled and phone number is valid
      return this.firstName && this.lastName && this.email && this.isPhoneValid;
    },
    isPhoneValid() {
      // Check if the phone number starts with +91 and has 10 digits
      const phonePattern = /^\+91\d{10}$/;
      return phonePattern.test(this.phone);
    },
  },
  methods: {
    submitForm() {
      if (this.isFormFilled) {
        this.$emit("basicDetailsFilled", true); // Notify the parent that basic details are filled
      }
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
