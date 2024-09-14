<template>
  <div class="relative w-full overflow-hidden">
    <!-- Container for the marquee effect -->
    <div class="overflow-hidden relative mb-20">
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
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Facebook' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Disney' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Airbnb' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Facebook' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Disney' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Airbnb' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Facebook' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Disney' },
        { src: 'https://ccdstest.b-cdn.net/Medi%20u/brands/17.png', alt: 'Airbnb' },
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
