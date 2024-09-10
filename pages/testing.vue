<template>
  <div class="my-20">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <strong>{{ slide }}</strong>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup></script>

<style scoped></style>
