<template>
  <div
    class="w-full mx-auto px-6 sm:px-10 flex flex-col lg:py-10 mb-16 lg:mb-0"
  >
    <!-- Professional heading -->
    <div class="p-3 rounded-lg text-left">
      <h1
        class="text-2xl md:text-4xl font-extrabold text-black text-center lg:mb-8"
      >
        Hello
        <span class="text-yellow-500 capitalize">{{
          selfAssessmentStore.step1.name
        }}</span
        >, <br />
        Based on your condition, we recommend the following medicines for your
        recovery.
      </h1>
      <p
        class="text-gray-600 hidden lg:block text-center text-lg sm:text-xl max-w-3xl mx-auto"
      >
        We have carefully selected these products to help you on your path to
        better health.
      </p>
    </div>

    <!-- Card Section -->
    <div class="my-2">
      <div class="text-2xl font-bold text-center mb-6">
        <span class="text-slate-500">{{ selfAssessmentStore.step3.name }}</span>
        Cure Recommended Medicines:
      </div>

      <div class="flex justify-center items-center gap-5 mt-6 mb-10">
        <button
          v-for="category in categories"
          :key="category.value"
          :class="[
            'px-4 py-2 rounded-full border transition duration-300 ease-in-out',
            selectedCategory === category.value
              ? 'bg-[#28574E] text-white border-[#28574E]' // Active button (Primary background, white text)
              : 'bg-gray-200 text-[#28574E] border-gray-200', // Inactive button (Light gray background, primary text)
            'hover:bg-[#1f4d42] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#28574E]',
          ]"
          @click="selectCategory(category.value)"
        >
          {{ category.name }}
        </button>
      </div>

      <ShopCard :productDetails="products" name="Add To Cart" />

      <!-- Grid for cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center"
      >
        <!-- Card component  -->
        <div
          v-for="(detail, index) in products"
          :key="index"
          class="flex justify-center w-full"
        >
          <div
            class="border px-4 py-2 rounded-lg border-gray-300 shadow-md bg-white w-full"
          >
            <nuxt-link class="relative block">
              <!-- Sale badge -->
              <span
                v-if="detail.isOnSale"
                class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >
                Sale {{ detail.salePercentage }}%
              </span>

              <!-- Product Image -->
              <img
                :src="detail.image || 'https://placehold.co/250x250'"
                class="w-full h-48 object-cover rounded-t-lg"
                alt="Problem detail image"
              />
            </nuxt-link>

            <div class="space-y-4 mt-4">
              <nuxt-link class="block">
                <h3
                  class="text-black font-serif text-lg md:text-xl font-semibold capitalize truncate"
                >
                  {{ detail.title }}
                </h3>
              </nuxt-link>

              <div class="flex justify-between text-lg">
                <div>
                  <span class="text-[#28574E] font-bold">
                    {{ detail.currency }} {{ detail.price }}
                  </span>
                  <p
                    class="text-gray-500 text-sm font-bold line-through mt-1"
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

            <div class="flex gap-2 mt-4">
              <!-- <ShopAddingToCartBtn :product-id="detail.handle" /> -->
              <nuxt-link
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold text-center cursor-pointer"
              >
                BUY NOW
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="products?.length === 0" class="col-span-full text-center">
          <p class="text-gray-500">No details available for this problem.</p>
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
</script>

<style scoped>
/* Custom styles for cards, heading, and centering */
.grid {
  display: grid;
  justify-content: center;
}
p {
  font-style: italic;
}
</style>
