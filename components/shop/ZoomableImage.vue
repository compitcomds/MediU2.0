<!-- <template>
  <div :id="id">
    <img
      :src="image?.url || `https://placehold.co/500x500/png?text=${title}`"
      :alt="image?.altText || `Image | ${title}`"
      class="w-full object-cover sticky top-0"
    />
  </div>
</template>

<script setup>
import ImageZoom from "js-image-zoom";
const { image, title, id } = defineProps(["image", "id", "title"]);


var options2 = {
  fillContainer: true,
  offset: { vertical:0, horizontal: 10 },
};

onMounted(() => {
  new ImageZoom(document.getElementById(id), options2);
});
</script>

<style lang="scss" scoped></style> -->

<template>
  <div :id="id" class="relative">
    <img
      :src="image?.url || `https://placehold.co/500x500/png?text=${title}`"
      :alt="image?.altText || `Image | ${title}`"
      class="w-full object-cover"
    />
  </div>
</template>

<script setup>
import ImageZoom from "js-image-zoom";
import { onMounted, ref } from 'vue';

const { image, title, id } = defineProps(["image", "id", "title"]);
const zoomRef = ref(null);

const options = {
  fillContainer: false, // The zoomed image should not fill the entire container.
  offset: { vertical: 0, horizontal: 10 },
  zoomWidth: 300, // Width of the zoomed-in image
  zoomStyle: 'z-index: 100; border: 1px solid #ccc;', // Custom styles for the zoomed image
  zoomLensStyle: 'opacity: 0.4;background-color: white;', // Custom styles for the zoom lens
  scale: 2, // Adjust this to control the zoom level
  zoomPosition: 'right', // Position of the zoomed image relative to the original
};

onMounted(() => {
  new ImageZoom(document.getElementById(id), options);
});
</script>

<style scoped>
/* Optional: Add custom styles for the image container */
#img-container {
  position: relative;
  overflow: hidden;
}

#img-container img {
  transition: transform 0.2s ease-in-out;
}

#img-container:hover img {
  transform: scale(1.1);
}
</style>
