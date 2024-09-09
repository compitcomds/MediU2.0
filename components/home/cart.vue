

<template>
    <div class="flex items-center justify-end gap-4 w-3/12">
        <!-- Add your additional elements here -->
        <div class="flex items-center gap-2">
          <button class="text-[#28574E]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 37 36" fill="none">
              <g clip-path="url(#clip0_1_280)">
                <path
                  d="M8.14944 20.6311L18.0962 30.0425L24.4387 24.041L21.6543 21.4078C20.7165 20.521 20.1895 19.3181 20.1893 18.0638C20.1891 16.8095 20.7156 15.6064 21.6531 14.7193C22.5906 13.8322 23.8622 13.3337 25.1882 13.3335C26.5142 13.3333 27.786 13.8314 28.7237 14.7182L29.2028 15.1714L29.682 14.7182C30.4626 13.9793 31.481 13.5074 32.5766 13.377C32.5375 12.0785 32.097 10.8194 31.3096 9.75527C30.5221 8.69111 29.4223 7.86855 28.146 7.3893C26.8697 6.91004 25.4729 6.79509 24.1283 7.05866C22.7837 7.32223 21.5502 7.95276 20.5804 8.87231L18.0962 11.2219L15.612 8.87199C14.2929 7.62426 12.5039 6.9233 10.6386 6.9233C8.77317 6.9233 6.98418 7.62426 5.66516 8.87199C4.34613 10.1197 3.60511 11.812 3.60511 13.5766C3.60511 15.3411 4.34613 17.0334 5.66516 18.2811L8.14944 20.6311ZM35.8963 15.529C35.1842 14.8602 34.2214 14.4848 33.2179 14.4848C32.2144 14.4848 31.2516 14.8602 30.5396 15.529L29.2028 16.7935L27.8661 15.529C27.1537 14.8683 26.1944 14.5003 25.1968 14.505C24.1991 14.5097 23.2437 14.8867 22.5383 15.554C21.8328 16.2214 21.4344 17.1252 21.4295 18.0689C21.4247 19.0127 21.8138 19.9201 22.5123 20.5939L23.8484 21.8584L29.2023 26.9256L34.559 21.8584L35.8957 20.5939C36.6028 19.9209 36.9998 19.0105 36.9999 18.0616C37 17.1127 36.6033 16.2022 35.8963 15.529Z"
                  fill="#28574E" />
              </g>
              <defs>
                <clipPath id="clip0_1_280">
                  <rect width="37" height="35" fill="white" transform="translate(0 0.0527344)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <span class="text-xs md:text-xs xl:text-sm text-[#28574E]">
            100 Loyalty Points
          </span>
        </div>
        <button class="relative rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-8 xl:w-10 xl:h-11" viewBox="0 0 42 47" fill="none">
            <path
              d="M14.3575 23.5913L14.3575 15.1282C14.3575 11.3794 17.3965 8.34037 21.1454 8.34037V8.34037C24.8942 8.34037 27.9332 11.3794 27.9332 15.1282L27.9332 23.5913"
              stroke="#22423C" stroke-width="2.94318" stroke-linecap="round" />
            <path
              d="M7.16524 23.323C7.35702 20.7376 7.45291 19.4449 8.29985 18.6585C9.14678 17.8721 10.443 17.8721 13.0355 17.8721H29.2552C31.8477 17.8721 33.1439 17.8721 33.9908 18.6585C34.8378 19.4449 34.9337 20.7376 35.1255 23.323L36.1836 37.5876C36.2934 39.0678 36.3483 39.808 35.9117 40.2782C35.475 40.7485 34.7328 40.7485 33.2485 40.7485H9.04221C7.55787 40.7485 6.8157 40.7485 6.37904 40.2782C5.94239 39.808 5.99729 39.0678 6.1071 37.5876L7.16524 23.323Z"
              stroke="#22423C" stroke-width="2.94318" />
          </svg>
          <span v-if="badgeCount > 0"
            class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full bg-red-500 text-black px-2 py-1 text-xs">
            {{ badgeCount }}
          </span>
        </button>

        <div class="relative inline-block text-left md:ml-2">
          <button @click="toggleDropdown" class="flex items-center focus:outline-none">
            <div class="bg-center bg-cover bg-no-repeat rounded-full h-12 w-12 ml-2" :style="{
              backgroundImage:
                'url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)',
            }"></div>
            <svg class="w-5 h-5 ml-2 transition-transform transform" :class="{ 'rotate-180': isOpen }" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="isOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition duration-300 ease-in-out opacity-100 transform scale-100"
            @click.outside="closeDropdown">
            <ul class="py-1">
              <li>
                <a href="/login" class="block px-4 py-2 text-black hover:bg-gray-100">Log In</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Logout</a>
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
<style  scoped>
    
</style>
