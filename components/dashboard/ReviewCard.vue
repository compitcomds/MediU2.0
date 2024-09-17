<template>
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <div class="flex items-center mb-4">
        <img
          :src="img"
          alt="Profile"
          class="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <h3 class="font-semibold text-lg">{{ name }}</h3>
          <div class="flex items-center">
            <span class="text-yellow-500">★★★★★</span>
          </div>
        </div>
      </div>
      <p class="text-gray-600">{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      img: String,
      text: String,
    },
  }
  </script>
  