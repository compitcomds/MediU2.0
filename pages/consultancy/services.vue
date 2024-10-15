<template>
  <div
    class="bg-white pb-20 px-4 lg:pb-10 lg:px-0 lg:py-10 mt-4 rounded-lg text-center max-w-3xl mx-auto"
  >
    <h2 class="text-2xl text-[#28574e] font-bold mb-6">Select Category</h2>

    <!-- Category Buttons -->
    <div class="flex flex-wrap mb-4 md:space-x-2 space-y-2 md:space-y-0">
      <button
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'all',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'all',
        }"
        class="px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterProducts('all')"
      >
        <span>All</span>
      </button>

      <button
        v-for="category in ['Hair', 'Skin', 'Baby']"
        :key="category"
        :class="{
          'bg-[#28574e] text-white': activeFilter === category,
          'bg-blue-100 text-[#28574e]': activeFilter !== category,
        }"
        class="border px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterProducts(category)"
      >
        <span>{{ category }}</span>
      </button>
    </div>

    <!-- Display Services -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        @click="selectConsultancyProduct(product)"
        :class="[
          'p-4 border rounded cursor-pointer bg-white hover:shadow-md text-[#28574e]',
          product.id === selectedProduct?.id
            ? 'border-[#28574e]'
            : 'border-gray-300',
        ]"
      >
        <div class="flex space-x-4 items-center">
          <div
            class="w-14 border rounded-full p-1 text-[#28574e] border-[#28574e]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4-.44.33-1.07.25-1.4-.2-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33c-.4-.54-1.2-.54-1.6 0z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold">{{ product.title }}</h3>
            <p v-html="product.descriptionHtml"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      @click="confirmService"
      :disabled="!selectedProduct"
      class="mt-6 bg-[#28574e] text-white px-4 py-2 rounded w-full sm:w-auto"
    >
      Next: Basic Details
    </button>
  </div>
</template>

<script setup lang="ts">
import { CONSULTANCY_SERVICES } from "~/stores/consultancy-store";
import fetchConsultancyProducts from "~/shopify/consultancy/consultancy-products";

const consultancyProducts = await fetchConsultancyProducts();

const router = useRouter();
const activeFilter = ref("all");
const selectedProduct = ref(null);
const filteredProducts = ref([]);

const consultancyStore = useConsultancyStore();

// Initialize filtered services on component mount
onMounted(() => {
  filterProducts(activeFilter.value);
});

// Filter services based on selected category
const filterProducts = (category: string) => {
  activeFilter.value = category;
  filteredProducts.value =
    category === "all"
      ? [...consultancyProducts]
      : consultancyProducts.filter((product) =>
          product.tags.includes(category.toLowerCase())
        );
  filteredProducts.value.sort((a, b) => a.title.localeCompare(b.title));
};

// Select a service
const selectConsultancyProduct = (product) => {
  selectedProduct.value = product;
};

const confirmService = () => {
  if (selectedProduct.value) {
    consultancyStore.setSelectedConsultancyProduct({
      ...selectedProduct.value,
      category: activeFilter.value,
    });
    router.push({
      path: "/consultancy/basic-details",
    });
  }
};
</script>

<style scoped>
/* Additional styles can go here */
</style>
