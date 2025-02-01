<template>
  <div class="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
    <h2 class="mb-6 text-2xl font-semibold text-primary">
      Step 3: Select a Specific Problem
    </h2>
    <div
      v-if="problems.length"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="problem in problems"
        :key="problem"
        class="card cursor-pointer rounded-lg bg-gray-100 p-4 shadow-md transition duration-300 ease-in-out hover:bg-[#f7fafc] hover:shadow-lg"
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
