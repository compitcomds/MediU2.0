<template>
  <div
    class="mt-10 overflow-hidden rounded-xl border px-5 py-5 md:px-10 md:py-10"
    id="customer-review-section"
  >
    <h2 class="mb-8 text-center text-xl font-bold text-[#238878] lg:text-2xl">
      Customer Reviews
    </h2>
    <div
      class="mx-auto mb-8 flex max-w-full flex-wrap items-center justify-between gap-5"
    >
      <div class="md:w-1/5">
        <div class="mb-1 flex items-center gap-2">
          <p class="flex items-center gap-2">
            <span class="flex items-center gap-1 text-[#eab308]">
              <Star fill="#eab308" v-for="_ in averageRating" />
              <Star fill="#e5e7eb" v-for="_ in (5 - averageRating) % 5" />
            </span>
            5.00 out of {{ averageRating }}
          </p>
        </div>
        <p class="text-sm">Based on {{ reviews.length }} reviews</p>
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-col gap-y-3">
          <div
            v-for="(people, index) in groupedReviews.reverse()"
            class="flex items-center gap-8"
          >
            <div class="flex items-center gap-1">
              <span class="flex items-center gap-1 text-[#eab308]">
                <Star fill="#eab308" v-for="_ in 5 - index" />
                <Star fill="#e5e7eb" v-for="_ in index % 5" />
              </span>
            </div>
            <div class="relative h-5 w-48 bg-gray-200">
              <div
                class="absolute left-0 top-0 h-full bg-[#238878]"
                :style="{
                  width:
                    reviews.length > 0
                      ? `${(people * 100) / reviews.length}%`
                      : '0%',
                }"
              ></div>
            </div>
            <p>{{ people }}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center md:w-1/5">
        <div>
          <button
            @click="toggleWriteReview"
            class="bg-[#238878] px-8 py-2 font-medium text-white"
          >
            Write A Review
          </button>
        </div>
      </div>
    </div>
    <div v-if="writeReview" class="mb-8">
      <ShopProductWriteReviewForm
        v-model:reviews="reviews"
        :product-id="props.productId"
      />
    </div>

    <div class="grid grid-cols-1 gap-y-8">
      <ShopProductUserReview
        v-for="review in reviews"
        :key="review.$id"
        :name="review.name"
        :stars="review.rating"
        :description="review.description"
      />
    </div>

    <div class="mt-6 text-center">
      <button @click="" class="bg-[#238878] px-8 py-2 font-medium text-white">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Models } from "appwrite";
import { Star } from "lucide-vue-next";
import getProductReviews from "~/appwrite/reviews/get-product-reviews";

const props = defineProps<{
  productId: string;
}>();

const reviews = ref<Models.Document[]>([]);
const averageRating = computed(() => {
  if (reviews.value.length === 0) return 0;
  const avg =
    reviews.value.reduce((sum, review) => sum + review.rating, 0) /
    reviews.value.length;
  return Math.floor(avg);
});
const groupedReviews = computed(() => groupRatings(reviews.value));

const writeReview = ref(false);
const toggleWriteReview = () => {
  writeReview.value = !writeReview.value;
};

watch(
  () => props.productId,
  async () => {
    if (!props.productId) return;
    console.log(props.productId);
    const fetchedReviews = await getProductReviews(
      props.productId.replace("gid://shopify/Product/", ""),
    );
    reviews.value = fetchedReviews.documents;
    console.log(fetchedReviews);
  },
  { immediate: true },
);

function groupRatings(reviews: Models.Document[]) {
  const ratingGroups = [0, 0, 0, 0, 0];
  for (const review of reviews) ratingGroups[(review.rating - 1) % 5]++;
  return ratingGroups;
}
</script>
