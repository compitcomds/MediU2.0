<template>
  <div class="lg:px-4 xl:px-12 mb-10 p-6 bg-[#f9f9f9]">
    <h1 class="text-center text-gray-600 text-xl">Testimonials</h1>
    <h2 class="text-center text-[#28574E] text-3xl font-bold mb-10">
      What our customers say
    </h2>

    <!-- Testimonials Container -->
    <div class="testimonial-grid grid lg:grid-cols-3 gap-8">
      <div
        class="testimonial-card bg-gradient-to-r from-white to-gray-100 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <!-- Profile Photo -->
        <div class="flex justify-start mb-4">
          <img
            :src="testimonial.photo"
            class="rounded-full w-24 h-24 object-cover border-2 border-gray-300"
            alt="Customer photo"
          />
        </div>

        <!-- Star Rating -->
        <div class="flex justify-start mb-4">
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
          <span class="text-yellow-600 text-sm font-semibold ml-2">(Reviews)</span>
        </div>

        <!-- Testimonial Content -->
        <h3 class="text-lg text-black font-semibold mb-1">
          {{ testimonial.name }}
        </h3>
        <p class="text-sm text-gray-500 mb-4">Customer</p>
        <p class="text-sm text-gray-700 leading-relaxed">
          {{ testimonial.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
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
          name: "Dipesh Sharma",
          photo: "https://ccdstest.b-cdn.net/Medi%20u/IMG_20240907_140115.jpg",
          text:
            "I've had a wonderful experience with this medical practice. The facility is clean and modern, and the staff is both knowledgeable and kind.",
        },
        {
          name: "Anant Raj",
          photo: "https://ccdstest.b-cdn.net/Medi%20u/Image.svg",
          text:
            "I've been a patient at this clinic for over a year, and I couldn’t be more impressed with the level of care I receive. The staff is always professional.",
        },
        {
          name: "Ashwariya Singh",
          photo: "https://ccdstest.b-cdn.net/Medi%20u/images.jpeg",
          text:
            "Finding a trustworthy medical provider can be challenging. The doctors here are not only highly skilled but also incredibly attentive.",
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
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #eaeaea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px); /* Lift effect on hover */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
}

/* Profile photo styling */
img {
  width: 6rem; /* 96px */
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
}

/* Star rating size and alignment */
.rating svg {
  width: 1.75rem; /* 28px */
  height: 1.75rem;
}

/* Responsive design for mobile screens */
@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
}
</style>
