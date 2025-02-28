<script setup lang="ts">
import { type ProductBasicDetailsType } from "~/shopify/shop/get-products-by-handle";
import getProductsByTag from "~/shopify/shop/get-product-by-tags";

const categories = [
  {
    value: "hairSerum",
    title: "Hair Serum",
    tag: "home-hair-care-must-haves-hair-serum",
  },
  {
    value: "shampooAndConditioner",
    title: "Shampoo and Conditioner",
    tag: "home-hair-care-must-haves-Shampoo-and-conditioner",
  },
  {
    value: "minoxidil",
    title: "Minoxidil",
    tag: "home-hair-care-must-haves-minoxidil",
  },
];

const fetchProductHandles = async () => {
  const data: Record<string, ProductBasicDetailsType[]> = {};
  for (const category of categories) {
    const products = await getProductsByTag(category.tag);
    data[category.value] = products;
  }
  return data;
};

const fetchedProducts = await fetchProductHandles();

const selectedCategory = ref(categories[0].value);

const changeCategory = (newCategory: string) => {
  selectedCategory.value = newCategory;
};

const diffSectionId = "hair-care-diff";
const adjustResizerWidth = () => {
  const section = document.getElementById(diffSectionId);
  if (section) {
    const resizer = section.querySelector<HTMLDivElement>(".diff-resizer");
    if (resizer) {
      resizer.style.width = `${section.offsetWidth / 2}px`;
    }
  }
};

onMounted(() => {
  adjustResizerWidth();
  window.addEventListener("resize", adjustResizerWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", adjustResizerWidth);
});
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-6 py-8 font-serif">
    <div class="mb-5 flex flex-col lg:mb-12 lg:gap-y-6">
      <h1
        class="text-center font-serif text-2xl text-gray-500 sm:text-3xl md:text-4xl"
      >
        Nourishing Treatments
      </h1>
      <h2
        class="text-center font-serif text-2xl font-bold text-[#238878] md:text-6xl"
      >
        Hair Care Must-Haves
      </h2>
    </div>

    <div class="responsive-div mb-8 flex flex-col overflow-hidden lg:flex-row">
      <!-- Image Section - Hidden for sm and md views -->
      <div id="hair-care-diff" class="hidden w-full md:w-4/12 lg:block">
        <div class="diff lg:aspect-[9/18] xl:aspect-[9/18] xxl:aspect-[9/17]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/6.png" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/5.png" />
          </div>
          <div class="diff-resizer w-56">Drag</div>
        </div>
      </div>
      <!-- Products Section -->
      <div class="w-full lg:ml-4 lg:w-8/12">
        <div
          class="mb-4 flex justify-center gap-2 px-4 text-xl lg:justify-between"
        >
          <button
            v-for="category in categories"
            @click="changeCategory(category.value)"
            :class="{
              'bg-[#238878] text-white': selectedCategory === category.value,
              'bg-slate-300 text-black': selectedCategory !== category.value,
            }"
            class="w-full rounded-full px-1 py-2 text-xs md:px-4 md:text-base"
          >
            {{ category.title }}
          </button>
        </div>
        <!-- Grid for Products -->
        <div
          class="grid h-auto grid-cols-2 gap-2 font-sans md:gap-6 lg:grid-cols-3"
        >
          <!-- Products -->
          <div
            v-for="product in fetchedProducts[selectedCategory]"
            :key="product.handle"
            class="block overflow-hidden rounded-lg border no-underline md:rounded-2xl md:border-none md:shadow-md"
          >
            <div class="relative">
              <span
                v-if="product.compareAtPrice.amount > product.price.amount"
                class="absolute right-2 top-1 rounded bg-orange-500 px-2 py-1 text-xs text-white"
                >Save
                {{
                  calculatePercentage(
                    product.price.amount,
                    product.compareAtPrice.amount,
                  )
                }}%</span
              >
              <nuxt-link :to="`/shop/product/${product.handle}`">
                <img
                  :src="product.featuredImage.url"
                  class="h-32 w-full md:h-auto lg:hover:scale-110"
                  :alt="
                    product.featuredImage.altText || `Image | ${product.title}`
                  "
              /></nuxt-link>
            </div>
            <div class="mt-4 space-y-2 p-4">
              <nuxt-link :to="`/shop/product/${product.handle}`">
                <h3 class="text-xs capitalize text-black md:text-xl">
                  {{ product.title }}
                </h3></nuxt-link
              >
              <div
                class="flex items-center gap-1 text-sm sm:text-lg md:text-xl"
              >
                <p class="font-bold text-[#4ca9ee]">
                  ₹{{ product.price.amount }}
                </p>
                <p
                  class="sm:text-md text-sm text-gray-500 line-through"
                  v-if="product.compareAtPrice.amount > product.price.amount"
                >
                  ₹{{ product.compareAtPrice.amount }}
                </p>
              </div>
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
                <nuxt-link
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
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 text-right md:text-end">
          <a href="/shop" class="text-sm text-[#4ca9ee] md:text-2xl"
            >Explore More →</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
