<template>
  <div class="lg:px-4 xl:px-12 mb-10 p-6 bg-[#F2F2F2]">
    <h1 class="text-center text-gray-500 text-xl">Testimonials</h1>
    <h2 class="text-center text-[#28574E] text-3xl font-bold mb-10">
      What our customer Says
    </h2>
    <div class="testimonial-slider relative overflow-hidden">
      <div class="slider-track flex transition-transform duration-500 my-16" ref="sliderTrack">
        <div class="slide bg-white p-6 rounded-lg shadow-md text-center mx-2"
          v-for="(testimonial, index) in extendedTestimonials" :key="index"
          :class="{ 'active': index === currentSlide + 1 }">
          <div class="flex justify-start mb-4">
            <span class="text-yellow-500 space-x-1">
              <!-- Star SVGs here -->
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              </div>
              <!-- Repeat for all stars -->
            </span>
          </div>
          <div class="flex justify-start mb-4">
            <img :src="testimonial.photo" class="rounded-full" alt="Customer photo" />
          </div>
          <h3 class="text-xl text-black text-start font-semibold">{{ testimonial.name }}</h3>
          <p class="text-start text-gray-500 text-sm mb-4">Customer</p>
          <p class="text-start text-sm xl:text-base text-gray-600">{{ testimonial.text }}</p>
        </div>
      </div>
      <button @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-50  bg-gray-300 px-2 py-1 rounded"><svg
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3C4242"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
          <path d="m15 18-6-6 6-6" />
        </svg></button>
      <button @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-50  bg-gray-300 px-2 py-1 rounded"><svg
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3C4242"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
          <path d="m9 18 6-6-6-6" />
        </svg></button>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span v-for="(slide, index) in testimonials" :key="index" @click="setSlide(index)"
          class="block w-4 h-3 rounded-full cursor-pointer"
          :class="{ 'bg-gray-800 w-6': index === currentSlide, 'bg-gray-400 ': index !== currentSlide }"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      currentSlide: 0, // Start at 1 to account for the cloned first slide
      slideWidth: 0,
      testimonials: [
        {
          name: 'Dipesh',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum dui et magna blandit, quis facilisis sapien sagittis. Nunc erat lorem, pellentesque sit amet magna elementum, blandit cursus velit. Sed nulla augue, rhoncus in rhoncus at, placerat ac sem. Vivamus viverra turpis at sem venenatis, sit amet dictum arcu varius.',
        },
        {
          name: 'Robert Fox',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum dui et magna blandit, quis facilisis sapien sagittis. Nunc erat lorem, pellentesque sit amet magna elementum, blandit cursus velit. Sed nulla augue, rhoncus in rhoncus at, placerat ac sem. Vivamus viverra turpis at sem venenatis, sit amet dictum arcu varius.',
        },
        {
          name: 'John Doe',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum dui et magna blandit, quis facilisis sapien sagittis. Nunc erat lorem, pellentesque sit amet magna elementum, blandit cursus velit. Sed nulla augue, rhoncus in rhoncus at, placerat ac sem. Vivamus viverra turpis at sem venenatis, sit amet dictum arcu varius.',
        },
        {
          name: 'Jane Smith',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum dui et magna blandit, quis facilisis sapien sagittis. Nunc erat lorem, pellentesque sit amet magna elementum, blandit cursus velit. Sed nulla augue, rhoncus in rhoncus at, placerat ac sem. Vivamus viverra turpis at sem venenatis, sit amet dictum arcu varius.',
        },
        {
          name: 'Alice Brown',
          photo: 'https://ccdstest.b-cdn.net/Medi%20u/Image.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum dui et magna blandit, quis facilisis sapien sagittis. Nunc erat lorem, pellentesque sit amet magna elementum, blandit cursus velit. Sed nulla augue, rhoncus in rhoncus at, placerat ac sem. Vivamus viverra turpis at sem venenatis, sit amet dictum arcu varius.',
        }
      ],
    };
  },
  computed: {
    extendedTestimonials() {
      return [
        this.testimonials[this.testimonials.length - 1],
        ...this.testimonials,
        this.testimonials[0],
      ];
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.extendedTestimonials.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide++;
        setTimeout(() => {
          this.$refs.sliderTrack.style.transition = 'none';
          this.currentSlide = 1;
          this.updateSlidePosition();
        }, 600); // Wait for transition to complete
      }
      this.updateSlidePosition();
    },
    prevSlide() {
      if (this.currentSlide > 1) {
        this.currentSlide--;
      } else {
        this.currentSlide--;
        setTimeout(() => {
          this.$refs.sliderTrack.style.transition = 'none';
          this.currentSlide = this.extendedTestimonials.length - 3;
          this.updateSlidePosition();
        }, 600); // Wait for transition to complete
      }
      this.updateSlidePosition();
    },
    setSlide(index) {
      this.currentSlide = index + 1;
      this.updateSlidePosition();
    },
    updateSlidePosition() {
      const offset = this.currentSlide * (this.slideWidth / 3);
      this.$refs.sliderTrack.style.transform = `translateX(-${offset}px)`;
      this.$refs.sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    },
    autoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slideWidth = this.$refs.sliderTrack.clientWidth;
      this.updateSlidePosition();
      this.autoSlide();
    });
  },
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
  transition: transform 0.5s ease-in-out;
}

/* Base styles for mobile and small screens */
.slide {
  min-width: calc(100% - 32px);
  /* Adjust for 16px spacing on each side */
  box-sizing: border-box;
  margin: 0 16px;
  /* 8px on each side to create 16px total */
  transition: transform 0.5s ease-in-out;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) {
  .slide {
    min-width: calc(32.22222% - 16px);
    /* Adjust for 16px spacing on each side */
    margin: 0 16px;
    /* 8px on each side to create 16px total */
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1440px) {
  .slide {
    min-width: calc(32.22222% - 16px);
    /* Adjust for 16px spacing on each side */
    margin: 0 16px;
    /* 8px on each side to create 16px total */
  }
}

/* Extra extra large devices (very large desktops, 1400px and up) */
@media (min-width: 2000px) {
  .slide {
    min-width: calc(32.22222% - 16px);
    /* Adjust for 16px spacing on each side */
    margin: 0 16px;
    /* 8px on each side to create 16px total */
  }
}

.slide.active {
  transform: translateY(-10%);
  z-index: 1;
}
</style>