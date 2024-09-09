<template>
  {{ store.count }}
  <button @click="store.increment">Increase count</button>
  <div>
    <ShopFilterbar />
  </div>
</template>

<script setup>
const store = useTestStore();
</script>

<style scoped></style>
