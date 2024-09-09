<template>
    
      <div
        :class="[showNotification ? 'mt- xl:mt-[0px]' : 'mt- xl:mt-[0px]']"
        class="w-full sticky z-10 top-0 bg-[#537971] text-black py-2"
      >
        <div class="relative bg-white">
          <!-- Main Menu -->
          <ul class="flex justify-center space-x-24 bg-[#537971] text-white py-4">
            <li class="group relative cursor-pointer py-2">
              <NuxtLink to="/" class="font-semibold hover:opacity-70 text-xl"
                >Home</NuxtLink
              >
            </li>
  
            <!-- Hair Concerns Menu -->
            <li class="group relative cursor-pointer py-2">
              <div class="font-semibold hover:opacity-70 text-xl">Hair</div>
              <!-- Mega Menu Dropdown for Hair -->
              <div
                class="invisible absolute -left-[500px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
              >
                <div class="p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Concerns Related to Hair -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Hair</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Dandruff</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Hair Fall & Hair Loss
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Frizzy Hair
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Itchy & Irritated Scalp
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Bald Patches</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Skin -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Skin</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Ageing</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Acne & Acne Scars</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Sensitive Skin
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Pigmentation</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Under Eye Concerns</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Stretch Marks</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Pediatric -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Pediatric</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Shop</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Products List</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Products Row -->
                  <div class="grid grid-cols-6 gap-6 mt-6">
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 1"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 2"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 3"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 4"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 5"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 6"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
  
                  <!-- Deal of the Month -->
                  <div class="mt-8 bg-gray-100 p-4">
                    <h2 class="font-bold text-lg mb-4">Deal of the Month</h2>
                    <p class="text-gray-600 mb-4">
                      Yes! Send me exclusive offers, personalized, and unique gift ideas,
                      tips for shopping on Mediu.
                    </p>
                    <div class="flex items-center space-x-6 text-gray-800">
                      <div>
                        <span class="block text-2xl font-bold">30</span>
                        <span class="block text-xs">Days</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">10</span>
                        <span class="block text-xs">Hours</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">01</span>
                        <span class="block text-xs">Minutes</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">38</span>
                        <span class="block text-xs">Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
  
            <!-- Skin Concerns Menu -->
            <li class="group relative cursor-pointer py-2">
              <div class="font-semibold hover:opacity-70 text-xl">Skin</div>
              <!-- Mega Menu Dropdown for Hair -->
              <div
                class="invisible absolute -left-[500px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
              >
                <div class="p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Concerns Related to Hair -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Hair</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Dandruff</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Hair Fall & Hair Loss
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Frizzy Hair
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Itchy & Irritated Scalp
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Bald Patches</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Skin -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Skin</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Ageing</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Acne & Acne Scars</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Sensitive Skin
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Pigmentation</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Under Eye Concerns</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Stretch Marks</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Pediatric -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Pediatric</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Shop</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Products List</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Products Row -->
                  <div class="grid grid-cols-6 gap-6 mt-6">
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 1"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 2"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 3"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 4"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 5"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 6"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
  
                  <!-- Deal of the Month -->
                  <div class="mt-8 bg-gray-100 p-4">
                    <h2 class="font-bold text-lg mb-4">Deal of the Month</h2>
                    <p class="text-gray-600 mb-4">
                      Yes! Send me exclusive offers, personalized, and unique gift ideas,
                      tips for shopping on Mediu.
                    </p>
                    <div class="flex items-center space-x-6 text-gray-800">
                      <div>
                        <span class="block text-2xl font-bold">30</span>
                        <span class="block text-xs">Days</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">10</span>
                        <span class="block text-xs">Hours</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">01</span>
                        <span class="block text-xs">Minutes</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">38</span>
                        <span class="block text-xs">Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- baby care -->
            <li class="group relative cursor-pointer py-2">
              <div class="font-semibold hover:opacity-70 text-xl">Baby Care</div>
              <!-- Mega Menu Dropdown for Hair -->
              <div
                class="invisible absolute -left-[500px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
              >
                <div class="p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Concerns Related to Hair -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Hair</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Dandruff</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Hair Fall & Hair Loss
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Frizzy Hair
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Itchy & Irritated Scalp
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Bald Patches</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Skin -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Skin</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Ageing</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Acne & Acne Scars</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Damaged & Sensitive Skin
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Pigmentation</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Under Eye Concerns</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Stretch Marks</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
  
                    <!-- Concerns Related to Pediatric -->
                    <div>
                      <h2 class="font-bold text-lg mb-4">Concerns Related to Pediatric</h2>
                      <ul class="space-y-2">
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Shop</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                            >Products List</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Products Row -->
                  <div class="grid grid-cols-6 gap-6 mt-6">
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 1"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 2"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 3"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 4"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 5"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product 6"
                        class="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
  
                  <!-- Deal of the Month -->
                  <div class="mt-8 bg-gray-100 p-4">
                    <h2 class="font-bold text-lg mb-4">Deal of the Month</h2>
                    <p class="text-gray-600 mb-4">
                      Yes! Send me exclusive offers, personalized, and unique gift ideas,
                      tips for shopping on Mediu.
                    </p>
                    <div class="flex items-center space-x-6 text-gray-800">
                      <div>
                        <span class="block text-2xl font-bold">30</span>
                        <span class="block text-xs">Days</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">10</span>
                        <span class="block text-xs">Hours</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">01</span>
                        <span class="block text-xs">Minutes</span>
                      </div>
                      <div>
                        <span class="block text-2xl font-bold">38</span>
                        <span class="block text-xs">Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- Supplements Menu -->
            <li class="group relative cursor-pointer py-2">
              <NuxtLink to="/products" class="font-semibold hover:opacity-70 text-xl"
                >Supplements</NuxtLink
              >
            </li>
            <li class="group relative cursor-pointer py-2">
              <NuxtLink to="/products" class="font-semibold hover:opacity-70 text-xl"
                >MediU Kit</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        showNotification: true, // Show notification by default
        isOpen: false,
        lastScrollTop: 0, // Store the last scroll position
        showNavbar: true, // Initially show navbar
      };
    },
    methods: {
      closeNotification() {
        this.showNotification = false; // Hide the notification bar
      },
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  