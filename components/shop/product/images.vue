<script setup>
import VueMagnifier from "@websitebeaver/vue-magnifier";
import emblaCarouselVue from "embla-carousel-vue";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";
import "@websitebeaver/vue-magnifier/styles.css";

const props = defineProps({
  images: Array,
});
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });
const currentSlide = ref(0);

const changeSlide = (index) => {
  if (!emblaApi.value) return;
  emblaApi.value.scrollTo(index);
};

const changeLeft = () => {
  if (!emblaApi.value) return;
  emblaApi.value.scrollPrev();
};

const changeRight = () => {
  if (!emblaApi.value) return;
  emblaApi.value.scrollNext();
};

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
  <div class="flex gap-1">
    <div class="mb-4 hidden w-full lg:mb-0 lg:mr-4 lg:block lg:w-1/6">
      <div class="flex flex-col gap-y-1">
        <button
          v-for="(image, index) in props.images"
          @click="changeSlide(index)"
          class="block w-full"
        >
          <img
            :src="image.url"
            :alt="`Thumbnail Image - ${index}`"
            class="h-full w-full rounded-lg border border-gray-200 object-cover py-2 transition hover:scale-105"
          />
        </button>
      </div>
    </div>
    <div
      class="embla relative h-full w-full overflow-hidden lg:w-5/6"
      ref="emblaRef"
    >
      <div class="embla__container flex">
        <div
          class="embla__slide min-w-0 flex-[0_0_100%]"
          v-for="(image, index) in props.images"
        >
          <client-only>
            <VueMagnifier
              :src="image.url"
              class="h-full w-full rounded-lg object-cover transition-transform duration-300"
              alt="Product Image"
            />
          </client-only>
        </div>
      </div>
      <button
        @click="changeLeft"
        class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-2"
      >
        <ChevronLeft /> <span class="sr-only">Move Image Slide Left</span>
      </button>
      <button
        @click="changeRight"
        class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-2"
      >
        <ChevronRight /> <span class="sr-only">Move Image Slide Right</span>
      </button>
      <div
        class="absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
      >
        <button
          v-for="slide in images?.length || 0"
          @click="() => emblaApi?.scrollTo(slide)"
          class="h-2 w-2 rounded-full"
          :class="{
            'bg-gray-300': currentSlide !== slide - 1,
            'bg-gray-600': currentSlide === slide - 1,
          }"
        >
          <span class="sr-only">Slide {{ slide }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
