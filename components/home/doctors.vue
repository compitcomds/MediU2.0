<template>
  <div class="bg-[#28564D] text-white py-6 lg:py-16 lg:mb-10">
    <h2
      class="text-4xl md:text-6xl lg:text-[70px] text-center lg:pb-14 font-serif font-bold"
    >
      Our Doctor's Team
    </h2>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 my-10">
      <!-- Card for Dr. Akhil Agarwal -->
      <div
        class="relative w-full group transform transition-transform duration-300 translate-y-0 lg:translate-y-0"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/sir.jpg"
          alt="Dr. Akhil Agarwal"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 bg-black bg-opacity-75 rounded-2xl top-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-lg">Dr. Akhil Agarwal</span>
            <p class="text-white p-4 text-center">
              Health is a precious asset that we often take for granted. By
              embracing a balanced lifestyle and early preventive care, we can
              avoid many challenges. My message to all is simple: invest in your
              health today for a better tomorrow." – Dr. Akhil Agarwal
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 flex justify-center items-center transition-opacity duration-300"
        >
          <p
            class="text-black font-semibold bg-white rounded-full px-2 lg:px-4 py-2 lg:py-4 text-center text-[10px] md:text-base lg:text-xl"
          >
            Dr. Akhil Agarwal
          </p>
        </div>
      </div>

      <!-- Card for Dr. Sumiti Pareek -->
      <div
        class="relative w-full group transform transition-transform duration-300 translate-y-0 lg:-translate-y-10"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/mam%202.jpg"
          alt="Dr. Sumiti Pareek"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 bg-black bg-opacity-75 rounded-2xl top-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-lg">Dr. Sumiti Pareek</span>
            <p class="text-white p-4 text-center">
              Good health is the foundation of a fulfilling life. As healthcare
              professionals, we must prioritize patient-centered care, focusing
              not only on treatment but also on preventive measures. Together,
              we can create a healthier, more informed society by promoting
              wellness and compassion." – Dr. Sumiti Pareek
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 flex justify-center items-center transition-opacity duration-300"
        >
          <p
            class="text-black font-semibold bg-white rounded-full px-2 lg:px-4 py-2 lg:py-4 text-center  text-[10px] md:text-base lg:text-xl"
          >
            Dr. Sumiti Pareek
          </p>
        </div>
      </div>

      <!-- Card for Dr. Akhil Agarwal (duplicate for zig-zag) -->
      <div
        class="relative w-full group transform transition-transform duration-300 translate-y-0 lg:translate-y-0"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/sir.jpg"
          alt="Dr. Akhil Agarwal"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 bg-black bg-opacity-75 rounded-2xl top-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-lg">Dr. Akhil Agarwal</span>
            <p class="text-white p-4 text-center">
              Health is a precious asset that we often take for granted. By
              embracing a balanced lifestyle and early preventive care, we can
              avoid many challenges. My message to all is simple: invest in your
              health today for a better tomorrow." – Dr. Akhil Agarwal
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 flex justify-center items-center transition-opacity duration-300"
        >
          <p
            class="text-black font-semibold bg-white rounded-full px-2 lg:px-4 py-2 lg:py-4 text-center text-[10px] md:text-base lg:text-xl"
          >
            Dr. Akhil Agarwal
          </p>
        </div>
      </div>

      <!-- Card for Dr. Sumiti Pareek (duplicate for zig-zag) -->
      <div
        class="relative w-full group transform transition-transform duration-300 translate-y-0 lg:-translate-y-10"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/mam%202.jpg"
          alt="Dr. Sumiti Pareek"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 bg-black bg-opacity-75 rounded-2xl top-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-lg">Dr. Sumiti Pareek</span>
            <p class="text-white p-4 text-center">
              Good health is the foundation of a fulfilling life. As healthcare
              professionals, we must prioritize patient-centered care, focusing
              not only on treatment but also on preventive measures. Together,
              we can create a healthier, more informed society by promoting
              wellness and compassion." – Dr. Sumiti Pareek
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 flex justify-center items-center transition-opacity duration-300"
        >
          <p
            class="text-black font-semibold bg-white rounded-full px-2 lg:px-4 py-2 lg:py-4 text-center text-[10px] md:text-base lg:text-xl"
          >
            Dr. Sumiti Pareek
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

body {
  font-family: "Inter", sans-serif;
}
</style>
