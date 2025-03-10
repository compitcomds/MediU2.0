<template>
  <div
    class="mx-auto mt-4 max-w-3xl rounded-lg px-4 pb-20 text-center lg:px-0 lg:py-10 lg:pb-10"
  >
    <h2 class="mb-6 text-2xl font-bold text-[#238878]">Select Category</h2>

    <div class="mb-4 flex flex-wrap space-y-2 md:space-x-2 md:space-y-0">
      <button
        :class="{
          'bg-[#238878] text-white': activeFilter === 'all',
          'bg-blue-100 text-[#238878]': activeFilter !== 'all',
        }"
        class="flex w-full items-center rounded px-4 py-2 sm:w-auto"
        @click="filterProducts('all')"
      >
        <span>All</span>
      </button>

      <button
        v-for="category in ['Hair', 'Skin', 'Baby']"
        :key="category"
        :class="{
          'bg-[#238878] text-white': activeFilter === category,
          'bg-blue-100 text-[#238878]': activeFilter !== category,
        }"
        class="flex w-full items-center rounded border px-4 py-2 sm:w-auto"
        @click="filterProducts(category)"
      >
        <span>{{ category }}</span>
      </button>
    </div>

    <!-- Display Services -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        @click="selectConsultancyProduct(product)"
        :class="[
          'cursor-pointer rounded bg-white p-4 text-[#238878] hover:shadow-md',
          product.$id === selectedProduct?.$id
            ? 'border-2 border-[#238878]'
            : 'border border-gray-300',
        ]"
      >
        <div class="flex items-center space-x-4">
          <div
            class="w-14 rounded-full border border-[#238878] p-1 text-[#238878]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4-.44.33-1.07.25-1.4-.2-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33c-.4-.54-1.2-.54-1.6 0z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold">{{ product.title }}</h3>
            <p v-html="product.descriptionHtml"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      @click="confirmService"
      :disabled="!selectedProduct"
      class="mt-6 w-full rounded bg-[#238878] px-4 py-2 text-white sm:w-auto"
    >
      Next: Basic Details
    </button>
  </div>
</template>

<script setup lang="ts">
import getAllConsultancyServices from "~/appwrite/consultancy/get-consultancy-services";

const { documents: consultancyProducts } = await getAllConsultancyServices();
const router = useRouter();
const activeFilter = ref("all");
const filteredProducts = ref<any[]>([]);

const consultancyStore = useConsultancyStore();
const { step1: selectedProduct } = storeToRefs(consultancyStore);

onMounted(() => {
  filterProducts(activeFilter.value);
});

const filterProducts = (category: string) => {
  activeFilter.value = category;
  filteredProducts.value =
    category === "all"
      ? [...consultancyProducts]
      : consultancyProducts.filter((product: any) =>
          product.tags.includes(category.toLowerCase()),
        );
  filteredProducts.value.sort((a, b) => a.title.localeCompare(b.title));
};

const selectConsultancyProduct = (product: any) => {
  selectedProduct.value = product;
};

const confirmService = () => {
  if (selectedProduct.value.$id) {
    router.push({
      path: "/consultancy/basic-details",
    });
  }
};

useHead({
  title: "Consultancy - Services - Mediu",
  meta: [
    { name: "description", content: "Consultancy - Services" },
    { name: "og:title", content: "Consultancy - Services - Mediu" },
    { name: "og:description", content: "Consultancy - Services" },
    { name: "keywords", content: `Mediu, Consultancy, health, wellness` },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:image:secure_url",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "Mediu",
    },
    {
      name: "og:url",
      content: "https://mediu.in/consultancy/services",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Consultancy - Services",
    },
    {
      name: "twitter:description",
      content: "Mediu Consultancy - Services",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
