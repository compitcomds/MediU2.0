<template>
  <div
    class="mb-3 rounded-lg bg-white  p-2 pb-10 sm:mb-6 md:pb-10 lg:mb-10 lg:p-6 lg:pb-0"
  >
    <div v-if="data" class="px-2 md:px-5 lg:px-0">
      <div class="grid grid-cols-5 gap-6 md:grid-cols-5">
        <div class="col-span-5 space-y-6 lg:col-span-2">
          <div class="flex flex-col lg:flex-row">
            <!-- Thumbnail Swiper in Column on the Left -->
            <div class="mb-4 hidden w-full lg:mb-0 lg:mr-4 lg:block lg:w-1/6">
              <swiper-container
                class="mySwiper2"
                direction="vertical"
                space-between="10"
                slides-per-view="5"
                autoplay-delay="5000"
                speed="1000"
                free-mode="true"
                watch-slides-progress="true"
                style="height: 130%; max-height: 500px; width: 100%"
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
                    class="h-full w-full rounded-lg border border-gray-200 object-cover py-2"
                  />
                </swiper-slide>
              </swiper-container>
            </div>

            <!-- Main Swiper on the Right -->
            <div class="w-full lg:w-5/6">
              <swiper-container
                style="
                  --swiper-navigation-color: #4a5568;
                  --swiper-pagination-color: #4a5568;
                "
                class="mySwiper"
                thumbs-swiper=".mySwiper2"
                space-between="15"
                navigation="true"
                pagination="true"
                autoplay="true"
                autoplay-delay="5000"
                speed="1000"
                @slideChange="onSlideChange"
              >
                <swiper-slide
                  v-for="(item, index) in data.images"
                  :key="item.url"
                >
                  <VueMagnifier
                    mgShape="square"
                    :src="item.url"
                    alt="Product Image"
                    class="h-full w-full rounded-lg object-cover transition-transform duration-300"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>

          <!-- Product Highlights -->
          <div
            class="mt-4 hidden items-center justify-between rounded-lg border bg-gray-50 p-4 shadow-sm lg:flex"
          >
            <div class="flex flex-col items-center text-center">
              <img
                src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/3.png"
                alt="100% Original"
                class="w-12"
              />
              <span class="font-semibold text-gray-700">100% Original</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/2.png"
                alt="Lowest Price"
                class="w-12"
              />
              <span class="font-semibold text-gray-700">Lowest Price</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="https://ccdstest.b-cdn.net/Medi%20u/icons%20mediu/1.png"
                alt="Fast Delivery"
                class="w-12"
              />
              <span class="font-semibold text-gray-700">Fast Delivery</span>
            </div>
          </div>
        </div>

        <div class="col-span-5 space-y-4 lg:col-span-3">
          <div class="text-3xl font-semibold text-gray-900">
            {{ data.title }}
          </div>
          <div class="text-md text-cyan-500">
            {{ data?.productSubtitle?.value || "" }}
          </div>

          <div class="flex items-center space-x-3 text-gray-700">
            <div class="flex items-center gap-1 text-yellow-500">
              <p class="flex items-center gap-1 text-[#eab308]">
                <Star :size="16" fill="#eab308" v-for="i in 5" />
              </p>
              <div class="font-medium">4.9</div>
            </div>
            <div>|</div>
            <div class="text-gray-500">50 Verified Ratings</div>
          </div>

          <div class="space-y-4">
            <div class="text-lg font-bold text-[#238878]">Special Price</div>
            <div class="my-2 flex items-center gap-2">
              <div class="text-3xl font-bold text-gray-900">
                <p>
                  <span class="text-[#4ca9ee]">
                    {{ data.price?.currencyCode }}
                    {{ data.price?.amount }}</span
                  >
                  <span
                    v-if="
                      calculatePercentage(data.compareAtPrice, data.price) > 0
                    "
                    class="text-sm text-gray-500 line-through"
                  >
                    MRP {{ data.compareAtPrice.amount }}
                  </span>
                  <span
                    v-if="
                      calculatePercentage(data.compareAtPrice, data.price) > 0
                    "
                    class="ml-2 rounded-lg bg-[#238878] px-2 py-1 text-base font-medium text-white"
                  >
                    Save
                    {{ calculatePercentage(data.compareAtPrice, data.price) }}%
                  </span>
                </p>
                <p class="text-sm font-normal">Inclusive of all Taxes</p>
              </div>
            </div>

            <div v-if="data.requiresPrescription" class="mb-4 text-gray-500">
              <p
                class="my-2 flex items-center gap-2 text-sm font-bold text-[#238878]"
              >
                <ClipboardPlus />
                <span
                  >Doctor's Prescription Required.
                  <nuxt-link
                    to="/consultancy"
                    class="font-bold text-[#238878] underline"
                    >Consult Now</nuxt-link
                  ></span
                >
              </p>
            </div>
            <div class="mb-4 flex items-center gap-4">
              <div
                class="flex w-1/4 items-center justify-between rounded-lg border px-4 py-2"
              >
                <button
                  @click="decreaseQuantity"
                  class="text-2xl text-gray-800 hover:text-[#383e42]"
                >
                  -
                </button>
                <p class="text-lg text-gray-800">{{ quantity }}</p>
                <button
                  @click="increaseQuantity"
                  class="text-2xl text-gray-800 hover:text-[#383e42]"
                >
                  +
                </button>
              </div>
              <div>
                <ShopAddingToCartBtn
                  v-if="data.availableForSale"
                  :product-id="data.id"
                  :quantity="quantity"
                />
                <ShopProductCreateAnAlert
                  v-else
                  :product-id="data.productId"
                  :variant-id="data.id"
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
                <div class="mb-2 text-lg font-semibold text-gray-700"></div>
                <div class="flex flex-wrap gap-4 overflow-x-auto">
                  <div
                    v-for="(variant, variantIndex) in data.variants"
                    :key="variantIndex"
                    class="flex w-fit gap-6"
                  >
                    <nuxt-link
                      v-for="(variantValue, variantValueIndex) in variant"
                      :key="variantValueIndex"
                      class="min-w-48"
                      :to="{
                        query: createQueryFromSelectedOptions(
                          variantValue.node.selectedOptions,
                        ),
                      }"
                    >
                      <div class="rounded-lg border shadow-lg">
                        <div
                          class="rounded-t-md p-2 font-semibold text-white"
                          :class="{
                            'bg-[#383e42]': variantValue.node.id !== data.id,
                            'bg-[#238878]': variantValue.node.id === data.id,
                          }"
                        >
                          {{ item.name }} : {{ variantValue.node.title }}
                        </div>
                        <div class="mt-1 ps-2 text-gray-700">
                          {{ variantValue.node.price.currencyCode }}
                          {{ variantValue.node.price.amount }}
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <ShopCheckDelivery />

            <div
              class="rounded-xl border bg-white p-6 transition-all duration-300"
            >
              <div
                v-if="data.value === null"
                class="flex items-center justify-center text-gray-500"
              >
                <p class="text-lg">Loading product details...</p>
              </div>

              <div v-else class="text-md text-gray-700">
                <span v-if="!isExpanded && data.description" class="mb-4 block">
                  {{ truncatedDescription }}
                </span>
                <span v-else class="mb-4 block">
                  {{ data.description }}
                </span>
              </div>

              <button
                v-if="
                  data.description && data.description.split(' ').length > 20
                "
                @click="toggleDescription"
                class="mt-3 inline-block text-blue-600 transition duration-300 hover:text-blue-800 focus:outline-none"
              >
                <span class="text-sm font-medium">{{
                  isExpanded ? "Show Less" : "Show More"
                }}</span>
              </button>
            </div>

            <hr
              class="my-4 border-dashed border-gray-300"
              v-if="data.options?.title"
            />

            <div class="hidden lg:block">
              <swiper
                :slidesPerView="1"
                :spaceBetween="60"
                :loop="true"
                :autoplay="{ delay: 6000, disableOnInteraction: false }"
                :modules="modules"
                class="mySwiper responsive-height my-4 w-full"
              >
                <swiper-slide v-for="(item, index) in slides" :key="index">
                  <img
                    :src="item"
                    alt="Ad Banner"
                    class="flex w-full items-center justify-between rounded-lg object-fill lg:object-cover"
                  />
                </swiper-slide>
              </swiper>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              Free delivery on orders of ₹1,000 and above
            </div>

            <hr class="my-4 border-dashed border-gray-300" />
          </div>
        </div>
      </div>

      <div class="my-10 max-w-full lg:my-20">
        <div
          class="flex items-center justify-around space-x-2 border-b-2 border-gray-300"
        >
          <button
            v-for="(item, index) in accordionKeys"
            :key="index"
            @click="activeTab = index + 1"
            :class="
              activeTab === index + 1
                ? 'w-full bg-[#238878] text-white'
                : 'w-full border-b-2 border-transparent text-[#238878] hover:border-[#238878]'
            "
            class="rounded-md px-4 py-3 text-sm font-medium transition-colors duration-300"
          >
            {{ item.name }}
          </button>
        </div>
        <div class="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
          <div v-for="(item, index) in accordionKeys" :key="index">
            <ul class="px-4">
              <li
                v-if="activeTab === index + 1 && data[item.value]"
                class="text-gray-700"
              >
                <div
                  v-html="data[item.value].value.split('\n').join('<br />')"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">Related Products</h3>
        <ShopRelatedProducts
          v-if="data.productId"
          :product-id="data.productId"
        />
      </div>
    </div>
    <ShopProductReviews :product-id="data.productId" />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Star } from "lucide-vue-next";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { getProductData } from "~/shopify/productDetails";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import { ClipboardPlus } from "lucide-vue-next";
import "@websitebeaver/vue-magnifier/styles.css";

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

const isExpanded = ref(false);

const truncatedDescription = computed(() => {
  if (data.value?.description) {
    const words = data.value.description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return data.value.description;
  }
  return "";
});

const thumbClick = (index) => {
  currentThumbnail.value = index;
};

watch(
  () => route.query,
  async (newQuery) => {
    try {
      const product = await getProductData(productHandle, newQuery);
      data.value = product;
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  },
  { deep: true, immediate: true },
);

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

const createQueryFromSelectedOptions = (options) => {
  const query = {};
  for (const option of options) {
    query[option.name] = option.value;
  }
  return query;
};

const calculatePercentage = (compareAtPrice, price) => {
  return Math.floor(
    ((parseFloat(compareAtPrice?.amount) - parseFloat(price?.amount)) * 100) /
      parseFloat(compareAtPrice?.amount),
  );
};

// Toggle the expanded description state
const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
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

/* Default height for smaller screens */
.responsive-height {
  height: 100px;
}

/* Medium screens */
@media (min-width: 768px) {
  .responsive-height {
    height: 100px;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  .responsive-height {
    height: 100px;
  }
}

@media (min-width: 1440px) {
  .responsive-height {
    height: 150px;
  }
}
</style>
