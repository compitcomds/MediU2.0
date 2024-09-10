<template>
  <div class="my-36">
    <div class="text-center mb-16">
      <h1 class="text-xl text-[#8D8BA7]">Nourishing Treatments</h1>
      <h2 class="text-3xl font-semibold text-[#28574E]">
        Hair Care Must-Haves
      </h2>
    </div>
    <div class="flex gap-4 mb-8">
      <!-- first section -->
      <div class="w-7/12 ml-4">
        <div class="flex justify-between px-4 mb-4">
          <button
            @click="filterProducts('Hyperpigmentation')"
            :class="{
              'bg-[#28574E] text-white':
                selectedCategory === 'Hyperpigmentation',
              'bg-slate-300 text-black':
                selectedCategory !== 'Hyperpigmentation',
            }"
            class="py-2 px-4 rounded-full w-full"
          >
            Hyperpigmentation
          </button>
          <button
            @click="filterProducts('Eczema')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Eczema',
              'bg-slate-300 text-black': selectedCategory !== 'Eczema',
            }"
            class="py-2 px-4 rounded-full ml-2 w-full"
          >
            Eczema
          </button>
          <button
            @click="filterProducts('Acne')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Acne',
              'bg-slate-300 text-black': selectedCategory !== 'Acne',
            }"
            class="py-2 px-4 rounded-full ml-2 w-full"
          >
            Acne
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4 h-auto">
          <!-- make it anchor -->
          <a
            v-for="product in filteredProducts"
            :key="product.id"
            :href="product.url"
            class="border p-4 rounded-lg block no-underline"
          >
            <div class="relative">
              <span
                v-if="product.isOnSale"
                class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                >Sale 50%</span
              >
              <img :src="product.image" class="w-full" alt="" />
            </div>
            <div class="mt-4 space-y-2">
              <h3 class="text-black uppercase text-2xl">{{ product.name }}</h3>
              <div class="flex justify-between items-center text-xl">
                <div class="flex">
                  <p class="text-[#28574E] font-bold">
                    {{ product.salePrice }}
                  </p>
                  <p
                    class="text-gray-500 text-sm line-through"
                    v-if="product.isOnSale"
                  >
                    {{ product.originalPrice }}
                  </p>
                </div>
                <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                  <a :href="product.url"
                    ><img
                      src="https://ccdstest.b-cdn.net/Medi%20u/add-to-basket.svg"
                      class="w-8 p-1"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="flex items-center mt-2">
                <div class="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-4 text-left">
          <a href="#" class="text-black hover:text-blue-500 text-lg"
            >Explore More →</a
          >
        </div>
      </div>

      <div class="w-5/12">
        <div class="diff lg:aspect-[9/14] xl:aspect-[9/13]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/8.png" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/7.png" />
          </div>
          <div class="diff-resizer"></div>
        </div>
      </div>
      <!-- second section -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "Hyperpigmentation",
      products: [
        {
          id: 2,
          name: "ACNE OC MOISTURISER",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
        {
          id: 5,
          name: "RACINE PRO CONDITIONING SHA...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
        {
          id: 4,
          name: "DERMATICA RAY PROTECT BARELYON",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
        {
          id: 3,
          name: "DERMATICA HA PURE SE...",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
        {
          id: 6,
          name: "ACNE UV SPF 50 SUNSCREEN 50 GM",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4357.jpg?v=1725638245",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
        {
          id: 1,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },
  methods: {
    filterProducts(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
