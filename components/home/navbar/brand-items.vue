<template>
  <div
    class="custom-scrollbar invisible absolute -right-[100px] top-full z-50 max-h-[400px] w-96 transform overflow-y-auto bg-white text-black opacity-0 shadow-lg transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:opacity-100"
  >
    <div class="px-6 py-2">
      <div class="sticky top-0 z-10 bg-white">
        <div class="mb-2 font-serif text-xl font-semibold text-[#238878]">
          Brands -
        </div>

        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by brand..."
          class="mb-4 w-full rounded border border-black bg-white p-2 text-black"
        />
      </div>

      <div class="space-y-2">
        <div v-for="(values, key) in filteredBrandCollections">
          <h2 class="text-lg font-bold uppercase">{{ key }}</h2>
          <ul class="pl-4">
            <li v-for="value in values">
              <nuxt-link
                class="text-gray-800 hover:font-semibold hover:text-green-600"
                :to="`/shop/${value.handle}`"
              >
                {{ value.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getAllBrandCollections from "~/shopify/shop/get-brand-collections";

const brandCollections = await getAllBrandCollections();
const groupedBrandCollections = groupByAlphabet(brandCollections);
const searchQuery = ref("");

const filteredBrandCollections = computed(() => {
  if (!searchQuery.value) {
    return groupedBrandCollections;
  }
  const searchLowerCase = searchQuery.value.toLowerCase();
  const filteredGrouped: Record<string, { handle: string; title: string }[]> =
    {};

  for (const letter of Object.keys(groupedBrandCollections)) {
    if (letter.toLowerCase() !== searchLowerCase[0]) continue;
    const filteredItems = groupedBrandCollections[letter].filter((item) =>
      item.title.toLowerCase().includes(searchLowerCase),
    );
    if (filteredItems.length > 0) {
      filteredGrouped[letter] = filteredItems;
    }
  }

  return filteredGrouped;
});

function groupByAlphabet(
  arr: {
    handle: string;
    title: string;
  }[],
): Record<
  string,
  {
    handle: string;
    title: string;
  }[]
> {
  const grouped: Record<
    string,
    {
      handle: string;
      title: string;
    }[]
  > = {};

  arr.forEach((item) => {
    const firstLetter = item.title.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(item);
  });

  return grouped;
}
</script>
