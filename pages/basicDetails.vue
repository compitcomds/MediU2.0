<template>
  <div class="text-[#28574e] pb-20 px-4 lg:pb-10 lg:px-0 lg:py-10 mt-4 max-w-md mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center">Enter Your Details</h2>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- First Name -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">First Name</label>
        <input
          v-model="firstName"
          type="text"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{ 'border-red-500': firstNameError }"
          placeholder="Enter your first name"
          @blur="validateFirstName"
        />
        <p v-if="firstNameError" class="text-red-500 text-sm">
          Please fill in your first name.
        </p>
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{ 'border-red-500': lastNameError }"
          placeholder="Enter your last name"
          @blur="validateLastName"
        />
        <p v-if="lastNameError" class="text-red-500 text-sm">
          Please fill in your last name.
        </p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          class="border border-gray-300 w-full p-3 bg-white text-black rounded-md"
          :class="{ 'border-red-500': emailError }"
          placeholder="Enter your email"
          @blur="validateEmail"
          list="emailSuggestions"
        />
        <datalist id="emailSuggestions">
          <option value="@gmail.com" />
          <option value="@yahoo.com" />
          <option value="@outlook.com" />
        </datalist>
        <p v-if="emailError" class="text-red-500 text-sm">
          Please enter a valid email address.
        </p>
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
            :class="{ 'border-red-500': phoneError }"
            placeholder="XXXXXXXXXX"
            maxlength="10"
            @blur="validatePhone"
          />
        </div>
        <p v-if="phoneError" class="text-red-500 text-sm">
          Please enter a valid phone number.
        </p>
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
        <button
          type="submit"
          class="bg-[#28574e] text-white px-6 py-2 rounded-md w-full md:w-auto"
          :disabled="!isFormFilled"
        >
          Next: Summary
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { consultancyDocument, getUserId } from '~/appwrite/consultancy'; 
import { useConfig } from 'appwrite';

const route = useRoute();
const router = useRouter();
const config = useConfig();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const note = ref("");

const firstNameError = ref(false);
const lastNameError = ref(false);
const emailError = ref(false);
const phoneError = ref(false);

const isFormFilled = computed(() => {
  return firstName.value && lastName.value && email.value && phone.value &&
         !firstNameError.value && !lastNameError.value && !emailError.value && !phoneError.value;
});

const validateFirstName = () => {
  firstNameError.value = !firstName.value;
  console.log('First Name Validation:', !firstName.value); // Check validation state
};

const validateLastName = () => {
  lastNameError.value = !lastName.value;
  console.log('Last Name Validation:', !lastName.value); // Check validation state
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailPattern.test(email.value);
  console.log('Email Validation:', !emailPattern.test(email.value)); // Check validation state
};

const validatePhone = () => {
  const phonePattern = /^\d{10}$/;
  phoneError.value = !phonePattern.test(phone.value);
  console.log('Phone Validation:', !phonePattern.test(phone.value)); // Check validation state
};

const submitForm = async () => {
  console.log('Form submitted'); // Check if submitForm is called
  
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: "+91" + phone.value,
    note: note.value,
  };

  const service = route.params.service;

  try {
    const userId = await getUserId();
    console.log('User ID:', userId); // Ensure we are getting the user ID

    const bookingTime = new Date().toISOString();
    const imagesId = [];
    const gender = 'male';

    // Call the Appwrite consultancy document function to save the details
    await consultancyDocument(
      config,
      userId,
      `${formData.firstName} ${formData.lastName}`,
      formData.note,
      imagesId,
      bookingTime,
      false,
      false,
      10000,
      gender
    );
    
    console.log('Consultancy details saved successfully');
    
    // Ensure that router.push is being called
    router.push({
      name: 'summary',
      params: { 
        service: service,
        formData: formData
      }
    });
    
  } catch (error) {
    console.error("Failed to save consultancy details:", error);
  }
};
</script>


<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>
