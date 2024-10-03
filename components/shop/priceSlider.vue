<template>
  <div class="flex flex-col items-center w-full">
    <!-- Min Value Slider -->
    <div class="w-full mb-4">
      <label class="text-[#26504e] mb-2 block">Min Value: {{ minValue }}</label>
      <input
        type="range"
        v-model="minValue"
        :min="min"
        :max="max"
        class="w-full accent-primary slider"
      />
    </div>

    <!-- Max Value Slider -->
    <div class="w-full">
      <label class="text-[#26504e] mb-2 block">Max Value: {{ maxValue }}</label>
      <input
        type="range"
        v-model="maxValue"
        :min="min"
        :max="max"
        class="w-full accent-primary slider"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const { min, max } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
});

const minValue = defineModel("minValue");
const maxValue = defineModel("maxValue");

// Watch for changes in slider values to ensure min is less than or equal to max
watch(minValue, (newMin) => {
  if (newMin > maxValue.value) {
    maxValue.value = newMin;
  }
});

watch(maxValue, (newMax) => {
  if (newMax < minValue.value) {
    minValue.value = newMax;
  }
});
</script>

<style scoped>
/* Customize the slider's thumb and track colors */
input[type="range"] {
  --tw-accent-color: #26504e;
  appearance: none;
  height: 6px;
  background: #d1d5db;
  border-radius: 3px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: #26504e;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background-color: #26504e;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-ms-thumb {
  width: 16px;
  height: 16px;
  background-color: #26504e;
  border-radius: 50%;
  cursor: pointer;
}
</style>
