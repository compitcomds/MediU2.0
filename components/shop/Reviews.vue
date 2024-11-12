<template>
    <div class="bg-gray-50 rounded-lg p-6 shadow-md w-full mx-auto">
      <h2 class="text-2xl font-semibold text-gray-900 text-center">Customer Reviews</h2>
  
      <!-- Review Summary -->
      <div class="flex justify-between items-center mt-4 border-b pb-4">
        <div class="flex items-center text-yellow-500">
          <span class="text-lg font-semibold">★★★★★</span>
          <span class="ml-2 font-medium text-gray-600">4.8 / 5</span>
        </div>
        <span class="text-gray-600">Based on 482 reviews</span>
      </div>
  
      <!-- Reviews List -->
      <div class="space-y-4 mt-4">
        <div v-for="(review, index) in reviews" :key="index" class="bg-white p-4 rounded-lg shadow-sm flex items-start">
          <img
            :src="review.image ? review.image : 'https://placehold.co/50x50'"
            alt="User Image"
            class="w-12 h-12 rounded-full mr-4"
          />
          <div class="w-full">
            <div class="flex justify-between items-center">
              <div class="text-lg font-semibold text-gray-800">{{ review.name }}</div>
              <div class="flex items-center text-yellow-500">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="mt-2 text-gray-600">{{ review.text }}</p>
          </div>
        </div>
      </div>
  
      <!-- Write a Review Button -->
      <button
        @click="showForm = !showForm"
        class="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
      >
        Write a Review
      </button>
  
      <!-- Review Form -->
      <ReviewForm v-if="showForm" @submit-review="addReview" />
    </div>
  </template>
  
  <script>
  import ReviewForm from './ReviewForm.vue'
  
  export default {
    components: {
      ReviewForm
    },
    data() {
      return {
        showForm: false,
        reviews: [
          { name: 'compitcom', text: 'Amazing product! This reduced my pigmentation.', image: null },
          { name: 'Archit Jain', text: 'Very good results. My mother’s scars are disappearing.', image: null },
          // More reviews here
        ]
      }
    },
    methods: {
      addReview(review) {
        this.reviews.push(review)
        this.showForm = false
      }
    }
  }
  </script>
  