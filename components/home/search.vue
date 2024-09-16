<template>
  <div
    :class="[showNotification ? 'top-0 xl:top-0' : 'top-0']"
    class="flex sticky z-50 bg-white inset-x-0 justify-between items-center border-b border-gray-300 h-20 px-1 lg:px-6 transition-all duration-300"
  >
    <a href="/" class="flex items-center w-3/12">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/logo%202.png"
        class="w-auto "
        alt="Logo"
      />
    </a>
    <form
      @submit.prevent="submitForm"
      class="group relative rounded-md w-6/12 h-[40px] xl:h-[50px] flex justify-center"
    >
      <input
        type="text"
        name="q"
        id="query"
        placeholder="What are you looking for?.."
        class="w-full p-3 rounded-full border-2 border-r-white rounded-r-none text-black border-gray-300 bg-white placeholder-gray-500"
        v-model="searchQuery"
      />
      <button
        type="submit"
        class="inline-flex items-center gap-2 bg-orange-500 text-white text-lg py-3 px-6 rounded-r-full"
      >
        <span class="">
          <svg
            class="text-gray-200 h-5 w-5 p-0 fill-current"
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
        </span>
      </button>

      <div
        class="bg-white w-full shadow rounded-lg absolute top-full translate-y-2 left-0 py-2 hidden group-focus-within:block"
        v-if="searchQuery.length > 0"
      >
        <ul>
          <li v-for="product in productSuggestions">
            <nuxt-link
              :to="`/shop/product/${product.handle}`"
              class="uppercase block w-full hover:bg-gray-100 h-full py-2 px-4"
            >
              {{ product.title }}
            </nuxt-link>
          </li>
        </ul>
        <p v-if="isSearching" class="py-2 px-4">Searching...</p>
        <p
          v-if="!isSearching && productSuggestions.length === 0"
          class="py-2 px-4"
        >
          No products found
        </p>
      </div>
    </form>
    <HomeCart />
  </div>
</template>

<script setup>
import predictiveSearchProducts from "~/shopify/search/predictive-search";

const showNotification = ref(true);

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
    alert("Unable to search products at the time. Please try again later.");
  }

  isSearching.value = false;
}, 500);

watch(searchQuery, () => searchProducts(searchQuery.value));

const submitForm = async (e) => {
  if (!searchQuery.value) {
    alert("No search query provided");
    return;
  }

  const search = searchQuery.value;
  searchQuery.value = "";

  await router.push({
    path: "/shop/search",
    query: { search },
  });
};

const closeNotification = () => {
  showNotification.value = false;
};
</script>

<style lang="postcss" scoped></style>
