<script setup lang="ts">
import getProductsByHandle, {
  type ProductBasicDetailsType,
} from "~/shopify/shop/get-products-by-handle";

const categories = [
  { value: "hair", title: "Hair" },
  { value: "skin", title: "Skin" },
  { value: "babyCare", title: "Baby Care" },
];

const productHandles: Record<string, string[]> = {
  hair: [
    "renocia-hair-revitalizingconditioner-110ml",
    "glenmark-hair-4-u-shampoo",
    "glenmark-hair-4-u-conditioner",
    "lot-o-hair-serum",
    "triflow-hair-conditioner-150ml",
  ],
  skin: [
    "adorfy-shampoo-dandruff-and-seborrhoeic-dermatitis",
    "dermatica-age-neutral-age-defying-cream",
    "dermatica-aze-proactive-lotion-30-ml",
    "dermatica-complexion-edt",
    "dermatica-ray-protect-barelyon-fluid-sunscreen-spf50",
  ],
  babyCare: [
    "ipca-keraglo-ad-shampoo-anti-dandruff",
    "ipca-keraglo-ad-lotion-50ml",
    "ipca-cutiyt-g12-lotion-30-ml",
    "ipca-cutimax-o-oat-moisturizing-lotion-60gm",
    "ipca-keraglo-men-bottle-of-30-tablets",
  ],
};
const fetchedProducts = useState<Record<string, ProductBasicDetailsType[]>>(
  "featured-products",
  () => ({
    hair: [],
    skin: [],
    babyCare: [],
  }),
);

const selectedCategory = ref(categories[0].value);

const changeCategory = (newCategory: string) => {
  selectedCategory.value = newCategory;
};

const fetchProductHandles = async () => {
  for (const key of Object.keys(productHandles)) {
    const products = await getProductsByHandle(productHandles[key]);
    fetchedProducts.value[key] = products;
  }
};

await fetchProductHandles();
</script>

