<template>
  <section
    class="bg-[#28574E] text-white py-12 h-[550px] xl:h-[650px] lg:h-[550px] mt-[150px]"
  >
    <div class="w-full text-center px-4">
      <h1 class="text-4xl xl:text-5xl font-bold mb-4">
        From You to Your Little One, We’ve Got <br />
        You Covered
      </h1>
      <p class="text-lg xl:text-xl mb-8">
        Explore Our Range of Skin, Hair, and Child Care Essentials
      </p>
      <div
        class="relative inline-block w-full lg:max-w-[790px] xl:max-w-[990px] md:h-[500px] xl:h-[700px]"
      >
        <div
          class="relative flex justify-center items-center w-full lg:w-[790px] xl:w-[990px] h-[400px] lg:h-[500px] xl:h-[650px] backdrop-blur-lg shadow-xl rounded-xl"
        >
          <transition name="fade" mode="out-in">
            <img
              :key="slides[currentSlide].doctorImage"
              class="rounded-xl w-full lg:w-[690px] xl:w-[890px] h-[400px] xl:h-[550px] mx-auto"
              :src="slides[currentSlide].doctorImage"
              alt="Doctor"
            />
          </transition>
          <transition name="fade" mode="out-in">
            <div
              :key="slides[currentSlide].doctorText"
              class="absolute top-4 lg:top-24 left-0 lg:-left-12 xl:-left-16 bg-black z-50 flex justify-center items-center text-white text-xs lg:text-base xl:text-lg w-[100px] lg:w-[192px] xl:w-[220px] h-[56px] lg:h-[103px] xl:h-[112px] rounded-full"
            >
              <span v-html="slides[currentSlide].doctorText"></span>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div
              :key="slides[currentSlide].clientText"
              class="absolute bottom-4 lg:bottom-20 right-0 lg:-right-16 xl:-right-24 z-50 bg-black text-white flex justify-center items-center text-xs lg:text-base xl:text-lg w-[100px] lg:w-[192px] xl:w-[220px] h-[56px] lg:h-[103px] xl:h-[112px] rounded-full"
            >
              <span v-html="slides[currentSlide].clientText"></span>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <img
              :key="slides[currentSlide].clientImage"
              class="absolute top-0 lg:top-16 right-0 lg:right-16 w-[120px] lg:w-[189px] h-[40px] lg:h-[100px] rounded-xl border-2 border-gray-300"
              :src="slides[currentSlide].clientImage"
              alt="Client"
            />
          </transition>
        </div>
        <!-- Pagination Dots -->
        <div
          class="absolute -bottom-10 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              ' rounded-full cursor-pointer',
              currentSlide === index ? 'bg-teal-800 h-3 w-6' : 'bg-gray-400 h-3 w-3',
            ]"
          ></span>
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
          doctorImage: "https://s3.envato.com/files/354413425/2134.jpg",
          clientImage:
            "https://roicallcentersolutions.com/wp-content/uploads/2020/09/iStock-1224889792.jpg",
          doctorText: "Expert Pediatricians",
          clientText: "2000 plus happy <br> clients",
        },
        {
          doctorImage: "https://s3.envato.com/files/354413425/2134.jpg",
          clientImage:
            "https://roicallcentersolutions.com/wp-content/uploads/2020/09/iStock-1224889792.jpg",
          doctorText: "Expert Pediatricians",
          clientText: "2000 plus happy <br> clients",
        },
        {
          doctorImage: "https://s3.envato.com/files/354413425/2134.jpg",
          clientImage:
            "https://roicallcentersolutions.com/wp-content/uploads/2020/09/iStock-1224889792.jpg",
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
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
