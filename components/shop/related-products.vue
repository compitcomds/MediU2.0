<template>
  <div class="product-slider-container mx-auto py-8">
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      class="testimonial-grid"
    >
      <swiper-slide
        class="justify-start"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="w-80 rounded-lg border border-gray-300 bg-white px-4 py-2">
          <nuxt-link
            :to="`/shop/product/${product.handle}`"
            class="relative block"
          >
            <!-- Sale badge -->
            <span
              v-if="
                parseInt(product.compareAtPriceRange.minVariantPrice.amount) >
                parseInt(product.priceRange.minVariantPrice.amount)
              "
              class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white"
            >
              Save
              {{
                Math.floor(
                  ((parseInt(
                    product.compareAtPriceRange.minVariantPrice.amount,
                  ) -
                    parseInt(product.priceRange.minVariantPrice.amount)) *
                    100) /
                    parseInt(
                      product.compareAtPriceRange.minVariantPrice.amount,
                    ),
                )
              }}%
            </span>

            <!-- Product image -->
            <img
              :src="
                product.featuredImage?.url || 'https://placehold.co/500x500/png'
              "
              class="h-48 w-full rounded-t-lg object-cover"
              alt=""
            />
          </nuxt-link>

          <div class="mt-4 space-y-4">
            <!-- Product title -->
            <a :href="`/shop/product/${product.handle}`" class="block">
              <h3
                class="truncate font-serif text-xl font-semibold capitalize text-black lg:text-lg"
              >
                {{ product.title }}
              </h3>
            </a>

            <!-- Price and discount -->
            <div class="flex justify-between text-xl">
              <div>
                <p class="font-bold text-[#28574E]">
                  {{ product.priceRange.minVariantPrice.currencyCode }}
                  {{ product.priceRange.minVariantPrice.amount }}
                </p>
                <p
                  class="mt-1 text-sm font-bold text-gray-500 line-through"
                  v-if="true"
                >
                  {{ product.compareAtPriceRange.minVariantPrice.currencyCode }}
                  {{ product.compareAtPriceRange.minVariantPrice.amount }}
                </p>
              </div>
              <div>
                <ShopSharebtn
                  :product-link="`/shop/product/${product.handle}`"
                />
              </div>
            </div>

            <!-- Action buttons -->
            <div class="mt-4 flex gap-2">
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="text-md flex-1 cursor-pointer rounded-full bg-[#28574E] p-2 text-center font-semibold text-white shadow"
              >
                BUY NOW
              </nuxt-link>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import getProductRecommendations from "~/shopify/shop/product-recommendations";

const props = defineProps(["productId"]);

const products = ref([]);

onMounted(async () => {
  try {
    const data = await getProductRecommendations(props.productId);
    products.value = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style scoped>
.product-slider-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.product-card {
  text-align: center;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.1rem;
  color: #333;
}
</style>
