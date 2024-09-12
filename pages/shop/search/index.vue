<template>
  <div class="grid grid-cols-12">
    <div class="hidden sm:block lg:col-span-3 md:col-span-4 xl:col-span-2 ms-7">
      <ShopFilterbar />
    </div>

    <div
      class="lg:co l-span-9 md:col-span-8 col-span-12 xl:col-span-10 md:me-7 mt-3"
    >
      <ShopBanner />
      <!-- <ShopCard :productDetails="productDetails" /> -->
      <div class="my-2">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
        >
          <div
            v-for="(product, index) in productDetails"
            :key="index"
            class="flex justify-center"
          >
            <div
              class="border px-4 py-2 rounded-lg block no-underline border-gray-300 shadow-md"
            >
              <div class="relative">
                <span
                  v-if="true"
                  class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                  >Sale 5%</span
                >
                <img :src="product.image" class="min-h-48 max-h-52" alt="" />
              </div>
              <div class="space-y-4 flex flex-col justify-between">
                <NuxtLink :to="`/shop/product/${product.handle}`">
                  <h3
                    class="text-black capitalize font-serif text-xl min-h-10 max-h-12 lg:text-lg mt-2"
                  >
                    {{ product.title }}
                  </h3>
                </NuxtLink>
                <div class="flex justify-between text-xl">
                  <div>
                    <p class="text-[#28574E] font-bold">
                      {{ product.currency }} {{ product.price }}
                    </p>
                    <p
                      class="text-gray-500 text-sm font-bold line-through"
                      v-if="true"
                    >
                      {{ product.currency }} 1000
                    </p>
                  </div>
                  <ShopAddingToCartBtn />
                </div>
                <ShopAddToCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import shopifySearchProducts from "~/shopify/search/search";
// import { getFilters } from "~/shopify/productFilters";

const route = useRoute();

const productDetails = ref([]);

const shopStore = useShopStore();
const { shopifyProductsQuery } = storeToRefs(shopStore);

const fetchProductsUsingSearchQuery = async (newQuery) => {
  const products = await shopifySearchProducts(newQuery?.search || "");
  productDetails.value = products;
};

watch(() => route.query, fetchProductsUsingSearchQuery, { deep: true });

onMounted(() => {
  fetchProductsUsingSearchQuery(route.query);
});

// const { filters } = await getFilters();
// console.log(filters);
const isDrawerOpen = ref(false);
let currentPage = 1;
const perPage = 30;
</script>
