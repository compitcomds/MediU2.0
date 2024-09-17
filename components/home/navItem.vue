<template>
  <div
    :class="[showNotification ? 'mt- xl:mt-[0px]' : 'mt- xl:mt-[0px]']"
    class="w-full sticky z-10 top-0 bg-[#537971] text-black"
  >
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
            class="invisible absolute p-4 text-black z-50 bg-gary-200 opacity-0 
            transform transition-all duration-500 ease-in-out group-hover:visible 
            group-hover:opacity-100 group-hover:translate-y-5 -right-[500px] md:-right-[600px] "
          >
            <div
              class="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3
               lg:grid-cols-2 xl:grid-cols-4 lg:w-[70vw] md:w-[30vw] xl:w-[50vw] bg-gray-200"
            >
              <!-- Concerns Related to Hair -->
              <div>
                <h2 class="font-bold text-lg mb-4 w-fit text-left">
                  Hair Concerns
                  <hr />
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Dandruff</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Hairfall</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Hair Thinning</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Damaged & Fizzy Hair</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Bald Patches</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Dull Hair</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Oily Scalp</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Ingredients -->
              <div>
                <h2 class="font-bold text-lg mb-4 w-fit text-left">
                  Select By Ingredients
                  <hr />
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-blue-600 hover:underline"
                      >Minoxidil</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Redensyl</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Capixyl</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Peptide</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Carnitine</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Hair Care -->
              <div>
                <h2 class="font-bold text-lg mb-4 w-fit text-left">
                  Hair Care <hr
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Shampoo</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Conditioner</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Mask</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Serum</a
                    >
                  </li>
                </ul>
              </div>

              
              <div class="hidden lg:block">
                <HomeNavSlider />
              </div>
            </div>
          </div>
        </li>

        <!-- SKIN  -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Skin</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute p-4 text-black z-50 bg-gary-200 opacity-0 
            transform transition-all duration-500 ease-in-out group-hover:visible 
            group-hover:opacity-100 group-hover:translate-y-5 lg:-left-72 md:right-32"
          >
            <div
              class="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3
               lg:grid-cols-2 xl:grid-cols-4 lg:w-[70vw] md:w-[30vw] xl:w-[50vw] bg-gray-200"
            >
              <!-- Concerns Related to Hair -->
              <div>
                <h2 class="font-bold text-lg mb-4 text-left">
                  Shop By Concern
                  <hr />
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Acne & Acne Scar</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Aging</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Dehydration</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Damaged & Sensitive Skin</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Under Eye Darkness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Under Arm Darkness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Stretch Marks</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Pigmentation</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Oiliness</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Lip (Cracked/Darkness)</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Ingredients -->
              <div>
                <h2 class="font-bold text-lg mb-4 text-left">
                  Select By Ingredients
                  <hr />
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Vitamin C</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >BHA / Salicylic Acid</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Retinoid / Retinol</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Niacinamide</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >UV Filters</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Ceramide</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Hyaluronic Acid</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Concerns Related to Hair Care -->
              <div>
                <h2 class="font-bold text-lg mb-4 text-left">
                  Hair Care <hr
                </h2>
                <ul class="space-y-2 text-left">
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Cleanser</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Toner</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Roll On</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Moisturize</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >SPF</a
                    >
                  </li>
                  <li>
                    <a
                      href="/shop"
                      class="text-gray-800 hover:text-green-600 hover:font-semibold"
                      >Under Eye</a
                    >
                  </li>
                </ul>
              </div>
              <div class="hidden lg:block">
                <HomeNavSlider />
              </div>
            </div>
          </div>
        </li>

        <li class="group relative cursor-pointer py-2 ">
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl "
            >Baby Care</a
          >
        </li>
        <!-- mediu KIT -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl w-28">Mediu Kit</div>

          <div
            class="invisible absolute p-4 lg:-left-[500px]  text-black top-full z-50 w-[90vw] max-w-3xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
          >
            <div class="p-6 flex justify-between w-full">
              <div class="8/12 grid grid-cols-3 gap-6">
                <nuxt-link
                  to="/comingSoon"
                  class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg"
                >
                  <h2
                    class="font-semibold text-lg hover:text-[#28574E] hover:underline"
                  >
                    Hair Growth Kits
                  </h2>
                </nuxt-link>

                <nuxt-link
                  to="/comingSoon"
                  class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg"
                >
                  <h2
                    class="font-semibold text-lg hover:text-[#28574E] hover:underline"
                  >
                    Dandruff Kits
                  </h2>
                </nuxt-link>

                <nuxt-link
                  to="/comingSoon"
                  class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg"
                >
                  <h2
                    class="font-semibold text-lg hover:text-[#28574E] hover:underline"
                  >
                    Itchy Scalp Kits
                  </h2>
                </nuxt-link>
                <nuxt-link
                  to="/comingSoon"
                  class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg"
                >
                  <h2
                    class="font-semibold text-lg hover:text-[#28574E] hover:underline"
                  >
                    Basic Kits
                  </h2>
                </nuxt-link>
                <nuxt-link
                  to="/comingSoon"
                  class="border flex items-center justify-center border-[#28574E] p-6 rounded-2xl hover:shadow-lg"
                >
                  <h2
                    class="font-semibold text-lg hover:text-[#28574E] hover:underline"
                  >
                    Advanced Kits
                  </h2>
                </nuxt-link>
              </div>

              <!-- <HomeNavSlider /> -->
            </div>
          </div>
        </li>
        <!-- Brands -->
