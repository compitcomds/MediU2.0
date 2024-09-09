<template>
  <div class="mb-10">
    <h1 class="text-3xl mb-2 text-center text-[#8D8BA7]">Top Picks</h1>
    <h1 class="text-3xl font-bold mb-10 text-center text-[#28574E]">
      Featured Products
    </h1>
    <div class="flex justify-center my-10">
      <button @click="filterProducts('Skin')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Skin',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Skin',
      }" class="px-4 py-2 rounded-full mx-2">
        Skin
      </button>
      <button @click="filterProducts('Hair')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Hair',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Hair',
      }" class="px-4 py-2 rounded-full mx-2">
        Hair
      </button>
      <button @click="filterProducts('Child')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Child',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Child',
      }" class="px-4 py-2 rounded-full mx-2">
        Child
      </button>
    </div>
    <div class="flex flex-wrap lg:flex-nowrap gap-6">
      <!-- First product card on the left -->
      <div class="w-full lg:w-5/12">
        <nuxt-link v-for="product in filteredProducts.slice(0, 1)" :key="product.link" :to="product.link"
          class="border p-4 rounded-lg shadow-lg h-full block no-underline">
          <div class="relative">
            <span v-if="product.isOnSale"
              class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale
              50%</span>
            <span v-if="product.isBestSeller"
              class="absolute top-0 left-[80px] bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Best
              Sale</span>
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover rounded-md" />
          </div>
          <div class="flex justify-between items-center gap-3">
            <nuxt-link to="#" class="flex bg-slate-200 mt-4 rounded-full px-1 py-1"><svg xmlns="http://www.w3.org/2000/svg"
                width="31" height="30" viewBox="0 0 31 30" fill="none">
                <path
                  d="M15.5724 26.146C-8.74825 12.7035 8.27652 -1.88915 15.5724 7.33835C22.8692 -1.88916 39.894 12.7035 15.5724 26.146Z"
                  stroke="#1A1A1A" stroke-width="2.1889" />
              </svg></nuxt-link>
            <div class="flex mt-4 justify-center bg-[#28574E] w-full text-white text-lg px-4 py-2 rounded-full gap-4">
              <button>Shop Now</button>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M7.72213 10.0705H4.07396L1.64185 23.4471H23.5309L21.0988 10.0705H17.4506M7.72213 10.0705V6.42233C7.72213 3.73589 9.89992 1.55811 12.5864 1.55811V1.55811C15.2728 1.55811 17.4506 3.73589 17.4506 6.42233V10.0705M7.72213 10.0705H17.4506M7.72213 10.0705V13.7187M17.4506 10.0705V13.7187"
                  stroke="white" stroke-width="1.89705" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <nuxt-link to="#" class="flex bg-slate-200 mt-4 rounded-full px-1 py-1"><svg xmlns="http://www.w3.org/2000/svg"
                width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15.0825 5.70947C5.9621 5.70947 2.31393 15.135 2.31393 15.135C2.31393 15.135 5.9621 24.5583 15.0825 24.5583C24.203 24.5583 27.8511 15.135 27.8511 15.135C27.8511 15.135 24.203 5.70947 15.0825 5.70947V5.70947Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.0776 19.6951C16.2871 19.6951 17.447 19.2147 18.3022 18.3595C19.1574 17.5043 19.6378 16.3444 19.6378 15.1349C19.6378 13.9255 19.1574 12.7656 18.3022 11.9104C17.447 11.0552 16.2871 10.5747 15.0776 10.5747C13.8682 10.5747 12.7083 11.0552 11.8531 11.9104C10.9978 12.7656 10.5174 13.9255 10.5174 15.1349C10.5174 16.3444 10.9978 17.5043 11.8531 18.3595C12.7083 19.2147 13.8682 19.6951 15.0776 19.6951V19.6951Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round" />
              </svg></nuxt-link>
          </div>
          <div class="mt-6 text-center">
            <h2 class="text-xl text-[#28574E] my-6 font-semibold">
              {{ product.name }}
            </h2>
            <!-- <div class="text-[#28574E] text-lg">{{ product.description }}</div> -->
            <div class="my-4">
              <span class="text-xl font-bold">${{ product.discountedPrice }}</span>
              <span class="line-through text-gray-500">${{ product.originalPrice }}</span>
            </div>
            <div class="flex justify-center items-center my-2">
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              </div>
              <span class="ml-2 text-sm text-gray-500">({{ product.feedbackCount }} Feedback)</span>
            </div>
            <div v-if="product.timer" class="mt-8 text-center text-md text-gray-500">
              <div>Hurry up! Offer ends in:</div>
              <div class="font-semibold flex justify-center items-center">
                <div class="p-2 mx-1 rounded">
                  {{ product.timer.days }} days
                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  {{ product.timer.hours }} hours
                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  {{ product.timer.minutes }} mins
                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  {{ product.timer.seconds }} secs
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>

      <!-- Remaining product cards on the right -->
      <div class="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <nuxt-link v-for="product in filteredProducts.slice(1)" :key="product.link" :to="product.link"
          class="border p-4 rounded-lg shadow-lg block no-underline">
          <div class="relative">
            <span v-if="product.isOnSale"
              class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale
              50%</span>
            <span v-if="product.isBestSeller"
              class="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Best
              Sale</span>
            <img :src="product.image" :alt="product.name" class="w-full" />
          </div>
          <div class="mt-4 text-left flex items-center justify-between">
            <div class="flex flex-col">
              <h2 class="text-md text-black">{{ product.name }}</h2>
              <!-- <div class="text-gray-500">{{ product.description }}</div> -->
              <div class="mt-2">
                <span class="text-md font-bold text-black">${{ product.discountedPrice }}</span>
                <span class="line-through text-gray-500">${{ product.originalPrice }}</span>
              </div>
              <div class="flex justify-start items-center mt-2">
                <div class="rating">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <!-- <span class="ml-2 text-sm text-gray-500">({{ product.feedbackCount }} Feedback)</span> -->
              </div>
            </div>
            <nuxt-link to="#" class="flex bg-slate-200 text-black mt-4 rounded-full px-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.72213 10.0705H4.07396L1.64185 23.4471H23.5309L21.0988 10.0705H17.4506M7.72213 10.0705V6.42233C7.72213 3.73589 9.89992 1.55811 12.5864 1.55811V1.55811C15.2728 1.55811 17.4506 3.73589 17.4506 6.42233V10.0705M7.72213 10.0705H17.4506M7.72213 10.0705V13.7187M17.4506 10.0705V13.7187"
                  stroke="black" stroke-width="1.89705" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </nuxt-link>
          </div>
          <div v-if="product.timer" class="mt-4 text-center text-sm text-gray-500">
            <div>Hurry up! Offer ends in:</div>
            <div class="font-semibold">
              {{ product.timer.days }} days {{ product.timer.hours }} hours
              {{ product.timer.minutes }} mins {{ product.timer.seconds }} secs
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="text-end px-2 py-4 text-lg text-[#28574E] font-semibold">
      <nuxt-link to="#">View All 240 Products -> </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "Skin", // Default category
      allProducts: [
        {
          id: 1,
          link: "/products/productDescription",
          name: "Anthelios Melt-in Milk Sunscreen SPF 60",
          description: "A description of the product.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 12.0,
          originalPrice: 24.0,
          rating: 5,
          feedbackCount: 524,
          isOnSale: true,
          isBestSeller: true,
          category: "Skin", // Added category
          timer: {
            end: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Example 2 days from now
          },
        },
        {
          id: 2,
          link: "/products/productDescription",
          name: "Hydrating Facial Cleanser",
          description: "A description of the product.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          isOnSale: true,
          category: "Skin", // Added category
        },
        {
          id: 3,
          link: "/products/productDescription",
          name: "Hydro Boost Water Gel",
          description: "A description of the product.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 4,
          link: "/products/productDescription",
          name: "Melt-in Milk Sunscreen",
          description: "A description of the product.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 5,
          link: "/products/productDescription",
          name: "Niacinamide 10% + Zinc 1%",
          description: "A description of the product.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          isOnSale: true,
          category: "Skin", // Added category
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.allProducts.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },
  mounted() {
    this.allProducts.forEach((product, index) => {
      if (product.timer) {
        this.updateTimer(index);
        setInterval(() => {
          this.updateTimer(index);
        }, 1000);
      }
    });
  },
  methods: {
    updateTimer(index) {
      const product = this.allProducts[index];
      const now = new Date().getTime();
      const distance = product.timer.end - now;

      if (distance > 0) {
        product.timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        product.timer.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        product.timer.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        product.timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        product.timer.days = 0;
        product.timer.hours = 0;
        product.timer.minutes = 0;
        product.timer.seconds = 0;
      }
      this.$forceUpdate(); // Force Vue to re-render
    },
    filterProducts(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.fa-star {
  margin-right: 2px;
}
</style>
