<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";

const [emblaRef, emblaApi] = emblaCarouselVue(
  {
    loop: true,
  },
  [Autoplay()],
);
const slides = [
  "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner2%20(1).jpg",
  "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner3.jpg",
  "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner1%402x%20(1).jpg",
];
</script>

<template>
  <div
    class="embla relative my-10 w-full overflow-hidden text-white lg:my-28"
    ref="emblaRef"
  >
    <div class="embla__container flex">
      <div
        class="embla__slide min-w-0 flex-[0_0_100%]"
        v-for="(slide, index) in slides"
      >
        <nuxt-link to="/shop"
          ><img
            :src="slide"
            :alt="`Mediu | Banner | ${index + 1}`"
            class="flex w-full items-center justify-between rounded bg-white object-cover"
        /></nuxt-link>
      </div>
    </div>
    <button
      @click="emblaApi?.scrollPrev()"
      class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-800"
    >
      <ChevronLeft class="h-12 w-12" :stroke-width="1" />
      <span class="sr-only">Move Left</span>
    </button>
    <button
      @click="emblaApi?.scrollNext()"
      class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800"
    >
      <ChevronRight class="h-12 w-12" :stroke-width="1" />
      <span class="sr-only">Move Right</span>
    </button>
  </div>
</template>
