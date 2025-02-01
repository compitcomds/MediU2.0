<template>
  <div class="flex flex-col md:pb-20">
    <consult-banner />
    <div class="flex justify-center p-4 lg:space-x-4 lg:p-16">
      <!-- Sidebar -->

      <nuxt-link
        to="/consultancy/services"
        :class="tabClasses('service')"
        class="flex w-full cursor-pointer items-center text-black lg:w-1/4"
      >
        <span
          class="flex w-full items-center justify-center gap-4 rounded-full border-2 border-[#238878] p-4 text-xl font-semibold text-[#238878] hover:bg-[#238878] hover:text-white"
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

useHead({
  title: "Mediu | Consultancy",
  meta: [
    {
      name: "description",
      content: "Mediu Consultancy",
    },
    {
      name: "keywords",
      content: "Mediu, Consultancy, health, wellness",
    },
    {
      name: "author",
      content: "Mediu",
    },
    {
      name: "og:title",
      content: "Mediu | Consultancy",
    },
    {
      name: "og:description",
      content: "Mediu Consultancy",
    },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:image:secure_url",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "Mediu",
    },
    {
      name: "og:url",
      content: "https://mediu.in/consultancy",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Consultancy",
    },
    {
      name: "twitter:description",
      content: "Mediu Consultancy",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});

// Determine active tab based on the current route name
const tabClasses = (tab) => {
  return {
    "text-blue-600 font-semibold": router.currentRoute.value.name === tab,
    "text-gray-400": router.currentRoute.value.name !== tab,
  };
};
</script>
