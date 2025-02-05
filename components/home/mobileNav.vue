<template>
  <div
    class="fixed top-0 z-50 block w-full bg-white shadow-md lg:hidden"
    ref="navbar"
  >
    <div
      class="container mx-auto flex w-full max-w-[1200px] items-center justify-center px-4 py-5"
    >
      <!-- Logo -->
      <nuxt-link to="/" class="w-2/6 text-lg font-semibold">
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/logos/logo%201.png"
          alt="Logo"
          class="h-10 w-auto"
        />
        <span class="sr-only">Mediu Logo</span>
      </nuxt-link>

      <HomeSearch />

      <!-- Burger Menu Icon (Visible on small screens) -->
      <div class="w-1/6 text-end">
        <button @click="toggleMenu" class="focus:outline-none">
          <span class="sr-only">Toggle Menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="#238878"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute left-0 top-16 z-40 max-h-[75vh] w-full overflow-y-auto bg-white px-4 py-2 text-[#238878] shadow-md"
    >
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="border-t py-3"
      >
        <div
          @click="item.subItems.length ? toggleDropdown(index) : null"
          class="flex cursor-pointer items-center justify-between px-4 py-2 text-lg"
        >
          <span class="font-semibold">{{ item.name }}</span>
          <svg
            v-if="item.subItems.length"
            :class="{ 'rotate-180 transform': isDropdownOpen(index) }"
            class="h-4 w-4 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <div
          v-if="isDropdownOpen(index)"
          ref="dialogRef"
          class="pl-4 text-[#238878]"
        >
          <div
            v-for="(subItem, subIndex) in item.subItems"
            :key="subIndex"
            class="cursor-pointer py-2 hover:bg-gray-100"
          >
            <a
              v-if="subItem.link"
              :href="subItem.link"
              class="text-[#89ccc0] hover:underline"
            >
              {{ subItem.name }}
            </a>
            <span v-else>{{ subItem.name }}</span>

            <div
              v-if="typeof subItem === 'object' && subItem.subItems"
              class="pl-4"
            >
              <div
                v-for="(nestedSubItem, nestedSubIndex) in subItem.subItems"
                :key="nestedSubIndex"
                class="cursor-pointer py-1 hover:bg-gray-200"
              >
                <!-- Use <a> tag for nested sub-items -->
                <a
                  v-if="nestedSubItem.link"
                  :href="nestedSubItem.link"
                  class="text-[#344e49] hover:text-[#89ccc0] hover:underline"
                >
                  {{ nestedSubItem.name }}
                </a>
                <span v-else>{{ nestedSubItem.name }}</span>
                <!-- Fallback if no link -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const dialogRef = ref(null);

onClickOutside(dialogRef, () => {
  toggleDropdown();
});

const isMenuOpen = ref(false);
const dropdownStates = ref([]);
const isNavbarVisible = ref(true);
const navbar = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = (index) => {
  dropdownStates.value[index] = !dropdownStates.value[index];
};

const isDropdownOpen = (index) => {
  return dropdownStates.value[index];
};

const menuItems = [
  {
    name: "Hair",
    subItems: [
      {
        name: "Hair Concerns",
        link: "/shop",
        subItems: [
          { name: "Dandruff", link: "/shop" },
          { name: "Hairfall", link: "/shop" },
          { name: "Hair Thining", link: "/shop" },
          { name: "Damaged & Fizzy Hair", link: "/shop" },
          { name: "Bald Patches", link: "/shop" },
          { name: "Dull Hair", link: "/shop" },
          { name: "Oily Scalp", link: "/shop" },
        ],
      },
      {
        name: "Selected By Ingredients",
        link: "/shop",
        subItems: [
          { name: "Minoxidil", link: "/shop" },
          { name: "Redensyl", link: "/shop" },
          { name: "Capixyl", link: "/shop" },
          { name: "Peptide", link: "/shop" },
          { name: "Carnitine", link: "/shop" },
        ],
      },
      {
        name: "Hair Concerns",
        link: "/shop",
        subItems: [
          { name: "Shampoo", link: "/shop" },
          { name: "Conditioner", link: "/shop" },
          { name: "Mask", link: "/shop" },
          { name: "Serum", link: "/shop" },
        ],
      },
    ],
  },
  {
    name: "Skin",
    subItems: [
      {
        name: "Shop By Concerns",
        link: "/shop",
        subItems: [
          { name: "Acne & Acne Scar", link: "/shop" },
          { name: "Aging", link: "/shop" },
          { name: "Dehydration", link: "/shop" },
          { name: "Damaged & Sensitive Skin", link: "/shop" },
          { name: "Under Eye Darkness", link: "/shop" },
          { name: "Under Arm Darkness", link: "/shop" },
          { name: "Stretch Marks", link: "/shop" },
          { name: "Pigmentation", link: "/shop" },
          { name: "Oiliness", link: "/shop" },
          { name: "Lip(Cracked/Darkness)", link: "/shop" },
        ],
      },
      {
        name: "Selected By Ingredients",
        link: "/shop",
        subItems: [
          { name: "Vitamin C", link: "/shop" },
          { name: "BHA/Salicylic Acid", link: "/shop" },
          { name: "Retinoid/Retinol", link: "/shop" },
          { name: "Niacinamide", link: "/shop" },
          { name: "UV Filters", link: "/shop" },
          { name: "Hyaluronic Acid", link: "/shop" },
          { name: "Ceramide", link: "/shop" },
        ],
      },
      {
        name: "Skin Care",
        link: "/shop",
        subItems: [
          { name: "Cleanser", link: "/shop" },
          { name: "Toner", link: "/shop" },
          { name: "Roll On", link: "/shop" },
          { name: "Moisturize", link: "/shop" },
          { name: "SPF", link: "/shop" },
          { name: "Under Eye", link: "/shop" },
        ],
      },
    ],
  },
  {
    name: "Baby Care",
    subItems: [
      {
        name: "Coming Soon",
        link: "/coming-soon",
      },
    ],
  },
  {
    name: "Medi Kit",
    subItems: [
      {
        name: "First Aid",
        link: "/coming-soon",
      },
      {
        name: "OTC Medicines",
        link: "/coming-soon",
      },
    ],
  },

  {
    name: "Supplements",
    subItems: [
      {
        name: "Coming Soon",
        link: "/coming-soon",
      },
    ],
  },
];

const updateNavbarVisibility = () => {
  if (window.innerWidth > 800) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }
};

const handleClickOutside = (event) => {
  if (navbar.value && !navbar.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  updateNavbarVisibility();
  window.addEventListener("resize", updateNavbarVisibility);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateNavbarVisibility);
  document.removeEventListener("click", handleClickOutside);
});
</script>
