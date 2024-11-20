<template>
  <div class="flex flex-col items-start relative">
    <label
      class="flex flex-col items-center border-2 border-[#238878] hover:bg-[#238878] text-[#238878] font-bold py-2 px-4 rounded cursor-pointer hover:text-white transition-colors"
    >
      <span>Upload an Image</span>
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleFileUpload"
      />
    </label>
    <div v-if="imageUrl" class="mt-4 relative">
      <img
        :src="imageUrl"
        alt="Image Preview"
        class="w-64 h-64 object-cover rounded"
      />
      <button
        @click="removeImage"
        class="absolute top-3 right-1 text-3xl w-10 h-10 flex items-center justify-center bg-white text-red-600 hover:bg-red-600 hover:text-white rounded-full"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineModel } from "vue";

defineModel("modelValue", {
  type: File,
  required: true,
});

const props = defineProps({
  modelValue: {
    type: File,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const imageUrl = ref(null);
const fileInput = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    emit("update:modelValue", file);
    imageUrl.value = URL.createObjectURL(file);
  }
};

const removeImage = () => {
  emit("update:modelValue", null);
  imageUrl.value = null;
  // Reset the file input value
  fileInput.value.value = null;
};
</script>

<style scoped>
/* Additional styling can go here */
</style>
