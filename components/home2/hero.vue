<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay()]);
const currentSlide = ref(0);
const slides = [
  {
    smImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    mdImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    lgImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20bg%20copy.webp",
  },
  {
    smImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    mdImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    lgImage:
      "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20bg%20copy.webp",
  },
];

onMounted(() => {
  if (!emblaApi.value) return;
  const eApi = emblaApi.value;
  currentSlide.value = eApi.selectedScrollSnap();
  eApi.on("select", () => {
    currentSlide.value = eApi.selectedScrollSnap();
  });
});
</script>

<template>
  <div
    class="embla relative w-full overflow-hidden pt-1 text-white lg:pt-3 xl:pt-7"
    ref="emblaRef"
  >
    <div class="embla__container flex">
      <div class="embla__slide min-w-0 flex-[0_0_100%]" v-for="slide in slides">
        <picture class="w-full">
          <source
            media="(min-width: 1024px)"
            :srcset="slide.lgImage"
            alt="Slide Image"
          />
          <source media="(max-width: 767px)" :srcset="slide.smImage" />
          <source media="(min-width: 768px)" :srcset="slide.mdImage" />
          <img
            :src="slide.smImage"
            alt="Responsive Background"
            class="h-auto w-full"
          />
        </picture>
      </div>
    </div>
    <div
      class="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
    >
      <button
        v-for="slide in slides.length"
        @click="() => emblaApi?.scrollTo(slide)"
        class="h-3 w-3 rounded-full"
        :class="{
          'w-6 bg-gray-300': currentSlide === slide - 1,
          'bg-gray-600': currentSlide !== slide - 1,
        }"
      >
        <span class="sr-only">Slide {{ slide }}</span>
      </button>
    </div>
  </div>
</template>
