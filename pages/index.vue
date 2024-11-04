<template>
  <!--  -->
  <!-- <HomeNavbar /> -->
  <HomeMain />
  
  <div class="bg-white">
    <div class="lg:space-y-20 md:space-y-10 space-y-10">
      <HomeBlock class="" />
      <HomeCard class="px-4 xl:px-[163px]" />
      <HomeContainers class="px-4 xl:px-[163px]" />
      <HomeFeatures class="px-4 xl:px-[163px]" />
      <!-- skin -->
      <HomeProduct2 class="px-4 xl:px-[163px]" />
    </div>

    <div class="lg:space-y-20 md:space-y-10 space-y-10">
      <HomeTestimonial />
      <HomeBooking />
      <!-- hair -->
      <HomeProduct class="px-4 xl:px-[163px]" />
    </div>
    <div class="mt-10">
      <HomeDoctors class="px-4 xl:px-[163px]" />
    </div>
    <!-- baby care -->
    <HomeProduct3 class="px-4 xl:px-[163px]" />
    <div class="lg:space-y-20 md:space-y-10 space-y-10 -mt-20">
      <HomeText />
      <HomeConsultation />
    </div>
    <!-- <Footer /> -->
  </div>
  <!--  -->
  <!-- <ShopUserSidebar /> -->
</template>
<script setup>
useSeoMeta({
  title: "Mediu | Buy Medicines & Book Medical Consultations Online"
",
  description: "Shop a wide range of medicines, book expert medical consultations, and access comprehensive healthcare services at Mediu.in. Your trusted online pharmacy and healthcare partner.",
  ogTitle: "Mediu | Buy Medicines & Book Medical Consultations Online",
  ogDescription: "Shop a wide range of medicines, book expert medical consultations, and access comprehensive healthcare services at Mediu.in. Your trusted online pharmacy and healthcare partner.",
});
defineOgImageComponent("NuxtSeo", {
  siteName: "mediu",
  description: "Read more...",
  siteLogo: "https://ccdstest.b-cdn.net/Medi%20u/logo%202.png",
  colorMode: "dark",
});
</script>