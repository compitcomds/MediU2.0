<template>
  <div class="py-8 font-serif space-y-6">
    <div class="flex flex-col lg:space-y-6 mb-5 lg:mb-10">
      <!-- Responsive Heading -->
      <h1 class="text-xl lg:text-4xl text-center text-gray-500">
        Glow Getters
      </h1>
      <h2 class="text-3xl lg:text-6xl font-bold text-center text-[#28574E]">
        Radiant Skin Secrets
      </h2>
    </div>

    <div class="responsive-div flex flex-col lg:flex-row mb-8 overflow-hidden">
      <!-- Image Section - Hidden for sm and md views -->
      <div class="w-full md:w-4/12 hidden lg:block">
        <div class="diff lg:aspect-[9/16] xl:aspect-[9/18] xxl:aspect-[9/17]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/4.png" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/3.png" />
          </div>
          <div class="diff-resizer bg-[#28574E]">Drag</div>
        </div>
      </div>
      <!-- Products Section -->
      <div class="w-full lg:w-8/12 lg:ml-4">
        <div class="flex justify-center lg:justify-between px-4 mb-4 text-xl gap-2">
          <button
            @click="filterProducts('Hyperpigmentation')"
            :class="{
              'bg-[#28574E] text-white':
                selectedCategory === 'Hyperpigmentation',
              'bg-slate-300 text-black':
                selectedCategory !== 'Hyperpigmentation',
            }"
            class="py-2 px-4 rounded-full w-full  text-sm lg:text-lg"
          >
            Hyperpigmentation
          </button>
          <button
            @click="filterProducts('Eczema')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Eczema',
              'bg-slate-300 text-black': selectedCategory !== 'Eczema',
            }"
            class="py-2 px-4 rounded-full w-full  text-sm lg:text-lg"
          >
            Eczema
          </button>
          <button
            @click="filterProducts('Acne')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Acne',
              'bg-slate-300 text-black': selectedCategory !== 'Acne',
            }"
            class="py-2 px-4 rounded-full w-full  text-sm lg:text-lg"
          >
            Acne
          </button>
        </div>
        <!-- Grid for Products -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 h-auto font-sans">
          <!-- Products -->
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            
            class="shadow-md p-4 rounded-2xl block no-underline"
          >
            <div class="relative">
              <span
                v-if="product.isOnSale"
                class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                >Sale 50%</span
              >
              <a :href="product.url">
              <img :src="product.image" class="w-full lg:hover:scale-110" alt="" /></a>
            </div>
            <div class="mt-4 space-y-2">
              <a :href="product.url">
              <h3 class="text-black text-base md:text-2xl capitalize">{{ product.name }}</h3></a>
              <div class="flex justify-between items-center text-sm sm:text-lg md:text-xl">
                <div class="flex">
                  <p class="text-[#28574E] font-bold">
                    ₹{{ product.salePrice }}
                  </p>
                  <p
                    class="text-gray-500 text-sm sm:text-md line-through"
                    v-if="product.isOnSale"
                  >
                    ₹{{ product.originalPrice }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between mt-2">
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
                <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                  <a :href="product.url"
                    ><img
                      src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                      class="w-6 sm:w-8 p-1"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 text-right md:text-end">
          <a href="/shop" class="text-blue-500 text-lg sm:text-xl md:text-2xl">Explore More →</a>
        </div>
      </div>
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
          id: 1,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/bontess-pro",
        },
        {
          id: 2,
          name: "acne oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/acne-oc-moisturiser",
        },
        {
          id: 3,
          name: "venusia max cream",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09987.jpg?v=1725709318",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/venusia-max-cream",
        },
        {
          id: 4,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/dermatica-ray-protect-barelyon",
        },
        {
          id: 5,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00155.jpg?v=1725639738",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo",
        },
        {
          id: 6,
          name: "acne uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4359.jpg?v=1725638248",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/shop/product/acne-uv-spf-50-sunscreen-50-gm",
        },
        // Eczema
        {
          id: 4,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/dermatica-ray-protect-barelyon",
        },
        {
          id: 5,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00155.jpg?v=1725639738",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo",
        },
        {
          id: 6,
          name: "acne uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4359.jpg?v=1725638248",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/acne-uv-spf-50-sunscreen-50-gm",
        },
        {
          id: 1,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/bontess-pro",
        },
        {
          id: 2,
          name: "acne oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/acne-oc-moisturiser",
        },
        {
          id: 3,
          name: "venusia max cream",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09987.jpg?v=1725709318",
          category: "Eczema",
          isOnSale: true,
          url: "/shop/product/venusia-max-cream",
        },
        // Acne
        {
          id: 6,
          name: "acne uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4359.jpg?v=1725638248",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/acne-uv-spf-50-sunscreen-50-gm",
        },
        {
          id: 1,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/bontess-pro",
        },
        {
          id: 2,
          name: "acne oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/acne-oc-moisturiser",
        },
        {
          id: 4,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/dermatica-ray-protect-barelyon",
        },
        {
          id: 5,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00155.jpg?v=1725639738",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/racine-pro-conditioning-shampoo",
        },
        
        {
          id: 3,
          name: "venusia max cream",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC09987.jpg?v=1725709318",
          category: "Acne",
          isOnSale: true,
          url: "/shop/product/venusia-max-cream",
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
.responsive-div {
  /* Custom CSS for responsiveness */
  height: auto; /* Default height for small screens */
}

@media (min-width: 640px) { /* sm */
  .responsive-div {
    height: auto; /* Height for small devices */
  }
}

@media (min-width: 768px) { /* md */
  .responsive-div {
    height: auto; /* Height for medium devices */
  }
}

@media (min-width: 1120px) { /* lg */
  .responsive-div {
    height: 800px; /* Height for large devices */
  }
}

@media (min-width: 1280px) { /* xl */
  .responsive-div {
    height: 850px; /* Height for extra large devices */
  }
}
</style>
