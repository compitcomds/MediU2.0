<template>
  <div class="z-10 w-full bg-[#238878] text-black">
    <div class="relative bg-white">
      <ul class="flex justify-center space-x-20 bg-[#238878] py-2 text-white">
        <li class="group relative cursor-pointer py-2">
          <nuxt-link to="/" class="text-xl font-semibold hover:opacity-70"
            >Home</nuxt-link
          >
        </li>
        <li class="group relative cursor-pointer py-2">
          <div
            class="flex items-center gap-1 text-xl font-semibold text-white hover:opacity-70"
          >
            Hair
            <ChevronDown :size="16" />
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
                <h2
                  class="mb-4 w-fit text-left text-lg font-bold text-[#2d3748]"
                >
                  Hair Concerns
                </h2>
                <ul class="space-y-1 text-left">
                  <li v-for="concern in hairConcerns" :key="concern.name">
                    <nuxt-link
                      :to="concern.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ concern.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Ingredients -->
              <div>
                <h2
                  class="mb-4 w-fit text-left text-lg font-bold text-[#2d3748]"
                >
                  Select By Ingredients
                </h2>
                <ul class="space-y-1 text-left">
                  <li
                    v-for="ingredient in hairIngredients"
                    :key="ingredient.name"
                  >
                    <nuxt-link
                      :to="ingredient.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ ingredient.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Hair Care -->
              <div>
                <h2
                  class="mb-4 w-fit text-left text-lg font-bold text-[#2d3748]"
                >
                  Hair Care
                </h2>
                <ul class="space-y-1 text-left">
                  <li v-for="item in hairCareItems" :key="item.name">
                    <nuxt-link
                      :to="item.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ item.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <div class="hidden lg:block">
                <HomeNavbarItemImageSlider />
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
            <ChevronDown :size="16" />
          </div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="bg-gary-200 invisible absolute z-50 transform p-4 text-black opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:right-32 lg:-left-56"
          >
            <div
              class="grid grid-cols-1 gap-4 bg-slate-50 p-6 sm:grid-cols-2 md:w-[30vw] md:grid-cols-3 lg:w-[70vw] lg:grid-cols-4 xl:w-[55vw] xl:grid-cols-4"
            >
              <div>
                <h2 class="mb-4 text-left text-lg font-bold text-[#2d3748]">
                  Shop By Concern
                </h2>
                <ul class="space-y-1 text-left">
                  <li v-for="concern in skinConcerns" :key="concern.name">
                    <nuxt-link
                      :to="concern.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ concern.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-4 text-left text-lg font-bold text-[#2d3748]">
                  Select By Ingredients
                </h2>
                <ul class="space-y-1 text-left">
                  <li
                    v-for="ingredient in skinIngredients"
                    :key="ingredient.name"
                  >
                    <nuxt-link
                      :to="ingredient.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ ingredient.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-4 text-left text-lg font-bold text-[#2d3748]">
                  Skin Care
                  <hr />
                </h2>
                <ul class="space-y-1 text-left">
                  <li v-for="item in skinCareItems" :key="item.name">
                    <nuxt-link
                      :to="item.to"
                      class="text-gray-800 hover:font-semibold hover:text-green-600"
                      >{{ item.name }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div class="hidden lg:block">
                <HomeNavbarItemImageSlider />
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
          <nuxt-link
            to="/coming-soon"
            class="text-xl font-semibold hover:opacity-70"
            >Baby Care</nuxt-link
          >
        </li>

        <li class="group relative cursor-pointer py-2">
          <div
            class="flex w-28 items-center gap-1 text-xl font-semibold hover:opacity-70"
          >
            Mediu Kit
            <ChevronDown :size="16" />
          </div>

          <div
            class="invisible absolute top-full z-50 w-[90vw] max-w-3xl transform bg-white p-4 text-black opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 lg:-left-[500px]"
          >
            <div class="flex w-full justify-between p-6">
              <div class="8/12 grid grid-cols-3 gap-6">
                <nuxt-link
                  v-for="kit in kits"
                  :key="kit.title"
                  :to="kit.to"
                  class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 text-lg font-semibold text-[#2d3748] hover:text-[#238878] hover:underline hover:shadow-lg"
                >
                  {{ kit.title }}
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
            <ChevronDown :size="16" />
          </div>
          <HomeNavbarBrandItems />
        </li>

        <li class="group relative cursor-pointer py-2">
          <nuxt-link
            to="/coming-soon"
            class="text-xl font-semibold hover:opacity-70"
            >Supplements</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
const hairConcerns = [
  {
    name: "Dandruff",
    to: "/shop?min=0&max=100000&selectedHairConcern=dandruff",
  },
  {
    name: "Hairfall",
    to: "/shop?min=0&max=100000&selectedHairConcern=hairfall",
  },
  {
    name: "Hair Thinning",
    to: "/shop?min=0&max=100000&selectedHairConcern=hair-thinning",
  },
  {
    name: "Damaged & Fizzy Hair",
    to: "/shop?min=0&max=100000&selectedHairConcern=damaged-and-fizzy-hair",
  },
  {
    name: "Bald Patches",
    to: "/shop?min=0&max=100000&selectedHairConcern=bald-patches",
  },
  {
    name: "Dull Hair",
    to: "/shop?min=0&max=100000&selectedHairConcern=dull-hair",
  },
  {
    name: "Oily Scalp",
    to: "/shop?min=0&max=100000&selectedHairConcern=oily-scalp",
  },
];

const hairIngredients = [
  {
    name: "Minoxidil",
    to: "/shop?min=0&max=100000&selectedIngredent=minoxidil",
  },
  { name: "Redensyl", to: "/shop?min=0&max=100000&selectedIngredent=redensyl" },
  { name: "Capixyl", to: "/shop?min=0&max=100000&selectedIngredent=capixyl" },
  { name: "Peptide", to: "/shop?min=0&max=100000&selectedIngredent=peptide" },
  {
    name: "Carnitine",
    to: "/shop?min=0&max=100000&selectedIngredent=carnitine",
  },
];

const hairCareItems = [
  { name: "Shampoo", to: "/shop?selectedHairCare=shampoo" },
  { name: "Conditioner", to: "/shop?selectedHairCare=conditioner" },
  { name: "Mask", to: "/shop?selectedHairCare=mask" },
  { name: "Serum", to: "/shop?selectedHairCare=serum" },
];

const skinConcerns = [
  {
    name: "Acne & Acne Scar",
    to: "/shop?min=0&max=100000&selectedSkinConcern=acne-and-ance-scar",
  },
  { name: "Aging", to: "/shop?min=0&max=100000&selectedSkinConcern=aging" },
  {
    name: "Dehydration",
    to: "/shop?min=0&max=100000&selectedSkinConcern=dehydration",
  },
  {
    name: "Damaged & Sensitive Skin",
    to: "/shop?min=0&max=100000&selectedSkinConcern=damaged-and-sensitive-skin",
  },
  {
    name: "Under Eye Darkness",
    to: "/shop?min=0&max=100000&selectedSkinConcern=under-eye-darkness",
  },
  {
    name: "Under Arm Darkness",
    to: "/shop?min=0&max=100000&selectedSkinConcern=under-arm-darkness",
  },
  {
    name: "Stretch Marks",
    to: "/shop?min=0&max=100000&selectedSkinConcern=stretch-marks",
  },
  {
    name: "Pigmentation",
    to: "/shop?min=0&max=100000&selectedSkinConcern=pigmentation",
  },
  {
    name: "Oiliness",
    to: "/shop?min=0&max=100000&selectedSkinConcern=oiliness",
  },
  {
    name: "Lip (Cracked/Darkness)",
    to: "/shop?min=0&max=100000&selectedSkinConcern=lip-cracked-or-darkness",
  },
];

const skinIngredients = [
  { name: "Vitamin C", to: "/shop?selectedSkinIngredent=vitamin-c" },
  {
    name: "BHA / Salicylic Acid",
    to: "/shop?selectedSkinIngredent=bha-salicylic-acid",
  },
  { name: "Retinoid / Retinol", to: "/shop?selectedSkinIngredent=retinoid" },
  { name: "Niacinamide", to: "/shop?selectedSkinIngredent=niacinamide" },
  { name: "UV Filters", to: "/shop?selectedSkinIngredent=uv-filters" },
  { name: "Ceramide", to: "/shop?selectedSkinIngredent=ceramide" },
  {
    name: "Hyaluronic Acid",
    to: "/shop?selectedSkinIngredent=hyaluronic-acid",
  },
];

const skinCareItems = [
  { name: "Cleanser", to: "/shop?selectedSkinCare=cleanser" },
  { name: "Toner", to: "/shop?selectedSkinCare=toner" },
  { name: "Roll On", to: "/shop?selectedSkinCare=roll-on" },
  { name: "Moisturize", to: "/shop?selectedSkinCare=moisturize" },
  { name: "SPF", to: "/shop?selectedSkinCare=spf" },
  { name: "Under Eye", to: "/shop?selectedSkinCare=under-eye" },
];

const kits = [
  { title: "Hair Growth Kits", to: "/coming-soon" },
  { title: "Dandruff Kits", to: "/coming-soon" },
  { title: "Itchy Scalp Kits", to: "/coming-soon" },
  { title: "Basic Kits", to: "/coming-soon" },
  { title: "Advanced Kits", to: "/coming-soon" },
];
</script>
