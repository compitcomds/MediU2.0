// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: false },

  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "vue3-carousel-nuxt",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  compatibilityDate: "2024-09-08",
  runtimeConfig: {
    public: {
      shopifyStoreDomain: "https://dev-mediu.myshopify.com/",
      shopifyApiVersion: "2024-04",
      shopifyPublicAccessToken: "4613954f879d5c1c13daafc9b902387b",

      appwriteDatabaseId: "66b48885002523c4c882",
      appwriteUsersCollectionId: "66b5c37300113936e9a1",
      appwriteLabColloectionId:"66b488e3000fd6deed4e",
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
