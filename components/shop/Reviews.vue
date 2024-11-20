<template>
  <div class="mt-10 lg:mt-20" id="customer-review-section">
    <h2 class="mb-8 text-center text-xl font-bold text-[#238878] lg:text-2xl">
      Customer Reviews
    </h2>
    <div
      class="mx-auto mb-8 flex max-w-full flex-wrap items-center justify-between gap-5 md:max-w-[80%]"
    >
      <div class="md:w-1/5">
        <div class="mb-1 flex items-center gap-2">
          <p class="flex items-center gap-2">
            <span class="flex items-center gap-1 text-[#238878]"
              ><Star fill="#238878" /><Star fill="#238878" /><Star
                fill="#238878" /><Star fill="#238878" /><Star fill="#238878"
            /></span>
            5.00 out of 5
          </p>
        </div>
        <p class="text-sm">Based on 39 reviews</p>
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-col gap-y-3">
          <div v-for="i in 5" class="flex items-center gap-8">
            <div class="flex items-center gap-1">
              <span class="flex items-center gap-1 text-[#238878]"
                ><Star fill="#238878" /><Star fill="#238878" /><Star
                  fill="#238878" /><Star fill="#238878" /><Star fill="#238878"
              /></span>
            </div>
            <div class="relative h-5 w-48 bg-gray-200">
              <div
                class="absolute left-0 top-0 h-full bg-[#238878]"
                :style="{ width: `${100 / i}%` }"
              ></div>
            </div>
            <p>39</p>
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

    <div v-if="writeReview" class="mb-8"><ShopProductWriteReviewForm /></div>

    <div class="grid grid-cols-1 gap-y-8">
      <ShopProductUserReview
        name="Harseerat Arora"
        :stars="5"
        description="This cica serum has a magic inside.Is makes my skin glowy and fair"
        v-for="i in 10"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from "lucide-vue-next";

const writeReview = ref(false);

const toggleWriteReview = () => {
  writeReview.value = !writeReview.value;
};
</script>
