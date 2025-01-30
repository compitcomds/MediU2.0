<template>
  <div
    class="mb-3 rounded-lg bg-white px-2 pb-10 pt-5 sm:mb-6 md:pb-10 lg:mb-10 lg:p-6 lg:pb-0 lg:pt-14"
  >
    <div v-if="!!data" class="px-2 md:px-5 lg:px-0">
      <div class="grid grid-cols-5 gap-6 md:grid-cols-5">
        <div class="col-span-5 space-y-6 lg:col-span-2">
          <ShopProductImages :images="data.images" />
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
          <h1 class="text-3xl font-semibold text-gray-900">
            {{ data.title }}
          </h1>
          <div class="text-md text-cyan-500">
            {{ data?.productSubtitle?.value || "" }}
          </div>

          <div class="flex items-center space-x-3 text-gray-700">
            <div class="flex items-center gap-1 text-yellow-500">
              <StarsOutOfFive
                :rating="rating.averageRating"
                :class="'w-28 text-xs'"
              />
              <p class="font-medium">{{ rating.averageRating }}</p>
            </div>
            <div>|</div>
            <div class="text-gray-500">
              {{ rating.reviews }} Verified Ratings
            </div>
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
                    class="my-2 block max-w-fit rounded-lg bg-[#238878] px-2 py-1 text-xs font-medium text-white sm:my-0 sm:ml-2 sm:inline-block sm:text-base"
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
                  :deactivate="invalidDeliveryPincode"
                />
                <ShopProductCreateAnAlert
                  v-else
                  v-if="data.productId && data.id"
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

            <ShopCheckDelivery v-model:deactivate="invalidDeliveryPincode" />

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
            <div class="mt-2 text-sm text-gray-600">
              Free delivery on orders of ₹1,000 and above
            </div>

            <hr class="my-4 border-dashed border-gray-300" />
          </div>
        </div>
      </div>

      <div class="my-10 max-w-full lg:my-20">
        <div
          class="flex max-w-full items-center justify-around overflow-x-auto border-b-2 border-gray-300 md:gap-x-2"
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
            class="min-w-fit text-nowrap rounded-md px-2 py-3 text-xs font-medium transition-colors duration-300 md:px-4 md:text-sm"
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
    <ShopProductReviews
      v-if="!!data"
      :product-id="data.productId"
      @update:rating="updateRating"
    />
  </div>
</template>

<script setup>
import { getProductData } from "~/shopify/productDetails";
import { ClipboardPlus } from "lucide-vue-next";
import getProductMetadata from "~/shopify/get-product-metadata";

const activeTab = ref(1);
const route = useRoute();
const productHandle = route.params.productSlug;

const productMetadata = await getProductMetadata(productHandle);

const rating = ref({
  averageRating: 5,
  reviews: 0,
});

const updateRating = (r) => {
  rating.value = r;
};

const { data } = await useLazyAsyncData(
  productHandle,
  () => getProductData(productHandle, route.query),
  { watch: [() => route.query] },
);

const quantity = ref(1);

const invalidDeliveryPincode = ref(false);

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

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

const productMetaTags = `${productMetadata.tags?.join(", ") || ""}`;

useHead({
  title: `${productMetadata.title} - Mediu`,
  meta: [
    { name: "description", content: productMetadata.description },
    { name: "og:title", content: `${productMetadata.title} - Mediu` },
    { name: "og:description", content: productMetadata.description },
    { name: "og:image", content: productMetadata.featuredImage.url },
    { name: "og:image:secure_url", content: productMetadata.featuredImage.url },
    {
      name: "keywords",
      content: `Mediu, Shop, health, wellness${productMetaTags.length > 0 ? "," : ""} ${productMetaTags} - ${productMetadata.title}`,
    },
    { name: "og:type", content: "product" },
    { name: "og:site_name", content: "Mediu" },
    {
      name: "og:url",
      content: `https://mediu.in/shop/product/${productHandle}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${productMetadata.title} - Mediu` },
    { name: "twitter:description", content: productMetadata.description },
    { name: "twitter:image", content: productMetadata.featuredImage.url },
    { name: "twitter:price:amount", content: productMetadata.price.amount },
    {
      name: "twitter:price:currency",
      content: productMetadata.price.currencyCode,
    },
  ],
});
</script>

<style scoped></style>
