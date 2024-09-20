<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex flex-col space-y-6 text-center">
      <!-- Responsive Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl text-gray-500">Our Associated Brands</h1>
    </div>
    <!-- Container for the marquee effect -->
    <div class="overflow-hidden relative mb-20 mt-5">
      <div class="absolute inset-y-0 left-0 w-20 bg-white z-10 hidden lg:block"></div>
      <div class="absolute inset-y-0 right-0 w-20 bg-white z-10 hidden lg:block"></div>
      <ul class="flex whitespace-nowrap animate-marquee">
        <li v-for="(item, index) in imageItems" :key="index" class="flex-shrink-0">
          <img :src="item.src" :alt="item.alt" class="border border-black rounded-2xl p-2 sm:p-4 md:p-6" />
        </li>
        <!-- Duplicate items to ensure continuous flow -->
        <li v-for="(item, index) in imageItems" :key="`duplicate-${index}`" class="flex-shrink-0">
          <img :src="item.src" :alt="item.alt" class="border border-black rounded-2xl p-2 sm:p-4 md:p-6" />
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
      ]
    };
  }
};
</script>

<style scoped>
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
  width: 200%;
  gap: 1rem;
}

.animate-marquee {
  animation: marquee 90s linear infinite;
}

/* Responsive padding for images */
img {
  width: 6rem; /* Default size */
}

@media (min-width: 640px) {
  img {
    width: 9rem; /* Small devices */
  }
}

@media (min-width: 768px) {
  img {
    width: 12rem; /* Medium devices */
  }
}

@media (min-width: 1024px) {
  img {
    width: 14rem; /* Large devices */
  }
}

@media (min-width: 1280px) {
  img {
    width: 16rem; /* Extra large devices */
  }
}
</style>
