<template>
  <div class="my-10">
    <!-- Category Buttons -->
    <div class="flex flex-wrap justify-center my-10">
      <button @click="filtercards('Skin')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Skin',
        'bg-slate-300 text-[#28574E]': selectedCategory !== 'Skin',
      }" class="px-4 py-2 rounded-full mx-2 mb-2">
        Skin
      </button>
      <button @click="filtercards('Hair')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Hair',
        'bg-slate-300 text-[#28574E]': selectedCategory !== 'Hair',
      }" class="px-4 py-2 rounded-full mx-2 mb-2">
        Hair
      </button>
      <button @click="filtercards('Child')" :class="{
        'bg-[#28574E] text-white': selectedCategory === 'Child',
        'bg-slate-300 text-[#28574E]': selectedCategory !== 'Child',
      }" class="px-4 py-2 rounded-full mx-2 mb-2">
        Child
      </button>
    </div>

    <!-- card Grid -->
    <div class="flex flex-wrap lg:flex-nowrap gap-6">
      <!-- First card Card -->
      <div class="w-full lg:w-5/12">
        <div v-for="card in filteredcards.slice(0, 1)" :key="card.link" :to="card.link"
          class="border p-4 rounded-lg shadow-lg block no-underline h-full">
          <nuxt-link class="relative" :key="card.link" :to="card.link">
            <!-- card sale and bestseller tags -->
            <span v-if="card.isOnSale"
              class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale
              50%</span>
            <span v-if="card.isBestSeller"
              class="absolute top-0 left-[80px] bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Best
              Sale</span>
            <img :src="card.image" :alt="card.name" class="w-full object-cover rounded-md" />
          </nuxt-link>
          <div class="flex justify-between items-center gap-3">
            <nuxt-link :key="card.link" :to="card.link" to="#" class="flex bg-slate-200 mt-4 rounded-full px-1 py-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                <path
                  d="M15.5724 26.146C-8.74825 12.7035 8.27652 -1.88915 15.5724 7.33835C22.8692 -1.88916 39.894 12.7035 15.5724 26.146Z"
                  stroke="#1A1A1A" stroke-width="2.1889" />
              </svg></nuxt-link>
            <nuxt-link :key="card.link" :to="card.link" class="flex mt-4 justify-center bg-[#28574E] w-full text-white text-lg px-4 py-2 rounded-full gap-4">
              <button>Shop Now</button>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M7.72213 10.0705H4.07396L1.64185 23.4471H23.5309L21.0988 10.0705H17.4506M7.72213 10.0705V6.42233C7.72213 3.73589 9.89992 1.55811 12.5864 1.55811V1.55811C15.2728 1.55811 17.4506 3.73589 17.4506 6.42233V10.0705M7.72213 10.0705H17.4506M7.72213 10.0705V13.7187M17.4506 10.0705V13.7187"
                  stroke="white" stroke-width="1.89705" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </nuxt-link>
            <nuxt-link :key="card.link" :to="card.link" to="#" class="flex bg-slate-200 mt-4 rounded-full px-1 py-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15.0825 5.70947C5.9621 5.70947 2.31393 15.135 2.31393 15.135C2.31393 15.135 5.9621 24.5583 15.0825 24.5583C24.203 24.5583 27.8511 15.135 27.8511 15.135C27.8511 15.135 24.203 5.70947 15.0825 5.70947V5.70947Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.0776 19.6951C16.2871 19.6951 17.447 19.2147 18.3022 18.3595C19.1574 17.5043 19.6378 16.3444 19.6378 15.1349C19.6378 13.9255 19.1574 12.7656 18.3022 11.9104C17.447 11.0552 16.2871 10.5747 15.0776 10.5747C13.8682 10.5747 12.7083 11.0552 11.8531 11.9104C10.9978 12.7656 10.5174 13.9255 10.5174 15.1349C10.5174 16.3444 10.9978 17.5043 11.8531 18.3595C12.7083 19.2147 13.8682 19.6951 15.0776 19.6951V19.6951Z"
                  stroke="#1A1A1A" stroke-width="2.1889" stroke-linecap="round" stroke-linejoin="round" />
              </svg></nuxt-link>
          </div>
          <div class="flex flex-col items-center mt-4">
            <!-- card name and price -->
            <h2 class="text-2xl text-[#28574E] my-6 font-semibold">
              {{ card.name }}
            </h2>
            <div class="my-4 text-center space-x-2">
              <span class="text-2xl font-bold text-black">₹{{ card.discountedPrice }}</span>
              <span class="line-through text-slate-500">₹{{ card.originalPrice }}</span>
            </div>
            <!-- Rating -->
            <div class="flex justify-center items-center my-2">
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              </div>
              <span class="ml-2 text-sm text-black">({{ card.feedbackCount }} Feedback)</span>
            </div>
            <!-- Timer -->
            <div v-if="card.timer" class="mt-8 text-center text-md text-black">
              <div>Hurry up! Offer ends in:</div>
              <div class="font-semibold flex justify-center items-center text-black">
                <div class="p-2 mx-1 rounded bg-slate-300">{{ card.timer.days }} days</div>
                <span>:</span>
                <div class="p-2 mx-1 rounded bg-slate-300">{{ card.timer.hours }} hours</div>
                <span>:</span>
                <div class="p-2 mx-1 rounded bg-slate-300">{{ card.timer.minutes }} mins</div>
                <span>:</span>
                <div class="p-2 mx-1 rounded bg-slate-300">{{ card.timer.seconds }} secs</div>
              </div>
            </div>
            <nuxt-link :key="card.link" :to="card.link" class="mt-6">
              <button class="bg-[#28574E] text-white px-4 py-2 rounded-full">
                Shop Now
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- Remaining card Cards -->
      <div class="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="card in filteredcards.slice(1)" :key="card.link" :to="card.link"
          class="border p-4 rounded-lg shadow-lg block no-underline h-full">
          <nuxt-link class="relative" :key="card.link" :to="card.link">
            <!-- card sale and bestseller tags -->
            <span v-if="card.isOnSale"
              class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale
              50%</span>
            <span v-if="card.isBestSeller"
              class="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Best
              Sale</span>
            <img :src="card.image" :alt="card.name" class="w-full h-76 object-cover rounded-md" />
          </nuxt-link>

          <div class="mt-4 text-left">
            <!-- card name and price -->
            <h2 class="text-md text-black text-xl">{{ card.name }}</h2>
            <div class="mt-2">
              <span class="text-md font-bold text-black">₹{{ card.discountedPrice }}</span>
              <span class="line-through text-black">₹{{ card.originalPrice }}</span>
            </div>
            <div class="text-left flex items-center justify-between">
              <!-- Rating -->
              <div class="flex justify-start items-center mt-2">
                <div class="rating">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
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
            <!-- Timer -->
            <div v-if="card.timer" class="mt-4 text-center text-sm text-black">
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
      allcards: [
        {
          id: 1,
          link: "/cards/cardDescription",
          name: "Anthelios Melt-in Milk Sunscreen SPF 60",
          description: "A description of the card.",
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
          link: "/cards/cardDescription",
          name: "Hydrating Facial Cleanser",
          description: "A description of the card.",
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
          link: "/cards/cardDescription",
          name: "Hydro Boost Water Gel",
          description: "A description of the card.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 4,
          link: "/cards/cardDescription",
          name: "Melt-in Milk Sunscreen",
          description: "A description of the card.",
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          discountedPrice: 14.99,
          originalPrice: 20.99,
          rating: 4,
          feedbackCount: 200,
          category: "Skin", // Added category
        },
        {
          id: 5,
          link: "/cards/cardDescription",
          name: "Niacinamide 10% + Zinc 1%",
          description: "A description of the card.",
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
    filteredcards() {
      return this.allcards.filter((card) => card.category === this.selectedCategory);
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
        card.timer.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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
@media (max-width: 768px) {
  .text-xl {
    font-size: 1.25rem;
  }

  .text-md {
    font-size: 1rem;
  }

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
