<template>
  <div class="text-[#28574e] p-4 max-w-md mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center">Enter Your Details</h2>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- First Name -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">First Name</label>
        <input 
          v-model="firstName" 
          type="text" 
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring focus:ring-[#28574e]" 
          placeholder="Enter your first name" 
          required 
        />
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Last Name</label>
        <input 
          v-model="lastName" 
          type="text" 
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring focus:ring-[#28574e]" 
          placeholder="Enter your last name" 
          required 
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input 
          v-model="email" 
          type="email" 
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring focus:ring-[#28574e]" 
          placeholder="Enter your email" 
          required 
        />
      </div>

      <!-- Phone Number -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Phone Number (+91)</label>
        <input 
          v-model="phone" 
          type="tel" 
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring focus:ring-[#28574e]" 
          placeholder="Enter your phone number" 
          required 
          maxlength="13" 
        />
        <small class="text-gray-500">Format: +91XXXXXXXXXX (10 digits)</small>
      </div>

      <!-- Note -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Note</label>
        <textarea 
          v-model="note" 
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring focus:ring-[#28574e]" 
          placeholder="Enter your note or message (optional)" 
          rows="3"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="flex justify-between items-center">
        <button 
          @click="$emit('nextTab', 'service')"
          class="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Back
        </button>
        
        <button 
          @click="submitForm"
          class="bg-[#28574e] text-white px-6 py-2 rounded-md hover:bg-[#1f4b3c] transition disabled:bg-gray-300 disabled:cursor-not-allowed" 
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
        this.$emit("basicDetailsFilled", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          note: this.note
        }); // Emit form data
      }
    },
  },
};
</script>
