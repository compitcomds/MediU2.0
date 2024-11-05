<template>
  <div class="mx-2 my-3 sm:mx-2 sm:my-3 lg:mx-20 lg:my-20">
    <div v-if="data">
      <div class="grid grid-cols-5 gap-6 md:grid-cols-5">
        <div class="col-span-5 lg:col-span-2">
          <div class="col-span-5 lg:col-span-2">
            <!-- Main Swiper -->
            <swiper-container
              style="
                --swiper-navigation-color: #000;
                --swiper-pagination-color: #000;
              "
              class="mySwiper"
              thumbs-swiper=".mySwiper2"
              space-between="15"
              navigation="true"
              pagination="true"
              autoplay="true"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="(item, index) in data.images"
                :key="item.url"
              >
                <img
                  :src="item.url"
                  alt="Product Image"
                  class="h-full w-full overflow-hidden rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-150"
                />
              </swiper-slide>
            </swiper-container>

            <!-- Thumbnail Swiper -->
            <swiper-container
              class="mySwiper2 mt-4"
              space-between="10"
              slides-per-view="6"
              free-mode="true"
              watch-slides-progress="true"
            >
              <swiper-slide
                v-for="(item, index) in data.images"
                :key="item.url"
                :class="{
                  'border-4 border-blue-500': currentThumbnail === index,
                }"
                @click="thumbClick(index)"
              >
                <img
                  :src="item.url"
                  alt="Thumbnail Image"
                  class="h-full w-full rounded-lg border-2 border-gray-300 object-cover transition-transform duration-300 hover:scale-105"
                />
              </swiper-slide>
            </swiper-container>
          </div>
          <div class="hidden lg:block">
            <div
              class="flex flex-col divide-y divide-gray-200 rounded-lg border p-2 md:flex-row md:divide-x md:divide-y-0"
            >
              <div class="flex flex-1 items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="w-20 text-purple-500">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/3.png"
                      alt="icon"
                    />
                    <!-- Replace with appropriate icon -->
                  </div>
                  <span class="font-semibold">101% Original</span>
                </div>
              </div>
              <div class="flex flex-1 items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="w-20 text-red-500">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/2.png"
                      alt="icon"
                    />
                    <!-- Replace with appropriate icon -->
                  </div>
                  <span class="font-semibold">Lowest Price</span>
                </div>
              </div>
              <div class="flex flex-1 items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="w-20 text-blue-500">
                    <img
                      src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/1.png"
                      alt="icon"
                    />
                    <!-- Replace with appropriate icon -->
                  </div>
                  <span class="font-semibold">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-5 md:col-span-3">
          <div class="mb-1 text-3xl font-semibold capitalize text-gray-900">
            {{ data.title }}
          </div>
          <div class="text-md mb-4 text-cyan-500">
            Treats Active Acne | Unclogs Pores
          </div>
          <div class="mb-4 flex items-center space-x-3">
            <div class="flex items-center gap-1 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <div class="font-medium text-gray-900">4.7</div>
            </div>
            <div class="text-gray-400">|</div>
            <div class="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 stroke-white text-cyan-500"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div class="ml-1">752 Verified Ratings</div>
            </div>
          </div>
          <div>
            <div class="text-lg font-bold text-cyan-500">Special Price</div>
            <div class="flex items-center gap-2">
              <div class="text-2xl font-bold text-gray-900">
                <span class="text-sm text-gray-500 line-through"
                  >MRP {{ data.compareAtPrice.amount }}</span
                >
                {{ data.price.currencyCode }} {{ data.price.amount }}
                <span
                  v-if="
                    parseFloat(data.compareAtPrice.amount) >
                    parseFloat(data.price.amount)
                  "
                  class="rounded-xl text-base font-normal text-[#28574e]"
                  >Save
                  {{
                    Math.floor(
                      ((parseInt(data.compareAtPrice.amount) -
                        parseInt(data.price.amount)) *
                        100) /
                        parseInt(data.compareAtPrice.amount),
                    )
                  }}%</span
                >
              </div>
            </div>

            <div class="text-sm text-gray-500">Inclusive of all Taxes</div>
            <div class="flex items-center gap-4">
              <div
                class="flex w-1/4 items-center justify-between rounded-lg border px-4 py-2"
              >
                <button
                  @click="decreaseQuantity"
                  class="text-2xl text-gray-800"
                >
                  -
                </button>
                <p class="text-lg text-gray-800">{{ quantity }}</p>
                <button
                  @click="increaseQuantity"
                  class="text-2xl text-gray-800"
                >
                  +
                </button>
              </div>
              <div>
                <ShopAddingToCartBtn
                  :product-id="data.id"
                  :quantity="quantity"
                />
              </div>
            </div>
            <hr class="my-4 border-dashed border-gray-300" />

            <div
              v-for="(item, itemIndex) in data.options"
              :key="itemIndex"
              class="mb-4"
            >
              <div v-if="item.name !== 'Title'">
                <div class="mb-2 font-semibold text-gray-700">
                  {{ item.name }}
                </div>
                <div class="flex flex-wrap gap-4 overflow-x-scroll">
                  <div
                    v-for="(variant, variantIndex) in data.variants"
                    :key="variantIndex"
                    class="flex w-fit gap-6"
                  >
                    <div
                      v-for="(variantValue, variantValueIndex) in variant"
                      :key="variantValueIndex"
                      class="min-w-48"
                    >
                      <div class="rounded-lg border shadow-md">
                        <div
                          class="rounded-t-md bg-green-900 p-2 font-semibold text-white"
                        >
                          {{ item.name }} : {{ variantValue.node.title }}
                        </div>
                        <div class="mt-1 ps-2 text-gray-700">
                          {{ variantValue.node.price.currencyCode }}
                          {{ variantValue.node.price.amount }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ShopCheckDelivery />

            <hr
              class="my-4 border-dashed border-gray-300"
              v-if="data.options.title"
            />

            <div class="hidden lg:block">
              <swiper
                :slidesPerView="1"
                :spaceBetween="60"
                :loop="true"
                :autoplay="{ delay: 6000, disableOnInteraction: false }"
                :modules="modules"
                class="mySwiper my-4 h-32 w-full"
                style="height: 100px"
              >
                <swiper-slide v-for="(item, index) in slides" :key="index">
                  <img
                    :src="item"
                    alt="Ad Banner"
                    class="flex h-32 w-full items-center justify-between rounded-lg object-fill lg:object-cover"
                  />
                </swiper-slide>
              </swiper>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              Free delivery on orders of ₹1,000 and above
            </div>

            <hr class="my-4 border-dashed border-gray-300" />
          </div>

          <!-- <div class="my-4 w-full">
            <img src="https://placehold.co/300x100" alt="Ad Banner" class="w-full object-cover h-32 rounded-lg" />
          </div> -->
        </div>
      </div>

      <div class="mt-10 w-full rounded-lg p-6">
        <div class="flex flex-col items-center">
          <nav class="mb-4 flex w-full justify-center space-x-4 border-b">
            <div v-for="(item, index) in accordionKeys" :key="index">
              <button
                v-if="data[item.value]"
                @click="activeTab = index + 1"
                class="text-lg"
                :class="{
                  'border-b-2 border-[#28574e]': activeTab === index + 1,
                }"
              >
                {{ item.name }}
              </button>
            </div>
          </nav>

          <div class="border-1 w-full rounded-lg border bg-white shadow-md">
            <div v-for="(item, index) in accordionKeys" :key="index">
              <div
                v-if="
                  activeTab === index + 1 &&
                  data[item.value] &&
                  data[item.value].value !== 'N/A'
                "
                class="p-4"
              >
                <div
                  v-html="data[item.value].value.split('\n').join('<br />')"
                  class="normal-case leading-relaxed text-gray-700"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h3 class="mb-4 text-2xl font-semibold text-black">Related Products</h3>
        <ShopRelatedProducts :product-id="data.productId" />
      </div>
    </div>

    <div v-else>Loading product details...</div>
  </div>
  <div
    class="mx-2 my-3 rounded-lg bg-gray-50 p-6 shadow-lg sm:mx-2 sm:my-3 lg:mx-20 lg:my-20"
  >
    <h2 class="mb-4 text-2xl font-semibold text-gray-900">Customer Reviews</h2>
    <div v-if="data.reviews && data.reviews.length" class="space-y-6">
      <div
        v-for="(review, index) in JSON.parse(data.reviews)"
        :key="index"
        class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div class="mb-3 flex items-center justify-between">
          <div class="text-lg font-semibold text-gray-800">
            {{ review.name }}
          </div>
          <div class="flex items-center text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <span class="ml-1 font-medium text-gray-700"
              >{{ review.rating }} / 5</span
            >
          </div>
        </div>
        <div class="leading-relaxed text-gray-600">{{ review.text }}</div>
      </div>
    </div>
    <div v-else class="py-10 text-center italic text-gray-500">
      No reviews yet. Be the first to leave a review!
    </div>
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
