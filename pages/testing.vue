<template>
  {{ store.count }}
  <div>
    <ShopFilterbar />
  </div>
</template>

<script setup>
const store = useTestStore();
</script>

<style scoped></style>
