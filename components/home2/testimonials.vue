<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-vue-next";

const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()]);

const testimonials = [
  {
    name: "Ravi Jain",
    photo: "https://ccdstest.b-cdn.net/Medi%20u/ravi%20jain.jpg",
    text: "Finding a reliable healthcare provider can be difficult. However, the doctors here are not only highly skilled but also exceptionally attentive.",
  },
  {
    name: "Dipesh Sharma",
    photo: "https://ccdstest.b-cdn.net/Medi%20u/dipesh.jpg",
    text: "I've had a wonderful experience with this medical practice. The facility is clean and modern, and the staff is both knowledgeable and kind.",
  },
  {
    name: "Anant Raj",
    photo: "https://ccdstest.b-cdn.net/Medi%20u/IMG_20240728_143911.jpg",
    text: "I've been a patient at this clinic for over a year, and I couldn’t be more impressed with the level of care I receive. The staff is always professional.",
  },
  {
    name: "Ashwariya Singh",
    photo: "https://ccdstest.b-cdn.net/Medi%20u/images.jpeg",
    text: "Finding a trustworthy medical provider can be challenging. The doctors here are not only highly skilled but also incredibly attentive.",
  },
  {
    name: "Archit Jain",
    photo: "https://www.compitcom.com/_nuxt/archit.D0UjA87Z.png",
    text: "It can be tough to find a dependable medical provider, but the doctors here are both highly proficient and remarkably caring.",
  },

  {
    name: "Rahul Soni",
    photo: "https://www.compitcom.com/_nuxt/rahul.DWItOIZd.jpg",
    text: "Locating a trustworthy healthcare provider isn't always easy, but the doctors here are not only extremely competent but also deeply attentive to their patients.",
  },
];
</script>
<template>
  <div class="mb-10 bg-[#f9f9f9] p-6 lg:mb-20 lg:px-4 xl:px-12">
    <h1 class="text-center font-serif text-2xl text-gray-600">Testimonials</h1>
    <h2 class="mb-10 text-center font-serif text-2xl font-bold text-[#238878]">
      Patient Perspectives on Our Care
    </h2>
    <div
      class="embla relative w-full overflow-hidden text-white"
      ref="emblaRef"
    >
      <div class="embla__container flex">
        <div
          class="embla__slide ml-4 basis-[97%] md:basis-1/2 lg:basis-1/3"
          v-for="testimonial in testimonials"
        >
          <div
            class="testimonial-card h-full transform rounded-xl border border-gray-300 bg-gradient-to-r from-white to-gray-100 p-6 shadow-lg transition-transform hover:-translate-y-4 hover:shadow-2xl"
          >
            <div class="w-1/3 flex-shrink-0">
              <img
                :src="testimonial.photo"
                class="h-24 w-24 rounded-xl border-4 border-gray-200 object-cover"
                alt="patient photo"
              />
            </div>
            <div class="flex w-2/3 flex-col pl-6">
              <div class="mb-4 items-center md:flex md:gap-x-4">
                <h3 class="font-semibold text-[#4ca9ee] md:text-lg">
                  {{ testimonial.name }}
                </h3>
                <p class="hidden md:block">|</p>
                <p class="text-sm text-gray-500">patient</p>
              </div>

              <div class="mb-4 flex items-center">
                <div class="rating flex gap-1">
                  <Star
                    v-for="i in 5"
                    :stroke-width="1"
                    class="h-2 w-2 text-yellow-500 lg:h-20 lg:w-20"
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </div>
              </div>

              <p class="text-[10px] leading-relaxed text-gray-700 md:text-xs">
                {{ testimonial.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla__slide {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 0;
}

.testimonial-card {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px); /* Lift effect on hover */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
}

/* Profile photo styling */
img {
  width: 8rem; /* 96px */
  height: 10rem;
  object-fit: cover;
  border: 3px solid #eaeaea;
}

/* Star rating size and alignment */
.rating svg {
  width: 1.5rem; /* 24px */
  height: 1.5rem;
}
</style>
