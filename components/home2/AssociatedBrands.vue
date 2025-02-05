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
  <div class="mb-28">
    <h1
      class="mb-6 text-center font-serif text-2xl font-bold text-[#238878] md:text-6xl lg:mb-20"
    >
      Our Associated Brands
    </h1>
    <div class="embla relative w-full overflow-hidden" ref="emblaRef">
      <div class="embla__container flex">
        <div
          class="embla__slide min-w-0 flex-[0_0_100%] basis-[30%] md:basis-[22%] lg:basis-[18%] xl:basis-[15%]"
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
