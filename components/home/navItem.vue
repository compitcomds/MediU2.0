<template>
  <div class="z-10 w-full bg-[#238878] text-black">
    <div class="relative bg-white">
      <!-- Main Menu -->
      <ul class="flex justify-center space-x-20 bg-[#238878] py-2 text-white">
        <li class="group relative cursor-pointer py-2">
          <nuxt-link to="/" class="text-xl font-semibold hover:opacity-70"
            >Home</nuxt-link
          >
        </li>

        <!-- Hair Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div
            class="flex items-center gap-1 text-xl font-semibold text-white hover:opacity-70"
          >
            Hair
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down mt-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </p>
          </div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="bg-gary-200 invisible absolute -right-[500px] z-50 transform p-4 text-black opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:-right-[650px]"
          >
            <div
              class="grid grid-cols-1 gap-4 bg-slate-50 p-6 sm:grid-cols-2 md:w-[30vw] md:grid-cols-3 lg:w-[70vw] lg:grid-cols-4 xl:w-[55vw] xl:grid-cols-4"
            >
              <!-- Concerns Related to Hair -->
              <div>
                <h2 class="mb-4 w-fit text-left text-lg font-bold">
                  Hair Concerns
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=dandruff"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Dandruff</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=hairfall"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Hairfall</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=hair-thinning"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Hair Thinning</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=damaged-and-fizzy-hair"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Damaged & Fizzy Hair</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=bald-patches"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Bald Patches</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=dull-hair"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Dull Hair</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedHairConcern=oily-scalp"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Oily Scalp</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Ingredients -->
              <div>
                <h2 class="mb-4 w-fit text-left text-lg font-bold">
                  Select By Ingredients
                  <!-- <hr /> -->
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedIngredent=minoxidil"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Minoxidil</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedIngredent=redensyl"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Redensyl</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedIngredent=capixyl"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Capixyl</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedIngredent=peptide"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Peptide</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?min=0&max=100000&selectedIngredent=carnitine"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Carnitine</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Hair Care -->
              <div>
                <h2 class="mb-4 w-fit text-left text-lg font-bold">
                  Hair Care
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <nuxt-link
                      to="/shop?selectedHairCare=shampoo"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Shampoo</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?selectedHairCare=conditioner"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Conditioner</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?selectedHairCare=mask"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Mask</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/shop?selectedHairCare=serum"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Serum</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <div class="hidden lg:block">
                <HomeNavSlider />
              </div>
              <nuxt-link
                to="/consultancy"
                class="flex w-full items-center justify-between rounded-lg bg-gray-200 p-2 text-center hover:bg-gray-300"
                >Consult Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" /></svg
              ></nuxt-link>
            </div>
          </div>
        </li>

        <!-- SKIN  -->
        <li class="group relative cursor-pointer py-2">
          <div
            class="flex items-center gap-1 text-xl font-semibold hover:opacity-70"
          >
            Skin
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down mt-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </p>
          </div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="bg-gary-200 invisible absolute z-50 transform p-4 text-black opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:right-32 lg:-left-56"
          >
            <div
              class="grid grid-cols-1 gap-4 bg-slate-50 p-6 sm:grid-cols-2 md:w-[30vw] md:grid-cols-3 lg:w-[70vw] lg:grid-cols-4 xl:w-[55vw] xl:grid-cols-4"
            >
              <!-- Concerns Related to Hair -->
              <div>
                <h2 class="mb-4 text-left text-lg font-bold">
                  Shop By Concern
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=acne-and-ance-scar"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Acne & Acne Scar</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=aging"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Aging</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=dehydration"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Dehydration</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=damaged-and-sensitive-skin"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Damaged & Sensitive Skin</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=under-eye-darkness"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Under Eye Darkness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=under-arm-darkness"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Under Arm Darkness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=stretch-marks"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Stretch Marks</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=pigmentation"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Pigmentation</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=oiliness"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Oiliness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?min=0&max=100000&selectedSkinConcern=lip-cracked-or-darkness"
                      class="text-nowrap text-gray-800 hover:font-semibold hover:text-green-600"
                      >Lip (Cracked/Darkness)</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Ingredients -->
              <div>
                <h2 class="mb-4 text-left text-lg font-bold">
                  Select By Ingredients
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=vitamin-c"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Vitamin C</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=bha-salicylic-acid"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >BHA / Salicylic Acid</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=retinoid"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Retinoid / Retinol</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=niacinamide"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Niacinamide</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=uv-filters"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >UV Filters</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=ceramide"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Ceramide</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinIngredent=hyaluronic-acid"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Hyaluronic Acid</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Hair Care -->
              <div>
                <h2 class="mb-4 text-left text-lg font-bold">
                  Skin Care
                  <hr />
                </h2>
                <ul class="space-y-1 text-left">
                  <li>
                    <a
                      href="/shop?selectedSkinCare=cleanser"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Cleanser</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinCare=toner"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Toner</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinCare=roll-on"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Roll On</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinCare=moisturize"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Moisturize</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinCare=spf"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >SPF</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop?selectedSkinCare=under-eye"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >Under Eye</a
                    >
                  </li>
                </ul>
              </div>
              <div class="hidden lg:block">
                <HomeNavSlider />
              </div>
              <nuxt-link
                to="/consultancy"
                class="flex w-full items-center justify-between rounded-lg bg-gray-200 p-2 text-center hover:bg-gray-300"
                >Consult Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" /></svg
              ></nuxt-link>
            </div>
          </div>
        </li>

        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="text-xl font-semibold hover:opacity-70"
            >Baby Care</a
          >
        </li>

        <li class="group relative cursor-pointer py-2">
          <div
            class="flex w-28 items-center gap-1 text-xl font-semibold hover:opacity-70"
          >
            Mediu Kit
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down mt-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </p>
          </div>

          <div
            class="invisible absolute top-full z-50 w-[90vw] max-w-3xl transform bg-white p-4 text-black opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 lg:-left-[500px]"
          >
            <div class="flex w-full justify-between p-6">
              <div class="8/12 grid grid-cols-3 gap-6">
                <nuxt-link
                  to="/comingSoon"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 hover:shadow-lg"
                >
                  <h2
                    class="text-lg font-semibold hover:text-[#238878] hover:underline"
                  >
                    Hair Growth Kits
                  </h2>
                </nuxt-link>

                <nuxt-link
                  to="/comingSoon"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 hover:shadow-lg"
                >
                  <h2
                    class="text-lg font-semibold hover:text-[#238878] hover:underline"
                  >
                    Dandruff Kits
                  </h2>
                </nuxt-link>

                <nuxt-link
                  to="/comingSoon"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 hover:shadow-lg"
                >
                  <h2
                    class="text-lg font-semibold hover:text-[#238878] hover:underline"
                  >
                    Itchy Scalp Kits
                  </h2>
                </nuxt-link>
                <nuxt-link
                  to="/comingSoon"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 hover:shadow-lg"
                >
                  <h2
                    class="text-lg font-semibold hover:text-[#238878] hover:underline"
                  >
                    Basic Kits
                  </h2>
                </nuxt-link>
                <nuxt-link
                  to="/comingSoon"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 hover:shadow-lg"
                >
                  <h2
                    class="text-lg font-semibold hover:text-[#238878] hover:underline"
                  >
                    Advanced Kits
                  </h2>
                </nuxt-link>
              </div>
            </div>
          </div>
        </li>

        <li class="group relative cursor-pointer py-2">
          <div
            class="flex items-center gap-1 text-xl font-semibold hover:opacity-70"
          >
            Brands
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down mt-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </p>
          </div>

          <!-- <HomeNavbarOldBrandItems /> -->
          <HomeNavbarBrandItems />
        </li>

        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="text-xl font-semibold hover:opacity-70"
            >Supplements</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      slides: [
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/1.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/4.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/6.png",
      ],
    };
  },
};
</script>
<style scoped>
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.countdown-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 4px;
}

.countdown-label {
  font-size: 0.875rem;
  color: #4a5568;
}

h2 {
  color: #2d3748;
}

p {
  color: #4a5568;
  line-height: 1.5;
}

/* Swiper navigation buttons styling */
/* Increase specificity and use direct resizing if necessary */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
}

/* Default font size for larger screens */
.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important;
  /* Default font size for larger screens */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important;
    /* Adjusted font size for tablets */
  }
}

/* Media query for mobile screens */
@media (max-width: 480px) {
  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important;
    /* Further reduced font size for mobile screens */
  }
}

/* Optional: to style the Swiper container itself */
.mySwiper {
  background-color: white;
  border-radius: 8px;
  /* Example for rounded corners */
}

.swiper-pagination-bullet {
  background-color: rgb(0, 68, 0);
}

/* Scrollbar styling for WebKit browsers (Chrome, Safari, etc.) */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

/* Scrollbar styling for Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.custom-scrollbar:hover {
  scrollbar-color: #555 #f1f1f1;
}
</style>
