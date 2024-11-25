<template>
  <div class="w-full lg:w-3/4 lg:p-8 py-10 lg:py-5">
    <h1 class="text-4xl text-[#238878] font-semibold mb-8">Downloads</h1>
    <div class="w-full max-w-[500px] md:max-w-full overflow-auto">
    <table class="w-full bg-white shadow-lg rounded-lg">
      <thead class="bg-gray-100">
        <tr class="text-left text-gray-600 font-semibold">
          <th class="py-4 px-6">No</th>
          <th class="py-4 px-6">Image</th>
          <th class="py-4 px-6">Name</th>
          <th class="py-4 px-6 text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index" class="border-b">
          <td class="py-4 px-6 text-[#238878]">{{ index + 1 }}</td>
          <td class="py-4 px-6">
            <img
              :src="product.image"
              :alt="product.name"
              class="object-cover rounded-lg"
            />
          </td>
          <td class="py-4 px-6 lg:text-xl text-[#238878] font-semibold">
            {{ product.name }}
          </td>
          <td class="py-4 px-6 text-right">
            <button
              class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Download
            </button>
          </td>
        </tr>
      </tbody>
    </table></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Vitamin C Serum",
          image: "https://via.placeholder.com/100x80",
        },
        {
          name: "Lavender Body Oil",
          image: "https://via.placeholder.com/100x80",
        },
        {
          name: "Firming Body Gel",
          image: "https://via.placeholder.com/100x80",
        },
        {
          name: "Moisturizing Body Lotion",
          image: "https://via.placeholder.com/100x80",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
