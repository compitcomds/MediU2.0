<template>
  <div class="mx-auto py-8">
    <div
      class="embla relative w-full overflow-hidden text-white lg:-mt-3"
      ref="emblaRef"
    >
      <div class="embla__container flex">
        <div
          class="embla__slide min-w-0 flex-[0_0_100%] basis-[98%] pl-4 md:basis-[40%] lg:basis-[30%] xl:basis-[23%]"
          v-for="(product, index) in products"
          :key="index"
        >
          <div
            class="w-full rounded-lg border border-gray-300 bg-white px-8 py-2 lg:px-4"
          >
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
                  product.featuredImage?.url ||
                  'https://placehold.co/500x500/png'
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
                  <p class="font-bold text-[#238878]">
                    {{ product.priceRange.minVariantPrice.currencyCode }}
                    {{ product.priceRange.minVariantPrice.amount }}
                  </p>
                  <p
                    class="mt-1 text-sm font-bold text-gray-500 line-through"
                    v-if="true"
                  >
                    {{
                      product.compareAtPriceRange.minVariantPrice.currencyCode
                    }}
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
                  class="text-md flex-1 cursor-pointer rounded-full bg-[#238878] p-2 text-center font-semibold text-white shadow"
                >
                  BUY NOW
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import getProductRecommendations from "~/shopify/shop/product-recommendations";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()]);

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
