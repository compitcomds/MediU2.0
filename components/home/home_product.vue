<template>
  <div class="font-serif">
    <div class="mb-5 flex flex-col lg:mb-10 lg:space-y-6">
      <h1 class="text-center text-xl text-gray-500 lg:text-4xl">
        Nourishing Treatments
      </h1>
      <h2 class="text-center text-2xl font-bold text-[#238878] lg:text-6xl">
        Hair Care Must-Haves
      </h2>
    </div>
    <div class="responsive-div mb-8 flex flex-col overflow-hidden lg:flex-row">
      <!-- Image Section - Displayed on large screens only -->
      <div class="hidden w-full md:w-4/12 lg:block">
        <div class="diff lg:aspect-[9/18] xl:aspect-[9/18] xxl:aspect-[9/17]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/6.png" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/5.png" />
          </div>
          <div class="diff-resizer">Drag</div>
        </div>
      </div>
      <!-- Products Section -->
      <div class="w-full lg:ml-4 lg:w-8/12">
        <div
          class="mb-4 flex justify-center gap-2 px-4 text-xl lg:justify-between"
        >
          <button
            @click="filterProducts('Hairfall')"
            :class="{
              'bg-[#238878] text-white': selectedCategory === 'Hairfall',
              'bg-slate-300 text-black': selectedCategory !== 'Hairfall',
            }"
            class="w-full rounded-full px-2 py-2 text-xs lg:px-4 lg:text-lg"
          >
            Hairfall
          </button>
          <button
            @click="filterProducts('Oily Scalp')"
            :class="{
              'bg-[#238878] text-white': selectedCategory === 'Oily Scalp',
              'bg-slate-300 text-black': selectedCategory !== 'Oily Scalp',
            }"
            class="w-full rounded-full px-2 py-2 text-xs lg:text-lg"
          >
            Oily Scalp
          </button>
          <button
            @click="filterProducts('Bald Patches')"
            :class="{
              'bg-[#238878] text-white': selectedCategory === 'Bald Patches',
              'bg-slate-300 text-black': selectedCategory !== 'Bald Patches',
            }"
            class="w-full rounded-full px-2 py-2 text-xs lg:px-4 lg:text-lg"
          >
            Bald Patches
          </button>
        </div>
        <!-- Grid for Products -->
        <div
          class="grid h-auto grid-cols-2 gap-2 font-sans md:gap-6 lg:grid-cols-3"
        >
          <!-- Products -->
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="block overflow-hidden rounded-lg border no-underline md:rounded-2xl md:border-none md:shadow-md"
          >
            <div class="relative">
              <span
                v-if="product.isOnSale"
                class="absolute right-2 top-1 rounded bg-orange-500 px-2 py-1 text-xs text-white"
                >Sale 5%</span
              >
              <a :href="product.url">
                <img
                  :src="product.image"
                  class="h-32 w-full object-cover md:h-auto lg:hover:scale-110"
                  alt=""
              /></a>
            </div>
            <div class="mt-4 space-y-2 p-4">
              <a :href="product.url">
                <h3 class="text-xs capitalize text-black md:text-lg">
                  {{ product.name }}
                </h3>
              </a>
              <div
                class="flex items-center gap-1 text-sm sm:text-lg md:text-xl"
              >
                <p class="font-bold text-[#4ca9ee]">₹{{ product.salePrice }}</p>
                <p
                  class="sm:text-md text-sm text-gray-500 line-through"
                  v-if="product.isOnSale"
                >
                  ₹{{ product.originalPrice }}
                </p>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <div class="flex justify-start">
                  <div class="rating flex gap-1">
                    <svg
                      v-for="i in 5"
                      :key="i"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star text-[#FFD700]"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="hidden rounded-full bg-slate-300 px-1 py-1 opacity-80 md:block"
                >
                  <a :href="product.url"
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
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 text-right md:text-end">
          <nuxt-link to="/shop" class="text-sm text-[#4ca9ee] md:text-2xl"
            >Explore More →</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "Hairfall",
      products: [
        {
          id: 4,
          name: "RACINE PRO CONDITIONING SHAMPOO 175ML",
          salePrice: "500.0",
          originalPrice: "635.0",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/bf41d711ad3df8f3edea8a49db58d7de.jpg?v=1731409700",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo-175ml",
        },
        {
          id: 6,
          name: "TRIFLOW HAIR CONDITIONER 150ML",
          salePrice: "500.0",
          originalPrice: "599.0",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/c930703b256257ff02c8b1c7ece951fc.jpg?v=1731821922",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/triflow-hair-conditioner-150ml",
        },
        {
          id: 5,
          name: "IPCA KERAGLO MEN BOTTLE OF 30 TABLETS",
          salePrice: "550.0 ",
          originalPrice: "720.0",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/3ec6f7700099935893380cf9e8671a69.jpg?v=1731735988",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/ipca-keraglo-men-bottle-of-30-tablets",
        },
        {
          id: 1,
          name: "TORRENT PROANAGEN SOLUTION 100 ML",
          salePrice: "900.0",
          originalPrice: "1098.0",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/861e9965b187c736e5a0cc7072c46e88.jpg?v=1731819733",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/torrent-proanagen-solution-100-ml",
        },
        {
          id: 2,
          name: "REGAIN 5 %",
          salePrice: "950.0",
          originalPrice: "1060.0",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/fe15a68ad75404c509aa2ef3d58cd43d.jpg?v=1732085654",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/regain-5",
        },
        {
          id: 3,
          name: "IPCA KERAGLO AD LOTION 50ML",
          salePrice: "240.0",
          originalPrice: "265.0",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/c4bdaa6ddb818ed4c725569c58c19885.jpg?v=1731479592",
          category: "Hairfall",
          isOnSale: true,
          url: "/shop/product/ipca-keraglo-ad-lotion-50ml",
        },
        // oily scalp
        {
          id: 5,
          name: "venusia max cream",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09987.jpg?v=1725709318",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/venusia-max-cream",
        },
        {
          id: 1,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/dermatica-ray-protect-barelyon",
        },
        {
          id: 2,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00155.jpg?v=1725639738",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo",
        },
        {
          id: 4,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/bontess-pro",
        },
        {
          id: 6,
          name: "acne oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/acne-oc-moisturiser",
        },

        {
          id: 3,
          name: "acne uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4359.jpg?v=1725638248",
          category: "Oily Scalp",
          isOnSale: true,
          url: "/shop/product/acne-uv-spf-50-sunscreen-50-gm",
        },
        // Bald Patches
        {
          id: 3,
          name: "acne uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4359.jpg?v=1725638248",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/acne-uv-spf-50-sunscreen-50-gm",
        },
        {
          id: 5,
          name: "venusia max cream",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09987.jpg?v=1725709318",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/venusia-max-cream",
        },
        {
          id: 1,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/dermatica-ray-protect-barelyon",
        },
        {
          id: 2,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00155.jpg?v=1725639738",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo",
        },
        {
          id: 4,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/bontess-pro",
        },
        {
          id: 6,
          name: "acne oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Bald Patches",
          isOnSale: true,
          url: "/shop/product/acne-oc-moisturiser",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.category === this.selectedCategory,
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
.responsive-div {
  /* Custom CSS for responsiveness */
  height: auto;
  /* Default height for small screens */
}

@media (min-width: 640px) {
  /* sm */
  .responsive-div {
    height: auto;
    /* Height for small devices */
  }
}

@media (min-width: 768px) {
  /* md */
  .responsive-div {
    height: auto;
    /* Height for medium devices */
  }
}

@media (min-width: 1120px) {
  /* lg */
  .responsive-div {
    height: 800px;
    /* Height for large devices */
  }
}

@media (min-width: 1280px) {
  /* xl */
  .responsive-div {
    height: 900px;
    /* Height for extra large devices */
  }
}
</style>
