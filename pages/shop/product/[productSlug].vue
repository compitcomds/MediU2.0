<template>
  <div class=" my-3 pb-10 md:pb-10 lg:pb-0  sm:my-6 lg:my-10 bg-white rounded-lg p-1 lg:p-6">
    <div v-if="data">
      <div class="grid grid-cols-5 gap-6  md:grid-cols-5">
        <!-- Left Section: Thumbnails and Main Image Swiper -->
        <div class="col-span-5 lg:col-span-2 space-y-6">
          <div class="flex lg:flex-row flex-col">
            <!-- Thumbnail Swiper in Column on the Left -->
            <div class="w-full hidden lg:block lg:w-1/6 mb-4 lg:mb-0 lg:mr-4">
              <swiper-container class="mySwiper2" direction="vertical" space-between="10" slides-per-view="5"
                free-mode="true" watch-slides-progress="true" style="height: 130%; max-height: 500px; width: 100%;">
                <swiper-slide v-for="(item, index) in data.images" :key="item.url" :class="{
                  'border-4 border-blue-500': currentThumbnail === index,
                }" @click="thumbClick(index)">
                  <img :src="item.url" alt="Thumbnail Image"
                    class="h-full w-full rounded-lg border py-2 border-gray-200 object-cover" />
                </swiper-slide>
              </swiper-container>
            </div>

            <!-- Main Swiper on the Right -->
            <div class="w-full lg:w-5/6">
              <swiper-container style="
                  --swiper-navigation-color: #4a5568;
                  --swiper-pagination-color: #4a5568;
                " class="mySwiper" thumbs-swiper=".mySwiper2" space-between="15" navigation="true" pagination="true"
                autoplay="true" @slideChange="onSlideChange">
                <swiper-slide v-for="(item, index) in data.images" :key="item.url">
                  <img :src="item.url" alt="Product Image"
                    class="h-full w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-150" />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>

          <!-- Product Highlights -->
          <div class="hidden lg:flex justify-between items-center rounded-lg border p-4 mt-4 shadow-sm bg-gray-50">
            <div class="flex flex-col items-center text-center">
              <img src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/3.png" alt="100% Original" class="w-12" />
              <span class="font-semibold text-gray-700">100% Original</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/2.png" alt="Lowest Price" class="w-12" />
              <span class="font-semibold text-gray-700">Lowest Price</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/1.png" alt="Fast Delivery" class="w-12" />
              <span class="font-semibold text-gray-700">Fast Delivery</span>
            </div>
          </div>
        </div>

        <!-- Right Section: Product Details and Actions -->
        <div class="col-span-5 lg:col-span-3 space-y-4">
          <!-- Product Title and Description -->
          <div class="text-3xl font-semibold text-gray-900">{{ data.title }}</div>
          <div class="text-md text-cyan-500">Treats Active Acne | Unclogs Pores</div>

          <!-- Ratings and Reviews -->
          <div class="flex items-center space-x-3 text-gray-700">
            <div class="flex items-center gap-1 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                class="h-5 w-5">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div class="font-medium">4.7</div>
            </div>
            <div>|</div>
            <div class="text-gray-500">752 Verified Ratings</div>
          </div>

          <!-- Pricing Information -->
          <div class="space-y-4">
            <div class="text-lg font-bold text-[#28574e]">Special Price</div>
            <div class="flex items-center gap-2 my-2">
              <div class="text-3xl font-bold text-gray-900">

                <span class="text-[#383e42]">{{ data.price.currencyCode }} {{ data.price.amount }}</span>
                <span v-if="data.compareAtPrice && data.compareAtPrice.amount"
                  class="text-sm text-gray-500 line-through">
                  MRP {{ data.compareAtPrice.amount }}
                </span>
                <span
                  v-if="parseFloat(data.compareAtPrice?.amount) && parseFloat(data.compareAtPrice?.amount) > parseFloat(data.price?.amount)"
                  class="rounded-lg bg-[#28574e] text-white px-2 py-1 text-base font-medium ml-2">
                  Save {{
                    Math.floor(((parseFloat(data.compareAtPrice?.amount) - parseFloat(data.price?.amount)) * 100) /
                      parseFloat(data.compareAtPrice?.amount))
                  }}%
                </span>
              </div>
            </div>

            <div class="text-sm text-gray-500 mb-4">Inclusive of all Taxes</div>
            <div class="flex items-center gap-4 mb-4">
              <div class="flex w-1/4 items-center justify-between rounded-lg border px-4 py-2">
                <button @click="decreaseQuantity" class="text-2xl text-gray-800 hover:text-[#383e42]">-</button>
                <p class="text-lg text-gray-800">{{ quantity }}</p>
                <button @click="increaseQuantity" class="text-2xl text-gray-800 hover:text-[#383e42]">+</button>
              </div>
              <div>
                <ShopAddingToCartBtn :product-id="data.id" :quantity="quantity" />
              </div>
            </div>
            <hr class="my-4 border-dashed border-gray-300" />

            <div v-for="(item, itemIndex) in data.options" :key="itemIndex" class="mb-4">
              <div v-if="item.name !== 'Title'">
                <div class="mb-2 font-semibold text-gray-700 text-lg">{{ item.name }}</div>
                <div class="flex flex-wrap gap-4 overflow-x-auto">
                  <div v-for="(variant, variantIndex) in data.variants" :key="variantIndex" class="flex w-fit gap-6">
                    <div v-for="(variantValue, variantValueIndex) in variant" :key="variantValueIndex" class="min-w-48">
                      <div class="rounded-lg border shadow-lg">
                        <div class="rounded-t-md bg-[#383e42] p-2 font-semibold text-white">
                          {{ item.name }} : {{ variantValue.node.title }}
                        </div>
                        <div class="mt-1 ps-2 text-gray-700">
                          {{ variantValue.node.price.currencyCode }} {{ variantValue.node.price.amount }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ShopCheckDelivery />

            <hr class="my-4 border-dashed border-gray-300" v-if="data.options.title" />


            <div class="hidden lg:block">
              <swiper :slidesPerView="1" :spaceBetween="60" :loop="true"
                :autoplay="{ delay: 6000, disableOnInteraction: false }" :modules="modules"
                class="mySwiper my-4 h-32 w-full" style="height: 100px">
                <swiper-slide v-for="(item, index) in slides" :key="index">
                  <img :src="item" alt="Ad Banner"
                    class="flex w-full items-center justify-between rounded-lg object-fill lg:object-cover" />
                </swiper-slide>
              </swiper>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              Free delivery on orders of ₹1,000 and above
            </div>

            <hr class="my-4 border-dashed border-gray-300" />
          </div>

          <!-- Tabs for Additional Information -->

        </div>

      </div>
      <div class="my-10 lg:my-20 max-w-full ">
        <div class="flex items-center justify-around space-x-2 border-b-2 border-gray-300">
          <button v-for="(item, index) in accordionKeys" :key="index" @click="activeTab = index + 1"
            :class="activeTab === index + 1 ? 'w-full bg-green-800 text-white' : 'w-full text-green-800 border-b-2 border-transparent hover:border-green-800'"
            class="py-3 px-4 font-medium text-sm rounded-md transition-colors duration-300">
            {{ item.name }}
          </button>
        </div>
        <div class="p-5 bg-white rounded-md shadow-sm border border-gray-200">
          <div v-for="(item, index) in accordionKeys" :key="index">
            <ul class="px-4">
              <li v-if="activeTab === index + 1 && data[item.value]" v-html="data[item.value].value"
                class="list-disc leading-relaxed text-gray-700"></li>
            </ul>
          </div>
        </div>
      </div>





      <!-- Related Products -->
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">Related Products</h3>
        <ShopRelatedProducts :product-id="data.productId" />
      </div>
    </div>

    <!-- Customer Reviews -->
    <ShopReviews />
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
  "https://ccdstest.b-cdn.net/Medi%20u/ship.webp",
  "https://ccdstest.b-cdn.net/Medi%20u/758x100/3.webp",
  "https://ccdstest.b-cdn.net/Medi%20u/758x100/5.webp",
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
  console.log("Fetched product data:", product); // Add this line
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
/* Enhanced Swiper Styles */
.mySwiper {
  height: 400px;
}

.mySwiper2 {
  height: 80px;
}

.mySwiper2 .swiper-slide {
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
  color: #4a5568;
}

/* Thumbnail Hover & Swiper Customization */
.mySwiper2 .swiper-slide img {
  transition: transform 0.3s ease;
}

.mySwiper2 .swiper-slide:hover img {
  transform: scale(1.05);
}

/* Card Styling */
.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
