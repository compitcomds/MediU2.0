<template>
  <div class="w-full mx-auto px-10 flex flex-col lg:py-10 mb-16 lg:mb-0">
    <div class="p-6 rounded-lg text-center">
      <h1 class="text-3xl font-semibold text-black">
        Hi <span class="text-green-500 font-bold capitalize">{{ name }}</span
        >, choose the
        <span class="capitalize text-green-500">{{ categoryId }}</span>
        condition of yours...
      </h1>
    </div>

    <div class="flex flex-wrap items-center justify-center w-full">
      <div
        v-for="(condition, index) in selectedConditions"
        :key="index"
        class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg w-96 h-96 shadow-lg group"
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
            class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style="
              background: radial-gradient(black, transparent 60%);
              transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
              opacity: 0.2;
            "
          ></div>
          <nuxt-link
            :to="`/self_assissment/category_type?name=${name}&categoryId=${categoryId}&condition=${encodeURIComponent(
              condition
            )}`"
          >
            <img class="relative" src="https://placehold.co/250x250" alt="" />
          </nuxt-link>
        </div>
        <div class="relative flex justify-between text-white px-6 pb-6 mt-6">
          <div class="flex flex-col justify-between">
            <span class="block opacity-75 -mb-1">Condition</span>
            <span class="block font-semibold text-xl">{{ condition }}</span>
          </div>
          <span
            class="block bg-white rounded-full text-teal-500 text-xs font-bold px-8 leading-none flex items-center"
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
          </span>
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

    return { selectedConditions, categoryId, name };
  },
};
</script>
