<template>
    <section class="relative py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 sm:py-24 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 w-full h-full" aria-hidden="true">
        <svg class="absolute top-10 left-10 w-[400px] h-[400px] opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(45) scale(400)">
              <stop stop-color="#60a5fa" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg class="absolute bottom-10 right-10 w-[400px] h-[400px] opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(-45) scale(400)">
              <stop stop-color="#a78bfa" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg class="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="300" fill="url(#paint2_radial)" />
          <defs>
            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90) scale(600)">
              <stop stop-color="#34d399" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div class="relative px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center mb-16">
          <h2 class="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Explore Common Questions
          </h2>
          <p class="mt-4 text-lg text-gray-600 lg:text-xl">
            Find answers to the most frequently asked questions below.
          </p>
        </div>
        <div class="max-w-3xl mx-auto mt-10 space-y-8 md:mt-20">
          <div v-for="(question, index) in questions" :key="index" @click="toggleAnswer(index)"
            class="transition-all duration-300 bg-white border border-gray-200 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transform hover:scale-105">
            <button type="button" :id="'question' + (index + 1)" :data-state="question.open ? 'open' : 'closed'"
              class="flex items-center justify-between w-full px-8 py-6 sm:px-10">
              <span class="text-xl font-semibold text-gray-800">{{ question.title }}</span>
              <svg :id="'arrow' + (index + 1)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-6 h-6 text-blue-600 transition-transform duration-300"
                :style="{ transform: question.open ? 'rotate(0deg)' : 'rotate(-180deg)' }">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="question.open" class="px-8 pb-8 sm:px-10">
              <p class="text-base text-gray-700 leading-relaxed">{{ question.answer }}</p>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-700 text-lg mt-16">
          Still have questions?
          <span class="cursor-pointer font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800 focus:text-blue-800 hover-underline">Contact
            our support</span>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            title: "What services does Mediu offer?",
            answer: "Mediu provides a range of health and wellness services, including personalized nutrition plans, fitness coaching, mental health support, and telemedicine consultations. Our aim is to help you achieve optimal health through a holistic approach.",
            open: false,
          },
          {
            title: "How can I book an appointment?",
            answer: "You can book an appointment through our website by navigating to the 'Book Now' section. Simply select the service you need, choose a convenient date and time, and complete the booking process. You will receive a confirmation email with all the details.",
            open: false,
          },
          {
            title: "Are the consultations conducted online or in-person?",
            answer: "Mediu offers both online and in-person consultations. You can choose your preferred mode of consultation when booking your appointment. Our online sessions are conducted via secure video conferencing to ensure your privacy and convenience.",
            open: false,
          },
          {
            title: "What should I expect during my first consultation?",
            answer: "During your first consultation, our health professionals will discuss your health history, current concerns, and goals. This initial assessment helps us create a personalized plan tailored to your needs, whether it's nutrition, fitness, or mental health support.",
            open: false,
          },
          {
            title: "Is there a cancellation policy?",
            answer: "Yes, we have a cancellation policy in place. If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance to avoid any cancellation fees. You can manage your appointments through your account on our website.",
            open: false,
          },
          {
            title: "How are your professionals qualified?",
            answer: "All of our health professionals are highly trained and certified in their respective fields. They have extensive experience in nutrition, fitness, and mental health, ensuring that you receive quality care tailored to your needs.",
            open: false,
          },
          {
            title: "Can I access your services from anywhere?",
            answer: "Yes! Our online services are accessible from anywhere with an internet connection. For in-person consultations, please check our location listings to find the nearest Mediu facility.",
            open: false,
          },
          {
            title: "What payment methods do you accept?",
            answer: "Mediu accepts various payment methods, including credit and debit cards, digital wallets, and bank transfers. You can choose your preferred payment option during the booking process.",
            open: false,
          },
          {
            title: "How do I know which service is right for me?",
            answer: "If you’re unsure which service to choose, we recommend starting with a consultation where our professionals can assess your needs and goals. They will help guide you to the most suitable services for your health journey.",
            open: false,
          },
        ],
      };
    },
    methods: {
      toggleAnswer(index) {
        this.questions[index].open = !this.questions[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  .hover-underline:hover {
    text-decoration: underline;
  }
  </style>