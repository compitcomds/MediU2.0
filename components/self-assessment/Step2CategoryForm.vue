<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-primary mb-6">
      Step 2: Select a Category
    </h2>
    <div
      v-if="categories.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="category in categories"
        :key="category"
        class="card p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
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
  }
);

function selectCategory(category) {
  emit("step2Data", category);
}
</script>

<style scoped>
.card:hover {
  background-color: #f7fafc;
}
</style>
