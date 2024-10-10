<template>
  <div class="flex flex-col md:pb-20">
    <consult-banner />
    <div class="flex justify-center lg:space-x-4 p-4 lg:p-16">
      <!-- Sidebar -->

      <nuxt-link
        to="/consultancy/services"
        :class="tabClasses('service')"
        class="flex items-center cursor-pointer w-full lg:w-1/4 text-black"
      >
        <span
          class="text-[#28574e] border-2 border-[#28574e] rounded-full hover:text-white text-xl font-semibold p-4 gap-4 w-full hover:bg-[#28574e] flex items-center justify-center"
          >Continue
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
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

// Determine active tab based on the current route name
const tabClasses = (tab) => {
  return {
    "text-blue-600 font-semibold": router.currentRoute.value.name === tab,
    "text-gray-400": router.currentRoute.value.name !== tab,
  };
};
</script>

<style scoped>
/* Additional styles can go here */
</style>
