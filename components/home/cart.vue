<template>
  <div class="flex items-center justify-end space-x-6 w-3/12">
    <!-- Add your additional elements here -->
    <!-- <div class="flex items-center gap-2">
      <button class="text-[#28574E]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 37 36"
          fill="none"
        >
          <g clip-path="url(#clip0_1_280)">
            <path
              d="M8.14944 20.6311L18.0962 30.0425L24.4387 24.041L21.6543 21.4078C20.7165 20.521 20.1895 19.3181 20.1893 18.0638C20.1891 16.8095 20.7156 15.6064 21.6531 14.7193C22.5906 13.8322 23.8622 13.3337 25.1882 13.3335C26.5142 13.3333 27.786 13.8314 28.7237 14.7182L29.2028 15.1714L29.682 14.7182C30.4626 13.9793 31.481 13.5074 32.5766 13.377C32.5375 12.0785 32.097 10.8194 31.3096 9.75527C30.5221 8.69111 29.4223 7.86855 28.146 7.3893C26.8697 6.91004 25.4729 6.79509 24.1283 7.05866C22.7837 7.32223 21.5502 7.95276 20.5804 8.87231L18.0962 11.2219L15.612 8.87199C14.2929 7.62426 12.5039 6.9233 10.6386 6.9233C8.77317 6.9233 6.98418 7.62426 5.66516 8.87199C4.34613 10.1197 3.60511 11.812 3.60511 13.5766C3.60511 15.3411 4.34613 17.0334 5.66516 18.2811L8.14944 20.6311ZM35.8963 15.529C35.1842 14.8602 34.2214 14.4848 33.2179 14.4848C32.2144 14.4848 31.2516 14.8602 30.5396 15.529L29.2028 16.7935L27.8661 15.529C27.1537 14.8683 26.1944 14.5003 25.1968 14.505C24.1991 14.5097 23.2437 14.8867 22.5383 15.554C21.8328 16.2214 21.4344 17.1252 21.4295 18.0689C21.4247 19.0127 21.8138 19.9201 22.5123 20.5939L23.8484 21.8584L29.2023 26.9256L34.559 21.8584L35.8957 20.5939C36.6028 19.9209 36.9998 19.0105 36.9999 18.0616C37 17.1127 36.6033 16.2022 35.8963 15.529Z"
              fill="#28574E"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_280">
              <rect
                width="37"
                height="35"
                fill="white"
                transform="translate(0 0.0527344)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <span class="text-xs md:text-xs xl:text-sm text-[#28574E]">
        100 Loyalty Points
      </span>
    </div> -->
    <div class="">
      <a href="/addToCart" class="relative inline-block">
        <!-- Shopping Cart SVG Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#285742"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>

        <!-- Badge Count -->
        <span
          v-if="badgeCount > 0"
          class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 text-white px-2 py-1 text-xs"
        >
          {{ badgeCount }}
        </span>
      </a>
    </div>
    <!-- <div class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#28574E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-heart"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
      </svg>
    </div> -->
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="flex items-center justify-center focus:outline-none"
      >
        <div
          class="bg-cover bg-no-repeat rounded-full h-12 w-12"
          :style="{
            backgroundImage:
              'url(https://ccdstest.b-cdn.net/Medi%20u/profile.svg)',
          }"
        ></div>

        <!-- <svg
          class="transition-transform transform"
          :class="{ 'rotate-180': isOpen }"
          height="40"
          color="#28574E"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 20l10 10 10-10z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg> -->
      </button>

      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition duration-300 ease-in-out opacity-100 transform scale-100"
        @click.outside="closeDropdown"
      >
        <ul class="py-1">
          <li>
            <a
              href="/auth/login"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              >Log In</a
            >
          </li>
          <!-- <li>
            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Settings</a>
          </li> -->
          <li>
            <a
              href="/auth/register"
              class="block px-4 py-2 text-black hover:bg-gray-100"
              >Register</a
            >
          </li>
        </ul>
      </div>
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
      badgeCount: 3, // Example value, you can dynamically set this
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
<style scoped></style>
