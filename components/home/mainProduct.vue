<template>
  <div class="flex justify-between gap-4 mt-[164px]">
    <!-- Sidebar for filters -->
    <aside class="w-96 p-4 space-y-4 border-r flex flex-col">
      <div class="bg-white rounded-xl h-[380px] px-2 overflow-auto">
        <div class="sticky top-0 bg-white border-b">
          <h2 class="py-4 text-xl text-black">Categories</h2>
        </div>
        <ul class="space-y-1 text-gray-500">
          <li v-for="(category, index) in categories" :key="index">
            <div
              class="flex items-center border-b py-3 gap-2 cursor-pointer"
              @click="toggleCategory(index)"
            >
              <span :class="{ 'transform rotate-90': isOpen(index) }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right transition-transform"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
              <div class="flex-1">{{ category.name }}</div>
            </div>
            <ul v-show="isOpen(index)" class="pl-4 space-y-1 text-gray-500">
              <li
                v-for="(subCategory, subIndex) in category.subCategories"
                :key="subIndex"
              >
                <div class="flex items-center border-b py-3 gap-2">
                  <a
                    :href="`/subcategory/${subCategory.slug}`"
                    class="flex hover:text-blue-500 hover:underline"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                    {{ subCategory.name }}
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-xl px-2">
        <h2 class="font-semibold text-black text-lg border-b py-4">Filters</h2>

        <!-- Brands Filter -->
        <div class="h-[380px] overflow-auto">
          <div class="sticky top-0 bg-white py-2 border-b">
            <h3 class="font-medium text-md text-black mt-3">Brands</h3>
          </div>
          <div class="relative max-w-sm mx-auto mt-4">
            <input
              class="w-full py-2 px-4 border bg-white border-gray-300 rounded-md shadow-sm"
              type="search"
              placeholder="Search"
            />
            <button
              class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200"
            >
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                />
              </svg>
            </button>
          </div>

          <div class="mt-4 space-y-2">
            <label
              v-for="(brand, index) in otherBrands"
              :key="index"
              class="flex items-center border-b py-3"
            >
              <input
                type="checkbox"
                :value="brand"
                v-model="selectedBrands"
                class="form-checkbox h-4 w-4 text-blue-600 bg-white border-gray-300 rounded"
              />
              <span class="ml-2">{{ brand }}</span>
            </label>
          </div>
        </div>

        <!-- Manufacturers Filter -->
        <div class="h-[380px] overflow-auto mt-8 bg-white">
          <div class="sticky top-0 bg-white py-2 border-y">
            <h3 class="font-medium text-md text-black mt-3">Manufacturers</h3>
          </div>
          <div class="relative max-w-sm mx-auto mt-4">
            <input
              class="w-full py-2 px-4 border bg-white border-gray-300 rounded-md shadow-sm"
              type="search"
              placeholder="Search"
            />
            <button
              class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200"
            >
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                />
              </svg>
            </button>
          </div>

          <div class="mt-4 space-y-2">
            <label
              v-for="(manufacturer, index) in manufacturers"
              :key="index"
              class="flex items-center bg-white border-b py-3"
            >
              <input
                type="checkbox"
                :value="manufacturer"
                v-model="selectedManufacturers"
                class="form-checkbox h-4 w-4 text-blue-600 bg-white border-gray-300 rounded"
              />
              <span class="ml-2">{{ manufacturer }}</span>
            </label>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content area -->
    <div class="flex flex-col w-full ">
      <div class="relative inline-block w-full mx-auto my-10 container">
        <!-- Image slider with transition -->
        <transition name="fade" mode="out-in">
          <img
            :key="slides[currentSlide].doctorImage"
            class="rounded-xl w-full mx-auto"
            :src="slides[currentSlide].doctorImage"
            alt="Doctor"
          />
        </transition>

        <!-- Pagination Dots -->
        <div
          class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'rounded-full cursor-pointer',
              currentSlide === index ? 'bg-teal-800 h-3 w-6' : 'bg-gray-400 h-3 w-3 ',
            ]"
          ></span>
        </div>
      </div>
      <!-- Product grid -->
      <div class="">
        <!-- dummy cards -->
        <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
          <div class="border p-4 bg-white rounded-lg">
            <a href="#" class="block">
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                  >Sale 50%</span
                >
                <img
                  src="https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png"
                  class="w-full"
                  alt=""
                />
              </div>
              <div class="mt-4">
                <h3 class="text-black">Fresh Day Cream</h3>
                <div class="flex justify-between items-center">
                  <div class="flex">
                    <p class="text-[#28574E] font-bold">$20.58</p>
                    <p class="text-gray-500 text-sm line-through">$15.35</p>
                  </div>
                  <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex items-center mt-2">
                  <div class="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- end dummy cards -->
        <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
          <div
            v-for="product in gridProducts"
            :key="product.id"
            class="border p-4 bg-white rounded-lg"
          >
            <a :href="`/product/${product.id}`" class="block">
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                  >Sale {{ product.sale }}%</span
                >
                <img :src="product.image" class="w-full" alt="" />
              </div>
              <div class="mt-4">
                <h3 class="text-black">{{ product.name }}</h3>
                <div class="flex justify-between items-center">
                  <div class="flex">
                    <p class="text-[#28574E] font-bold">
                      {{ product.salePrice }}
                    </p>
                    <p class="text-gray-500 text-sm line-through">
                      {{ product.originalPrice }}
                    </p>
                  </div>
                  <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex items-center mt-2">
                  <div class="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Brand filtered products -->
      <div class="mt-10">
        <div class="flex space-x-6 py-4 bg-teal-800 items-center mb-10">
          <button
            @click="prevBrands"
            :disabled="currentPage === 0"
            class="bg-teal-600 text-white p-2 rounded-full"
          >
            <img
              src="https://ccdstest.b-cdn.net/Medi%20u/chevron-left.png"
              alt="Previous"
            />
          </button>

          <div class="flex space-x-6 overflow-x-auto">
            <div
              v-for="(brand, index) in displayedBrands"
              :key="index"
              @click="filterProducts(brand)"
              class="cursor-pointer"
            >
              <img
                :src="brand.image"
                :alt="brand.name"
                class="w-52 h-36 rounded-full"
              />
            </div>
          </div>

          <button
            @click="nextBrands"
            :disabled="currentPage >= maxPage"
            class="bg-teal-600 text-white p-2 rounded-full"
          >
            <img
              src="https://ccdstest.b-cdn.net/Medi%20u/chevron-right.png"
              alt="Next"
            />
          </button>
        </div>
        <!-- dummy cards -->
        <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
          <div class="border p-4 bg-white rounded-lg">
            <a href="#" class="block">
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                  >Sale 50%</span
                >
                <img
                  src="https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png"
                  class="w-full"
                  alt=""
                />
              </div>
              <div class="mt-4">
                <h3 class="text-black">Fresh Day Cream</h3>
                <div class="flex justify-between items-center">
                  <div class="flex">
                    <p class="text-[#28574E] font-bold">$20.58</p>
                    <p class="text-gray-500 text-sm line-through">$15.35</p>
                  </div>
                  <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex items-center mt-2">
                  <div class="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- end dummy cards -->
        <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto mb-10">
          <a
            v-for="(product, index) in filteredProducts"
            :key="index"
            :href="'/product/' + product.id"
            class="border p-4 rounded-lg bg-white"
          >
            <div class="relative">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full object-cover rounded-lg"
              />
              <span
                v-if="product.sale"
                class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Sale {{ product.sale }}%
              </span>
            </div>
            <h2 class="text-black mt-4">{{ product.name }}</h2>
            <div class="flex justify-between items-center mt-2">
              <div class="flex">
                <span
                  class="text-gray-500 line-through mr-2"
                  v-if="product.originalPrice"
                >
                  ${{ product.originalPrice }}
                </span>
                <span class="text-green-500 text-xl">${{ product.price }}</span>
              </div>
              <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                <img src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg" alt="" />
              </div>
            </div>
            <div class="flex items-center mt-2">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Data for brands
