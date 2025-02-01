<template>
  <div :id="id" class="relative">
    <img
      :src="image?.url || `https://placehold.co/500x500/png?text=${title}`"
      :alt="image?.altText || `Image | ${title}`"
      class="w-full bg-slate-500 object-cover"
    />
  </div>
</template>

<script setup>
import ImageZoom from "js-image-zoom";
import { onMounted, ref } from "vue";

const { image, title, id } = defineProps(["image", "id", "title"]);

const options = {
  fillContainer: false, // The zoomed image should not fill the entire container.
  offset: { vertical: 0, horizontal: 10 },
  zoomWidth: 300, // Width of the zoomed-in image
  zoomStyle: "z-index: 100; border: 1px solid #ccc;", // Custom styles for the zoomed image
  zoomLensStyle: "opacity: 0.4;background-color: white;", // Custom styles for the zoom lens
  scale: 2, // Adjust this to control the zoom level
  zoomPosition: "right", // Position of the zoomed image relative to the original
};

onMounted(() => {
  new ImageZoom(document.getElementById(id), options);
});
</script>
