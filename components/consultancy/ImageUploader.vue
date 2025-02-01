<template>
  <div class="relative flex flex-col items-start">
    <label
      class="flex cursor-pointer flex-col items-center rounded border-2 border-[#238878] px-4 py-2 font-bold text-[#238878] transition-colors hover:bg-[#238878] hover:text-white"
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
    <div v-if="imageUrl" class="relative mt-4">
      <img
        :src="imageUrl"
        alt="Image Preview"
        class="h-64 w-64 rounded object-cover"
      />
      <button
        @click="removeImage"
        class="absolute right-1 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-3xl text-red-600 hover:bg-red-600 hover:text-white"
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
