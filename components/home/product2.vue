<template>
  <div class="py-8 mb-16">
    <div class="text-center mb-16">
      <h1 class="text-xl text-[#8D8BA7]">Glow Getters</h1>
      <h2 class="text-3xl font-semibold text-[#28574E]">
        Radiant Skin Secrets
      </h2>
    </div>
    <div class="flex mb-8">
      <!-- first section -->
      <div class="w-5/12">
        <div class="diff lg:aspect-[9/14] xl:aspect-[9/13]">
          <div class="diff-item-1">
            <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
          </div>
          <div class="diff-item-2">
            <img alt="daisy" src="https://ccdstest.b-cdn.net/Medi%20u/blur.webp" />
          </div>
          <div class="diff-resizer"></div>
        </div>
      </div>
      <!-- second section -->
      <div class="w-7/12 ml-4">
        <div class="flex justify-start mb-4">
          <button @click="filterProducts('Hyperpigmentation')" :class="{
            'bg-[#28574E] text-white':
              selectedCategory === 'Hyperpigmentation',
            'bg-gray-300 text-black':
              selectedCategory !== 'Hyperpigmentation',
          }" class="py-2 px-4 rounded-full w-full">
            Hyperpigmentation
          </button>
          <button @click="filterProducts('Eczema')" :class="{
            'bg-[#28574E] text-white': selectedCategory === 'Eczema',
            'bg-gray-300 text-black': selectedCategory !== 'Eczema',
          }" class="py-2 px-4 rounded-full ml-2 w-full">
            Eczema
          </button>
          <button @click="filterProducts('Acne')" :class="{
            'bg-[#28574E] text-white': selectedCategory === 'Acne',
            'bg-gray-300 text-black': selectedCategory !== 'Acne',
          }" class="py-2 px-4 rounded-full ml-2 w-full">
            Acne
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4 h-auto">
          <!-- make it anchor -->
          <a v-for="product in filteredProducts" :key="product.id" :href="product.url" class="border p-4 rounded-lg block no-underline">
            <div class="relative">
              <span v-if="product.isOnSale" class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale 50%</span>
              <img :src="product.image" class="w-full" alt="" />
            </div>
            <div class="mt-4">
              <h3 class="text-black">{{ product.name }}</h3>
              <div class="flex justify-between items-center">
                <div class="flex">
                  <p class="text-[#28574E] font-bold">
                    {{ product.salePrice }}
                  </p>
                  <p class="text-gray-500 text-sm line-through" v-if="product.isOnSale">
                    {{ product.originalPrice }}
                  </p>
                </div>
                <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
                  <a :href="product.url"><img src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg" alt="" /></a>
                </div>
              </div>
              <div class="flex items-center mt-2">
                <div class="rating">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-4 text-right">
          <a href="#" class="text-blue-500">Explore More →</a>
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
          name: "Fresh Day Serum",
          salePrice: "$14.99",
          originalPrice: "$20.99",
          rating: 4,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
        },
        {
          id: 2,
          name: "Calming Lotion",
          salePrice: "$19.99",
          originalPrice: "$29.99",
          rating: 5,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
        },
        {
          id: 3,
          name: "Clear Skin Cream",
          salePrice: "$24.99",
          originalPrice: "$34.99",
          rating: 4,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
        },
        {
          id: 4,
          name: "Brightening Toner",
          salePrice: "$15.99",
          originalPrice: "$25.99",
          rating: 3,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
        },
        {
          id: 5,
          name: "Soothing Balm",
          salePrice: "$12.99",
          originalPrice: "$18.99",
          rating: 5,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
        },
        {
          id: 6,
          name: "Anti-Acne Gel",
          salePrice: "$16.99",
          originalPrice: "$22.99",
          rating: 4,
          image: "https://ccdstest.b-cdn.net/Medi%20u/disbeyazlaticiset-2.png",
          category: "Hyperpigmentation",
          isOnSale: true,
          url: "/products/productDescription",
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
