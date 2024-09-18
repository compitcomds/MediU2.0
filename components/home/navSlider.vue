<template>
  <div class="bg-white p-4">
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true,
    }"
    
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id" class="relative w-full h-full">
      <img :src="slide.src" alt="" class="object-cover h-72">
    </SwiperSlide>
    
  </Swiper>
</div>

</template>

<script setup>
const slides = [
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
      ]
</script>

