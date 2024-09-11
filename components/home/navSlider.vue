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
    class="mySwiper w-2/12"
  >
    <swiper-slide v-for="item in slides" :key="item.id">
      <div class=" flex justify-center mt-6 z-50">
        <img
          :src="item.src"
          :alt="item.alt"
          class="rounded-lg shadow- pb-16 z-50"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
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
        {
          id: 1,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          alt: "Product 1",
        },
        {
          id: 2,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          alt: "Product 2",
        },
        {
          id: 3,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349",
          alt: "Product 3",
        },
        {
          id: 4,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738",
          alt: "Product 4",
        },
        {
          id: 5,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090",
          alt: "Product 5",
        },
        {
          id: 6,
          src: "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738",
          alt: "Product 6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mySwiper {
  width: 40%;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
/* Swiper navigation buttons styling */
/* Increase specificity and use direct resizing if necessary */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
  padding-top: 300px;
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
