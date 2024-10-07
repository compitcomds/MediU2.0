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
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }"
      class="testimonial-grid"
    >
      <swiper-slide
        class="justify-start"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="border px-4 py-2 rounded-lg border-gray-300 bg-white w-80">
          <nuxt-link
            :to="`/shop/product/${product.handle}`"
            class="relative block"
          >
            <!-- Sale badge -->
            <span
              v-if="true"
              class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
            >
              Sale
              {{
                Math.floor(
                  ((parseInt(
                    product.compareAtPriceRange.minVariantPrice.amount
                  ) -
                    parseInt(product.priceRange.minVariantPrice.amount)) *
                    100) /
                    parseInt(product.compareAtPriceRange.minVariantPrice.amount)
                )
              }}%
            </span>

            <!-- Product image -->
            <img
              :src="product.featuredImage.url"
              class="w-full h-48 object-cover rounded-t-lg"
              alt=""
            />
          </nuxt-link>

          <div class="space-y-4 mt-4">
            <!-- Product title -->
            <a :href="`/shop/product/${product.handle}`" class="block">
              <h3
                class="text-black font-serif text-xl lg:text-lg font-semibold capitalize truncate"
              >
                {{ product.title }}
              </h3>
            </a>

            <!-- Price and discount -->
            <div class="flex justify-between text-xl">
              <div>
                <p class="text-[#28574E] font-bold">
                  {{ product.priceRange.minVariantPrice.currencyCode }}
                  {{ product.priceRange.minVariantPrice.amount }}
                </p>
                <p
                  class="text-gray-500 text-sm font-bold line-through mt-1"
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
            <div class="flex gap-2 mt-4">
              <nuxt-link
                :to="`/shop/product/${product.handle}`"
                class="flex-1 p-2 bg-[#28574E] text-md rounded-full shadow text-white font-semibold text-center cursor-pointer"
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
