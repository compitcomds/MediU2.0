<template>
  <div class="embla relative w-full overflow-hidden text-white" ref="emblaRef">
    <div class="embla__container flex">
      <div
        class="embla__slide min-w-0 flex-[0_0_100%]"
        v-for="(slide, index) in slides"
      >
        <nuxt-link to="/shop"
          ><img
            :src="slide"
            :alt="`Mediu | Shop Banner | ${index + 1}`"
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
  "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/1.png",
  "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/4.png",
  "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/6.png",
];
</script>

<style scoped></style>
