<template>
  <swiper 
    :slidesPerView="1"
    :spaceBetween="40"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper rounded bg-white"
  >
    <swiper-slide v-for="item in slides" :key="item.id">
      <img :src="item" alt="" class="rounded object-cover scale-105"/>
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
    data(){
      return{
        slides:[
    "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/1.png",
    "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/4.png",
    "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/6.png"
  ]
      }
    }

  };
</script>

<style> 

.swiper-button-prev .swiper-button-next .mySwiper {

color: rgb(0, 68, 0) !important;

}

</style> 


