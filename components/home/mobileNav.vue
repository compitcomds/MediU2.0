<template>
  <div v-if="isNavbarVisible" class="bg-white shadow-md fixed top-0 w-full z-50 block lg:hidden" ref="navbar">
    <div class="container mx-auto px-4 py-5 flex justify-between items-center w-full">
      <!-- Logo -->
      <div class="text-lg font-semibold w-1/6">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/logo%202.png" alt="Logo" class="h-8 w-auto" />
      </div>
  
      <!-- Search Bar -->
      <div class="flex-grow mx-4 w-4/6">
        <input
          type="text"
          placeholder="Search..."
          class="w-full px-4 py-2 border rounded-lg focus:outline-none bg-white text-black"
        />
      </div>
  
      <!-- Burger Menu Icon (Visible on small screens) -->
      <div class="w-1/6 text-end">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="#28574e"
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
      class="bg-white shadow-md absolute w-full left-0 top-16 z-40 text-[#28574e]"
    >
      <div class="px-4 py-2">
        <div v-for="(item, index) in menuItems" :key="index" class="border-t py-3">
          <div @click="item.subItems.length ? toggleDropdown(index) : null" class="flex items-center justify-between py-2 px-4 cursor-pointer text-lg">
            <span>{{ item.name }}</span>
            <svg v-if="item.subItems.length" :class="{'transform rotate-180': isDropdownOpen(index)}" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        
          <div v-if="isDropdownOpen(index)" class="text-[#28574e] pl-4">
            <div v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="py-2 hover:bg-gray-100 cursor-pointer">
              <!-- Remove the link for the main sub-item -->
              <span>{{ subItem.name }}</span>
        
              <!-- Render nested sub-items -->
              <div v-if="typeof subItem === 'object' && subItem.subItems" class="pl-4">
                <div v-for="(nestedSubItem, nestedSubIndex) in subItem.subItems" :key="nestedSubIndex" class="py-1 hover:bg-gray-200 cursor-pointer">
                  <router-link v-if="nestedSubItem.link" :to="nestedSubItem.link" class="text-[#89ccc0] hover:underline">
                    {{ nestedSubItem.name }}
                  </router-link>
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
  {
    name: 'Home',
    subItems: [] // No sub-items for Home
  },
  {
    name: 'Hair',
    subItems: [
      {
        name: 'Shampoo',
        link: '/',
        subItems: [
          { name: 'Dry Shampoo', link: '/' },
          { name: 'Anti-Dandruff', link: '/' },
          { name: 'Herbal Shampoo', link: '/' }
        ]
      },
      // ... other items
    ]
  },
  {
    name: 'Skin',
    subItems: [
      {
        name: 'Face Wash',
        link: '/', // Link for Face Wash
        subItems: ['Foam Cleanser', 'Gel Cleanser', 'Exfoliating Cleanser']
      },
      {
        name: 'Moisturizer',
        link: '/', // Link for Moisturizer
        subItems: ['Day Cream', 'Night Cream', 'Gel Moisturizer']
      },
      {
        name: 'Sunscreen',
        link: '/', // Link for Sunscreen
        subItems: ['SPF 30', 'SPF 50', 'Mineral Sunscreen']
      }
    ]
  },
  {
    name: 'Baby Care',
    subItems: [
      {
        name: 'Diapers',
        link: '/' // Link for Diapers
      },
      {
        name: 'Baby Lotion',
        link: '/' // Link for Baby Lotion
      },
      {
        name: 'Baby Shampoo',
        link: '/' // Link for Baby Shampoo
      }
    ]
  },
  {
    name: 'Medi Kit',
    subItems: [
      {
        name: 'First Aid',
        link: '/' // Link for First Aid
      },
      {
        name: 'OTC Medicines',
        link: '/' // Link for OTC Medicines
      }
    ]
  },
  {
    name: 'Brands',
    subItems: [
      {
        name: 'Brand 1',
        link: '/' // Link for Brand 1
      },
      {
        name: 'Brand 2',
        link: '/' // Link for Brand 2
      },
      {
        name: 'Brand 3',
        link: '/' // Link for Brand 3
      }
    ]
  },
  {
    name: 'Supplements',
    subItems: [] // No sub-items for Supplements
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
