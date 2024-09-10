
<template>
    <div class="relative inline-block w-full mx-auto my-4 container">
        <!-- Image slider with transition -->
        <transition name="fade" mode="out-in">
          <img
            :key="slides[currentSlide].doctorImage"
            class="rounded-xl w-full mx-auto"
            :src="slides[currentSlide].doctorImage"
            alt="Doctor"
          />
        </transition>

        <!-- Pagination Dots -->
        <div
          class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'rounded-full cursor-pointer',
              currentSlide === index ? 'bg-teal-800 h-3 w-6' : 'bg-slate-400 h-3 w-3 ',
            ]"
          ></span>
        </div>
      </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
// Slide show data
const slides = ref([
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
]);
const currentSlide = ref(0);

// Handle slide transition
onMounted(() => {
  // Ensure this runs only in the browser
  if (process.client) {
    setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    }, 3000);
  }
});

</script>

<style  scoped>
    
</style>
