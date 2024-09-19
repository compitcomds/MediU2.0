<template>
  <div class="font-serif">
    <div class="flex flex-col space-y-6 mb-10">
      <h1 class="text-4xl text-center text-gray-500">Nourishing Treatments</h1>
      <h2 class="text-6xl font-bold text-center text-[#28574E]">
        Hair Care Must-Haves
      </h2>
    </div>
    <div class="responsive-div flex mb-8 overflow-hidden">
      <!-- first section -->
      <div class="w-4/12">
        <div class="diff lg:aspect-[9/16] xl:aspect-[9/18] xxl:aspect-[9/17]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/6.png" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/5.png" />
          </div>
          <div class="diff-resizer">ffff</div>
        </div>
      </div>
      <!-- second section -->
      <div class="w-8/12 ml-4">
        <div class="flex justify-between px-4 mb-4 text-xl">
          <button
            @click="filterProducts('Hairfall')"
            :class="{
              'bg-[#28574E] text-white':
                selectedCategory === 'Hairfall',
              'bg-slate-300 text-black':
                selectedCategory !== 'Hairfall',
            }"
            class="py-2 px-4 rounded-full w-full"
          >
            Hairfall
          </button>
          <button
            @click="filterProducts('Oily Scalp')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Oily Scalp',
              'bg-slate-300 text-black': selectedCategory !== 'Oily Scalp',
            }"
            class="py-2 px-4 rounded-full ml-2 w-full"
          >
            Oily Scalp
          </button>
          <button
            @click="filterProducts('Bald Patches')"
            :class="{
              'bg-[#28574E] text-white': selectedCategory === 'Bald Patches',
              'bg-slate-300 text-black': selectedCategory !== 'Bald Patches',
            }"
            class="py-2 px-4 rounded-full ml-2 w-full"
          >
            Bald Patches
          </button>
        </div>
        <div class="grid grid-cols-3 gap-6 h-auto font-sans">
          <!-- make it anchor -->
          <a
            v-for="product in filteredProducts"
            :key="product.id"
            :href="product.url"
            class="shadow-md p-4 rounded-2xl block no-underline"
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
              <h3 class="text-black text-2xl capitalize">{{ product.name }}</h3>
              <div class="flex justify-between items-center text-xl">
                <div class="flex">
                  <p class="text-[#28574E] font-bold">
                    ₹{{ product.salePrice }}
                  </p>
                  <p
                    class="text-gray-500 text-sm line-through"
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
                      width="24"
                      height="24"
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
                  <!-- <span class="text-yellow-600 text-sm font-semibold ml-2">(Reviews)</span> -->
                </div>
                <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                  <a :href="product.url"
                    ><img
                      src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
                      class="w-8 p-1"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-4 text-end">
          <a href="/shop" class="text-blue-500 text-2xl">Explore More →</a>
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
          id: 1,
          name: "Bontess Pro",
          salePrice: "1225",
          originalPrice: "2500",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
          category: "Hairfall",
          isOnSale: true,
          url: "/",
        },
        {
          id: 2,
          name: "Bald Patches oc moisturiser",
          salePrice: "567",
          originalPrice: "1120",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153",
          category: "Hairfall",
          isOnSale: true,
          url: "/",
        },
        {
          id: 3,
          name: "dermatica hs pure serum",
          salePrice: "1180",
          originalPrice: "2360",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349",
          category: "Hairfall",
          isOnSale: true,
          url: "/",
        },
        {
          id: 4,
          name: "dermatica ray protect barelyon",
          salePrice: "1080",
          originalPrice: "2160",
          rating: 3,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00304.jpg?v=1725636340",
          category: "Hairfall",
          isOnSale: true,
          url: "/",
        },
        {
          id: 5,
          name: "Racine pro conditioning sha...",
          salePrice: "635.0",
          originalPrice: "1270",
          rating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738",
          category: "Hairfall",
          isOnSale: true,
          url: "/",
        },
        {
          id: 6,
          name: "Bald Patches uv spf 50 sunscreen 50gm",
          salePrice: "915.0",
          originalPrice: "1830",
          rating: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4357.jpg?v=1725638245",
          category: "Hairfall",
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
.responsive-div {
  /* Custom CSS for responsiveness */
  height: 50vh; /* Default height for small screens */
}

@media (min-width: 640px) { /* sm */
  .responsive-div {
    height: 60vh; /* Height for small devices */
  }
}

@media (min-width: 768px) { /* md */
  .responsive-div {
    height: 70vh; /* Height for medium devices */
  }
}

@media (min-width: 1120px) { /* lg */
  .responsive-div {
    height: 800px; /* Height for large devices */
  }
}

@media (min-width: 1280px) { /* xl */
  .responsive-div {
    height: 900px; /* Height for extra large devices */
  }
}
</style>