const brandList = ref([
  {
    name: "Dabur",
    image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png",
  },
  { name: "asd", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "fff", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "gggg", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "hhhh", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "jk", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "lk", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "dddd", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  { name: "ddd2", image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png" },
  {
    name: "ddd3d",
    image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png",
  },
  {
    name: "dd5dd",
    image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png",
  },
  {
    name: "dd7dd",
    image: "https://ccdstest.b-cdn.net/Medi%20u/image%2028.png",
  },
  // Add more brands here
]);

// Product data for the main product grid
const gridProducts = ref([
  // {
  //   id: 1,
  //   name: "Main Product 1",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   salePrice: "$14.99",
  //   originalPrice: "$20.99",
  //   sale: 50,
  //   rating: 4,
  // },
  // {
  //   id: 2,
  //   name: "Main Product 2",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   salePrice: "$14.99",
  //   originalPrice: "$20.99",
  //   sale: 50,
  //   rating: 4,
  // },
  // {
  //   id: 3,
  //   name: "Main Product 3",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   salePrice: "$14.99",
  //   originalPrice: "$20.99",
  //   sale: 50,
  //   rating: 4,
  // },
  // Add more products here
]);

// Product data for brand filtering
const allProducts = ref([
  // {
  //   id: 4,
  //   name: "Filtered Product 1",
  //   brand: "Dabur",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   price: 14.99,
  //   originalPrice: 20.99,
  //   sale: 50,
  //   rating: 4,
  // },
  // {
  //   id: 5,
  //   name: "Filtered Product 2",
  //   brand: "Dabur",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   price: 14.99,
  //   originalPrice: 20.99,
  //   sale: 50,
  //   rating: 4,
  // },
  // {
  //   id: 6,
  //   name: "Filtered Product 3",
  //   brand: "asd",
  //   image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
  //   price: 14.99,
  //   originalPrice: 20.99,
  //   sale: 50,
  //   rating: 4,
  // },
  // Add more products here
]);

const filteredProducts = ref([]);

// Pagination state for brand list
const currentPage = ref(0);
const brandsPerPage = 5;

const maxPage = computed(() => {
  return Math.ceil(brandList.value.length / brandsPerPage) - 1;
});

const displayedBrands = computed(() => {
  const start = currentPage.value * brandsPerPage;
  const end = start + brandsPerPage;
  return brandList.value.slice(start, end);
});

function filterProducts(brand) {
  filteredProducts.value = allProducts.value.filter(
    (product) => product.brand === brand.name
  );
}

function prevBrands() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}

function nextBrands() {
  if (currentPage.value < maxPage.value) {
    currentPage.value++;
  }
}

// Slide show data
const slides = ref([
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
  { doctorImage: "https://ccdstest.b-cdn.net/Medi%20u/image%2034.png" },
]);
const currentSlide = ref(0);

// Handle slide transition
onMounted(() => {
  // Ensure this runs only in the browser
  if (process.client) {
    setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    }, 3000);
  }
});

// Data for sidebar categories
const categories = ref([
  // {
  //   name: "Electronics",
  //   subCategories: [
  //     { name: "Mobile Phones", slug: "mobile-phones" },
  //     { name: "Laptops", slug: "laptops" },
  //   ],
  // },
  // {
  //   name: "Fashion",
  //   subCategories: [
  //     { name: "Men's Clothing", slug: "mens-clothing" },
  //     { name: "Women's Clothing", slug: "womens-clothing" },
  //   ],
  // },
]);

// Data for other brands and manufacturers
const otherBrands = ref([]); //"Samsung", "Apple", "Sony", "LG"
const manufacturers = ref([]); //"Apple", "Nike", "Adidas", "Puma"
const selectedBrands = ref([]);
const selectedManufacturers = ref([]);

// Initialize category states
const categoryStates = ref(new Array(categories.value.length).fill(false));

function toggleCategory(index) {
  // Toggle category open state
  categoryStates.value[index] = !categoryStates.value[index];
}

function isOpen(index) {
  // Determine if category is open
  return categoryStates.value[index];
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
