<template>
  <nav
    class="relative w-full bg-[#238878] text-black"
    aria-label="Main navigation"
  >
    <ul
      class="flex justify-center space-x-20 bg-[#238878] py-2 text-white"
      role="menubar"
    >
      <!-- Home -->
      <li class="group relative py-2" role="none">
        <nuxt-link
          to="/"
          class="text-xl font-semibold hover:opacity-70"
          role="menuitem"
        >
          Home
        </nuxt-link>
      </li>

      <!-- Hair Section -->
      <li class="group relative py-2" role="none">
        <button
          class="flex items-center gap-1 text-xl font-semibold text-white hover:opacity-70"
          aria-expanded="false"
          aria-haspopup="true"
          role="menuitem"
        >
          Hair
          <ChevronDown class="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          class="invisible absolute -right-[500px] z-50 transform p-4 opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:-right-[650px]"
          role="menu"
        >
          <div
            class="grid grid-cols-1 gap-4 bg-slate-50 p-6 sm:grid-cols-2 md:w-[30vw] md:grid-cols-3 lg:w-[70vw] lg:grid-cols-4 xl:w-[55vw]"
          >
            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">
                Hair Concerns
              </h2>
              <ul class="space-y-1" role="menu">
                <li
                  v-for="concern in hairConcerns"
                  :key="concern.name"
                  role="none"
                >
                  <nuxt-link
                    :to="concern.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ concern.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">
                Select By Ingredients
              </h2>
              <ul class="space-y-1" role="menu">
                <li
                  v-for="ingredient in hairIngredients"
                  :key="ingredient.name"
                  role="none"
                >
                  <nuxt-link
                    :to="ingredient.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ ingredient.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">Hair Care</h2>
              <ul class="space-y-1" role="menu">
                <li v-for="item in hairCareItems" :key="item.name" role="none">
                  <nuxt-link
                    :to="item.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <aside class="hidden lg:block">
              <HomeNavbarItemImageSlider />
            </aside>

            <nuxt-link
              to="/consultancy"
              class="flex items-center justify-between rounded-lg bg-gray-200 p-2 text-center text-black hover:bg-gray-300"
              role="menuitem"
            >
              <span>Consult Now</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </li>

      <!-- Skin Section -->
      <li class="group relative py-2" role="none">
        <button
          class="flex items-center gap-1 text-xl font-semibold hover:opacity-70"
          aria-expanded="false"
          aria-haspopup="true"
          role="menuitem"
        >
          Skin
          <ChevronDown class="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          class="invisible absolute z-50 transform p-4 opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:right-32 lg:-left-56"
          role="menu"
        >
          <div
            class="grid grid-cols-1 gap-4 bg-slate-50 p-6 sm:grid-cols-2 md:w-[30vw] md:grid-cols-3 lg:w-[70vw] lg:grid-cols-4 xl:w-[55vw]"
          >
            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">
                Shop By Concern
              </h2>
              <ul class="space-y-1" role="menu">
                <li
                  v-for="concern in skinConcerns"
                  :key="concern.name"
                  role="none"
                >
                  <nuxt-link
                    :to="concern.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ concern.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">
                Select By Ingredients
              </h2>
              <ul class="space-y-1" role="menu">
                <li
                  v-for="ingredient in skinIngredients"
                  :key="ingredient.name"
                  role="none"
                >
                  <nuxt-link
                    :to="ingredient.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ ingredient.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-bold text-gray-800">Skin Care</h2>
              <ul class="space-y-1" role="menu">
                <li v-for="item in skinCareItems" :key="item.name" role="none">
                  <nuxt-link
                    :to="item.to"
                    class="text-gray-800 hover:font-semibold hover:text-green-600"
                    role="menuitem"
                  >
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </section>

            <aside class="hidden lg:block">
              <HomeNavbarItemImageSlider />
            </aside>

            <nuxt-link
              to="/consultancy"
              class="flex items-center justify-between rounded-lg bg-gray-200 p-2 text-center text-black hover:bg-gray-300"
              role="menuitem"
            >
              <span>Consult Now</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </li>

      <!-- Baby Care -->
      <li class="group relative py-2" role="none">
        <nuxt-link
          to="/coming-soon"
          class="text-xl font-semibold hover:opacity-70"
          role="menuitem"
        >
          Baby Care
        </nuxt-link>
      </li>

      <!-- Mediu Kit -->
      <li class="group relative py-2" role="none">
        <button
          class="flex w-28 items-center gap-1 text-xl font-semibold hover:opacity-70"
          aria-expanded="false"
          aria-haspopup="true"
          role="menuitem"
        >
          Mediu Kit
          <ChevronDown class="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          class="invisible absolute top-full z-50 w-[90vw] max-w-3xl transform bg-white p-4 opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 lg:-left-[500px]"
          role="menu"
        >
          <div class="p-6">
            <div class="grid grid-cols-3 gap-6">
              <nuxt-link
                v-for="kit in kits"
                :key="kit.title"
                :to="kit.to"
                class="flex items-center justify-center rounded-2xl border border-[#238878] p-6 text-lg font-semibold text-gray-800 hover:text-[#238878] hover:underline hover:shadow-lg"
                role="menuitem"
              >
                {{ kit.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </li>

      <!-- Brands -->
      <li class="group relative py-2" role="none">
        <button
          class="flex items-center gap-1 text-xl font-semibold hover:opacity-70"
          aria-expanded="false"
          aria-haspopup="true"
          role="menuitem"
        >
          Brands
          <ChevronDown class="h-4 w-4" aria-hidden="true" />
        </button>
        <HomeNavbarBrandItems />
      </li>

      <!-- Supplements -->
      <li class="group relative py-2" role="none">
        <nuxt-link
          to="/coming-soon"
          class="text-xl font-semibold hover:opacity-70"
          role="menuitem"
        >
          Supplements
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";

const hairConcerns = [
  {
    name: "Dandruff",
    to: "/shop?hair-concern=dandruff",
  },
  {
    name: "Hairfall",
    to: "/shop?hair-concern=hairfall",
  },
  {
    name: "Hair Thinning",
    to: "/shop?hair-concern=hair-thinning",
  },
  {
    name: "Damaged & Fizzy Hair",
    to: "/shop?hair-concern=damaged-and-fizzy-hair",
  },
  {
    name: "Bald Patches",
    to: "/shop?hair-concern=bald-patches",
  },
  {
    name: "Dull Hair",
    to: "/shop?hair-concern=dull-hair",
  },
  {
    name: "Oily Scalp",
    to: "/shop?hair-concern=oily-scalp",
  },
];

const hairIngredients = [
  {
    name: "Minoxidil",
    to: "/shop?ingredent=minoxidil",
  },
  { name: "Redensyl", to: "/shop?ingredent=redensyl" },
  { name: "Capixyl", to: "/shop?ingredent=capixyl" },
  { name: "Peptide", to: "/shop?ingredent=peptide" },
  {
    name: "Carnitine",
    to: "/shop?ingredent=carnitine",
  },
];

const hairCareItems = [
  { name: "Shampoo", to: "/shop?hair-care=shampoo" },
  { name: "Conditioner", to: "/shop?hair-care=conditioner" },
  { name: "Mask", to: "/shop?hair-care=mask" },
  { name: "Serum", to: "/shop?hair-care=serum" },
];

const skinConcerns = [
  {
    name: "Acne & Acne Scar",
    to: "/shop?skin-concern=acne-and-ance-scar",
  },
  { name: "Aging", to: "/shop?skin-concern=aging" },
  {
    name: "Dehydration",
    to: "/shop?skin-concern=dehydration",
  },
  {
    name: "Damaged & Sensitive Skin",
    to: "/shop?skin-concern=damaged-and-sensitive-skin",
  },
  {
    name: "Under Eye Darkness",
    to: "/shop?skin-concern=under-eye-darkness",
  },
  {
    name: "Under Arm Darkness",
    to: "/shop?skin-concern=under-arm-darkness",
  },
  {
    name: "Stretch Marks",
    to: "/shop?skin-concern=stretch-marks",
  },
  {
    name: "Pigmentation",
    to: "/shop?skin-concern=pigmentation",
  },
  {
    name: "Oiliness",
    to: "/shop?skin-concern=oiliness",
  },
  {
    name: "Lip (Cracked/Darkness)",
    to: "/shop?skin-concern=lip-cracked-or-darkness",
  },
];

const skinIngredients = [
  { name: "Vitamin C", to: "/shop?skin-ingredent=vitamin-c" },
  {
    name: "BHA / Salicylic Acid",
    to: "/shop?skin-ingredent=bha-salicylic-acid",
  },
  { name: "Retinoid / Retinol", to: "/shop?skin-ingredent=retinoid" },
  { name: "Niacinamide", to: "/shop?skin-ingredent=niacinamide" },
  { name: "UV Filters", to: "/shop?skin-ingredent=uv-filters" },
  { name: "Ceramide", to: "/shop?skin-ingredent=ceramide" },
  {
    name: "Hyaluronic Acid",
    to: "/shop?skin-ingredent=hyaluronic-acid",
  },
];

const skinCareItems = [
  { name: "Cleanser", to: "/shop?skin-care=cleanser" },
  { name: "Toner", to: "/shop?skin-care=toner" },
  { name: "Roll On", to: "/shop?skin-care=roll-on" },
  { name: "Moisturize", to: "/shop?skin-care=moisturize" },
  { name: "SPF", to: "/shop?skin-care=spf" },
  { name: "Under Eye", to: "/shop?skin-care=under-eye" },
];

const kits = [
  { title: "Hair Growth Kits", to: "/coming-soon" },
  { title: "Dandruff Kits", to: "/coming-soon" },
  { title: "Itchy Scalp Kits", to: "/coming-soon" },
  { title: "Basic Kits", to: "/coming-soon" },
  { title: "Advanced Kits", to: "/coming-soon" },
];
</script>
