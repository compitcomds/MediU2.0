<template>
  <div class="flex min-h-screen bg-[#edf8f3] lg:p-6">
    <DashboardSidenav class="hidden lg:block" />

    <div class="my-10 w-full bg-gray-100 pb-20 lg:my-0 lg:px-8 lg:pb-0">
      <div
        class="grid grid-cols-1 gap-6 text-[#238878] md:grid-cols-2 lg:grid-cols-3"
      >
        <DashboardReviewCard
          v-for="review in userReviews"
          :name="review.name"
          :text="review.description"
          :stars="review.rating"
          :img="getUserImage(review.name)"
          img="https://via.placeholder.com/50"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import getUserReviews from "~/appwrite/reviews/get-user-reviews";
import { getUserImage } from "~/appwrite/auth";

const { total, documents: userReviews } = await getUserReviews();
</script>