<template>
  <section class="mt-5 px-4 font-serif md:mt-20">
    <h1 class="mb-6 text-center text-2xl text-gray-500 sm:text-3xl md:text-4xl">
      Top Deals
    </h1>
    <h2 class="text-center text-2xl font-bold text-[#238878] md:text-6xl">
      Featured Products
    </h2>

    <div class="my-4 flex justify-center text-lg md:my-12 md:text-2xl">
      <button
        v-for="category in categories"
        @click="changeCategory(category.value)"
        :class="{
          'bg-[#238878] text-white': selectedCategory === category.value,
          'bg-gray-300 text-[#238878]': selectedCategory !== category.value,
        }"
        class="mx-2 mb-2 rounded-full px-3 py-2 text-xs font-semibold md:px-20 md:text-base"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="mx-auto flex max-w-7xl flex-wrap gap-6 lg:flex-nowrap">
      <div class="w-full md:w-5/12">
        <div
          v-for="(product, index) in fetchedProducts[selectedCategory].slice(
            0,
            1,
          )"
          :key="product.handle"
          class="block h-full rounded-lg border p-4 font-sans no-underline md:rounded-3xl md:border-none md:shadow-lg"
        >
          <nuxt-link class="relative" :to="`/shop/product/${product.handle}`">
            <div class="absolute left-0 top-0 flex items-center gap-x-4">
              <span
                v-if="product.compareAtPrice.amount > product.price.amount"
                class="rounded bg-orange-500 px-2 py-1 text-xs font-semibold text-white sm:text-sm md:text-base"
                >Save
                {{
                  calculatePercentage(
                    product.price.amount,
                    product.compareAtPrice.amount,
                  )
                }}%</span
              >
              <span
                v-if="index === 0"
                class="rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white sm:text-sm md:text-base"
                >Best Price</span
              >
            </div>
            <img
              :src="product.featuredImage.url"
              :alt="product.featuredImage.altText || `Image | ${product.title}`"
              class="w-full rounded-md object-cover lg:h-96"
            />
          </nuxt-link>
          <div class="flex items-center justify-between gap-3">
            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="mt-4 flex rounded-full bg-gray-200 px-2 py-2"
            >
              <!-- Heart Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 31 30"
                fill="none"
              >
                <path
                  d="M15.5724 26.146C-8.74825 12.7035 8.27652 -1.88915 15.5724 7.33835C22.8692 -1.88916 39.894 12.7035 15.5724 26.146Z"
                  stroke="#1A1A1A"
                  stroke-width="2.1889"
                /></svg
            ></nuxt-link>

            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="mt-4 flex w-full justify-center gap-4 rounded-full bg-[#4ca9ee] px-4 py-2 text-base text-white md:text-lg"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M7.72213 10.0705H4.07396L1.64185 23.4471H23.5309L21.0988 10.0705H17.4506M7.72213 10.0705V6.42233C7.72213 3.73589 9.89992 1.55811 12.5864 1.55811V1.55811C15.2728 1.55811 17.4506 3.73589 17.4506 6.42233V10.0705M7.72213 10.0705H17.4506M7.72213 10.0705V13.7187M17.4506 10.0705V13.7187"
                  stroke="white"
                  stroke-width="1.89705"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="mt-4 flex rounded-full bg-gray-200 px-2 py-2"
              ><svg
                data-v-b581078d=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  data-v-b581078d=""
                  d="M15.0825 5.70947C5.9621 5.70947 2.31393 15.135 2.31393 15.135C2.31393 15.135 5.9621 24.5583 15.0825 24.5583C24.203 24.5583 27.8511 15.135 27.8511 15.135C27.8511 15.135 24.203 5.70947 15.0825 5.70947V5.70947Z"
                  stroke="#1A1A1A"
                  stroke-width="2.1889"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  data-v-b581078d=""
                  d="M15.0776 19.6951C16.2871 19.6951 17.447 19.2147 18.3022 18.3595C19.1574 17.5043 19.6378 16.3444 19.6378 15.1349C19.6378 13.9255 19.1574 12.7656 18.3022 11.9104C17.447 11.0552 16.2871 10.5747 15.0776 10.5747C13.8682 10.5747 12.7083 11.0552 11.8531 11.9104C10.9978 12.7656 10.5174 13.9255 10.5174 15.1349C10.5174 16.3444 10.9978 17.5043 11.8531 18.3595C12.7083 19.2147 13.8682 19.6951 15.0776 19.6951V19.6951Z"
                  stroke="#1A1A1A"
                  stroke-width="2.1889"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></nuxt-link>
          </div>

          <div class="mt-4 flex flex-col items-center">
            <!-- Responsive card name and price -->
            <h2
              class="my-4 text-lg font-semibold capitalize text-[#238878] md:text-2xl"
            >
              {{ product.title }}
            </h2>
            <p class="space-x-2 text-center lg:my-4">
              <span
                class="text-2xl font-bold text-[#4ca9ee] sm:text-3xl md:text-4xl"
                >₹{{ product.price.amount }}</span
              >
              <span
                class="text-lg text-slate-500 line-through sm:text-xl md:text-2xl"
                >₹{{ product.compareAtPrice.amount }}</span
              >
            </p>
            <div class="mt-2 flex w-full items-center gap-2">
              <ShopAddingToCartBtn
                v-if="product.variantId"
                :productId="product.variantId"
                class="text-md flex flex-1 cursor-pointer items-center justify-center rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
                redirectToCart
                >BUY NOW
              </ShopAddingToCartBtn>
              <nuxt-link
                v-else
                :to="`/shop/product/${product.handle}`"
                class="text-md flex-1 cursor-pointer rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
              >
                BUY NOW
              </nuxt-link>
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="hidden rounded-full bg-slate-300 p-1 opacity-80 md:block md:px-1 md:py-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-arrow-out-up-right h-6 w-6 p-1 lg:h-8 lg:w-8"
                >
                  <path
                    d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                  />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" /></svg
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div
        class="grid w-full grid-cols-2 gap-2 font-sans capitalize md:w-7/12 md:grid-cols-2 lg:gap-6"
      >
        <div
          v-for="(product, index) in fetchedProducts[selectedCategory].slice(1)"
          :key="product.handle"
          class="block h-full rounded-lg border p-4 no-underline md:rounded-3xl md:border-none md:shadow-lg"
        >
          <nuxt-link class="relative" :to="`/shop/product/${product.handle}`">
            <div class="absolute left-0 top-0 z-10 flex items-center gap-4">
              <span
                v-if="product.compareAtPrice.amount > product.price.amount"
                class="rounded bg-orange-500 px-2 py-1 text-xs font-semibold text-white sm:text-sm md:text-base"
                >Save
                {{
                  calculatePercentage(
                    product.price.amount,
                    product.compareAtPrice.amount,
                  )
                }}%</span
              >
              <span
                v-if="index === 0"
                class="rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white sm:text-sm md:text-base"
                >Best Price</span
              >
            </div>
            <div class="overflow-hidden">
              <img
                :src="product.featuredImage.url"
                :alt="
                  product.featuredImage.altText || `Image | ${product.title}`
                "
                class="w-full transform transition-transform duration-300 lg:hover:scale-150"
              />
            </div>
          </nuxt-link>

          <div class="mt-4 text-left">
            <!-- card name and price -->
            <h2 class="text-sm capitalize text-black lg:text-lg">
              {{ product.title }}
            </h2>
            <p class="mt-2 space-x-2">
              <span
                class="text-xl font-bold text-[#4ca9ee] sm:text-2xl md:text-2xl"
                >₹{{ product.price.amount }}</span
              >
              <span
                class="text-sm text-slate-600 line-through sm:text-lg md:text-xl"
                >₹{{ product.compareAtPrice.amount }}</span
              >
            </p>
            <div class="mt-2 flex items-center gap-2">
              <ShopAddingToCartBtn
                v-if="product.variantId"
                :productId="product.variantId"
                class="text-md flex flex-1 cursor-pointer items-center justify-center rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
                redirectToCart
                >BUY NOW
              </ShopAddingToCartBtn>
              <nuxt-link
                v-else
                :to="`/shop/product/${product.handle}`"
                class="text-md flex-1 cursor-pointer rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
              >
                BUY NOW
              </nuxt-link>
              <a
                :href="`/shop/product/${product.handle}`"
                class="hidden rounded-full bg-slate-300 p-1 opacity-80 md:block md:px-1 md:py-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-arrow-out-up-right h-6 w-6 p-1 lg:h-8 lg:w-8"
                >
                  <path
                    d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                  />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" /></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-auto max-w-7xl px-2 py-4 text-end font-sans text-base font-semibold text-[#4ca9ee] md:text-2xl"
    >
      <nuxt-link to="/shop">View All →</nuxt-link>
    </div>
  </section>
</template>

<style scoped></style>
