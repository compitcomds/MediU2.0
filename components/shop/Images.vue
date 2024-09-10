<template>
  <div>
    <Swiper
      :modules="[SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
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
      <SwiperSlide v-for="(image, index) in images" :key="image?.url">
        <ShopZoomableImage
          :title="title"
          :image="image"
          :id="`product-zoomable-image-${index}`"
        />
      </SwiperSlide>

      <ShopImageButtons :title="title" :images="images" />
    </Swiper>
  </div>
</template>

<script setup>
const { images, title } = defineProps(["images", "title"]);
</script>

<style lang="scss" scoped></style>
