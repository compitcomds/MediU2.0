<template>
  <div class="w-full mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:py-10 mb-16 lg:pb-10">
    <div class="p-6 rounded-lg text-center bg-white mb-">
      <!-- Enhanced Professional Heading -->
      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        Choose Your <span class="text-green-600">{{ condition }}</span> Problems
      </h1>
      <p class="text-gray-600 text-lg">
        We are here to assist you. Please select the issues you are experiencing for tailored advice.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full py-10 lg:py-0">
      <div 
        v-for="(problem, index) in selectedProblems" 
        :key="index"
        class="flex-shrink-0 relative overflow-hidden bg-[#28574e] rounded-lg max-w-xs shadow-lg group"
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
        <div class="relative pt-5 px-5 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="
                background: radial-gradient(black, transparent 60%);
                transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
                opacity: 0.2;
              "></div>
          <nuxt-link :to="`/self_assissment/category_type/problemDetails?name=${name}&categoryId=${categoryId}&condition=${encodeURIComponent(condition)}&problem=${encodeURIComponent(problem)}`">
            <img class="relative rounded" :src="getImageUrl(problem)" alt="" />
          </nuxt-link>
        </div>
        <div class="relative flex justify-between items-center text-white px-6 pb-6 mt-6">
          <div class="flex flex-col justify-between">
            <span class="block opacity-75 -mb-1">Problem</span>
            <span class="block font-semibold text-xl">{{ problem }}</span>
          </div>
          <nuxt-link :to="`/self_assissment/category_type/problemDetails?name=${name}&categoryId=${categoryId}&condition=${encodeURIComponent(condition)}&problem=${encodeURIComponent(problem)}`" class="block bg-white rounded-full text-teal-500 text-xs font-bold p-2 h-8 leading-none flex items-center">
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
    const condition = route.query.condition;
    const name = route.query.name;
    const categoryId = route.query.categoryId;

    const problems = {
      skin: {
        "Dry / Irritated Skin": [
          "Dry / Irritated Skin",
          "Uneven Skin Tone",
          "Pigmentation",
          "Acne",
          "Enlarged Pores",
        ],
        "Oily Skin": [
          "Uneven Skin Tone",
          "Pigmentation",
          "Acne",
          "Enlarged Pores",
        ],
        "Normal Skin": [
          "Uneven Skin Tone",
          "Pigmentation",
          "Acne",
          "Enlarged Pores",
        ],
      },
      hair: {
        "Dry Hair": ["Frizz", "Split Ends", "Lifelessness"],
        "Oily Hair": ["Greasy", "Flat", "Unmanageable"],
        "Normal Hair": ["Shiny", "Healthy", "Bouncy"],
      },
      babycare: {
        "Sensitive Skin": ["Redness", "Rashes", "Irritation"],
        "Diaper Rash": ["Rash", "Discomfort", "Redness"],
        Eczema: ["Dry Patches", "Flakiness", "Itching"],
      },
    };

    const imageLinks = {
      "Dry / Irritated Skin": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/1.png",
      "Uneven Skin Tone": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/2.png",
      Pigmentation: "https://ccdstest.b-cdn.net/Medi%20u/skin250250/3.png",
      Acne: "https://ccdstest.b-cdn.net/Medi%20u/skin250250/4.png",
      "Enlarged Pores": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/5.png",
      Frizz: "https://placehold.co/250x250",
      "Split Ends": "https://placehold.co/250x250",
      Lifelessness: "https://placehold.co/250x250",
      Greasy: "https://placehold.co/250x250",
      Flat: "https://placehold.co/250x250",
      Unmanageable: "https://placehold.co/250x250",
      Shiny: "https://placehold.co/250x250",
      Healthy: "https://placehold.co/250x250",
      Bouncy: "https://placehold.co/250x250",
      Redness: "https://placehold.co/250x250",
      Rashes: "https://placehold.co/250x250",
      Irritation: "https://placehold.co/250x250",
      Rash: "https://placehold.co/250x250",
      Discomfort: "https://placehold.co/250x250",
      Eczema: "https://placehold.co/250x250",
      "Dry Patches": "https://placehold.co/250x250",
      Flakiness: "https://placehold.co/250x250",
      Itching: "https://placehold.co/250x250",
    };

    const selectedProblems = problems[categoryId]?.[condition] || [
      "No problems found.",
    ];

    const getImageUrl = (problem) => {
      return imageLinks[problem] || "https://placehold.co/250x250"; // Default image if none found
    };

    return { condition, name, categoryId, selectedProblems, getImageUrl };
  },
};
</script>

<style scoped>
/* Additional styles for enhanced aesthetics */
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

p {
  font-style: italic;
}
</style>
