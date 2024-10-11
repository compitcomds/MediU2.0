<template>
  <div class="lg:mx-20 lg:my-20 sm:mx-2 sm:my-3 mx-2 my-3">
    <div v-if="data">
      <div class="grid grid-cols-5 gap-6 md:grid-cols-5">
        <div class="col-span-5 lg:col-span-2">
          <div class="col-span-5 lg:col-span-2">
            <!-- Main Swiper -->
            <swiper-container style="
                --swiper-navigation-color: #000;
                --swiper-pagination-color: #000;
              " class="mySwiper" thumbs-swiper=".mySwiper2" space-between="15" navigation="true" pagination="true"
              autoplay="true" @slideChange="onSlideChange">
              <swiper-slide v-for="(item, index) in data.images" :key="item.url">
                <img :src="item.url" alt="Product Image"
                  class="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
              </swiper-slide>
            </swiper-container>

            <!-- Thumbnail Swiper -->
            <swiper-container class="mySwiper2 mt-4" space-between="10" slides-per-view="6" free-mode="true"
              watch-slides-progress="true">
              <swiper-slide v-for="(item, index) in data.images" :key="item.url" :class="{
                'border-blue-500 border-4': currentThumbnail === index,
              }" @click="thumbClick(index)">
                <img :src="item.url" alt="Thumbnail Image"
                  class="object-cover w-full h-full rounded-lg border-2 border-gray-300 transition-transform duration-300 hover:scale-105" />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>

        <div class="col-span-5 md:col-span-3">
          <div class="text-3xl font-semibold text-gray-900 capitalize mb-1">
            {{ data.title }}
          </div>
          <div class="text-md mb-4 text-cyan-500">
            Treats Active Acne | Unclogs Pores
          </div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="flex items-center gap-1 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div class="text-gray-900 font-medium">4.7</div>
            </div>
            <div class="text-gray-400">|</div>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-cyan-500 stroke-white">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div class="ml-1">752 Verified Ratings</div>
            </div>
          </div>
          <div>
            <div class="text-lg text-cyan-500 font-bold">Special Price</div>
            <div class="flex items-center gap-2">
              <div class="text-2xl font-bold text-gray-900">
                {{ data.price.currencyCode }} {{ data.price.amount }}
              </div>
            </div>
            <div class="text-xs -mt-1 mb-1">
              Quantity Available {{ data.quantityAvailable }}
            </div>
            <div class="text-sm text-gray-500">Inclusive of all Taxes</div>
            <hr class="my-4 border-dashed border-gray-300" />

            <div v-for="(item, itemIndex) in data.options" :key="itemIndex" class="mb-4">
              <div v-if="item.name !== 'Title'">
                <div class="font-semibold text-gray-700 mb-2">
                  {{ item.name }}
                </div>
                <div class="flex flex-wrap gap-4 overflow-x-scroll">
                  <div v-for="(variant, variantIndex) in data.variants" :key="variantIndex" class="flex gap-6 w-fit">
                    <div v-for="(variantValue, variantValueIndex) in variant" :key="variantValueIndex" class="min-w-48">
                      <div class="border rounded-lg shadow-md">
                        <div class="font-semibold bg-green-900 rounded-t-md text-white p-2">
                          {{ item.name }} : {{ variantValue.node.title }}
                        </div>
                        <div class="text-gray-700 mt-1 ps-2">
                          {{ variantValue.node.price.currencyCode }}
                          {{ variantValue.node.price.amount }}
                        </div>
                        <div class="text-sm text-gray-600 mt-1 mb-3 pb-4 ps-2">
                          Quantity Available:
                          {{ variantValue.node.quantityAvailable }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4 border-dashed border-gray-300" v-if="data.options.title" />

            <div class="bg-green-50 border border-green-400 rounded-lg flex items-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" class="w-6 h-6 text-green-600">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <div class="ml-3 text-gray-700">
                Check your estimated delivery date
              </div>
            </div>
            <div class="text-sm text-gray-600 mt-2">
              Free delivery on orders of ₹1,000 and above
            </div>

            <hr class="my-4 border-dashed border-gray-300" />

            <div class="flex items-center gap-4">
              <div class="border rounded-lg py-2 px-4 flex items-center justify-between w-1/4">
                <button @click="decreaseQuantity" class="text-2xl text-gray-800">
                  -
                </button>
                <p class="text-lg text-gray-800">{{ quantity }}</p>
                <button @click="increaseQuantity" class="text-2xl text-gray-800">
                  +
                </button>
              </div>
              <div>
                <ShopAddingToCartBtn :product-id="data.id" :quantity="quantity" />
              </div>
            </div>
          </div>
          <swiper :slidesPerView="1" :spaceBetween="60" :loop="true"
            :autoplay="{ delay: 6000, disableOnInteraction: false }" :modules="modules"
            class="mySwiper my-4 w-full h-32" style="height: 100px;">
            <swiper-slide v-for="(item, index) in slides" :key="index">
              <img :src="item" alt="Ad Banner"
                class="w-full object-cover h-32 rounded-lg flex justify-between items-center" />
            </swiper-slide>
          </swiper>
          <!-- <div class="my-4 w-full">
            <img src="https://placehold.co/300x100" alt="Ad Banner" class="w-full object-cover h-32 rounded-lg" />
          </div> -->
        </div>
      </div>

      <div class="w-full rounded-lg mt-10 p-6">
        <div class="flex flex-col items-center">
          <nav class="flex space-x-4 w-full justify-start mb-4">
            <div v-for="(item, index) in accordionKeys" :key="index">
              <button v-if="data[item.value]" @click="activeTab = index + 1" :class="{
                'bg-[#004400] text-white font-semibold border border-3 ':
                  activeTab === index + 1,
                'border-1 border-[#004400] rounded-md px-4 py-2 transition-all': true,
              }">
                {{ item.name }}
              </button>
            </div>
          </nav>

          <div class="w-full bg-white border-1 border rounded-lg shadow-md">
            <div v-for="(item, index) in accordionKeys" :key="index">
              <div v-if="activeTab === index + 1 && data[item.value]" class="p-4">
                <div v-html="convertShopifyRichTextToHTML(data[item.value].value)"
                  class="text-gray-700 leading-relaxed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h3 class="text-2xl font-semibold mb-4 text-black">Related Products</h3>
        <ShopRelatedProducts :product-id="data.productId" />
      </div>
    </div>

    <div v-else>Loading product details...</div>
  </div>
  <div class="lg:mx-20 lg:my-20 sm:mx-2 sm:my-3 mx-2 my-3 p-6 bg-gray-50  rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
    <div v-if="data.reviews && data.reviews.length" class="space-y-6">
      <div v-for="(review, index) in JSON.parse(data.reviews)" :key="index"
        class="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <div class="text-lg font-semibold text-gray-800">{{ review.name }}</div>
          <div class="flex items-center text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
              class="w-5 h-5">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span class="ml-1 text-gray-700 font-medium">{{ review.rating }} / 5</span>
          </div>
        </div>
        <div class="text-gray-600 leading-relaxed">{{ review.text }}</div>
      </div>
    </div>
    <div v-else class="text-gray-500 text-center py-10 italic">No reviews yet. Be the first to leave a review!</div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProductData } from "~/shopify/productDetails";

