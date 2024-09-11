<template>
  <div class="m-2">
    <a class="border p-4 rounded-lg block no-underline border-gray-300 shadow-md ">
      <div class="relative">
        <span
          v-if="true"
          class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
          >Sale 50%</span
        >
        <img src="https://placehold.co/400" class="w-full" alt="" />
      </div>
      <div class="mt-4 space-y-2">
        <h3 class="text-black uppercase text-2xl">name</h3>
        <div class="flex justify-between items-center text-xl">
          <div class="flex">
            <p class="text-[#28574E] font-bold">price</p>
            <p class="text-gray-500 text-sm line-through" v-if="true">
              original price
            </p>
          </div>
          <div class="bg-slate-300 rounded-full px-1 py-1 opacity-80">
            <a href="#"
              ><img
                src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
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

<style scoped></style>
