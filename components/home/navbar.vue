<template>
  <div>
    <!-- Top notification bar -->
    <div class="fixed inset-x-0 top-0 z-50 bg-[#22423C]">
      <div class="max-w-7xl mx-auto lg:py-1 xl:py-2 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex-1 flex justify-center">
            <p class="text-center font-medium text-white flex items-center">
              <span class="">Get 20% OFF on your first order. Subscribe to our newsletter
                and get your coupon!</span>
            </p>
          </div>
          <div class="hidden lg:flex lg:items-center lg:ml-3">
            <a href="#" class="flex items-center justify-center text-xl font-medium text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <div
      class="flex fixed top-8 xl:top-10 gap-8 z-50 bg-white inset-x-0 justify-between items-center border-b border-gray-300 h-16 px-1 lg:px-6 xl:px-2">
      <div class="flex items-center w-3/12">
        <img src="https://tailwindflex.com/public/images/logo.svg" class="w-auto h-16" alt="Logo" />
        <!-- <h2
          class="font-bold text-xl sm:text-3xl  text-teal-600 "
        >
          Medi U
        </h2> -->
      </div>
      <div class="flex relative rounded-md w-7/12 h-[40px] xl:h-[50px]">
        <input type="text" name="q" id="query" placeholder="What are you looking for?.."
          class="w-full p-3 rounded-full border-2 border-r-white rounded-r-none text-black border-gray-300 bg-white placeholder-gray-500" />
        <button class="inline-flex items-center gap-2 bg-orange-500 text-white text-lg py-3 px-6 rounded-r-full">
          <span class="hidden md:block">
            <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56.966 56.966" xml:space="preserve" width="512px"
              height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </span>
        </button>
      </div>
      <!-- third -->
      <div class="flex items-center justify-end gap-4 w-3/12">
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
    <span v-if="badgeCount > 0" class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full bg-red-500 text-white px-2 py-1 text-xs">
      {{ badgeCount }}
    </span>
  </button>

        <div class="relative inline-block text-left md:ml-2">
          <button
            @click="toggleDropdown"
            class="flex items-center focus:outline-none"
          >
            <div
              class="bg-center bg-cover bg-no-repeat rounded-full h-12 w-12 ml-2"
              :style="{
                backgroundImage:
                  'url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)',
              }"
            ></div>
            <svg
              class="w-5 h-5 ml-2 transition-transform transform"
              :class="{ 'rotate-180': isOpen }"
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
          </button>
          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition duration-300 ease-in-out opacity-100 transform scale-100"
            @click.outside="closeDropdown"
          >
            <ul class="py-1">
              <li>
                <a
                  href="/login"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >Log In</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- navbar2 -->

    <div>
      <div class="w-full fixed z-10 top-0 bg-[#537971] text-white py-2 mt-24 xl:mt-[104px]">
        <ul class="flex flex-col items-center justify-center gap-5 px-1 md:flex-row xl:gap-10">
          <nuxt-link to="/" class="cursor-default text-white hover:opacity-50 text-[20px]">
            <li class="group relative cursor-pointer py-2">Home</li>
          </nuxt-link>
          <li class="group relative cursor-pointer py-2">
            <div class="cursor-default text-white hover:opacity-50 text-[20px]">
              Skin<i class="fas fa-chevron-down ms-1 text-xs"></i>
            </div>
            <div
              class="invisible absolute -left-[510px] top-0 z-50 w-[900px]  xl:w-[1340px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div class="relative top-[34px] bg-sky-50 p-6 shadow-xl">
                <div
                  class="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-sky-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[30rem]">
                </div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Left Section -->
                    <div>
                      <ul class="text-[20px]">
                        <li>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                        </li>
                        <!-- Repeat this li element for 10 items -->
                      </ul>
                    </div>

                    <!-- Middle Section -->
                    <div class="flex items-center justify-center">
                      <img src="https://ccdstest.b-cdn.net/Medi%20u/S_Damaged_Skin.webp" alt="Image"
                        class="rounded-lg shadow-lg" />
                    </div>

                    <!-- Right Section -->
                    <div>
                      <h2 class="text-[20px] font-bold text-sky-950">
                        Main Heading
                      </h2>
                      <p class="text-gray-800 my-4">
                        Description goes here. This is where you can add more
                        details about the content.
                      </p>
                      <div class="flex space-x-4 my-4">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">
                          Button 1
                        </button>
                        <button class="bg-green-500 text-white py-2 px-4 rounded-lg">
                          Button 2
                        </button>
                      </div>
                      <div class="mt-6">
                        <h3 class="text-[16px] font-bold text-gray-800">
                          Contact
                        </h3>
                        <p class="text-gray-800">123-456-7890</p>
                        <p class="text-gray-800">email@example.com</p>
                        <div class="flex space-x-4 mt-4">
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-facebook-f"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-instagram"></i></a>
                          <!-- Add other social icons here -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="group relative cursor-pointer py-2">
            <div class="cursor-default text-white hover:opacity-50 text-[20px]">
              Baby Care<i class="fas fa-chevron-down ms-1 text-xs"></i>
            </div>
            <div
              class="invisible absolute -left-[590px] top-0 z-50 w-[900px]  xl:w-[1340px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div class="relative top-[34px] bg-sky-50 p-6 shadow-xl">
                <div
                  class="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-sky-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[37rem]">
                </div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Left Section -->
                    <div>
                      <ul class="text-[20px]">
                        <li>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                        </li>
                        <!-- Repeat this li element for 10 items -->
                      </ul>
                    </div>

                    <!-- Middle Section -->
                    <div class="flex items-center justify-center">
                      <img src="https://ccdstest.b-cdn.net/Medi%20u/S_Damaged_Skin.webp" alt="Image"
                        class="rounded-lg shadow-lg" />
                    </div>

                    <!-- Right Section -->
                    <div>
                      <h2 class="text-[20px] font-bold text-sky-950">
                        Main Heading
                      </h2>
                      <p class="text-gray-800 my-4">
                        Description goes here. This is where you can add more
                        details about the content.
                      </p>
                      <div class="flex space-x-4 my-4">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">
                          Button 1
                        </button>
                        <button class="bg-green-500 text-white py-2 px-4 rounded-lg">
                          Button 2
                        </button>
                      </div>
                      <div class="mt-6">
                        <h3 class="text-[16px] font-bold text-gray-800">
                          Contact
                        </h3>
                        <p class="text-gray-800">123-456-7890</p>
                        <p class="text-gray-800">email@example.com</p>
                        <div class="flex space-x-4 mt-4">
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-facebook-f"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-instagram"></i></a>
                          <!-- Add other social icons here -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="group relative cursor-pointer py-2">
            <div class="cursor-default text-white hover:opacity-50 text-[20px]">
              Hair<i class="fas fa-chevron-down ms-1 text-xs"></i>
            </div>
            <div
              class="invisible absolute -left-[732px] top-0 z-50 w-[900px]  xl:w-[1340px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div class="relative top-[34px] bg-sky-50 p-6 shadow-xl">
                <div
                  class="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-sky-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[44rem]">
                </div>

                <div class="relative z-10">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Left Section -->
                    <div>
                      <ul class="text-[20px]">
                        <li>
                          <nuxt-link to="/products"
                            class="-mx-2 block rounded-lg p-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600">
                            Category
                          </nuxt-link>
                        </li>
                        <!-- Repeat this li element for 10 items -->
                      </ul>
                    </div>

                    <!-- Middle Section -->
                    <div class="flex items-center justify-center">
                      <img src="https://ccdstest.b-cdn.net/Medi%20u/S_Damaged_Skin.webp" alt="Image"
                        class="rounded-lg shadow-lg" />
                    </div>

                    <!-- Right Section -->
                    <div>
                      <h2 class="text-[20px] font-bold text-sky-950">
                        Main Heading
                      </h2>
                      <p class="text-gray-800 my-4">
                        Description goes here. This is where you can add more
                        details about the content.
                      </p>
                      <div class="flex space-x-4 my-4">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">
                          Button 1
                        </button>
                        <button class="bg-green-500 text-white py-2 px-4 rounded-lg">
                          Button 2
                        </button>
                      </div>
                      <div class="mt-6">
                        <h3 class="text-[16px] font-bold text-gray-800">
                          Contact
                        </h3>
                        <p class="text-gray-800">123-456-7890</p>
                        <p class="text-gray-800">email@example.com</p>
                        <div class="flex space-x-4 mt-4">
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-facebook-f"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                          <a href="#" class="text-gray-800 hover:text-blue-500"><i class="fab fa-instagram"></i></a>
                          <!-- Add other social icons here -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="group relative cursor-pointer py-2">
            <nuxt-link to="/places" class="cursor-default text-white hover:opacity-50 text-[20px]">
              Suplements<i class="fas fa-chevron-down ms-1 text-xs"></i>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgeCount: 4, // Example badge count
      isOpen: false,
      showDropdown: false,
      isModalOpen: false,
      lastScrollTop: 0, // Variable to store the last scroll position
      showNavbar: true, // Initially show navbar
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      this.showNavbar = scrollTop < this.lastScrollTop || scrollTop < 50;

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/flowbite@1.4.1/dist/flowbite.js";
    script.async = true;
    document.head.appendChild(script);

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.nav-link {
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.nav-link:hover {
  color: #a8a1a1;
}

.dropdown-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 0.5rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.mega-menu {
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  white-space: nowrap;
}

.group:hover .mega-menu,
.mega-menu:hover {
  display: block;
}

.mega-menu .content {
  display: flex;
}

.content {
  @apply overflow-y-auto;
}
</style>
