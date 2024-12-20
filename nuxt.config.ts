// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/sitemap",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/robots",
  ],
  compatibilityDate: "2024-09-08",
  runtimeConfig: {
    public: {
      shopifyStoreDomain: "https://dev-mediu.myshopify.com/",
      shopifyApiVersion: "2024-04",
      shopifyPublicAccessToken: "4613954f879d5c1c13daafc9b902387b",

      appwriteDatabaseId: "66b48885002523c4c882",
      appwriteUsersCollectionId: "66b5c37300113936e9a1",
      appwriteLabColloectionId: "66b488e3000fd6deed4e",
      appwriteConsultancyCollectionId: "66b734500024ec40c490",
      appwriteConsultancyBucketId: "66b7341d00164de36545",
      appwritePrescriptionCollectionId: "66d1886f0022babc06a9",
      appwritePrescriptionBucketId: "66b73310001ba896582b",
      baseURL: "http://localhost:3000 ",
    },
  },

  // image: {
  //   provider: 'static', // or 'imgix', 'cloudinary', etc.
  //   presets: {
  //     cover: {
  //       modifiers: {
  //         format: 'webp',
  //         quality: 75
  //       }
  //     }
  //   }
  // }
});
