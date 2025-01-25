<template>
  <div
    class="mx-auto mb-16 flex w-full flex-col px-4 sm:px-6 lg:px-10 lg:py-10 lg:pb-10"
  >
    <div class="mb- rounded-lg bg-white p-6 text-center">
      <!-- Enhanced Professional Heading -->
      <h1 class="mb-2 text-3xl font-bold text-gray-800">
        Choose Your
        <span class="text-green-600">{{ selfAssessmentStore.step2.name }}</span>
        Problems
      </h1>
      <p class="text-lg text-gray-600">
        We are here to assist you. Please select the issues you are experiencing
        for tailored advice.
      </p>
    </div>

    <div
      class="grid w-full grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:py-0"
    >
      <div
        v-for="(problem, index) in selectedProblems"
        :key="index"
        class="group relative max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[#238878] shadow-lg"
      >
        <svg
          class="absolute bottom-0 left-0 mb-8 scale-150 transition-transform group-hover:scale-[1.65]"
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
          class="relative flex items-center justify-center px-5 pt-5 transition-transform group-hover:scale-110"
        >
          <div
            class="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
            style="
              background: radial-gradient(black, transparent 60%);
              transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
              opacity: 0.2;
            "
          ></div>
          <button @click="submitProblem(problem)">
            <img class="relative rounded" :src="getImageUrl(problem)" alt="" />
          </button>
        </div>
        <div
          class="relative mt-6 flex items-center justify-between px-6 pb-6 text-white"
        >
          <div class="flex flex-col justify-between">
            <span class="-mb-1 block opacity-75">Problem</span>
            <span class="block text-xl font-semibold">{{ problem.name }}</span>
          </div>
          <button
            @click="submitProblem(problem)"
            class="flex h-8 items-center rounded-full bg-white p-2 text-xs font-bold leading-none text-teal-500"
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
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const selfAssessmentStore = useSelfAssessmentStore();

if (!selfAssessmentStore.step1.concern) router.replace("/self-assessment");
if (!selfAssessmentStore.step2.condition)
  router.replace("/self-assessment/step2");

const problems = {
  skin: {
    "dry-irritated-skin": [
      { name: "Dry / Irritated Skin", value: "dry-irritated-skin" },
      { name: "Uneven Skin Tone", value: "uneven-skin-tone" },
      { name: "Pigmentation", value: "pigmentation" },
      { name: "Acne", value: "acne" },
      { name: "Enlarged Pores", value: "enlarged-pores" },
    ],
    "oily-skin": [
      { name: "Uneven Skin Tone", value: "uneven-skin-tone" },
      { name: "Pigmentation", value: "pigmentation" },
      { name: "Acne", value: "acne" },
      { name: "Enlarged Pores", value: "enlarged-pores" },
    ],
    "normal-skin": [
      { name: "Uneven Skin Tone", value: "uneven-skin-tone" },
      { name: "Pigmentation", value: "pigmentation" },
      { name: "Acne", value: "acne" },
      { name: "Enlarged Pores", value: "enlarged-pores" },
    ],
  },
  hair: {
    "dry-hair": [
      { name: "Frizz", value: "frizz" },
      { name: "Split Ends", value: "split-ends" },
      { name: "Lifelessness", value: "lifelessness" },
    ],
    "oily-hair": [
      { name: "Greasy", value: "greasy" },
      { name: "Flat", value: "flat" },
      { name: "Unmanageable", value: "unmanageable" },
    ],
    "normal-hair": [
      { name: "Shiny", value: "shiny" },
      { name: "Healthy", value: "healthy" },
      { name: "Bouncy", value: "bouncy" },
    ],
  },
  babycare: {
    "sensitive-skin": [
      { name: "Redness", value: "redness" },
      { name: "Rashes", value: "rashes" },
      { name: "Irritation", value: "irritation" },
    ],
    "diaper-rash": [
      { name: "Rash", value: "rash" },
      { name: "Discomfort", value: "discomfort" },
      { name: "Redness", value: "redness" },
    ],
    eczema: [
      { name: "Dry Patches", value: "dry-patches" },
      { name: "Flakiness", value: "flakiness" },
      { name: "Itching", value: "itching" },
    ],
  },
};

const imageLinks = {
  "dry-irritated-skin": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/1.png",
  "uneven-skin-tone": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/2.png",
  pigmentation: "https://ccdstest.b-cdn.net/Medi%20u/skin250250/3.png",
  acne: "https://ccdstest.b-cdn.net/Medi%20u/skin250250/4.png",
  "enlarged-pores": "https://ccdstest.b-cdn.net/Medi%20u/skin250250/5.png",
  frizz: "https://placehold.co/250x250",
  "Split Ends": "https://placehold.co/250x250",
  lifelessness: "https://placehold.co/250x250",
  greasy: "https://placehold.co/250x250",
  flat: "https://placehold.co/250x250",
  unmanageable: "https://placehold.co/250x250",
  shiny: "https://placehold.co/250x250",
  healthy: "https://placehold.co/250x250",
  bouncy: "https://placehold.co/250x250",
  redness: "https://placehold.co/250x250",
  rashes: "https://placehold.co/250x250",
  irritation: "https://placehold.co/250x250",
  rash: "https://placehold.co/250x250",
  discomfort: "https://placehold.co/250x250",
  eczema: "https://placehold.co/250x250",
  "Dry Patches": "https://placehold.co/250x250",
  flakiness: "https://placehold.co/250x250",
  itching: "https://placehold.co/250x250",
};

const selectedProblems = problems[selfAssessmentStore.step1.concern]?.[
  selfAssessmentStore.step2.condition
] || ["No problems found."];

const getImageUrl = (problem) => {
  return imageLinks[problem.value] || "https://placehold.co/250x250"; // Default image if none found
};

const submitProblem = (problem) => {
  selfAssessmentStore.updateStep3Form({
    problem: problem.value,
    name: problem.name,
  });
  router.replace(`/self-assessment/${problem.value}`);
};

useHead({
  title: "Self Assessment - Step 3 - Mediu",
  meta: [
    { name: "description", content: "Self Assessment - Step 3" },
    { name: "og:title", content: "Self Assessment - Step 3 - Mediu" },
    { name: "og:description", content: "Self Assessment - Step 3" },
    {
      name: "keywords",
      content: `Mediu, Self Assessment, health, wellness`,
    },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
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
