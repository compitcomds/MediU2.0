<template>
  <ShopQuickview />
</template>

<script setup>
const userStore = useUserStore();

console.log(await userStore.getShopifyCartId());
</script>

<style scoped></style>
