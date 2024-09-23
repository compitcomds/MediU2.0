<template>
  <div class="font-serif mt-4">
    <div class="flex flex-col lg:space-y-6 text-center">
      <!-- Responsive Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl text-gray-500">Top Picks</h1>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-[#28574E]">
        Featured Products
      </h2>
    </div>

    <!-- Responsive Category Buttons -->
    <div class="flex flex-wrap justify-center my-4 md:my-12 text-lg sm:text-xl md:text-2xl">
      <button @click="filtercards('Hair')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Hair',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Hair',
      }" class="px-6 sm:px-16 md:px-20 py-2 font-semibold rounded-full mx-2 mb-2">
        Hair
      </button>
      <button @click="filtercards('Skin')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Skin',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Skin',
      }" class="px-6 sm:px-16 md:px-20 py-2 font-semibold rounded-full mx-2 mb-2">
        Skin
      </button>

      <button @click="filtercards('Baby Care')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Baby Care',
        'bg-gray-300 text-[#28574E]': selectedCategory !== 'Baby Care',
      }" class="px-6 sm:px-16 md:px-20 py-2 font-semibold rounded-full mx-2 mb-2">
        Baby Care
      </button>
    </div>

    <!-- Responsive Card Grid -->
    <div class="flex flex-wrap lg:flex-nowrap gap-6">
      <!-- First card -->
      <div class="w-full lg:w-5/12">
        <div v-for="card in filteredcards.slice(0, 1)" :key="card.link" :to="card.link"
          class="border p-4 rounded-3xl shadow-lg block no-underline h-full font-sans">
          <nuxt-link class="relative" :key="card.link" :to="card.link">
            <!-- Sale and Best Seller Tags -->
            <div class="space-x-4">
              <span v-if="card.isOnSale"
                class="absolute top-0 left-0 bg-red-500 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 rounded">Sale
                50%</span>
              <span v-if="card.isBestSeller"
                class="absolute top-0 left-[80px] bg-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 rounded">Best
                Sale</span>
            </div>
            <img :src="card.image" :alt="card.name" class="w-full object-cover rounded-md lg:h-96" />
          </nuxt-link>
          <div class="flex justify-between items-center gap-3">
            <nuxt-link :key="card.link" :to="card.link" class="flex bg-gray-200 mt-4 rounded-full px-2 py-2">
              <!-- Heart Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31 30" fill="none">
                <path
                  d="M15.5724 26.146C-8.74825 12.7035 8.27652 -1.88915 15.5724 7.33835C22.8692 -1.88916 39.894 12.7035 15.5724 26.146Z"
                  stroke="#1A1A1A" stroke-width="2.1889" />
              </svg></nuxt-link>

            <nuxt-link :key="card.link" :to="card.link"
              class="flex mt-4 justify-center bg-[#28574E] w-full text-white text-base md:text-lg px-4 py-2 rounded-full gap-4">
              <button>Shop Now</button>
              <!-- Shop Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
                <path
                  d="M7.72213 10.0705H4.07396L1.64185 23.4471H23.5309L21.0988 10.0705H17.4506M7.72213 10.0705V6.42233C7.72213 3.73589 9.89992 1.55811 12.5864 1.55811V1.55811C15.2728 1.55811 17.4506 3.73589 17.4506 6.42233V10.0705M7.72213 10.0705H17.4506M7.72213 10.0705V13.7187M17.4506 10.0705V13.7187"
                  stroke="white" stroke-width="1.89705" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </nuxt-link>
            <nuxt-link class="flex bg-gray-200 mt-4 rounded-full px-2 py-2"><svg data-v-b581078d=""
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                <path data-v-b581078d=""
                  d="M15.0825 5.70947C5.9621 5.70947 2.31393 15.135 2.31393 15.135C2.31393 15.135 5.9621 24.5583 15.0825 24.5583C24.203 24.5583 27.8511 15.135 27.8511 15.135C27.8511 15.135 24.203 5.70947 15.0825 5.70947V5.70947Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round"></path>
                <path data-v-b581078d=""
                  d="M15.0776 19.6951C16.2871 19.6951 17.447 19.2147 18.3022 18.3595C19.1574 17.5043 19.6378 16.3444 19.6378 15.1349C19.6378 13.9255 19.1574 12.7656 18.3022 11.9104C17.447 11.0552 16.2871 10.5747 15.0776 10.5747C13.8682 10.5747 12.7083 11.0552 11.8531 11.9104C10.9978 12.7656 10.5174 13.9255 10.5174 15.1349C10.5174 16.3444 10.9978 17.5043 11.8531 18.3595C12.7083 19.2147 13.8682 19.6951 15.0776 19.6951V19.6951Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></nuxt-link>
          </div>

          <div class="flex flex-col items-center mt-4">
            <!-- Responsive card name and price -->
            <h2 class="text-xl sm:text-2xl md:text-3xl text-[#28574E] my-4 font-semibold capitalize">
              {{ card.name }}
            </h2>
            <div class="lg:my-4 text-center space-x-2">
              <span class="text-2xl sm:text-3xl md:text-4xl font-bold text-black">₹{{ card.discountedPrice }}</span>
              <span class="line-through text-slate-500 text-lg sm:text-xl md:text-2xl">₹{{ card.originalPrice }}</span>
            </div>
            <!-- Rating -->
            <div class="flex justify-center items-center lg:my-2">
              <div class="flex justify-center items-center">
                <div class="rating flex gap-1">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-[#FFD700]">
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <!-- <span class="text-yellow-600 text-sm font-semibold ml-2">(Reviews)</span> -->
              </div>
              <span class="ml-2 text-sm sm:text-md text-black">({{ card.feedbackCount }} Feedback)</span>
            </div>

            <!-- Timer -->
            <div v-if="card.timer" class="mt-6 text-center text-lg text-slate-500">
              <div>Hurry up! Offer ends in:</div>
              <div class="font-semibold flex justify-center text-base sm:text-lg md:text-xl items-center text-black">
                <div class="p-2 mx-1 rounded">
                  <p>{{ card.timer.days }}</p><span> days</span>
                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  <p>{{ card.timer.hours }}</p><span> hours</span>
                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  <p>{{ card.timer.minutes }}</p><span> mins</span>

                </div>
                <span>:</span>
                <div class="p-2 mx-1 rounded">
                  <p>{{ card.timer.seconds }}</p><span> secs</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Remaining Cards -->
      <div class="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-2 gap-2 lg:gap-6 capitalize font-sans">
        <div v-for="card in filteredcards.slice(1)" :key="card.link" :to="card.link"
          class="border p-4 rounded-3xl shadow-lg block no-underline h-full">
          <nuxt-link class="relative" :key="card.link" :to="card.link">
            <!-- Sale and Best Seller Tags -->
            <span v-if="card.isOnSale"
              class="absolute top-0 left-0 bg-red-500 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 rounded">Sale
              50%</span>
            <span v-if="card.isBestSeller"
              class="absolute top-0 right-0 bg-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 rounded">Best
              Sale</span>
            <img :src="card.image" :alt="card.name" class="w-full h-76 object-cover rounded-md capitalize" />
          </nuxt-link>

          <div class="mt-4 text-left">
            <!-- card name and price -->
            <h2 class="text-lg md:text-xl text-black capitalize">
              {{ card.name }}
            </h2>
            <div class="mt-2 space-x-2">
              <span class="text-xl sm:text-2xl md:text-2xl font-bold text-black">₹{{ card.discountedPrice }}</span>
              <span class="line-through text-slate-600 text-sm sm:text-lg md:text-xl">₹{{ card.originalPrice }}</span>
            </div>
            <div class="flex items-center justify-between mt-2">
              <div class="flex justify-start">
                <div class="rating flex md:gap-1">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"  
                    height="20" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-star text-[#FFD700] sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
                
                
              </div>
              <div class="bg-slate-300 rounded-full p-1 md:px-1 md:py-1 opacity-80">
                <a :href="card.url"
                  ><img
                    src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                    class="w-5 lg:w-8"
                    alt="bag icon"
                /></a>
              </div>
            </div>

            <!-- Timer -->
            <div v-if="card.timer" class="mt-4 text-center text-sm sm:text-base md:text-lg text-black">
              <div>Hurry up! Offer ends in:</div>
              <div class="font-semibold">
                {{ card.timer.days }} days {{ card.timer.hours }} hours
                {{ card.timer.minutes }} mins {{ card.timer.seconds }} secs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-end font-sans px-2 py-4 text-lg sm:text-xl md:text-2xl text-[#28574E] font-semibold">
      <nuxt-link to="#">View All 240 Products -> </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "Skin", // Default category
      allcards: [
        {
          id: 1,
          link: "/shop/product/aspirin",
          name: "Blowshine",
          description: "A description of the card.",
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01.jpg?v=1725546603",
          discountedPrice: 1000,
          originalPrice: 2000,
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
          link: "/shop/product/venusia-max-cream",
          name: "venusia max cream",
          description: "A description of the card.",
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09989.jpg?v=1725709318",
          discountedPrice: 1180,
          originalPrice: 2360,
          rating: 4,
          feedbackCount: 200,
          isOnSale: true,
          category: "Skin", // Added category
        },
        {
          id: 3,
          link: "/shop/product/dermatica-ray-protect-barelyon",
          name: "dermatica ray protect barelyon",
          description: "A description of the card.",
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          discountedPrice: 1080,
          originalPrice: 2160,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 4,
          link: "/shop/product/acne-oc-moisturiser",
          name: "acne oc moisturiser",
          description: "A description of the card.",
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          discountedPrice: 567,
          originalPrice: 1120,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 5,
          link: "/shop/product/bontess-pro",
          name: "bontess pro",
          description: "A description of the card.",
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          discountedPrice: 1225,
          originalPrice: 2500,
          rating: 4,
          feedbackCount: 200,
          isOnSale: true,
          category: "Skin", // Added category
        },
      ],
    };
  },
  computed: {
    filteredcards() {
      return this.allcards.filter(
        (card) => card.category === this.selectedCategory
      );
    },
  },
  mounted() {
    this.allcards.forEach((card, index) => {
      if (card.timer) {
        this.updateTimer(index);
        setInterval(() => {
          this.updateTimer(index);
        }, 1000);
      }
    });
  },
  methods: {
    updateTimer(index) {
      const card = this.allcards[index];
      const now = new Date().getTime();
      const distance = card.timer.end - now;

      if (distance > 0) {
        card.timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        card.timer.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        card.timer.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        card.timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        card.timer.days = 0;
        card.timer.hours = 0;
        card.timer.minutes = 0;
        card.timer.seconds = 0;
      }
      this.$forceUpdate(); // Force Vue to re-render
    },
    filtercards(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Custom responsive adjustments */
@media (max-width: 768px) {
  .w-full {
    width: 100%;
  }

  .lg\:w-5\/12 {
    width: 100%;
  }

  .lg\:w-7\/12 {
    width: 100%;
  }

  .h-60 {
    height: auto;
  }
}
</style>
