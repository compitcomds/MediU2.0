<template>
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
  offset: { vertical: 0, horizontal: 10 },
};

onMounted(() => {
  new ImageZoom(document.getElementById(id), options2);
});
</script>

<style lang="scss" scoped></style>
