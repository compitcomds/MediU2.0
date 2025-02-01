<template>
  <div
    class="mx-auto mb-16 flex w-full flex-col px-6 sm:px-10 lg:mb-0 lg:py-10"
  >
    <!-- Professional heading -->
    <div class="rounded-lg p-3 text-left">
      <h1
        class="text-center text-2xl font-extrabold text-black md:text-4xl lg:mb-8"
      >
        Hello
        <span class="capitalize text-yellow-500">{{
          selfAssessmentStore.step1.name
        }}</span
        >, <br />
        Based on your condition, we recommend the following medicines for your
        recovery.
      </h1>
      <p
        class="mx-auto hidden max-w-3xl text-center text-lg italic text-gray-600 sm:text-xl lg:block"
      >
        We have carefully selected these products to help you on your path to
        better health.
      </p>
    </div>

    <!-- Card Section -->
    <div class="my-2">
      <div class="mb-6 text-center text-2xl font-bold">
        <span class="text-slate-500">{{ selfAssessmentStore.step3.name }}</span>
        Cure Recommended Medicines:
      </div>

      <div class="mb-10 mt-6 flex items-center justify-center gap-5">
        <button
          v-for="category in categories"
          :key="category.value"
          :class="[
            'rounded-full border px-4 py-2 transition duration-300 ease-in-out',
            selectedCategory === category.value
              ? 'border-[#238878] bg-[#238878] text-white'
              : 'border-gray-200 bg-gray-200 text-[#238878]',
            'hover:bg-[#1f4d42] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#238878]',
          ]"
          @click="selectCategory(category.value)"
        >
          {{ category.name }}
        </button>
      </div>

      <ShopCard :productDetails="products" name="Add To Cart" />

      <div
        class="grid grid-cols-1 place-items-center justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(detail, index) in products"
          :key="index"
          class="flex w-full justify-center"
        >
          <div
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-md"
          >
            <nuxt-link class="relative block">
              <!-- Sale badge -->
              <span
                v-if="detail.isOnSale"
                class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white"
              >
                Sale {{ detail.salePercentage }}%
              </span>

              <!-- Product Image -->
              <img
                :src="detail.image || 'https://placehold.co/250x250'"
                class="h-48 w-full rounded-t-lg object-cover"
                alt="Problem detail image"
              />
            </nuxt-link>

            <div class="mt-4 space-y-4">
              <nuxt-link class="block">
                <h3
                  class="truncate font-serif text-lg font-semibold capitalize text-black md:text-xl"
                >
                  {{ detail.title }}
                </h3>
              </nuxt-link>

              <div class="flex justify-between text-lg">
                <div>
                  <span class="font-bold text-[#238878]">
                    {{ detail.currency }} {{ detail.price }}
                  </span>
                  <p
                    class="mt-1 text-sm font-bold italic text-gray-500 line-through"
                    v-if="detail.discountPrice"
                  >
                    {{ detail.currency }} {{ detail.discountPrice }}
                  </p>
                </div>
                <div>
                  <ShopSharebtn />
                </div>
              </div>
            </div>

            <div class="mt-4 flex gap-2">
              <nuxt-link
                class="text-md flex-1 cursor-pointer rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
              >
                BUY NOW
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="products?.length === 0" class="col-span-full text-center">
          <p class="italic text-gray-500">
            No details available for this problem.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";

const selfAssessmentStore = useSelfAssessmentStore();
const router = useRouter();

if (!selfAssessmentStore.step1.name) router.replace("/self-assessment");
else if (!selfAssessmentStore.step2.condition)
  router.replace("/self-assessment/step2");
else if (!selfAssessmentStore.step3.problem)
  router.replace("/self-assessment/step3");

const categories = [
  { name: "Cleanser", value: "cleanser" },
  { name: "Washer", value: "washer" },
  { name: "Cleaner", value: "cleaner" },
];

const selectedCategory = ref(categories[0].value);

const products = ref();
await getProductsRelatedToCategory();

async function selectCategory(value) {
  selectedCategory.value = value;
  await getProductsRelatedToCategory();
}

async function getProductsRelatedToCategory() {
  const data = await fetchProducts({
    query: `(tag:${selfAssessmentStore.step3.problem}-${selectedCategory.value})`,
  });
  products.value = data.products;
  return data.products;
}

useHead({
  title: "Self Assessment - Recommended Products - Mediu",
  meta: [
    { name: "description", content: "Self Assessment - Recommended Products" },
    {
      name: "og:title",
      content: "Self Assessment - Recommended Products - Mediu",
    },
    {
      name: "og:description",
      content: "Self Assessment - Recommended Products",
    },
    { name: "keywords", content: `Mediu, Self Assessment, health, wellness` },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
