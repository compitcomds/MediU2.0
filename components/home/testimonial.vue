<template>
  <div class="lg:px-4 xl:px-12 mb-10 p-6 bg-[#f9f9f9]">
    <h1 class="text-center text-gray-600 text-2xl font-serif">Testimonials</h1>
    <h2 class="text-center text-[#238878] text-2xl font-bold font-serif mb-10">
      Patient Perspectives on Our Care
    </h2>

    <!-- Testimonials Container -->
    <swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :breakpoints="{
      640: {
        slidesPerView: 1, // 1 slide for sm view
        spaceBetween: 20, // Space between slides for sm view
      },
      768: {
        slidesPerView: 2, // 2 slides for md view
        spaceBetween: 30, // Space between slides for md view
      },
      1024: {
        slidesPerView: 3, // 3 slides for lg view
        spaceBetween: 40, // Space between slides for lg view
      }
    }"
    class="testimonial-grid"
  >
    <swiper-slide
      class="testimonial-card border border-gray-300 rounded-xl shadow-lg flex p-6 bg-gradient-to-r from-white to-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-4"
      v-for="(testimonial, index) in testimonials"
      :key="index"
    >
      <!-- Profile Photo -->
      <div class="w-1/3 flex-shrink-0">
        <img
          :src="testimonial.photo"
          class="rounded-xl w-24 h-24 object-cover border-4 border-gray-200"
          alt="patient photo"
        />
      </div>

      <!-- Content Section -->
      <div class="w-2/3 pl-6 flex flex-col">
        <!-- Name and Designation -->
        <div class="mb-4 flex items-center space-x-4">
          <h3 class="text-lg text-[#4ca9ee] font-semibold">
            {{ testimonial.name }}
          </h3>
          <p>|</p>
          <p class="text-sm text-gray-500">patient</p>
        </div>

        <!-- Star Rating -->
        <div class="flex items-center mb-4">
          <div class="rating flex gap-1">
            <svg
              v-for="i in 5"
              :key="i"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star text-yellow-500"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </div>
        </div>

        <!-- Testimonial Content -->
        <p class="text-[8px] md:text-xs text-gray-700 leading-relaxed">
          {{ testimonial.text }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
export default {
  name: "Testimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      testimonials: [
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
      ],
    };
  },
};
</script>

<style scoped>
/* Grid layout for testimonials */
.testimonial-grid {
  display: grid;
  gap: 2rem; /* Space between cards */
}

/* Testimonial card styles */
.testimonial-card {
  display: flex;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

/* Responsive design for mobile screens */
@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
}
</style>