<li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Brands</div>
          <!-- Dropdown -->
          <div
            class="invisible absolute p- top-full -right-[100px] z-50 w-96 bg-white shadow-lg overflow-y-auto max-h-[400px] custom-scrollbar opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5"
          >
            <div class="px-6 py-2">
              <!-- Sticky Heading -->
              <div class="sticky top-0 bg-white z-10">
                <div
                  class="text-[#28574E] mb-2 text-xl font-serif font-semibold"
                >
                  Brands -
                </div>
                <!-- Sticky Search bar -->
                <input
                  type="text"
                  placeholder="Search by brand..."
                  class="w-full p-2 border border-black bg-white text-black rounded mb-4"
                />
              </div>

              <!-- Brands list -->
              <div class="space-y-2">
                <!-- A -->
                <div>
                  <h2 class="font-bold text-lg">A</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >A-Derma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >A. Menarini India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Abbott</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Aclaris Therapeutics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Acne Squad</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Adonis</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Adroit Biomed</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Aethicz Biolife</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ajanta Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Akosma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Akumentis</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Alkem Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Alembic</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >AMA Herbal Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Apex Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Apple Therapeutics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Arista Life Sciences</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Aurel Derma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Aveeno</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Aveil</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Avene</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Awear Beauty</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Azelia Healthcare</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- B -->
                <div>
                  <h2 class="font-bold text-lg">B</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >BABE Laboratorios</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Barulab</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Beauty Garage</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Beauty of Joseon</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >BeautyWise</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Belif</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Bellacos Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Beta Drugs Ltd</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Biocon Biologics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Bioderma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Biokent Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Biopharmacieaa</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Blistex</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Brillare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Brinton</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Burt's Bees</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">C</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cadila Pharmaceuticals Limited</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cantabria Labs</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Canixa Life Sciences Pvt. Ltd.</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Capeli</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Carbamide Forte</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Catalysis S.L.</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >CeraVe</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cetaphil</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ceuticoz</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cipla</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Clinikally</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Coola LLC</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cosderma Cosmoceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cosmofix Technovation</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Cosmogen India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >COSRX</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Craza Lifescience</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Crystal Tomato</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Curatio</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">D</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dabur India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >De Fabulous</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Der-Joint Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermaceutic</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermaelite Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermajoint India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermalogica</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >DERMATICA</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermawiz Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermedic</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermetics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermis Oracle</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermosys</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dermx</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Dr. Reddy's</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ducray</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >D'Vacos Cosmetics & Neutraceuticals</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">E</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >East West Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Elcon</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Elder Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Emcure Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Embryolisse</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Enavant Research</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Encore Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Entod Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Epique</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Eris Oaknet</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Eterno Distributors</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ethiall Remedies</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ethicare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ethinext Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Eve Lom</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">F</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Faher</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Fillmed Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Fixderma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Fluence Pharma</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">G</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Galderma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >General Medicine Therapeutics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Genosys</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Geosmatic Cosmeceuticals & Cosmocare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >GlaxoSmithKline Pharmaceuticals Ltd</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Glenmark Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Glint Cosmetics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Glo Blanc</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Glowderma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Gracederma Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Gufic Aesthaderm</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Gunam</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">H</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Haruharu</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >HBC Dermiza Health Care</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Health Etc</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Hegde & Hegde Pharmaceutical LLP</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >HK Vitals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Hydrafar</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">I</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Iberia</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Iceberg Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Indiabulls Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Indolands Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Intas Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >IPCA</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >iS Clinical</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >ISIS Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >ISDIN</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >IUNIK</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ivatherm</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">J</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Janssen</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Justhuman</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg">K</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >KAHI</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >KAINE</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Kativa</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Kemiq Lifesciences</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Kerastem</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Klairs</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >KLM Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Kosher Organics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Kshipra Health Solutions</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- L -->
                <div>
                  <h2 class="font-bold text-lg">L</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >La Med India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >La Pristine</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >La Roche-Posay</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Leafon Enterprises</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Leeford Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Leo Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Linux Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >LISEN</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Lupin</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- M -->
                <div>
                  <h2 class="font-bold text-lg">M</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Maddox Biosciences</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mankind Pharma Ltd.</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Meconus Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mederma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Medever Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mediste Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Meyer Organics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Micro Labs</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Minimalist</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mohrish Pharmaceuticals Pvt. Ltd</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >MRHM Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mustela</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Mylan</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- N -->
                <div>
                  <h2 class="font-bold text-lg">N</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Neutrogena</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Nimvas Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Noreva</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Nourrir Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Novology</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Nutracos Lifesciences</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Nutrova</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- O -->
                <div>
                  <h2 class="font-bold text-lg">O</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Oaknet Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Olaplex</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >One Thing</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >OZiva</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >O3+</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- P -->
                <div>
                  <h2 class="font-bold text-lg">P</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Palsons Derma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Percos</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >PHILIP B</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Physiogel</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Pilgrim</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >PRESCRIBEDsolutions</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Protein Kera</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Puerile Dermaceuticals</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- Q -->
                <div>
                  <h2 class="font-bold text-lg">Q</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >QOD Professional</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Quintessence Skin Science</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- R -->
                <div>
                  <h2 class="font-bold text-lg">R</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ralycos LLC</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Regaliz</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Regium Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Renewcell Cosmedica</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Rene Furterer</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Revitalash</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Rexcin Pharmaceuticals Pvt. Ltd.</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Rockmed Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Re'equil</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- S -->
                <div>
                  <h2 class="font-bold text-lg">S</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sanosan</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Saion International</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Salve Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sebamed</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sedge Bioceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Senechio Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sesderma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Shangpree</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Simple</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Skinmedis</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Skinska Pharmaceutica</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Skinnovation Next</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Skyntox</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Solar D</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sol Derma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Some By Mi</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Soteri Skin</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Steer Peau Dermo Cosmetique</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Sun Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Swiss Perfection</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Swisse</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Syscutis Healthcare</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- T -->
                <div>
                  <h2 class="font-bold text-lg">T</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Talent India</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >The Face Shop</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >The FormulaRx</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Tricos Dermatologics</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Tricept</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Trikona Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Trilogy</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Torrent Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Torque Pharmaceuticals</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- U -->
                <div>
                  <h2 class="font-bold text-lg">U</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >UAS Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ultrasun</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Ultra V</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Unimarck Pharma</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Universal Nutriscience</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Uriage</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >USV</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- V -->
                <div>
                  <h2 class="font-bold text-lg">V</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Velsorg Healthcare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Verso</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- W -->
                <div>
                  <h2 class="font-bold text-lg">W</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Wellbeing Nutrition</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Win-Medicare Pvt Ltd</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Winston</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >WishCare</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >WishNew Wellness</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Wockhardt</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- Y -->
                <div>
                  <h2 class="font-bold text-lg">Y</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Yuderma</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- Z -->
                <div>
                  <h2 class="font-bold text-lg">Z</h2>
                  <ul class="pl-4">
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Zofra Pharmaceuticals</a
                      >
                    </li>
                    <li>
                      <a
                        href="/shop"
                        class="text-gray-800 hover:text-green-600 hover:font-semibold"
                        >Zydus Healthcare</a
                      >
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
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl"
            >Supplements</a
          >
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
