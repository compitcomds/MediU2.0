<template>
  <div class="mt-10 px-5 md:px-10 border py-5 md:py-10 rounded-xl overflow-hidden" id="customer-review-section">
    <h2 class="mb-8 text-center text-xl font-bold text-[#238878] lg:text-2xl">
      Customer Reviews
    </h2>
    <div class="mx-auto mb-8 flex max-w-full flex-wrap items-center justify-between gap-5">
      <div class="md:w-1/5">
        <div class="mb-1 flex items-center gap-2">
          <p class="flex items-center gap-2">
            <span class="flex items-center gap-1 text-[#eab308]">
              <Star fill="#eab308" />
              <Star fill="#eab308" />
              <Star fill="#eab308" />
              <Star fill="#eab308" />
              <Star fill="#eab308" />
            </span>
            5.00 out of 4.9
          </p>
        </div>
        <p class="text-sm">Based on 39 reviews</p>
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-col gap-y-3">
          <div v-for="i in 5" class="flex items-center gap-8">
            <div class="flex items-center gap-1">
              <span class="flex items-center gap-1 text-[#eab308]">
                <Star fill="#eab308" />
                <Star fill="#eab308" />
                <Star fill="#eab308" />
                <Star fill="#eab308" />
                <Star fill="#eab308" />
              </span>
            </div>
            <div class="relative h-5 w-48 bg-gray-200">
              <div class="absolute left-0 top-0 h-full bg-[#238878]" :style="{ width: `${100 / i}%` }"></div>
            </div>
            <p>39</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center md:w-1/5">
        <div>
          <button @click="toggleWriteReview" class="bg-[#238878] px-8 py-2 font-medium text-white">
            Write A Review
          </button>
        </div>
      </div>
    </div>

    <div v-if="writeReview" class="mb-8">
      <ShopProductWriteReviewForm />
    </div>

    <!-- Show only 5 reviews initially -->
    <div class="grid grid-cols-1 gap-y-8">
      <ShopProductUserReview
        v-for="(review, index) in displayedReviews"
        :key="index"
        :name="review.name"
        :stars="review.stars"
        :description="review.description"
      />
    </div>

    <!-- Load More button -->
    <div v-if="reviews.length > displayedReviews.length" class="text-center mt-6">
      <button @click="loadMoreReviews" class="bg-[#238878] px-8 py-2 font-medium text-white">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Star } from "lucide-vue-next";

// Sample review data
const reviews = ref([
  { name: 'Harseerat Arora', stars: 5, description: "This cica serum has a magic inside. It makes my skin glowy and fair." },
  { name: 'John Doe', stars: 4, description: "Good serum but took time to see results." },
  { name: 'Jane Smith', stars: 5, description: "Absolutely love this product! My skin feels amazing." },
  { name: 'Sara Lee', stars: 4, description: "Pretty good, but a bit sticky for my taste." },
  { name: 'Chris Johnson', stars: 5, description: "Perfect for my sensitive skin, will buy again." },
  { name: 'Nina Patel', stars: 3, description: "It works but not as fast as I expected." },
  { name: 'Tom Hardy', stars: 4, description: "Decent product, I liked it." },
  { name: 'Lucy Brown', stars: 5, description: "Great serum, my skin is glowing after 2 weeks." },
  { name: 'Emily Clark', stars: 5, description: "Amazing product, works as advertised!" },
  { name: 'Mark Wilson', stars: 4, description: "Good but could be better for the price." },
]);

// Track the number of reviews to display
const displayedReviews = ref(reviews.value.slice(0, 5));

// Load more reviews
const loadMoreReviews = () => {
  const currentLength = displayedReviews.value.length;
  const nextReviews = reviews.value.slice(currentLength, currentLength + 5);
  displayedReviews.value.push(...nextReviews);
};

// Toggle for the "Write A Review" form
const writeReview = ref(false);
const toggleWriteReview = () => {
  writeReview.value = !writeReview.value;
};
</script>
