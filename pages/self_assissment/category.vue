<template>
  <div class="w-full mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:py-10 mb-16 lg:mb-0">
    <div class="md:p-6 p-2 rounded-lg text-center bg-white">
      <!-- Professional heading -->
      <h1 class="text-lg md:text-3xl font-semibold text-gray-800 lg:mb-4">
        Hello <span class="text-green-600 font-bold">{{ name }}</span>,
        please select the
        <span class="capitalize text-green-600 font-bold">{{ categoryId }}</span>
        condition that best describes you.
      </h1>
      <p class="text-gray-600 text-base sm:text-lg hidden lg:block">
        Your health and well-being are our top priorities. Please choose an option below for personalized assistance.
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center w-full">
      <div
        v-for="(condition, index) in selectedConditions"
        :key="index"
        class="flex-shrink-0 m-4 relative overflow-hidden bg-[#28574e] rounded-lg w-full md:w-96 shadow-lg group"
      >
        <svg
          class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283"
          fill="none"
          style="opacity: 0.1"
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div
          class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <div
            class="block absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bottom-0 left-0 -mb-24 ml-3"
            style="
              background: radial-gradient(black, transparent 60%);
              transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
              opacity: 0.2;
            "
          ></div>
          <nuxt-link
            :to="`/self_assissment/category_type?name=${name}&categoryId=${categoryId}&condition=${encodeURIComponent(condition)}`"
          >
            <img 
              class="relative" 
              :src="getImageUrl(condition)" 
              alt="Condition Image" 
              
            />
          </nuxt-link>
        </div>
        <div class="relative flex justify-between text-white px-6 pb-6 mt-6">
          <div class="flex flex-col justify-between">
            <span class="block opacity-75 -mb-1">Condition</span>
            <span class="block font-semibold text-base sm:text-lg md:text-xl">{{ condition }}</span>
          </div>
          <nuxt-link
            :to="`/self_assissment/category_type?name=${name}&categoryId=${categoryId}&condition=${encodeURIComponent(condition)}`"
            class="block bg-white rounded-full text-teal-500 text-xs sm:text-sm font-bold px-4 sm:px-6 md:px-8 leading-none flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const name = route.query.name;
    const categoryId = route.query.concernsAbout;

    const conditions = {
      skin: ["Dry / Irritated Skin", "Oily Skin", "Normal Skin"],
      hair: ["Dry Hair", "Oily Hair", "Normal Hair"],
      babycare: ["Sensitive Skin", "Diaper Rash", "Eczema"],
    };

    const selectedConditions = conditions[categoryId] || [];

    const imageUrls = {
      "Dry / Irritated Skin": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/dry.jpg",
      "Oily Skin": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/oily.jpg",
      "Normal Skin": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/normal.jpg",
      "Dry Hair": "https://placehold.co/250x250",
      "Oily Hair": "https://placehold.co/250x250",
      "Normal Hair": "https://placehold.co/250x250",
      "Sensitive Skin": "https://placehold.co/250x250",
      "Diaper Rash": "https://placehold.co/250x250",
      "Eczema": "https://placehold.co/250x250",
    };

    const getImageUrl = (condition) => {
      return imageUrls[condition] || "https://placehold.co/250x250";
    };

    return { selectedConditions, categoryId, name, getImageUrl };
  },
};
</script>

<style>
@keyframes text {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-text {
  background-size: 200% 200%;
  animation: text 3s ease infinite;
}
</style>
