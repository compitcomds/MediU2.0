<template>
    <div class="bg-white rounded px-2">
        <div class="py-2">
           <p class="text-black font-bold">
            tags
           </p>
        </div>
        <hr>
        <div class="h-48 overflow-x-scroll slim-scrollbar">
        <div v-for="(items, index) in category" :key="index">
            <div class="p-1">
                {{items}}
            </div>
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