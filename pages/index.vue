<script setup lang="ts"></script>

<template>
  <div class="bg-white">
    <Home2Hero />
    <Home2FeaturedProducts />

    <div class="bg-white">
      <div class="space-y-10 md:space-y-10 lg:space-y-20">
        <HomeBlock class="" />
        <HomeContainers class="px-4 lg:px-16 xl:px-[163px]" />
        <HomeFeatures class="px-4 lg:px-16 xl:px-[163px]" />
        <!-- skin -->
        <Home2SkinSection />
      </div>

      <div class="space-y-10 md:space-y-10 lg:space-y-20">
        <HomeTestimonial />
        <HomeBooking />
        <!-- hair -->
        <Home2HairCareMustHaves />
      </div>
      <div class="mt-10">
        <HomeDoctors class="px-4 lg:px-16 xl:px-[163px]" />
      </div>
      <!-- baby care -->
      <!-- <HomeProduct3 class="px-4 lg:px-16 xl:px-[163px]" /> -->
      <div class="-mt-20 space-y-10 md:space-y-10 lg:space-y-20">
        <HomeText />
        <HomeConsultation />
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
  <!--  -->
  <!-- <ShopUserSidebar /> -->
</template>
