<template>
  <HomeNavbar />
  <button @click="toggleDrawer" class="p-4 lg:hidden block ">
    <span>☰</span>
    <!-- Hamburger Icon -->
  </button>
  <div class="flex p-2 gap-4 px-6 bg-white h-full">
    <!-- Drawer for screens larger than 1024px -->
    <div class="hidden lg:block lg:w-1/4 xl:w-1/6 h-full">
      <ShopFilterbar />
    </div>

    <!-- Drawer for screens smaller than 1024px -->
    <div class="lg:hidden">
      <transition name="drawer">
        <div
          v-if="isDrawerOpen"
          class="fixed inset-0 bg-white z-10 p-4 lg:hidden"
        >
          <button @click="toggleDrawer" class="mt-4">Close</button>
          <ShopFilterbar />
          <button @click="toggleDrawer" class="mt-4">Close</button>
        </div>
      </transition>
    </div>

    <!-- Main content -->
    
    <div
      :class="['flex-1', { 'lg:w-5/6 h-full': !isDrawerOpen, 'w-auto h-full': isDrawerOpen }]"
    >
    <ShopSelectedFilter/>
      <!-- <ShopCard :productDetails="products" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fetchProducts } from "~/shopify/products";
import { getFilters } from "~/shopify/productFilters";

//   const products = ref({});
const { products } = await fetchProducts();
const {filters}= await getFilters();
console.log(filters)
const isDrawerOpen = ref(false);
let currentPage = 1;
const perPage = 30;

const loadProducts = async () => {
  const fetchedProducts = await fetchProducts(currentPage, perPage);
  products.value = [...products.value, ...fetchedProducts];
};

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

//  handle the produc by scrolling
const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    currentPage++;
    loadProducts();
  }
};
</script>

<style scoped>
/* Drawer Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.5s;
}
.drawer-enter, .drawer-leave-to /* .drawer-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
