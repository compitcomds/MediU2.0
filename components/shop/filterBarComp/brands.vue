<template>
    <div class="shadow-[#537971] shadow-lg rounded-xl border m-2 p-2">
      <div class="py-2">
        <p class="text-black text-xl font-bold">Brands</p>
      </div>
        <hr>
        <div class="text-black">
        <div v-for="(item, index) in category" :key="index">
            <input
            type="checkbox"
            :value="item"
            v-model="selectedCategories"
            @change="handleSelectionChange"
            class="mr-2 bg-white"
          />
          <span>{{ item }}</span>
        </div>
    </div>
        <hr>
    </div>
    </template>
    
    <script setup>
    const props = defineProps({
        category: {
        type: Object,
        required: true,
      },
    });
    </script>
    
    <style>
    
    </style>