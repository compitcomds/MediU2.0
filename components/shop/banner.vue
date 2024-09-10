<template>
  <swiper  
    :slidesPerView="1"
    :spaceBetween="60"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper "
  >
    <swiper-slide v-for="item in slides" :key="item.id" >
      <img :src="item" alt="" class="rounded object-cover w-full flex justify-between items-center scale-105"/>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

export default {
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
      slides: [
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/1.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/4.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/6.png"
      ]
    };
  }
};
</script>

<style>
/* Swiper navigation buttons styling */
/* Increase specificity and use direct resizing if necessary */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
}

/* Default font size for larger screens */
.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important; /* Default font size for larger screens */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important; /* Adjusted font size for tablets */
  }
}

/* Media query for mobile screens */
@media (max-width: 480px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important; /* Further reduced font size for mobile screens */
  }
}


/* Optional: to style the Swiper container itself */
.mySwiper {
  background-color: white;
  border-radius: 8px; /* Example for rounded corners */
}
.swiper-pagination-bullet{
  background-color:  rgb(0, 68, 0);

}

</style>
