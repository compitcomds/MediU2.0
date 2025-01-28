<template>
  <template v-if="!isAuthLoading">
    <slot />
  </template>
  <div v-else class="flex h-screen items-center justify-center">
    <Loader />
  </div>
</template>

<script setup>
const isAuthLoading = useState("isAuthLoading", () => true);
</script>
