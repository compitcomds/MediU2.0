<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex flex-col space-y-6 text-center">
      <!-- Responsive Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl text-gray-500">Our Superior Brands</h1>
      <!-- <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-[#28574E]">
        Featured Products
      </h2> -->
    </div>
    <!-- Container for the marquee effect -->
    <div class="overflow-hidden relative mb-20 mt-5">
      <div class="absolute inset-y-0 left-0 w-20 bg-white z-10"></div>
      <div class="absolute inset-y-0 right-0 w-20 bg-white z-10"></div>
      <ul class="flex whitespace-nowrap animate-marquee">
        <li v-for="(item, index) in imageItems" :key="index" class="flex-shrink-0">
          <img :src="item.src" :alt="item.alt" class="max-w-none border border-black rounded-2xl p-6" />
        </li>
        <!-- Duplicate items to ensure continuous flow -->
        <li v-for="(item, index) in imageItems" :key="`duplicate-${index}`" class="flex-shrink-0">
          <img :src="item.src" :alt="item.alt" class="max-w-none border border-black rounded-2xl p-6" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageItems: [
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/1.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/2.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/3.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/4.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/5.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/6.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/7.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/8.png', alt: 'brand' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/1.png', alt: 'brand' },
      ]
    };
  }
};
</script>

<style scoped>
/* Tailwind CSS imports and custom styles can go here */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

ul {
  display: flex;
  width: 200%; /* Adjust based on the number of items */
  gap: 2rem; /* Adjust spacing between items */
}

.animate-marquee {
  display: flex;
  animation: marquee 90s linear infinite;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
}

.bg-gradient-to-l {
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
}
</style>
