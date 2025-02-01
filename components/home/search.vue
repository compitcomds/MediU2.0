<template>
  <div
    class="sticky inset-x-0 top-0 z-50 flex items-center justify-between border-gray-300 bg-white px-1 transition-all duration-300 lg:px-6"
  >
    <nuxt-link to="/" class="hidden w-3/12 items-center lg:flex">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/logos/logo%201.png"
        class="w-[30%] xxl:w-[20%]"
        alt="Logo"
      />
    </nuxt-link>
    <form
      @submit.prevent="submitForm"
      class="group relative flex h-[35px] justify-center rounded-md md:h-[40px] lg:w-6/12 xl:h-[50px]"
    >
      <input
        type="text"
        name="q"
        id="query"
        placeholder="Search..."
        class="w-full rounded-full rounded-r-none border-2 border-gray-300 border-r-white bg-white p-3 text-black placeholder-gray-500"
        v-model="searchQuery"
      />
      <button
        type="submit"
        class="inline-flex items-center gap-2 rounded-r-full bg-[#4CA9EE] px-3 py-2 text-lg text-white md:px-6 md:py-3 xxl:px-16"
      >
        <span class="sr-only">Search</span>
        <svg
          class="h-5 w-5 fill-current p-0 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>

      <div
        class="absolute left-0 top-full hidden w-full translate-y-2 rounded-lg bg-white py-2 shadow group-focus-within:block"
        v-if="searchQuery.length > 0"
      >
        <ul>
          <li v-for="product in productSuggestions">
            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="block h-full w-full px-4 py-2 uppercase hover:bg-gray-100"
              @click="clearSearchBox"
            >
              {{ product.title }}
            </nuxt-link>
          </li>
        </ul>
        <p v-if="isSearching" class="px-4 py-2">Searching...</p>
        <p
          v-if="
            !isSearching &&
            searchQuery.length >= 3 &&
            productSuggestions.length === 0
          "
          class="px-4 py-2"
        >
          No products found
        </p>
      </div>
    </form>

    <HomeCart />
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";
import predictiveSearchProducts from "~/shopify/search/predictive-search";

const router = useRouter();

const isSearching = useState("searching-products", () => false);
const searchQuery = useState("search-query", () => "");
const productSuggestions = useState("product-suggestions", () => []);

const searchProducts = useDebounceFn(async (query) => {
  isSearching.value = true;
  try {
    const products = await predictiveSearchProducts(query);
    productSuggestions.value = products;
  } catch (error) {
    toast.error(
      "Unable to search products at the time. Please try again later.",
      {
        richColors: true,
      },
    );
  }

  isSearching.value = false;
}, 500);

watch(searchQuery, () => searchProducts(searchQuery.value));

const submitForm = async (e) => {
  if (!searchQuery.value) {
    toast.error("No search query provided", { richColors: true });
    return;
  }

  const search = searchQuery.value;
  clearSearchBox();

  await router.push({
    path: "/shop/search",
    query: { search },
  });
};

const clearSearchBox = () => {
  searchQuery.value = "";
};
</script>
