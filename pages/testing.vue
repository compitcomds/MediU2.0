<template>
  {{ store.count }}
  <button @click="store.increment">Increase count</button>
  <div>
    <ShopFilterbar />
  </div>
</template>

<script setup>
import { useTestStore } from '~/stores/test-store';

// inmport {useTestStore}
const store = useTestStore();
</script>

<style scoped></style>
