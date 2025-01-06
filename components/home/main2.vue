<template>
  <section class="relative w-full overflow-hidden bg-white text-white lg:-mt-3">
    <div class="relative z-10 w-full bg-white text-center">
      <div class="w-full bg-white">
        <div class="relative w-full">
          <transition name="fade" mode="out-in">
            <!-- Dynamically set image source based on screen size -->
            <img
              :key="slides[currentSlide].doctorImage"
              class="h-full w-full object-cover"
              :src="currentSlideImage"
              alt="Doctor"
            />
          </transition>
        </div>
        <!-- Pagination Dots -->
        <div class="hidden lg:block">
          <div
            class="absolute -bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-2 xl:bottom-6"
          >
            <span
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'cursor-pointer rounded-full',
                currentSlide === index
                  ? 'h-3 w-6 bg-teal-800'
                  : 'h-3 w-3 bg-slate-400',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          smImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
          mdImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
          lgImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg4%402x%402x%20(1).jpg",
        },
        {
          smImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
          mdImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
          lgImage:
            "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg4%402x%402x%20(1).jpg",
        },
        // Add more slides as needed
      ],
      screenWidth: null, // Initially set to null
    };
  },
  computed: {
    // Dynamically set image source based on screen size
    currentSlideImage() {
      // Ensure window is available before accessing innerWidth
      if (this.screenWidth === null) {
        return ""; // Return empty if the screenWidth is not set yet
      }
      const current = this.slides[this.currentSlide];

      if (this.screenWidth >= 1024) {
        // lg or xl screen size
        return current.lgImage;
      } else if (this.screenWidth >= 768) {
        // md screen size
        return current.mdImage;
      } else {
        // sm screen size
        return current.smImage;
      }
    },
  },
  mounted() {
    // Only access window.innerWidth on the client-side
    if (typeof window !== "undefined") {
      this.screenWidth = window.innerWidth; // Set initial screen width
      this.startSlideShow();
      window.addEventListener("resize", this.handleResize);
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize);
    }
  },
  methods: {
    startSlideShow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000); // Change slide every 5 seconds
    },
    handleResize() {
      if (typeof window !== "undefined") {
        this.screenWidth = window.innerWidth; // Update screen width on resize
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}
</style>
