<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()]);
const slides = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/9f297c1781f1fba9b83bc0ef3bebea02.jpg?v=1731409700",
    alt: "Product 1",
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/d3cc827322b9f27a4c9a8df8de002689.jpg?v=1731566113",
    alt: "Product 2",
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/7f44ce3657ba40f9bd2e887f002645db.jpg?v=1729148332",
    alt: "Product 3",
  },
  {
    id: 4,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/1811e9fd44b3343f7415214773ee3565.jpg?v=1731478335",
    alt: "Product 4",
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/14923abd1ab3ef9239d7da021f816b6e.jpg?v=1731306911",
    alt: "Product 5",
  },
  {
    id: 6,
    src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/4479d298fa2844a3fe18264c00f128e1.jpg?v=1731820041",
    alt: "Product 6",
  },
];
</script>

<template>
  <div
    class="embla relative h-full w-full overflow-hidden text-white lg:-mt-3"
    ref="emblaRef"
  >
    <div class="embla__container flex h-full">
      <div
        class="embla__slide h-full min-w-0 flex-[0_0_100%]"
        v-for="slide in slides"
        :key="slide.id"
      >
        <img
          :src="slide.src"
          :alt="slide.alt || 'Item Image'"
          class="h-full w-full object-fill"
        />
      </div>
    </div>
  </div>
</template>
