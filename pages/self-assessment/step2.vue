<template>
  <div
    class="mx-auto mb-16 flex w-full flex-col px-4 sm:px-6 md:px-10 lg:mb-0 lg:py-10"
  >
    <div class="rounded-lg bg-white p-2 text-center md:p-6">
      <!-- Professional heading -->
      <h1 class="text-lg font-semibold text-gray-800 md:text-3xl lg:mb-4">
        Hello <span class="font-bold text-green-600">{{ step1.name }}</span
        >, please select the
        <span class="font-bold capitalize text-green-600">{{
          categoryId
        }}</span>
        condition that best describes you.
      </h1>
      <p class="hidden text-base text-gray-600 sm:text-lg lg:block">
        Your health and well-being are our top priorities. Please choose an
        option below for personalized assistance.
      </p>
    </div>

    <div class="flex w-full flex-wrap items-center justify-center">
      <div
        v-for="(condition, index) in selectedConditions"
        :key="index"
        class="group relative m-4 w-full flex-shrink-0 overflow-hidden rounded-lg bg-[#238878] shadow-lg md:w-96"
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
          class="relative flex items-center justify-center px-10 pt-10 transition-transform group-hover:scale-110"
        >
          <div
            class="absolute bottom-0 left-0 -mb-24 ml-3 block h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
            style="
              background: radial-gradient(black, transparent 60%);
              transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
              opacity: 0.2;
            "
          ></div>
          <button @click="submitCondition(condition)">
            <img
              class="relative"
              :src="getImageUrl(condition)"
              alt="Condition Image"
            />
          </button>
        </div>
        <div class="relative mt-6 flex justify-between px-6 pb-6 text-white">
          <div class="flex flex-col justify-between">
            <span class="-mb-1 block opacity-75">Condition</span>
            <span class="block text-base font-semibold sm:text-lg md:text-xl">{{
              condition.name
            }}</span>
          </div>
          <button
            @click="submitCondition(condition)"
            class="flex items-center rounded-full bg-white px-4 text-xs font-bold leading-none text-teal-500 sm:px-6 sm:text-sm md:px-8"
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
const { step1 } = storeToRefs(selfAssessmentStore);

if (!step1.value.name || !step1.value.concern)
  router.replace("/self-assessment");

const conditions = {
  skin: [
    {
      name: "Dry / Irritated Skin",
      value: "dry-irritated-skin",
    },
    {
      name: "Oily Skin",
      value: "oily-skin",
    },
    { name: "Normal Skin", value: "normal-skin" },
  ],
  hair: [
    { name: "Dry Hair", value: "dry-hair" },
    { name: "Oily Hair", value: "oily-hair" },
    { name: "Normal Hair", value: "normal-hair" },
  ],
  babycare: [
    { name: "Sensitive Skin", value: "sensitive-skin" },
    { name: "Diaper Rash", value: "diaper-rash" },
    { name: "Eczema", value: "eczema" },
  ],
};

const selectedConditions = conditions[step1.value.concern] || [];

const imageUrls = {
  "dry-irritated-skin":
    "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/dry.jpg",
  "oily-skin":
    "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/oily.jpg",
  "normal-skin":
    "https://ccdstest.b-cdn.net/Medi%20u/skin250250/self%20assissment/normal.jpg",
  "dry-hair": "https://placehold.co/250x250",
  "oily-hair": "https://placehold.co/250x250",
  "normal-hair": "https://placehold.co/250x250",
  "sensitive-skin": "https://placehold.co/250x250",
  "diaper-rash": "https://placehold.co/250x250",
  eczema: "https://placehold.co/250x250",
};

const getImageUrl = (condition) => {
  return imageUrls[condition.value] || "https://placehold.co/250x250";
};

const submitCondition = (condition) => {
  selfAssessmentStore.updateStep2Form({
    condition: condition.value,
    name: condition.name,
  });
  router.push("/self-assessment/step3");
};

useHead({
  title: "Self Assessment - Step 2 - Mediu",
  meta: [
    { name: "description", content: "Self Assessment - Step 2" },
    { name: "og:title", content: "Self Assessment - Step 2 - Mediu" },
    { name: "og:description", content: "Self Assessment - Step 2" },
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

<style>
@keyframes text {
  0%,
  100% {
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
