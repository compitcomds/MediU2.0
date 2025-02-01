<template>
  <div class="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
    <h2 class="mb-6 text-2xl font-semibold text-primary">
      Step 2: Select a Category
    </h2>
    <div
      v-if="categories.length"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="category in categories"
        :key="category"
        class="card cursor-pointer rounded-lg bg-gray-100 p-4 shadow-md transition duration-300 ease-in-out hover:bg-[#f7fafc] hover:shadow-lg"
        @click="selectCategory(category)"
      >
        <p class="text-lg font-semibold text-primary">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  problem: String,
});

const emit = defineEmits(["step2Data"]);

const categories = ref([]);

watch(
  () => props.problem,
  (newProblem) => {
    if (newProblem === "skin") {
      categories.value = ["Face Care", "Body Care", "Acne Treatment"];
    } else if (newProblem === "hair") {
      categories.value = ["Shampoo", "Conditioner", "Hair Treatment"];
    } else if (newProblem === "baby-care") {
      categories.value = ["Diapers", "Baby Lotion", "Baby Shampoo"];
    }
  },
);

function selectCategory(category) {
  emit("step2Data", category);
}
</script>
