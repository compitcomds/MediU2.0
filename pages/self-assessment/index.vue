<template>
  <div
    class="flex items-center justify-center bg-[#f0f9ff] bg-gradient-to-r from-blue-100 to-blue-200"
  >
    <div class="flex w-full flex-col rounded-lg bg-white p-8 lg:flex-row">
      <!-- Form Section -->
      <div class="w-full p-6 lg:w-1/2">
        <h2
          class="mb-6 text-center text-2xl font-semibold text-[#238878] lg:text-4xl"
        >
          Diagnose Form
        </h2>

        <form @submit.prevent="handleNextPage">
          <!-- Concern Selection Field -->
          <div class="mb-4">
            <label for="concern" class="block text-sm font-medium text-gray-700"
              >Select Problem</label
            >
            <select
              id="concern"
              v-model="formData.concern"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            >
              <option value="">Select</option>
              <option value="skin">Skin</option>
              <!-- <option value="hair">Hair</option>
                <option value="babycare">Baby Care</option> -->
            </select>
          </div>

          <!-- Name Field -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            />
          </div>

          <!-- Sex Field -->
          <div class="mb-4">
            <label for="sex" class="block text-sm font-medium text-gray-700"
              >Sex</label
            >
            <select
              id="sex"
              v-model="formData.sex"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <!-- Age Field -->
          <div class="mb-4">
            <label for="age" class="block text-sm font-medium text-gray-700"
              >Age</label
            >
            <input
              type="number"
              id="age"
              v-model="formData.age"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            />
          </div>

          <!-- Conditional Pregnancy Status Field -->
          <div v-if="showConditionalFields" class="mb-4">
            <label
              for="pregnancyStatus"
              class="block text-sm font-medium text-gray-700"
              >Pregnancy Status</label
            >
            <select
              id="pregnancyStatus"
              v-model="formData.pregnancyStatus"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <!-- Conditional Breastfeeding Field -->
          <div v-if="showConditionalFields" class="mb-4">
            <label
              for="breastfeeding"
              class="block text-sm font-medium text-gray-700"
              >Breastfeeding</label
            >
            <select
              id="breastfeeding"
              v-model="formData.breastfeeding"
              required
              class="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 text-[#238878] transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#238878]"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <!-- Next Page Button -->
          <button
            @click.prevent="handleNextPage"
            :disabled="!isFormValid"
            class="group relative inline-flex items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-[#238878] transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
          >
            <span
              class="absolute bottom-0 left-0 h-1 w-full bg-[#238878] transition-all duration-150 ease-in-out group-hover:h-full"
            ></span>
            <span
              class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
            >
              <svg
                class="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              class="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0"
            >
              <svg
                class="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
              >Next Page</span
            >
          </button>
        </form>
      </div>

      <!-- Illustration Section -->
      <div class="hidden w-1/2 items-center justify-center lg:flex">
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/diagnose.webp"
          alt="Form Illustration"
          class="h-[500px] w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const showConditionalFields = ref(false);
const router = useRouter();
const selfAssessmentStore = useSelfAssessmentStore();

const { step1: formData } = storeToRefs(selfAssessmentStore);

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
    requiredFields.push(
      formData.value.pregnancyStatus,
      formData.value.breastfeeding,
    );
  }
  return requiredFields.every((field) => field !== "");
});

// Handle form submission and redirect to the next page with query parameters
const handleNextPage = () => {
  router.push("/self-assessment/step2");
};

useHead({
  title: "Self Assessment - Mediu",
  meta: [
    { name: "description", content: "Self Assessment" },
    { name: "og:title", content: "Self Assessment - Mediu" },
    { name: "og:description", content: "Self Assessment" },
    { name: "keywords", content: "Mediu, Self Assessment, health, wellness" },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:image:secure_url",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Self Assessment",
    },
    {
      name: "twitter:description",
      content: "Mediu Self Assessment",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
