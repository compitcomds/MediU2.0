<template>
  <div class="lg:px-4 xl:px-12 mb-10 p-6 bg-[#F2F2F2]">
    <h1 class="text-center text-gray-500 text-xl">Testimonials</h1>
    <h2 class="text-center text-[#28574E] text-3xl font-bold mb-10">
      What our customers say
    </h2>
    <div class="testimonial-slider relative overflow-hidden">
      <div
        class="slider-track flex transition-transform duration-500 my-16"
        :style="{
          transform: `translateX(-${currentSlide * (100 / 3)}%)`,
          transition: sliding ? 'transform 0.5s ease-in-out' : 'none'
        }"
      >
        <div
          class="slide bg-white p-6 rounded-lg shadow-md text-center mx-2"
          v-for="(testimonial, index) in extendedTestimonials"
          :key="index"
          :class="{ 'active': isCenterSlide(index) }"
        >
          <div class="flex justify-start mb-4">
            <span class="text-yellow-500 space-x-1">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </span>
          </div>
          <div class="flex justify-start mb-4">
            <img
              :src="testimonial.photo"
              class="rounded-full"
              alt="Customer photo"
            />
          </div>
          <h3 class="text-xl text-black text-start font-semibold">
            {{ testimonial.name }}
          </h3>
          <p class="text-start text-gray-500 text-sm mb-4">Customer</p>
          <p class="text-start text-sm xl:text-base text-gray-600">
            {{ testimonial.text }}
          </p>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-50 bg-gray-300 px-2 py-1 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3C4242"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-50 bg-gray-300 px-2 py-1 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3C4242"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <!-- Pagination dots -->
      <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <span
          v-for="(slide, index) in testimonials"
          :key="index"
          @click="setSlide(index)"
          class="block w-4 h-3 rounded-full cursor-pointer"
          :class="{
            'bg-gray-800 w-6': index === realSlideIndex,
            'bg-gray-400': index !== realSlideIndex
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      currentSlide: 1, // Start at 1 because of cloned first slide
      sliding: true,
      autoplayInterval: null,
      testimonials: [
        {
          name: 'Dipesh',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          name: 'Robert Fox',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          name: 'John Doe',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          name: 'Jane Smith',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          name: 'Alice Brown',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        }
      ],
    };
  },
  computed: {
    extendedTestimonials() {
      // Add cloned first and last slides for the wrap-around effect
      return [
        this.testimonials[this.testimonials.length - 1], // Clone the last slide
        ...this.testimonials, // Original slides
        this.testimonials[0], // Clone the first slide
      ];
    },
    realSlideIndex() {
      // Handle the real index for the dots
      if (this.currentSlide === 0) {
        return this.testimonials.length - 1;
      } else if (this.currentSlide === this.testimonials.length + 1) {
        return 0;
      }
      return this.currentSlide - 1;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.extendedTestimonials.length - 1) {
        this.currentSlide++;
      }
      this.sliding = true;
      this.resetAfterTransition();
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
      this.sliding = true;
      this.resetAfterTransition();
    },
    setSlide(index) {
      this.currentSlide = index + 1;
      this.sliding = true;
    },
    resetAfterTransition() {
      setTimeout(() => {
        if (this.currentSlide === this.extendedTestimonials.length - 1) {
          // When reaching the cloned first slide, jump to the real first slide
          this.sliding = false;
          this.currentSlide = 1;
        } else if (this.currentSlide === 0) {
          // When reaching the cloned last slide, jump to the real last slide
          this.sliding = false;
          this.currentSlide = this.testimonials.length;
        }
      }, 500); // Wait for the slide transition to finish
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextSlide, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    isCenterSlide(index) {
      // The center slide is the one in the middle of the visible area
      return index === this.currentSlide;
    }
  },
  mounted() {
    this.sliding = true;
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  }
};
</script>

<style scoped>
.testimonial-slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider-track {
  display: flex;
}

.slide {
  min-width: calc(100% / 3); /* Display 3 cards */
  box-sizing: border-box;
  transition: transform 0.5s ease-in-out;
}

.slide.active {
  transform: translateY(-20px); /* Lift the center card up by 20px */
  z-index: 1;
}

button {
  transition: opacity 0.2s;
}

button:hover {
  opacity: 1;
}

span {
  cursor: pointer;
}
</style>
