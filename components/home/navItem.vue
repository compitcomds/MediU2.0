<template>
  <div :class="[showNotification ? 'mt- xl:mt-[0px]' : 'mt- xl:mt-[0px]']"
    class="w-full sticky z-10 top-0 bg-[#537971] text-black">
    <div class="relative bg-white">
      <!-- Main Menu -->
      <ul class="flex justify-center space-x-24 bg-[#537971] text-white py-2">
        <li class="group relative cursor-pointer py-2">
          <a href="/" class="font-semibold hover:opacity-70 text-xl">Home</a>
        </li>

        <!-- Hair Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Hair</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute p-4 -left-[300px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="w-8/12 grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Hair Concerns
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dandruff</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hairfall
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hair Thining
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Damaged & Fizzy Hair
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Bald Patches</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dull Hair</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Oily Scalp</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Select By Ingredients
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Minoxidil</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Redensyl</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Capixyl
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Peptide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Carnitine</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Hair Care
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Shampoo</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Conditioner</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mask</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Serum</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <HomeNavSlider />
              <!-- Deal of the Month -->
              <!-- <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 class="font-bold text-2xl mb-4 text-gray-800">
                  Deal of the Month
                </h2>
                <p class="text-gray-600 mb-6 text-sm">
                  Yes! Send me exclusive offers, personalized, and unique gift
                  ideas, tips for shopping on Mediu.
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
              </div> -->
            </div>
          </div>
        </li>

        <!-- Skin Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Skin</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute p-4 -left-[400px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="8/12 grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Shop By Concern
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Acne & Acne Scar</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aging
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dehydration
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Damaged & Sensitive Skin
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Eye Darkness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Arm Darkness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Stretch Marks</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Pigmentation</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Oiliness</a>
                    </li>
                    <li>
                      <a href="/shop"
                        class="text-gray-800 hover:text-blue-600 hover:underline">Lip(Cracked/Darkness)</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Shop By Ingrdients
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Vitamin C</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">BHA / Salicylic Acid</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Retinoid / Retinol
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Niacinamide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">UV Filters</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ceramide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hyaluronic Acid</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">
                    Skin Care
                  </h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cleanser</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Tonner</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Roll On</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Moisturize</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">SPF</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Eye</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <HomeNavSlider />

              <!-- Deal of the Month -->
              <!-- <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 class="font-bold text-2xl mb-4 text-gray-800">
                  Deal of the Month
                </h2>
                <p class="text-gray-600 mb-6 text-sm">
                  Yes! Send me exclusive offers, personalized, and unique gift
                  ideas, tips for shopping on Mediu.
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
              </div> -->
            </div>
          </div>
        </li>
        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Baby Care</a>
        </li>
        <!-- Brands -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Brands</div>
          <!-- Dropdown -->
          <div
            class="invisible absolute p- top-full z-50 w-96 bg-white shadow-lg overflow-y-auto max-h-[400px] custom-scrollbar opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="px-6 py-2">
              <!-- Sticky Heading -->
              <div class="sticky top-0 bg-white z-10">
                <div class="text-[#28574E] mb-2 text-xl font-serif font-semibold">
                  Brands -
                </div>
                <!-- Sticky Search bar -->
                <input type="text" placeholder="Search by brand..."
                  class="w-full p-2 border border-black bg-white text-black rounded mb-4" />
              </div>

              <!-- Brands list -->
              <div class="space-y-2">
                <!-- A -->
                <div>
                  <h2 class="font-bold text-lg">A</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">A-Derma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">A. Menarini India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Abbott</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aclaris Therapeutics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Acne Squad</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Adonis</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Adroit Biomed</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aethicz Biolife</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ajanta Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Akosma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Akumentis</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Alkem Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Alembic</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">AMA Herbal
                        Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Apex Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Apple Therapeutics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Arista Life Sciences</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aurel Derma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aveeno</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aveil</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Avene</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Awear Beauty</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Azelia Healthcare</a>
                    </li>
                  </ul>
                </div>
                <!-- B -->
                <div>
                  <h2 class="font-bold text-lg">B</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">BABE Laboratorios</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Barulab</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Beauty Garage</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Beauty of Joseon</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">BeautyWise</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Belif</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Bellacos Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Beta Drugs Ltd</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Biocon Biologics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Bioderma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Biokent Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Biopharmacieaa</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Blistex</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brillare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brinton</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Burt's Bees</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">C</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cadila Pharmaceuticals
                        Limited</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cantabria Labs</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Canixa Life Sciences
                        Pvt. Ltd.</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Capeli</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Carbamide Forte</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Catalysis S.L.</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">CeraVe</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cetaphil</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ceuticoz</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cipla</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Clinikally</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Coola LLC</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cosderma
                        Cosmoceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cosmofix
                        Technovation</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cosmogen India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">COSRX</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Craza Lifescience</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Crystal Tomato</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Curatio</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">D</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dabur India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">De Fabulous</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Der-Joint Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermaceutic</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermaelite
                        Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermajoint India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermalogica</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">DERMATICA</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermawiz
                        Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermedic</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermetics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermis Oracle</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermosys</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dermx</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dr. Reddy's</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ducray</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">D'Vacos Cosmetics &
                        Neutraceuticals</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">E</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">East West Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Elcon</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Elder Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Emcure
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Embryolisse</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Enavant Research</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Encore Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Entod
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Epique</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Eris Oaknet</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Eterno Distributors</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ethiall Remedies</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ethicare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ethinext Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Eve Lom</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">F</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Faher</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Fillmed Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Fixderma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Fluence Pharma</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">G</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Galderma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">General Medicine
                        Therapeutics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Genosys</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Geosmatic Cosmeceuticals
                        & Cosmocare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">GlaxoSmithKline
                        Pharmaceuticals Ltd</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Glenmark
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Glint Cosmetics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Glo Blanc</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Glowderma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Gracederma
                        Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Gufic Aesthaderm</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Gunam</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">H</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Haruharu</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">HBC Dermiza Health
                        Care</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Health Etc</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hegde & Hegde
                        Pharmaceutical LLP</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">HK Vitals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hydrafar</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">I</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Iberia</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Iceberg Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Indiabulls
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Indolands Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Intas
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">IPCA</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">iS Clinical</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">ISIS Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">ISDIN</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">IUNIK</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ivatherm</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">J</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Janssen</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Justhuman</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">K</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">KAHI</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">KAINE</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Kativa</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Kemiq Lifesciences</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Kerastem</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Klairs</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">KLM Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Kosher Organics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Kshipra Health
                        Solutions</a>
                    </li>
                  </ul>
                </div>
                <!-- L -->
                <div>
                  <h2 class="font-bold text-lg">L</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">La Med India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">La Pristine</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">La Roche-Posay</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Leafon Enterprises</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Leeford Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Leo Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Linux Laboratories</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">LISEN</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Lupin</a>
                    </li>
                  </ul>
                </div>
        
                <!-- M -->
                <div>
                  <h2 class="font-bold text-lg">M</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Maddox Biosciences</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mankind Pharma Ltd.</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Meconus Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mederma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Medever Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mediste
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Meyer Organics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Micro Labs</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Minimalist</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mohrish Pharmaceuticals
                        Pvt. Ltd</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">MRHM Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mustela</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mylan</a>
                    </li>
                  </ul>
                </div>
        
                <!-- N -->
                <div>
                  <h2 class="font-bold text-lg">N</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Neutrogena</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Nimvas
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Noreva</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Nourrir Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Novology</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Nutracos
                        Lifesciences</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Nutrova</a>
                    </li>
                  </ul>
                </div>
        
                <!-- O -->
                <div>
                  <h2 class="font-bold text-lg">O</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Oaknet Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Olaplex</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">One Thing</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">OZiva</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">O3+</a>
                    </li>
                  </ul>
                </div>
        
                <!-- P -->
                <div>
                  <h2 class="font-bold text-lg">P</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Palsons Derma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Percos</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">PHILIP B</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Physiogel</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Pilgrim</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">PRESCRIBEDsolutions</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Protein Kera</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Puerile
                        Dermaceuticals</a>
                    </li>
                  </ul>
                </div>
        
                <!-- Q -->
                <div>
                  <h2 class="font-bold text-lg">Q</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">QOD Professional</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Quintessence Skin
                        Science</a>
                    </li>
                  </ul>
                </div>
        
                <!-- R -->
                <div>
                  <h2 class="font-bold text-lg">R</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ralycos LLC</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Regaliz</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Regium
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Renewcell Cosmedica</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Rene Furterer</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Revitalash</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Rexcin Pharmaceuticals
                        Pvt. Ltd.</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Rockmed Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Re'equil</a>
                    </li>
                  </ul>
                </div>
        
                <!-- S -->
                <div>
                  <h2 class="font-bold text-lg">S</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sanosan</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Saion International</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Salve
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sebamed</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sedge Bioceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Senechio Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sesderma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Shangpree</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Simple</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Skinmedis</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Skinska
                        Pharmaceutica</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Skinnovation Next</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Skyntox</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Solar D</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sol Derma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Some By Mi</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Soteri Skin</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Steer Peau Dermo
                        Cosmetique</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sun Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Swiss Perfection</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Swisse</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Syscutis Healthcare</a>
                    </li>
                  </ul>
                </div>
                <!-- T -->
                <div>
                  <h2 class="font-bold text-lg">T</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Talent India</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">The Face Shop</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">The FormulaRx</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Tricos Dermatologics</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Tricept</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Trikona
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Trilogy</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Torrent
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Torque
                        Pharmaceuticals</a>
                    </li>
                  </ul>
                </div>
        
                <!-- U -->
                <div>
                  <h2 class="font-bold text-lg">U</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">UAS Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ultrasun</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ultra V</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Unimarck Pharma</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Universal
                        Nutriscience</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Uriage</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">USV</a>
                    </li>
                  </ul>
                </div>
        
                <!-- V -->
                <div>
                  <h2 class="font-bold text-lg">V</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Velsorg Healthcare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Verso</a>
                    </li>
                  </ul>
                </div>
        
                <!-- W -->
                <div>
                  <h2 class="font-bold text-lg">W</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Wellbeing Nutrition</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Win-Medicare Pvt Ltd</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Winston</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">WishCare</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">WishNew Wellness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Wockhardt</a>
                    </li>
                  </ul>
                </div>
        
                <!-- Y -->
                <div>
                  <h2 class="font-bold text-lg">Y</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Yuderma</a>
                    </li>
                  </ul>
                </div>
        
                <!-- Z -->
                <div>
                  <h2 class="font-bold text-lg">Z</h2>
                  <ul class="pl-4">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Zofra
                        Pharmaceuticals</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Zydus Healthcare</a>
                    </li>
                  </ul>
                </div>
                <!-- Continue with other alphabetical sections -->
              </div>
            </div>
          </div>
        </li>


        <!-- Supplements Menu -->
        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Supplements</a>
        </li>
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Mediu Kit</div>

          <div
            class="invisible absolute p-4 -left-[500px] text-black top-full z-50 w-[90vw] max-w-3xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="8/12 grid grid-cols-3 gap-6">
                <nuxt-link to="/comingSoon" class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg ">
                  <h2 class="font-semibold text-lg hover:text-[#28574E] hover:underline">
                    Hair Growth Kits
                  </h2>
                </nuxt-link>

                <nuxt-link to="/comingSoon" class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg ">
                  <h2 class="font-semibold text-lg hover:text-[#28574E] hover:underline">
                    Dandruff Kits
                  </h2>
                </nuxt-link>

                <nuxt-link to="/comingSoon" class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg ">
                  <h2 class="font-semibold text-lg hover:text-[#28574E] hover:underline">
                    Itchy Scalp Kits
                  </h2>
                </nuxt-link>
                <nuxt-link to="/comingSoon" class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg ">
                  <h2 class="font-semibold text-lg hover:text-[#28574E] hover:underline">
                    Basic Kits
                  </h2>
                </nuxt-link>
                <nuxt-link to="/comingSoon" class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg ">
                  <h2 class="font-semibold text-lg hover:text-[#28574E] hover:underline">
                    Advanced Kits
                  </h2>
                </nuxt-link>
              </div>

              <!-- <HomeNavSlider /> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- <script>
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
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
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
</script> -->
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
