<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-primary mb-6">
      Step 3: Select a Specific Problem
    </h2>
    <div
      v-if="problems.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="problem in problems"
        :key="problem"
        class="card p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
        @click="selectProblem(problem)"
      >
        <p class="text-lg font-semibold text-primary">{{ problem }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: String,
});

const emit = defineEmits(["step3Data"]);

const problems = ref([]);

if (props.category === "Face Care") {
  problems.value = ["Dry Skin", "Oily Skin", "Sensitive Skin"];
} else if (props.category === "Shampoo") {
  problems.value = ["Dandruff", "Hair Loss", "Dry Hair"];
} else {
  problems.value = ["General Issue"];
}

function selectProblem(problem) {
  emit("step3Data", problem);
}
</script>

<style scoped>
.card:hover {
  background-color: #f7fafc;
}
</style>
