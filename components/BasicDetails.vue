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
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{'border-red-500': firstNameError}"
          placeholder="Enter your first name"
          @blur="validateFirstName"
        />
        <p v-if="firstNameError" class="text-red-500 text-sm">Please fill in your first name.</p>
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{'border-red-500': lastNameError}"
          placeholder="Enter your last name"
          @blur="validateLastName"
        />
        <p v-if="lastNameError" class="text-red-500 text-sm">Please fill in your last name.</p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{'border-red-500': emailError}"
          placeholder="Enter your email"
          @blur="validateEmail"
          list="emailSuggestions"
        />
        <datalist id="emailSuggestions">
          <option value="@gmail.com" />
          <option value="@yahoo.com" />
          <option value="@outlook.com" />
        </datalist>
        <p v-if="emailError" class="text-red-500 text-sm">Please enter a valid email address.</p>
      </div>

      <!-- Phone Number -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Phone Number (+91)</label>
        <div class="flex flex-col md:flex-row">
          <input
            type="text"
            class="border border-gray-300 p-3 bg-gray-200 text-black w-full md:w-1/6 rounded-l-md cursor-not-allowed"
            value="+91"
            disabled
          />
          <input
            v-model="phone"
            type="tel"
            class="border border-gray-300 w-full md:w-5/6 p-3 bg-white text-black rounded-r-md"
            :class="{'border-red-500': phoneError}"
            placeholder="XXXXXXXXXX"
            maxlength="10"
            @blur="validatePhone"
          />
        </div>
        <p v-if="phoneError" class="text-red-500 text-sm">Please enter a valid phone number.</p>
      </div>

      <!-- Note -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Note</label>
        <textarea
          v-model="note"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          placeholder="Enter your note or message (optional)"
          rows="3"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="text-end">
        <!-- <button
          @click="$emit('nextTab', 'service')"
          class="bg-gray-300 text-black px-4 py-2 rounded-md w-full md:w-auto mb-2 md:mb-0"
        >
          Back
        </button> -->

        <button
          @click="submitForm"
          class="bg-[#28574e] text-white px-6 py-2 rounded-md w-full md:w-auto"
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
      phone: "",
      note: "",

      // Error tracking for each field
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      phoneError: false,
    };
  },
  computed: {
    isFormFilled() {
      // Validate if all fields are correctly filled
      return !this.firstNameError && !this.lastNameError && !this.emailError && !this.phoneError;
    },
  },
  methods: {
    validateFirstName() {
      this.firstNameError = !this.firstName;
    },
    validateLastName() {
      this.lastNameError = !this.lastName;
    },
    validateEmail() {
      // Simple email validation pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailPattern.test(this.email);
    },
    validatePhone() {
      // Check if the phone is exactly 10 digits
      const phonePattern = /^\d{10}$/;
      this.phoneError = !phonePattern.test(this.phone);
    },
    submitForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
      this.validatePhone();

      if (this.isFormFilled) {
        this.$emit("basicDetailsFilled", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: "+91" + this.phone, // Append +91 to phone number
          note: this.note,
        });
      }
    },
  },
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>