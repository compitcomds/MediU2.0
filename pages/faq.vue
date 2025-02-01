<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50 py-20 sm:py-24 lg:py-32"
  >
    <div class="absolute inset-0 h-full w-full" aria-hidden="true">
      <svg
        class="absolute left-10 top-10 h-[400px] w-[400px] opacity-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(45) scale(400)"
          >
            <stop stop-color="#60a5fa" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        class="absolute bottom-10 right-10 h-[400px] w-[400px] opacity-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="200" fill="url(#paint1_radial)" />
        <defs>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-45) scale(400)"
          >
            <stop stop-color="#a78bfa" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        class="absolute bottom-[-150px] left-[-150px] h-[600px] w-[600px] opacity-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="300" fill="url(#paint2_radial)" />
        <defs>
          <radialGradient
            id="paint2_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90) scale(600)"
          >
            <stop stop-color="#34d399" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2
          class="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Explore Common Questions
        </h2>
        <p class="mt-4 text-lg text-gray-600 lg:text-xl">
          Find answers to the most frequently asked questions below.
        </p>
      </div>
      <div class="mx-auto mt-10 max-w-3xl space-y-8 md:mt-20">
        <div
          v-for="(question, index) in questions"
          :key="index"
          @click="toggleAnswer(index)"
          class="transform cursor-pointer rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <button
            type="button"
            :id="'question' + (index + 1)"
            :data-state="question.open ? 'open' : 'closed'"
            class="flex w-full items-center justify-between px-8 py-6 sm:px-10"
          >
            <span class="text-xl font-semibold text-gray-800">{{
              question.title
            }}</span>
            <svg
              :id="'arrow' + (index + 1)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6 text-blue-600 transition-transform duration-300"
              :style="{
                transform: question.open ? 'rotate(0deg)' : 'rotate(-180deg)',
              }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div v-if="question.open" class="px-8 pb-8 sm:px-10">
            <p class="text-base leading-relaxed text-gray-700">
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>
      <p class="mt-16 text-center text-lg text-gray-700">
        Still have questions?
        <span
          class="cursor-pointer font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800 hover:underline focus:text-blue-800"
          >Contact our support</span
        >
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const questions = ref([
  {
    title: "What services does Mediu offer?",
    answer:
      "Mediu provides a range of health and wellness services, including personalized nutrition plans, fitness coaching, mental health support, and telemedicine consultations. Our aim is to help you achieve optimal health through a holistic approach.",
    open: false,
  },
  {
    title: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website by navigating to the 'Book Now' section. Simply select the service you need, choose a convenient date and time, and complete the booking process. You will receive a confirmation email with all the details.",
    open: false,
  },
  {
    title: "Are the consultations conducted online or in-person?",
    answer:
      "Mediu offers both online and in-person consultations. You can choose your preferred mode of consultation when booking your appointment. Our online sessions are conducted via secure video conferencing to ensure your privacy and convenience.",
    open: false,
  },
  {
    title: "What should I expect during my first consultation?",
    answer:
      "During your first consultation, our health professionals will discuss your health history, current concerns, and goals. This initial assessment helps us create a personalized plan tailored to your needs, whether it's nutrition, fitness, or mental health support.",
    open: false,
  },
  {
    title: "Is there a cancellation policy?",
    answer:
      "Yes, we have a cancellation policy in place. If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance to avoid any cancellation fees. You can manage your appointments through your account on our website.",
    open: false,
  },
  {
    title: "How are your professionals qualified?",
    answer:
      "All of our health professionals are highly trained and certified in their respective fields. They have extensive experience in nutrition, fitness, and mental health, ensuring that you receive quality care tailored to your needs.",
    open: false,
  },
  {
    title: "Can I access your services from anywhere?",
    answer:
      "Yes! Our online services are accessible from anywhere with an internet connection. For in-person consultations, please check our location listings to find the nearest Mediu facility.",
    open: false,
  },
  {
    title: "What payment methods do you accept?",
    answer:
      "Mediu accepts various payment methods, including credit and debit cards, digital wallets, and bank transfers. You can choose your preferred payment option during the booking process.",
    open: false,
  },
  {
    title: "How do I know which service is right for me?",
    answer:
      "If you’re unsure which service to choose, we recommend starting with a consultation where our professionals can assess your needs and goals. They will help guide you to the most suitable services for your health journey.",
    open: false,
  },
]);

const toggleAnswer = (index: number) => {
  questions.value[index].open = !questions.value[index].open;
};

useHead({
  title: "Mediu | FAQ",
  meta: [
    {
      name: "description",
      content: "Mediu FAQ",
    },
    {
      name: "keywords",
      content: "Mediu, FAQ, health, wellness",
    },
    {
      name: "author",
      content: "Mediu",
    },
    {
      name: "og:title",
      content: "Mediu | FAQ",
    },
    {
      name: "og:description",
      content: "Mediu FAQ",
    },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
