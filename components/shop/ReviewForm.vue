<template>
    <div class="bg-white p-6 mt-4 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Write a Review</h3>
  
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="rating">Rating</label>
          <div class="flex text-yellow-500">
            <span
              v-for="n in 5"
              :key="n"
              @click="setRating(n)"
              class="cursor-pointer"
              :class="n <= form.rating ? 'text-yellow-500' : 'text-gray-300'"
            >
              ★
            </span>
          </div>
          <p class="text-gray-600 mt-1">Rating: {{ form.rating }}</p>
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="review">Review</label>
          <textarea
            v-model="form.text"
            id="review"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your comments here"
            required
          ></textarea>
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="image">Upload Image</label>
          <input
            type="file"
            id="image"
            @change="onFileChange"
            class="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          rating: 0,
          text: '',
          image: null
        }
      }
    },
    methods: {
      setRating(rating) {
        this.form.rating = rating
      },
      onFileChange(event) {
        const file = event.target.files[0]
        if (file) {
          this.form.image = URL.createObjectURL(file)
        }
      },
      submitForm() {
        this.$emit('submit-review', { ...this.form })
        this.form = { name: '', rating: 0, text: '', image: null }
      }
    }
  }
  </script>
  