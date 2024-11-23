<template>
  <div class="flex items-center justify-between mt-10 lg:mt-72 object-cover bg-white w-full">
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :modules="modules"
      class="mySwiper w-full"
    >
      <swiper-slide v-for="item in slides" :key="item.id">
        <nuxt-link to="/shop"><img :src="item" alt="" class="rounded object-cover w-full flex justify-between items-center  bg-white" /></nuxt-link>
      </swiper-slide>
    </swiper>
  </div>
  
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {  Navigation, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Navigation, Autoplay],
    };
  },
  data() {
    return {
      slides: [
        "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner2%20(1).jpg",
        "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner3.jpg",
        "https://ccdstest.b-cdn.net/Medi%20u/home-page-banner/mediu%20banner1%402x%20(1).jpg"
      ]
    };
  }
};
</script>

<style>
/* Swiper navigation buttons styling */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
}

.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important;
}

@media (max-width: 768px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important;
  }
}

@media (max-width: 480px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important;
  }
}

.mySwiper {
  background-color: white;
  border-radius: 8px;
}

.swiper-pagination-bullet {
  background-color: rgb(0, 68, 0);
}
</style>
