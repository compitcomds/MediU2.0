<template>
  <div
    :class="[showNotification ? 'mt- xl:mt-[0px]' : 'mt- xl:mt-[0px]']"
    class="w-full sticky z-10 top-0 bg-[#537971] text-black"
  >
    <div class="relative bg-white">
      <!-- Main Menu -->
      <ul class="flex justify-center space-x-24 bg-[#537971] text-white py-4">
        <li class="group relative cursor-pointer py-2">
          <NuxtLink to="/" class="font-semibold hover:opacity-70 text-xl">Home</NuxtLink>
        </li>

        <!-- Hair Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Hair</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute -left-[400px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
          >
            <div class="p-6">
              <div class="grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Hair Concerns</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Dandruff</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Hairfall
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Hair Thining
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Damaged & Frizzy Hair
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Bald Patches</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Dull Hair</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Oily Scalp</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4">select By Ingredients</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Minoxidil</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Redensyl</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Capixyl
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Feptide</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Carnitine</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Hair Care</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Shampoo</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Conditioner</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Mask</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Serum</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <div class="grid grid-cols-6 gap-6 mt-6">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153"
                    alt="Product 1"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277"
                    alt="Product 2"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349"
                    alt="Product 3"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 4"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090"
                    alt="Product 5"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 6"
                    class="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <!-- Deal of the Month -->
              <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
    <h2 class="font-bold text-2xl mb-4 text-gray-800">Deal of the Month</h2>
    <p class="text-gray-600 mb-6 text-sm">
      Yes! Send me exclusive offers, personalized, and unique gift ideas,
      tips for shopping on Mediu.
    </p>
    <div class="flex items-center space-x-4 text-gray-800">
      <div class="countdown-item">
        <span class="countdown-number">{{ days }}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ hours }}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ minutes }}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ seconds }}</span>
        <span class="countdown-label">Seconds</span>
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
                  <h2 class="font-bold text-lg mb-4">Shop By Concern</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Acne & Acne Scar</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Aging
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Dehydration
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Damaged & Sensitive Skin
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Under Eye Darkness</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Under Arm Darkness</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Stretch Marks</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Pigmentation</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Oiliness</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Sip(Cracked/Darkness)</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Shop By Ingrdients</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Vitamin C</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >BHA / Salicylic Acid</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Retinoid / Retinol
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Niacinamide</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >UV Filters</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Ceramide</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Hyaluronic Acid</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Skin Care</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Cleanse</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Tone</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Treat</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Moisturize</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >SPF</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Under Eye</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <div class="grid grid-cols-6 gap-6 mt-6">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153"
                    alt="Product 1"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277"
                    alt="Product 2"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349"
                    alt="Product 3"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 4"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090"
                    alt="Product 5"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 6"
                    class="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <!-- Deal of the Month -->
              <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
    <h2 class="font-bold text-2xl mb-4 text-gray-800">Deal of the Month</h2>
    <p class="text-gray-600 mb-6 text-sm">
      Yes! Send me exclusive offers, personalized, and unique gift ideas,
      tips for shopping on Mediu.
    </p>
    <div class="flex items-center space-x-4 text-gray-800">
      <div class="countdown-item">
        <span class="countdown-number">{{ days }}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ hours }}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ minutes }}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ seconds }}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    </div>
  </div>
            </div>
          </div>
        </li>
        <li class="group relative cursor-pointer py-2">
          <NuxtLink to="/products" class="font-semibold hover:opacity-70 text-xl"
            >Baby Care</NuxtLink
          >
        </li>
        <!-- baby care -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Brands</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute -left-[600px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
          >
            <div class="p-6">
              <div class="grid grid-cols-4 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4">A</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2
                      </NuxtLink>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4">B</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4">C</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">D</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">E</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">F</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">G</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">H</h2>
                  <ul class="space-y-2">
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 1</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/products" class="text-gray-800 hover:text-blue-600"
                        >Brand 2</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <div class="grid grid-cols-6 gap-6 mt-6">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153"
                    alt="Product 1"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277"
                    alt="Product 2"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349"
                    alt="Product 3"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 4"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090"
                    alt="Product 5"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 6"
                    class="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <!-- Deal of the Month -->
              <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
    <h2 class="font-bold text-2xl mb-4 text-gray-800">Deal of the Month</h2>
    <p class="text-gray-600 mb-6 text-sm">
      Yes! Send me exclusive offers, personalized, and unique gift ideas,
      tips for shopping on Mediu.
    </p>
    <div class="flex items-center space-x-4 text-gray-800">
      <div class="countdown-item">
        <span class="countdown-number">{{ days }}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ hours }}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ minutes }}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ seconds }}</span>
        <span class="countdown-label">Seconds</span>
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
          <div class="font-semibold hover:opacity-70 text-xl">Mediu Kit</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute -left-[900px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
          >
            <div class="p-6">
              <div class="grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Hair Growth Kits</h2>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Dandruff Kits</h2>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4">Itchy Scalp Kits</h2>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">Basic Kits</h2>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">Advanced Kits</h2>
                </div>
              </div>

              <!-- Products Row -->
              <div class="grid grid-cols-6 gap-6 mt-6">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153"
                    alt="Product 1"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277"
                    alt="Product 2"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349"
                    alt="Product 3"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 4"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090"
                    alt="Product 5"
                    class="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 6"
                    class="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <!-- Deal of the Month -->
              <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
    <h2 class="font-bold text-2xl mb-4 text-gray-800">Deal of the Month</h2>
    <p class="text-gray-600 mb-6 text-sm">
      Yes! Send me exclusive offers, personalized, and unique gift ideas,
      tips for shopping on Mediu.
    </p>
    <div class="flex items-center space-x-4 text-gray-800">
      <div class="countdown-item">
        <span class="countdown-number">{{ days }}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ hours }}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ minutes }}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{{ seconds }}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    </div>
  </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      interval: null,
    };
  },
  methods: {
    startCountdown(targetDate) {
      const endDate = new Date(targetDate).getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          clearInterval(this.interval);
          this.days = "00";
          this.hours = "00";
          this.minutes = "00";
          this.seconds = "00";
          return;
        }

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0");
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0");
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0");
      };

      updateCountdown(); // Initial call
      this.interval = setInterval(updateCountdown, 1000);
    },
  },
  mounted() {
    // Set your target date here
    const targetDate = "2024-10-01T00:00:00Z"; // Adjust to your target date and time
    this.startCountdown(targetDate);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    if (this.interval) {
      clearInterval(this.interval);
    }
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
</style>