const modules = [Pagination, Navigation, Autoplay];
const activeTab = ref(1);
const route = useRoute();
const productHandle = route.params.productSlug;

const data = ref({});
const quantity = ref(1);
const slides = ref([
  "https://placehold.co/300x100",
  "https://placehold.co/300x100",
  "https://placehold.co/300x100",
]);

const accordionKeys = [
  {
    name: "Safety information / Precaution",
    value: "safetyInformationAndPrecaution",
  },
  {
    name: "How to use?",
    value: "howToUse",
  },
  {
    name: "Key benefits",
    value: "keyBenefits",
  },
];

const thumbClick = (index) => {
  currentThumbnail.value = index;
};

try {
  const product = await getProductData(productHandle);
  data.value = product;
} catch (error) {
  console.error("Error fetching product data:", error);
}

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
  script.defer = true;
  document.head.appendChild(script);
});

const increaseQuantity = () => {
  if (quantity.value < 5) {
    quantity.value++;
  }
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<style scoped>
/* General Swiper Container Styles */
.swiper-container {
  width: 100%;
  height: 300px;
  /* Adjust height as needed */
  margin: 0 auto;
  /* Center the container horizontally */
}

/* General Swiper Slide Styles */
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}

/* Image Styles within Slides */
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Swiper Specific Styles */
.mySwiper {
  height: 400px;
  /* Adjust height as needed */
}

.mySwiper2 {
  height: 80px;
  /* Adjust height as needed */
  box-sizing: border-box;
  padding: 10px 0;
}

/* Thumbnail Slide Styles */
.mySwiper2 .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}

/* Navigation Button Styles */
.swiper-button-next,
.swiper-button-prev {
  color: #000;
  /* Customize navigation arrow color */
  width: 12px !important;
  /* Adjust the width */
  height: fit-content;
  /* Adjust the height */
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 18px;
  /* Adjust the font size for the arrows */
}

/* Additional Custom Styles */
.collapse .collapse-title {
  cursor: pointer;
}

.collapse .collapse-title:hover {
  color: #6b46c1;
  /* Hover effect for accordion title */
}

/* Optional: Ensure Swiper containers do not exceed available width */
.mySwiper,
.mySwiper2 {
  max-width: 100%;
}

/* Body Styling */
body {
  background: #000;
  color: #000;
}
</style>
