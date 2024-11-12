<template>
  <div class="bg-white shadow-md fixed top-0 w-full z-50 block lg:hidden" ref="navbar">
    <div class="container mx-auto px-4 py-5 flex justify-center items-center w-full">
      <!-- Logo -->
      <div class="text-lg font-semibold w-2/6">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/logos/logo%201.png" alt="Logo" class="h-10 w-auto" />
      </div>

      <!-- Search Bar -->
      <div class="flex-grow mx-4 w-full">
        <div class="relative flex items-center justify-end">
          <input type="text" placeholder="Search..."
            class="w-full px-4 py-2 md:py-3 pl-10 border rounded-full focus:outline-none bg-white text-black transition duration-300 ease-in-out " />
          <div class="absolute left-4 text-gray-500">
            <!-- Search Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 19a9 9 0 100-18 9 9 0 000 18zm7-2l5 5" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Burger Menu Icon (Visible on small screens) -->
      <div class="w-1/6 text-end">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="#28574e" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMenuOpen" class="bg-white shadow-md absolute w-full left-0 top-16 z-40 text-[#28574e]">
      <div class="px-4 py-2">
        <div v-for="(item, index) in menuItems" :key="index" class="border-t py-3">
          <div @click="item.subItems.length ? toggleDropdown(index) : null"
            class="flex items-center justify-between py-2 px-4 cursor-pointer text-lg">
            <span class="font-semibold">{{ item.name }}</span>
            <svg v-if="item.subItems.length" :class="{ 'transform rotate-180': isDropdownOpen(index) }"
              class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <div v-if="isDropdownOpen(index)" class="text-[#28574e] pl-4">
            <div v-for="(subItem, subIndex) in item.subItems" :key="subIndex"
              class="py-2 hover:bg-gray-100 cursor-pointer">
              <!-- Use normal <a> tag instead of <router-link> -->
              <a v-if="subItem.link" :href="subItem.link" class="text-[#89ccc0] hover:underline">
                {{ subItem.name }}
              </a>
              <span v-else>{{ subItem.name }}</span> <!-- Fallback if no link -->

              <!-- Render nested sub-items -->
              <div v-if="typeof subItem === 'object' && subItem.subItems" class="pl-4">
                <div v-for="(nestedSubItem, nestedSubIndex) in subItem.subItems" :key="nestedSubIndex"
                  class="py-1 hover:bg-gray-200 cursor-pointer">
                  <!-- Use <a> tag for nested sub-items -->
                  <a v-if="nestedSubItem.link" :href="nestedSubItem.link"
                    class="text-[#89ccc0] hover:underline">
                    {{ nestedSubItem.name }}
                  </a>
                  <span v-else>{{ nestedSubItem.name }}</span> <!-- Fallback if no link -->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Toggle for mobile menu visibility
const isMenuOpen = ref(false);

// Toggle states for dropdown menus
const dropdownStates = ref([]);

// State to track navbar visibility based on screen size
const isNavbarVisible = ref(true);

// Reference to the navbar element
const navbar = ref(null);

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Toggle dropdowns
const toggleDropdown = (index) => {
  dropdownStates.value[index] = !dropdownStates.value[index];
};

// Check if dropdown is open
const isDropdownOpen = (index) => {
  return dropdownStates.value[index];
};

// Menu items with sub-items and links
const menuItems = [
  // {
  //   name: 'Home',
  //   subItems: [] // No sub-items for Home
  // },
  {
    name: 'Hair',
    subItems: [
      {
        name: 'Hair Concerns',
        link: '/shop',
        subItems: [
          { name: 'Dandruff', link: '/shop' },
          { name: 'Hairfall', link: '/shop' },
          { name: 'Hair Thining', link: '/shop' },
          { name: 'Damaged & Fizzy Hair', link: '/shop' },
          { name: 'Bald Patches', link: '/shop' },
          { name: 'Dull Hair', link: '/shop' },
          { name: 'Oily Scalp', link: '/shop' },

        ]
      },
      {
        name: 'Selected By Ingredients',
        link: '/shop',
        subItems: [
          { name: 'Minoxidil', link: '/shop' },
          { name: 'Redensyl', link: '/shop' },
          { name: 'Capixyl', link: '/shop' },
          { name: 'Peptide', link: '/shop' },
          { name: 'Carnitine', link: '/shop' },
        ]
      },
      {
        name: 'Hair Concerns',
        link: '/shop',
        subItems: [
          { name: 'Shampoo', link: '/shop' },
          { name: 'Conditioner', link: '/shop' },
          { name: 'Mask', link: '/shop' },
          { name: 'Serum', link: '/shop' },
        ]
      },
      // ... other items
    ]
  },
  {
    name: 'Skin',
    subItems: [
      {
        name: 'Shop By Concerns',
        link: '/shop',
        subItems: [
          { name: 'Acne & Acne Scar', link: '/shop' },
          { name: 'Aging', link: '/shop' },
          { name: 'Dehydration', link: '/shop' },
          { name: 'Damaged & Sensitive Skin', link: '/shop' },
          { name: 'Under Eye Darkness', link: '/shop' },
          { name: 'Under Arm Darkness', link: '/shop' },
          { name: 'Stretch Marks', link: '/shop' },
          { name: 'Pigmentation', link: '/shop' },
          { name: 'Oiliness', link: '/shop' },
          { name: 'Lip(Cracked/Darkness)', link: '/shop' },



        ]
      },
      {
        name: 'Selected By Ingredients',
        link: '/shop',
        subItems: [
          { name: 'Vitamin C', link: '/shop' },
          { name: 'BHA/Salicylic Acid', link: '/shop' },
          { name: 'Retinoid/Retinol', link: '/shop' },
          { name: 'Niacinamide', link: '/shop' },
          { name: 'UV Filters', link: '/shop' },
          { name: 'Hyaluronic Acid', link: '/shop' },
          { name: 'Ceramide', link: '/shop' },
        ]
      },
      {
        name: 'Skin Care',
        link: '/shop',
        subItems: [
          { name: 'Cleanser', link: '/shop' },
          { name: 'Toner', link: '/shop' },
          { name: 'Roll On', link: '/shop' },
          { name: 'Moisturize', link: '/shop' },
          { name: 'SPF', link: '/shop' },
          { name: 'Under Eye', link: '/shop' },
        ]
      },
      // ... other items
    ]
  },
  {
    name: 'Baby Care',
    subItems: [
      {
        name: 'Coming Soon',
        link: '/comingSoon' // Link for Diapers
      },
    
    ]
  },
  {
    name: 'Medi Kit',
    subItems: [
      {
        name: 'First Aid',
        link: '/comingSoon' // Link for First Aid
      },
      {
        name: 'OTC Medicines',
        link: '/comingSoon' // Link for OTC Medicines
      }
    ]
  },
  
  {
    name: 'Supplements',
    subItems: [
      {
        name: 'Coming Soon',
        link: '/comingSoon' // Link for Diapers
      },
    
    ]
  }
];

// Function to check screen size and update navbar visibility
const updateNavbarVisibility = () => {
  if (window.innerWidth > 800) {
    isNavbarVisible.value = false; // Hide navbar on screens larger than 800px
  } else {
    isNavbarVisible.value = true; // Show navbar on screens 800px and below
  }
};

// Function to detect clicks outside the navbar
const handleClickOutside = (event) => {
  if (navbar.value && !navbar.value.contains(event.target)) {
    isMenuOpen.value = false; // Close the menu if clicked outside
  }
};

// Monitor screen resize and outside clicks
onMounted(() => {
  updateNavbarVisibility(); // Initial check
  window.addEventListener('resize', updateNavbarVisibility);
  document.addEventListener('click', handleClickOutside); // Listen for outside clicks
});

onUnmounted(() => {
  window.removeEventListener('resize', updateNavbarVisibility);
  document.removeEventListener('click', handleClickOutside); // Remove listener
});
</script>

<style scoped>
/* Container styling */
.container {
  max-width: 1200px;
}

/* Dropdown hover and show/hide */
.group:hover .group-hover\:block {
  display: block;
}

/* Styling for dropdown visibility */
.group-hover\:block {
  display: none;
}

/* Transitions for smooth dropdown animation */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
