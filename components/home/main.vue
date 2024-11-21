<template>
  <section class="relative text-black bg-white -mt-5 lg:py-12 h-[290px] xl:h-[650px] lg:h-[550px] lg:pt-16 w-full bg-cover bg-center"
    >
    <!-- Overlay for readability -->
    <!-- <div class="absolute inset-0 bg-black/50"></div> -->

    <div class="relative w-full text-center px-4 z-10">
      <!-- Hide heading on sm and md screens -->
      <h1 class="hidden text-black lg:block text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-serif">
        From You to Your Little One, We’ve Got <br />
        You Covered
      </h1>
      <p class="text-base text-black sm:text-lg xl:text-xl mb-8 hidden lg:block">
        Explore Our Range of Skin, Hair, and Child Care Essentials
      </p>
      <div
        class="relative inline-block w-full lg:max-w-[790px] xl:max-w-[990px] h-[400px] lg:h-[500px] xl:h-[700px]"
      >
        <div
          class="relative p-4 lg:p-4 flex justify-center items-center w-full  lg:w-[790px] xl:w-[990px] lg:h-[500px] xl:h-[650px] backdrop-blur-lg lg:shadow-xl rounded-xl"
        >
          <!-- Doctor Image Section with responsive width and height -->
          <transition name="fade" mode="out-in">
            <img
              :key="slides[currentSlide].doctorImage"
              class="rounded-xl w-full md:w-[600px] pb-2 lg:w-[690px] xl:w-[890px] h-[250px] md:h-[300px] lg:h-[500px] xl:h-[550px] mx-auto object-cover"
              :src="slides[currentSlide].doctorImage"
              alt="Doctor"
            />
          </transition>

          <!-- Doctor Text, hidden on sm and md -->
          <transition name="fade" mode="out-in">
            <div
              :key="slides[currentSlide].doctorText"
              class="absolute top-4 lg:top-24 left-0 lg:-left-12 xl:-left-16 bg-slate-900 z-50 flex justify-center items-center text-white text-xs lg:text-base xl:text-lg w-[100px] lg:w-[192px] xl:w-[220px] h-[56px] lg:h-[103px] xl:h-[112px] rounded-full hidden  lg:block"
            >
              <!-- Centering text vertically and horizontally -->
              <div
                class="flex justify-center items-center text-center w-full h-full"
              >
                <span v-html="slides[currentSlide].doctorText"></span>
              </div>
            </div>
          </transition>

          <!-- Client Text -->
          <transition name="fade" mode="out-in">
            <div
              :key="slides[currentSlide].clientText"
              class="absolute bottom-4 lg:bottom-20 right-0 lg:-right-16 xl:-right-24 z-50 bg-slate-900 text-white flex justify-center items-center text-xs lg:text-base xl:text-lg w-[100px] lg:w-[192px] xl:w-[220px] h-[56px] lg:h-[103px] xl:h-[112px] rounded-full hidden  lg:block"
            >
              <!-- Centering text vertically and horizontally -->
              <div
                class="flex justify-center items-center text-center w-full h-full"
              >
                <span v-html="slides[currentSlide].clientText"></span>
              </div>
            </div>
          </transition>

          <!-- Client Image Section with responsive width and height -->
          <transition name="fade" mode="out-in">
            <img
              :key="slides[currentSlide].clientImage"
              class="absolute top-16 md:top-10 lg:top-16 object-cover right-5 md:right-24 lg:right-16 w-[100px] md:w-[120px] lg:w-[189px] h-[60px] md:h-[80px] lg:h-[100px] rounded-xl border-2 border-gray-300"
              :src="slides[currentSlide].clientImage"
              alt="Client"
            />
          </transition>
        </div>
        <!-- Pagination Dots -->
        <div class="hidden lg:block">
          <div
            class="absolute -bottom-10 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            <span
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              :class="[
                ' rounded-full cursor-pointer',
                currentSlide === index
                  ? 'bg-teal-800 h-3 w-6'
                  : 'bg-slate-400 h-3 w-3',
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
          doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/Mask%20Group.png",
          clientImage: "https://ccdstest.b-cdn.net/Medi%20u/Image.png",
          doctorText: "World’s Leading <br> Doctors",
          clientText: "1000 plus happy <br> clients",
        },
        {
          doctorImage:
            "https://ccdstest.b-cdn.net/Medi%20u/Untitled%20design%20(13).png",
          clientImage:
            "https://ccdstest.b-cdn.net/Medi%20u/Untitled%20design%20(12).png",
          doctorText: "Expert Pediatricians",
          clientText: "2000 plus happy <br> clients",
        },
        // Add more slides as needed
      ],
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000); // Change slide every 5 seconds
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
