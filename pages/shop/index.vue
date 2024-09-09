<template>
  <div class="flex m-2 p-2 gap-4">
    <!-- Hamburger Button -->
    <button @click="toggleDrawer" class="p-4 lg:hidden">
      <span>☰</span>
    </button>

    <!-- Drawer for screens larger than 1024px -->
    <div class="hidden lg:block lg:w-1/4 xl:w-1/6">
      <ShopFilterbar />
    </div>

    <!-- Drawer for screens smaller than 1024px -->
    <transition name="drawer">
      <div
        v-if="isDrawerOpen"
        class="fixed inset-0 bg-white z-10 p-4 lg:hidden"
      >
        <button @click="toggleDrawer" class="mt-4">Close</button>
        <ShopFilterbar />
      </div>
    </transition>

    <!-- Main Content -->
    <div
      :class="['flex-1', { 'lg:w-5/6': !isDrawerOpen, 'w-full': isDrawerOpen }]"
    >
      <ShopCard :productDetails="products" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fetchProducts } from "~/shopify/products";

//   const products = ref([]);
const { products } = await fetchProducts();

const isDrawerOpen = ref(false);
const perPage = 30;
let currentPage = 1;

const loadProducts = async () => {
  const fetchedProducts = await fetchProducts(currentPage, perPage);
  products.value = [...products.value, ...fetchedProducts];
  currentPage++;
};

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadProducts();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  loadProducts();
});
</script>

<style scoped>
/* Drawer Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
