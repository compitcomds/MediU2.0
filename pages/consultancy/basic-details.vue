<template>
  <div
    class="mx-auto mt-4 max-w-md px-4 pb-20 text-[#238878] lg:px-0 lg:py-10 lg:pb-10"
  >
    <h2 class="mb-6 text-center text-3xl font-bold">Enter Your Details</h2>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- First Name -->
      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold">First Name</label>
        <input
          v-model="form.firstName"
          type="text"
          class="w-full rounded-md border border-gray-300 bg-white p-3 text-black"
          :class="{ 'border-red-500': firstNameError }"
          placeholder="Enter your first name"
          @blur="validateFirstName"
        />
        <p v-if="firstNameError" class="text-sm text-red-500">
          Please fill in your first name.
        </p>
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold">Last Name</label>
        <input
          v-model="form.lastName"
          type="text"
          class="w-full rounded-md border border-gray-300 bg-white p-3 text-black"
          :class="{ 'border-red-500': lastNameError }"
          placeholder="Enter your last name"
          @blur="validateLastName"
        />
        <p v-if="lastNameError" class="text-sm text-red-500">
          Please fill in your last name.
        </p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full rounded-md border border-gray-300 bg-white p-3 text-black"
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
        <p v-if="emailError" class="text-sm text-red-500">
          Please enter a valid email address.
        </p>
      </div>

      <!-- Phone Number -->
      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold"
          >Phone Number (+91)</label
        >
        <div class="flex flex-col md:flex-row">
          <input
            type="text"
            class="w-full cursor-not-allowed rounded-l-md border border-gray-300 bg-gray-200 p-3 text-black md:w-1/6"
            value="+91"
            disabled
          />
          <input
            v-model="form.phone"
            type="tel"
            class="w-full rounded-r-md border border-gray-300 bg-white p-3 text-black md:w-5/6"
            :class="{ 'border-red-500': phoneError }"
            placeholder="XXXXXXXXXX"
            maxlength="10"
            @blur="validatePhone"
          />
        </div>
        <p v-if="phoneError" class="text-sm text-red-500">
          Please enter a valid phone number.
        </p>
      </div>

      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold">Note</label>
        <textarea
          v-model="form.note"
          class="w-full rounded-md border border-gray-300 bg-white p-3 text-black"
          placeholder="Enter your note or message (optional)"
          rows="3"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="mb-2 block text-sm font-semibold">Image</label>
        <ConsultancyImageUploader v-model:model-value="uploadedImage" />
      </div>

      <!-- Buttons -->
      <div class="text-end">
        <button
          type="submit"
          class="w-full rounded-md bg-[#238878] px-6 py-2 text-white md:w-auto"
          :disabled="!isFormFilled"
        >
          Next: Summary
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";
import type { Models } from "appwrite";

const router = useRouter();

let user: Models.User<Models.Preferences> | null = null;

try {
  user = await getUser();
} catch (error) {
  router.replace("/auth/login");
}

const consultancyStore = useConsultancyStore();
const { step2: form } = storeToRefs(consultancyStore);

if (!consultancyStore.step1.$id) router.replace("/consultancy/services");

const uploadedImage = ref(form.value.image || undefined);

const firstNameError = ref(false);
const lastNameError = ref(false);
const emailError = ref(false);
const phoneError = ref(false);

onMounted(() => {
  if (!user) return;
  if (!form.value.email) form.value.email = user.email;
  if (!form.value.firstName) form.value.firstName = user.name;
  if (!form.value.phone) form.value.phone = user.phone;
});

const isFormFilled = computed(() => {
  return (
    form.value.firstName &&
    form.value.lastName &&
    form.value.email &&
    form.value.phone &&
    !firstNameError.value &&
    !lastNameError.value &&
    !emailError.value &&
    !phoneError.value
  );
});

const validateFirstName = () => {
  firstNameError.value = !form.value.firstName;
  console.log("First Name Validation:", !form.value.firstName);
};

const validateLastName = () => {
  lastNameError.value = !form.value.lastName;
  console.log("Last Name Validation:", !form.value.lastName);
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailPattern.test(form.value.email);
  console.log("Email Validation:", !emailPattern.test(form.value.email)); // Check validation state
};

const validatePhone = () => {
  const phonePattern = /^\d{10}$/;
  phoneError.value = !phonePattern.test(form.value.phone);
  console.log("Phone Validation:", !phonePattern.test(form.value.phone)); // Check validation state
};

const submitForm = async () => {
  try {
    if (uploadedImage.value) form.value.image = uploadedImage.value;
    router.push({
      path: "/consultancy/summary",
    });
  } catch (error) {
    console.error("Failed to save consultancy details:", error);
  }
};

useHead({
  title: "Consultancy - Basic Details - Mediu",
  meta: [
    { name: "description", content: "Consultancy - Basic Details" },
    { name: "og:title", content: "Consultancy - Basic Details - Mediu" },
    { name: "og:description", content: "Consultancy - Basic Details" },
    { name: "keywords", content: `Mediu, Consultancy, health, wellness` },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>
