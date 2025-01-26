<template>
  <div v-if="!!user" class="mb-20 flex items-center justify-center">
    <div class="flex-1">
      <h3 class="mb-4 text-center text-xl font-bold">Write a review</h3>
      <form @submit.prevent="submitReview" class="mx-auto w-full max-w-[60%]">
        <div class="mb-8 flex flex-col items-center justify-center">
          <p for="rating" class="mb-2 block text-center tracking-wider">
            RATING
          </p>
          <div class="flex items-center gap-2" @mouseleave="setHoverStar(0)">
            <button
              type="button"
              v-for="star in maxStars"
              @click="setRating(star)"
              @mouseenter="setHoverStar(star)"
            >
              <Star
                :fill="
                  star <= hoverRating || star <= form.rating
                    ? '#238878'
                    : '#e5e7eb'
                "
              />
            </button>
          </div>
        </div>
        <div class="mb-8 flex flex-col items-center justify-center">
          <label
            for="description"
            class="mb-2 block text-center tracking-wider"
          >
            DESCRIPTION
          </label>
          <textarea
            class="block w-full rounded-none border border-[#238878] bg-white p-3 focus:outline-none"
            rows="4"
            required
            v-model="form.description"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            :disabled="isSubmitting"
            type="submit"
            class="bg-[#238878] px-8 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span
              v-if="isSubmitting"
              class="flex items-center justify-center gap-2"
              >Submitting... <Loader
            /></span>
            <span v-else>Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <div v-else>
    <p class="my-10 text-center">
      Please
      <nuxt-link to="/login" class="text-[#238878] underline">log in</nuxt-link>
      to write the review.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Star } from "lucide-vue-next";
import { getUser } from "~/appwrite/auth";
import addProductReviewInAppwrite from "~/appwrite/reviews/add-review";
import { toast } from "vue-sonner";

let user: any;

const props = defineProps<{
  productId: string;
}>();

const reviewsModel = defineModel<any>("reviews");

try {
  user = await getUser();
} catch (error) {
  user = null;
}

const isSubmitting = ref(false);
const maxStars = 5;
const hoverRating = ref(0);

const form = ref({
  rating: 0,
  description: "",
});

const setHoverStar = (star: number) => {
  hoverRating.value = star;
};

const setRating = (star: number) => {
  form.value.rating = star;
};

const submitReview = async () => {
  if (!user.email) {
    toast.error("Log in to post a review.", { richColors: true });
    return;
  }

  if (form.value.rating < 1) {
    toast.error("Please give rating to proceed further.", { richColors: true });
    return;
  }

  if (!form.value.description) {
    toast.error("Description is required.", { richColors: true });
    return;
  }

  isSubmitting.value = true;
  try {
    const review = await addProductReviewInAppwrite({
      ...form.value,
      user: user.email,
      productId: props.productId.replace("gid://shopify/Product/", ""),
      name: user.name,
    });

    reviewsModel.value = [review, ...reviewsModel.value];
    toast.success("Successfully added the review.");
    form.value = {
      description: "",
      rating: 0,
    };
  } catch (error) {
  } finally {
    isSubmitting.value = false;
  }
};
</script>
