<template>
  <div class="font-serif">
    <!-- First row with 3 cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-auto">
      <!-- First card -->
      <div class="">
        <div
          class="relative bg-cover bg-center rounded-lg h-64 sm:h-72 md:h-80"
          style="
            background-image: url('https://ccdstest.b-cdn.net/Medi%20u/Artboard%201%402x.png');
          "
        >
          <div class="absolute inset-0 bg-opacity-50 rounded-lg"></div>
          <div class="relative p-4 sm:p-6 text-white flex justify-between">
            <div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-semibold">Serene Meadow Glow</h2>
              <p class="text-sm sm:text-base">Dress up in summer vibe</p>
              <div class="flex items-center mt-4 gap-4 sm:gap-6">
                <p class="font-bold text-sm sm:text-base md:text-lg">UPTO 50% OFF</p>
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
                  <path d="M2 12H22" />
                </svg>
              </div>
            </div>
            <div class="mt-14">
              <nuxt-link
                to="#"
                class="flex items-center justify-center px-4 py-2 sm:py-3 bg-transparent border border-white rounded-lg text-sm sm:text-base"
              >
                SHOP NOW
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Second card -->
      <div class="">
        <div
          class="relative bg-cover bg-center rounded-lg h-64 sm:h-72 md:h-80"
          style="
            background-image: url('https://ccdstest.b-cdn.net/Medi%20u/image%2027.png');
          "
        >
          <div class="absolute inset-0 bg-opacity-50 rounded-lg"></div>
          <div class="relative text-end p-4 sm:p-6 text-white">
            <h2 class="text-lg sm:text-xl md:text-2xl font-semibold">Dew Drops</h2>
            <p class="text-sm sm:text-base">Weekly New Launch</p>
            <p class="mt-4 font-bold text-sm sm:text-base md:text-lg">UPTO 40% OFF</p>
            <div class="flex justify-end mt-4 mr-4 sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-down"
              >
                <path d="M8 18L12 22L16 18" />
                <path d="M12 2V22" />
              </svg>
            </div>
            <button
              class="mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-transparent border border-white rounded-lg text-sm sm:text-base"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <!-- Third card -->
      <div class="">
        <div
          class="relative bg-cover bg-center rounded-lg h-64 sm:h-72 md:h-80"
          style="
            background-image: url('https://ccdstest.b-cdn.net/Medi%20u/Artboard%204%402x.png');
          "
        >
          <div class="absolute inset-0 bg-opacity-50 rounded-lg"></div>
          <div class="relative text-end p-4 sm:p-6 text-[#3C4242]">
            <h2 class="text-lg sm:text-xl md:text-2xl font-semibold">Velvet Petal Bliss</h2>
            <p class="text-sm sm:text-base">Move with style & comfort</p>
            <p class="mt-4 font-bold text-sm sm:text-base md:text-lg">UPTO 50% OFF</p>
            <div class="flex justify-end mt-4 mr-4 sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-down"
              >
                <path d="M8 18L12 22L16 18" />
                <path d="M12 2V22" />
              </svg>
            </div>
            <button
              class="mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-transparent border border-[#3C4242] rounded-lg text-sm sm:text-base"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Second row with 2 cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 h-auto">
      <!-- Fourth card -->
      <div class="">
        <div
          class="relative bg-cover bg-center rounded-lg h-64 sm:h-72 md:h-80"
          style="
            background-image: url('https://ccdstest.b-cdn.net/Medi%20u/image%2026.png');
          "
        >
          <div class="absolute inset-0 bg-opacity-50 rounded-lg"></div>
          <div class="relative p-4 sm:p-6 text-[#3C4242]">
            <h2 class="text-lg sm:text-xl md:text-2xl font-semibold">Whispering Willow</h2>
            <p class="text-sm sm:text-base">Live In Comfort</p>
            <p class="mt-4 font-bold text-sm sm:text-base md:text-lg">FLAT 60% OFF</p>
            <div class="flex justify-start mt-4 ml-4 sm:ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-down"
              >
                <path d="M8 18L12 22L16 18" />
                <path d="M12 2V22" />
              </svg>
            </div>
            <button
              class="mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-transparent border border-[#3C4242] rounded-lg text-sm sm:text-base"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <!-- Fifth card -->
      <div class="">
        <div
          class="relative bg-cover bg-center rounded-lg h-64 sm:h-72 md:h-80"
          style="
            background-image: url('https://ccdstest.b-cdn.net/Medi%20u/Artboard%202_1%402x.png');
          "
        >
          <div class="absolute inset-0 bg-opacity-50 rounded-lg"></div>
          <div class="relative text-end p-4 sm:p-6 text-[#3C4242]">
            <h2 class="text-lg sm:text-xl md:text-2xl font-semibold">Tender Cloud Comfort</h2>
            <p class="text-sm sm:text-base">Street Style Icon</p>
            <p class="mt-4 font-bold text-sm sm:text-base md:text-lg">FLAT 60% OFF</p>
            <div class="flex justify-end mt-4 mr-4 sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-down"
              >
                <path d="M8 18L12 22L16 18" />
                <path d="M12 2V22" />
              </svg>
            </div>
            <button
              class="mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-transparent border border-[#3C4242] rounded-lg text-sm sm:text-base"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
};
</script>

<style scoped>
/* You can add specific custom styles if necessary */
</style>
