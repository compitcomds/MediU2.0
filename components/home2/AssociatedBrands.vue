<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue({ loop: true }, [
  Autoplay({
    delay: 1300,
  }),
]);
const slides = [
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/1.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/2.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/3.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/4.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/5.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/6.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/7.png", alt: "brand" },
  { src: "https://ccdstest.b-cdn.net/Medi%20u/brands/8.png", alt: "brand" },
];
</script>
<template>
  <div class="mb-10 lg:mb-28">
    <h1 class="mb-6 text-center text-2xl text-gray-500 sm:text-3xl md:text-4xl">
      Our Associated Brands
    </h1>
    <div class="embla relative w-full" ref="emblaRef">
      <div class="embla__container">
        <div
          class="embla__slide basis-[35%] md:basis-[25%] lg:basis-[18%] xl:basis-[15%]"
          v-for="slide in slides"
        >
          <img
            :src="slide.src"
            :alt="slide.alt"
            class="rounded-2xl p-2 sm:p-4 md:p-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 0;
}
</style>
