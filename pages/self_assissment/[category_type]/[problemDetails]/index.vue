<template>
  <div class="w-full mx-auto px-10 flex flex-col lg:py-10 mb-16 lg:mb-0">
    <div class="p-6 rounded-lg text-left">
      <h1 class="text-2xl font-semibold text-black">
        Hii <span class="text-yellow-500 capitalize">{{ name }}</span>, by analyzing your condition, we recomended the health care medicines for your cure...
      </h1>
    </div>
    <!-- <div class="p-6 rounded-lg">
      <h1 class="text-3xl text-black">
        These are the medicines 
      </h1>
    </div> -->

    <div class="my-2">
      <div v-if="problemDetails.length" class="text-xl font-bold mb-4 px-6">
        Cure Medicines:
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        <div v-for="(detail, index) in problemDetails" :key="index" class="flex justify-center p-4">
          <div class="border px-4 py-2 rounded-lg border-gray-300 shadow-md bg-white w-80">
            <nuxt-link :to="`/self_assissment/problem/${encodeURIComponent(problem)}/detail/${encodeURIComponent(detail.title)}`" class="relative block">
              <!-- Sale badge -->
              <span v-if="detail.isOnSale" class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale {{ detail.salePercentage }}%
              </span>

              <img :src="detail.image || 'https://placehold.co/250x250'" class="w-full h-48 object-cover rounded-t-lg" alt="Problem detail image" />
            </nuxt-link>

            <div class="space-y-4 mt-4">
              <nuxt-link :to="`/self_assissment/problem/${encodeURIComponent(problem)}/detail/${encodeURIComponent(detail.title)}`" class="block">
                <h3 class="text-black font-serif text-xl lg:text-lg font-semibold capitalize truncate">
                  {{ detail.title }}
                </h3>
              </nuxt-link>

              <div class="flex justify-between text-xl">
                <div>
                  <p class="text-[#28574E] font-bold">
                    {{ detail.currency }} {{ detail.price }}
                  </p>
                  <p class="text-gray-500 text-sm font-bold line-through mt-1" v-if="detail.discountPrice">
                    {{ detail.currency }} {{ detail.discountPrice }}
                  </p>
                </div>
                <div>
                  <ShopSharebtn :product-link="`shop/product/${detail.handle}`" />
                </div>
              </div>
            </div>

            <div class="flex gap-2 mt-4">
              <nuxt-link :to="`/shop/product/${detail.handle}`" class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold text-center cursor-pointer">
                BUY NOW
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="problemDetails.length === 0" class="col-span-full text-center">
          <p class="text-gray-500">No details available for this problem.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const name = route.query.name;
    const sex = route.query.sex;
    const age = route.query.age;
    const condition = decodeURIComponent(route.query.condition);
    const categoryId = route.query.categoryId;
    const problem = decodeURIComponent(route.query.problem);

    // Mock data structure to simulate the problem and product details
    const problemData = {
      skin: {
        "Dry / Irritated Skin": {
          "Dry / Irritated Skin": [
            {
              title: "Cleanser",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            {
              title: "Physio Gel",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "LA-Shield Figio Sunscreen",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
          ],
          "Uneven Skin Tone": [
            {
              title: "Cleanser",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Olesoft-Lite",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
          ],
          "Pigmentation": [
            {
              title: "Cleanser",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Sunscreen",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
          ],
          "Acne": [
            {
              title: "Cleanser",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Sunscreen",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Moisturizer",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
          ],
          "Enlarged Pores": [
            {
              title: "CBTAPHIL GENTLE CLEANSER",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "SEBONIA SERUM",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "CUTIMAX-0",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "BLYNDS EMUGEL SUNSCREEN",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
          ],
        },
      },
      // Other categories...
    };

    const problemDetails = ref([]);
    const problemTypes = ref([]);

    const selectProblemType = (type) => {
      router.push({
        query: {
          ...route.query,
          problem: type,
        },
      });
    };

    watchEffect(() => {
      const currentCategory = problemData[categoryId] || {};
      const currentCondition = currentCategory[condition] || {};

      problemTypes.value = Object.keys(currentCondition);
      problemDetails.value = currentCondition[problem] || [];
    });

    return {
      condition,
      categoryId,
      problem,
      problemDetails,
      problemTypes,
      selectProblemType,
      name, sex, age,
    };
  },
};
</script>

<style scoped></style>
