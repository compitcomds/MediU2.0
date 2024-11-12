<template>
  <div class="bg-gray-50 rounded-lg p-6 shadow-md w-full mx-auto">
    <h2 class="text-2xl font-semibold text-gray-900 text-center">Customer Reviews</h2>
    
    <!-- Review Summary -->
    <div class="flex justify-between items-center mt-4 border-b pb-4">
      <div class="flex items-center text-yellow-500">
        <span class="text-lg font-semibold">★★★★★</span>
        <span class="ml-2 font-medium text-gray-600">{{ averageRating }} / 5</span>
      </div>
      <span class="text-gray-600">Based on {{ reviews.length }} reviews</span>
    </div>
    
    <!-- Reviews List -->
    <div class="space-y-4 mt-4">
      <div v-for="(review, index) in paginatedReviews" :key="index" class="bg-white p-4 rounded-lg shadow-sm">
        <div class="flex items-start">
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
            <p class="mt-2 text-gray-600">{{ truncateText(review.text) }}</p>
            <div v-if="review.text.length > 100 || review.uploadedImages.length > 0" class="text-right">
              <button @click="toggleExpand(index)" class="text-[#28574e] hover:underline">
                {{ review.expanded ? 'Show Less' : 'Show More' }}
              </button>
            </div>
            <transition name="fade">
              <div v-if="review.expanded || review.uploadedImages.length > 20">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-2">
                  <img v-for="(img, imgIndex) in review.uploadedImages" :key="imgIndex" :src="img" alt="Uploaded Image" class="w-24 h-24 rounded-lg" />
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Buttons -->
    <div class="flex justify-center mt-6">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="currentPage = page" 
        :class="page === currentPage ? 'bg-[#28574e] text-white' : 'bg-white text-gray-800'"
        class="px-3 py-1 mx-1 rounded-full shadow-md hover:bg-[#2c8d7b] transition duration-300"
      >
        {{ page }}
      </button>
    </div>

    <!-- Write a Review Button -->
    <button
      @click="showForm = !showForm"
      class="mt-6 w-full bg-[#28574e] text-white py-2 rounded-lg shadow hover:bg-[#2c8d7b] transition duration-300"
    >
      Write a Review
    </button>

    <!-- Review Form -->
    <ReviewForm v-if="showForm" @submit-review="addReview" />
  </div>
</template>
<script>
import ReviewForm from './ReviewForm.vue';

export default {
  components: {
    ReviewForm
  },
  data() {
    return {
      showForm: false,
      reviews: [
        { name: 'compitcom', text: 'Amazing product! This reduced my pigmentation. I highly recommend it to anyone looking for a solution.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'Archit Jain', text: 'Very good results. My mother’s scars are disappearing. Thanks to this product, she feels more confident now.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'compitcom', text: 'Amazing product! This reduced my pigmentation. I highly recommend it to anyone looking for a solution.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'Archit Jain', text: 'Very good results. My mother’s scars are disappearing. Thanks to this product, she feels more confident now.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'compitcom', text: 'Amazing product! This reduced my pigmentation. I highly recommend it to anyone looking for a solution.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'Archit Jain', text: 'Very good results. My mother’s scars are disappearing. Thanks to this product, she feels more confident now.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'compitcom', text: 'Amazing product! This reduced my pigmentation. I highly recommend it to anyone looking for a solution.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        { name: 'Archit Jain', text: 'Very good results. My mother’s scars are disappearing. Thanks to this product, she feels more confident now.', image: null, uploadedImages: ["https://placehold.co/100x100","https://placehold.co/100x100","https://placehold.co/100x100"], expanded: false },
        // More reviews here
      ],
      currentPage: 1,
      reviewsPerPage: 5,
    };
  },
  computed: {
    averageRating() {
      const totalReviews = this.reviews.length;
      const totalRating = totalReviews * 4.8; // Assuming the average rating is 4.8
      return (totalRating / totalReviews).toFixed(1);
    },
    totalPages() {
      return Math.ceil(this.reviews.length / this.reviewsPerPage);
    },
    paginatedReviews() {
      const start = (this.currentPage - 1) * this.reviewsPerPage;
      const end = start + this.reviewsPerPage;
      return this.reviews.slice(start, end);
    }
  },
  methods: {
    addReview(review) {
      this.reviews.push({
        name: review.name,
        text: review.text,
        image: review.image || 'https://placehold.co/50x50',  // Use uploaded image or placeholder
        uploadedImages: review.images,  // Handle multiple uploaded images
        expanded: false
      });
      this.showForm = false;
    },
    truncateText(text) {
      return text.length > 100 ? text.substring(0, 100) + '...' : text;
    },
    toggleExpand(index) {
      const reviewIndex = ((this.currentPage - 1) * this.reviewsPerPage) + index;
      this.reviews[reviewIndex].expanded = !this.reviews[reviewIndex].expanded;
    }
  }
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
button[aria-current='page'] {
  background-color: #28574e;
  color: white;
}
</style>
