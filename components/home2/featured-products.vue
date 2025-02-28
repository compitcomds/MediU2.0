<script setup lang="ts">
import { type ProductBasicDetailsType } from "~/shopify/shop/get-products-by-handle";
import getProductsByTag from "~/shopify/shop/get-product-by-tags";

const categories = [
  {
    value: "hair",
    title: "Hair",
    tag: "home-featured-product-hair",
    featuredTag: "featured-home-hair",
  },
  {
    value: "skin",
    title: "Skin",
    tag: "home-featured-product-skin",
    featuredTag: "featured-home-skin",
  },
  {
    value: "babyCare",
    title: "Baby Care",
    tag: "home-featured-product-baby",
    featuredTag: "featured-home--baby",
  },
];

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
  for (const category of categories) {
    const featuredProducts = await getProductsByTag(category.featuredTag);
    const products = await getProductsByTag(category.tag);
    fetchedProducts.value[category.value] = [...featuredProducts, ...products];
    console.log(featuredProducts, products);
  }
};

await fetchProductHandles();
</script>

<template>
  <section class="mt-5 px-4 font-serif md:mt-20">
    <h1
      class="mb-6 text-center font-serif text-2xl text-gray-500 sm:text-3xl md:text-4xl"
    >
      Top Deals
    </h1>
    <h2
      class="text-center font-serif text-2xl font-bold text-[#238878] md:text-6xl"
    >
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
          <nuxt-link class="relative">
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
          <div class="mt-4 flex flex-col">
            <!-- Responsive card name and price -->
            <h2 class="my-4">
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="text-lg font-semibold capitalize text-black hover:text-[#238878] md:text-2xl"
                >{{ product.title }}</nuxt-link
              >
            </h2>
            <p class="my-1 line-clamp-4 lg:line-clamp-6">
              {{ product.description.slice(0, 300) }}
            </p>
            <p class="flex items-center justify-start gap-x-2 lg:my-4">
              <span
                class="text-2xl font-bold text-[#4ca9ee] sm:text-3xl md:text-4xl"
                >₹{{ product.price.amount }}</span
              >
              <span
                class="text-lg text-slate-500 line-through sm:text-xl md:text-2xl"
                >₹{{ product.compareAtPrice.amount }}</span
              >
            </p>
          </div>
          <div class="flex items-center justify-between gap-3">
            <WishlistButton
              :handle="product.handle"
              class="mt-4 flex h-full w-8 rounded-full bg-gray-200 px-2 py-2 lg:w-12"
            />
            <ShopAddingToCartBtn
              v-if="product.variantId"
              :productId="product.variantId"
              class="text-md mt-4 flex w-full flex-1 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#238878] p-2 px-4 py-2 text-center text-base font-semibold text-white shadow md:text-lg"
              redirectToCart
              >BUY NOW
            </ShopAddingToCartBtn>
            <nuxt-link
              v-else
              :to="`/shop/product/${product.handle}`"
              class="mt-4 flex w-full justify-center gap-4 rounded-full bg-[#238878] px-4 py-2 text-base text-white md:text-lg"
            >
              SHOP NOW
            </nuxt-link>
            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="mt-4 flex rounded-full bg-gray-200 px-2 py-2"
              ><span class="sr-only">View: {{ product.title }}</span
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

      <div
        class="grid w-full grid-cols-2 gap-2 font-sans capitalize md:w-7/12 md:grid-cols-2 lg:gap-6"
      >
        <div
          v-for="(product, index) in fetchedProducts[selectedCategory].slice(1)"
          :key="product.handle"
          class="flex h-full flex-col rounded-lg border p-4 no-underline md:rounded-3xl md:border-none md:shadow-lg"
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

          <div class="mt-4 flex flex-1 flex-col text-left">
            <h2 class="text-sm capitalize text-black lg:text-lg">
              {{ product.title }}
            </h2>
            <p class="mb-2 mt-auto line-clamp-1 space-x-2 truncate">
              <span
                class="text-xl font-bold text-[#4ca9ee] sm:text-2xl md:text-2xl"
                >₹{{ product.price.amount }}</span
              >
              <span
                class="text-sm text-slate-600 line-through sm:text-lg md:text-xl"
                >₹{{ product.compareAtPrice.amount }}</span
              >
            </p>
            <div class="flex items-center gap-2 lg:mt-2">
              <ShopAddingToCartBtn
                v-if="product.variantId"
                :productId="product.variantId"
                class="md:text-md flex flex-1 cursor-pointer items-center justify-center rounded-full bg-[#238878] p-2 text-center text-xs font-semibold text-white shadow"
                redirectToCart
                >BUY NOW
              </ShopAddingToCartBtn>
              <nuxt-link
                v-else
                :to="`/shop/product/${product.handle}`"
                class="md:text-md flex-1 cursor-pointer rounded-full bg-[#238878] p-2 text-center text-xs font-semibold text-white shadow"
              >
                BUY NOW
              </nuxt-link>
              <a
                :href="`/shop/product/${product.handle}`"
                class="hidden rounded-full bg-slate-300 p-1 opacity-80 md:block md:px-1 md:py-1"
              >
                <span class="sr-only">View: {{ product.title }}</span
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
