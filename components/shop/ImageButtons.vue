<template>
  <div class="flex items-center gap-5">
    <template v-for="(image, index) in images" :key="index">
      <button class="p-1" @click="swiper.slideTo(index)">
        <img
          :src="image?.url || `https://placehold.co/500x500/png?text=${title}`"
          :alt="image?.altText || `Image | ${title}`"
          class="w-52 object-cover sticky top-0"
        />
      </button>
    </template>
  </div>
</template>

<script setup>
const { images, title } = defineProps(["images", "title"]);
const swiper = useSwiper();
console.log({ swiper });
</script>

<style lang="scss" scoped></style>
