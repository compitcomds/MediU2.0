<template>
  <div class="w-full mx-auto px-6 sm:px-10 flex flex-col lg:py-10 mb-16 lg:mb-0">
    <!-- Professional heading -->
    <div class="p-3 rounded-lg text-left">
      <h1 class="text-2xl md:text-4xl font-extrabold text-black text-center lg:mb-8">
        Hello <span class="text-yellow-500 capitalize">{{ name }}</span>, <br />
        Based on your condition, we recommend the following medicines for your recovery.
        
      </h1>
      <p class="text-gray-600 hidden lg:block text-center text-lg sm:text-xl max-w-3xl mx-auto ">
        We have carefully selected these products to help you on your path to better health.
      </p>
    </div>

    <!-- Card Section -->
    <div class="my-2">
      <div v-if="problemDetails.length" class="text-2xl font-bold text-center mb-6">
        <span class="text-slate-500">{{ problem }}</span> Cure Recommended Medicines:
      </div>

      <!-- Grid for cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        <!-- Card component -->
        <div v-for="(detail, index) in problemDetails" :key="index" class="flex justify-center w-full">
          <div class="border px-4 py-2 rounded-lg border-gray-300 shadow-md bg-white w-full">
            <nuxt-link
              :to="`/self_assissment/problem/${encodeURIComponent(problem)}/detail/${encodeURIComponent(detail.title)}`"
              class="relative block">
              <!-- Sale badge -->
              <span v-if="detail.isOnSale"
                class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale {{ detail.salePercentage }}%
              </span>

              <!-- Product Image -->
              <img :src="detail.image || 'https://placehold.co/250x250'" class="w-full h-48 object-cover rounded-t-lg"
                alt="Problem detail image" />
            </nuxt-link>

            <div class="space-y-4 mt-4">
              <nuxt-link
                :to="`/self_assissment/problem/${encodeURIComponent(problem)}/detail/${encodeURIComponent(detail.title)}`"
                class="block">
                <h3 class="text-black font-serif text-lg md:text-xl font-semibold capitalize truncate">
                  {{ detail.title }}
                </h3>
              </nuxt-link>

              <div class="flex justify-between text-lg">
                <div>
                  <span class="text-[#28574E] font-bold">
                    {{ detail.currency }} {{ detail.price }}
                  </span>
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
              <!-- <ShopAddingToCartBtn :product-id="detail.handle" /> -->
              <nuxt-link :to="`/shop/product/${detail.handle}`"
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold text-center cursor-pointer">
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
        "Oily Skin":{
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
              title: "Melarid Face Wash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Aziclear Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Skin Inspired Mattifunng Gel Moisturizer",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Rivela Lite/Bronze Sunscreen",
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
              title: "Saslic Face Wash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Sebuna AC Gel",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Acne-OC Moisturizer",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Acne-UV Gel Sunscreen",
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
              title: "Ahaglow-S  Face Wash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Sebonia Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Skin Inspired Mattifunng Gel Moisturizer",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "LA-Shield Sunscreen",
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
        "Normal Skin":{
          "Uneven Skin Tone": [
            {
              title: "Biluma Advance Brightening Facewash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Cetaphil Bright & Healthy Radiance Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Biluma Advance Day Cream",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Seekaus Hudra Sunscreen",
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
              title: "Cetaphil Bright & Healthy Radiance Facewash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Aziclear Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Fixderma Shadow Tinted Sunscreen",
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
              title: "Aziclear Face Wash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Sebalex Creamy Gel",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Excela Antiacne Moisturizer",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Seekaus Hudra Sunscreen",
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
              title: "Saslic Face Wash",
              currency: "INR",
              price: "15",
              discountPrice: "20",
              image: "https://placehold.co/250x250",
              handle: "foaming-cleanser",
              isOnSale: true,
              salePercentage: 5,
            },
            
            {
              title: "Sebonia Serum",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "Skin Inspired Mattifunng Gel Sunscreen",
              currency: "INR",
              price: "18",
              discountPrice: 250,
              image: "https://placehold.co/250x250",
              handle: "cream-cleanser",
              isOnSale: false,
              salePercentage: 0,
            },
            {
              title: "LA-Shield Sunscreen",
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
