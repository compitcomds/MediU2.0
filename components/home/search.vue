<template>
  <div
    :class="[showNotification ? 'top-0 xl:top-0' : 'top-0']"
    class="flex sticky z-50 bg-white inset-x-0 justify-between items-center border-b border-gray-300 h-20 px-1 lg:px-6 xl:px-2 transition-all duration-300"
  >
    <div class="flex items-center w-3/12">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/logo%202.png"
        class="w-auto h-16"
        alt="Logo"
      />
    </div>
    <div class="flex relative rounded-md w-7/12 h-[40px] xl:h-[50px]">
      <input
        type="text"
        name="q"
        id="query"
        placeholder="What are you looking for?.."
        class="w-full p-3 rounded-full border-2 border-r-white rounded-r-none text-black border-gray-300 bg-white placeholder-gray-500"
      />
      <button
        class="inline-flex items-center gap-2 bg-orange-500 text-white text-lg py-3 px-6 rounded-r-full"
      >
        <span class="hidden md:block">
          <svg
            class="text-gray-200 h-5 w-5 p-0 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </span>
      </button>
    </div>
    <!-- Home Cart and loyalty points  -->
    <!-- <HomeCart /> -->
    <!-- End Home Cart and loyalty points  -->

    <div class="w-2/12 flex justify-end gap-3 text-black">
      <nuxt-link to="/auth/login" class="bg-blue-500 hover:bg-green-500 text-center shadow text-white rounded-md px-4 py-2 text-xl">Sign In</nuxt-link>
      <nuxt-link to="/auth/register" class="bg-blue-500 hover:bg-green-500 text-center shadow text-white rounded-md px-4 py-2 text-xl">Sign Up</nuxt-link>
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

<style lang="postcss" scoped></style>
