<template>
  <div
    class="m-10 bg-[#238878] px-4 py-6 text-white lg:mb-28 lg:px-16 lg:py-16 xl:px-[163px]"
  >
    <h2
      class="text-center font-serif text-4xl font-bold md:text-6xl lg:pb-14 lg:text-[70px]"
    >
      Our Doctor's Team
    </h2>
    <div class="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <!-- Card for Dr. Akhil Agarwal -->
      <div
        class="group relative w-full translate-y-0 transform transition-transform duration-300 lg:translate-y-0"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/sir.jpg"
          alt="Dr. Akhil Agarwal"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="text-lg">Dr. Akhil Agarwal</span>
            <p class="p-4 text-center text-white">
              Health is a precious asset that we often take for granted. By
              embracing a balanced lifestyle and early preventive care, we can
              avoid many challenges. My message to all is simple: invest in your
              health today for a better tomorrow." – Dr. Akhil Agarwal
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center justify-center opacity-100 transition-opacity duration-300 lg:group-hover:opacity-0"
        >
          <p
            class="w-full rounded-full bg-white p-2 text-center text-[10px] font-semibold text-black md:text-[15px]"
          >
            Dr. Akhil Agarwal
          </p>
        </div>
      </div>

      <!-- Card for Dr. Sumiti Pareek -->
      <div
        class="group relative w-full translate-y-0 transform transition-transform duration-300 lg:-translate-y-10"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/mam%202.jpg"
          alt="Dr. Sumiti Pareek"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="text-lg">Dr. Sumiti Pareek</span>
            <p class="p-4 text-center text-white">
              Good health is the foundation of a fulfilling life. As healthcare
              professionals, we must prioritize patient-centered care, focusing
              not only on treatment but also on preventive measures. Together,
              we can create a healthier, more informed society by promoting
              wellness and compassion." – Dr. Sumiti Pareek
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center justify-center opacity-100 transition-opacity duration-300 lg:group-hover:opacity-0"
        >
          <p
            class="w-full rounded-full bg-white p-2 text-center text-[10px] font-semibold text-black md:text-[15px]"
          >
            Dr. Sumiti Pareek
          </p>
        </div>
      </div>

      <!-- Card for Dr. Akhil Agarwal (duplicate for zig-zag) -->
      <div
        class="group relative w-full translate-y-0 transform transition-transform duration-300 lg:translate-y-0"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/sir.jpg"
          alt="Dr. Akhil Agarwal"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="text-lg">Dr. Akhil Agarwal</span>
            <p class="p-4 text-center text-white">
              Health is a precious asset that we often take for granted. By
              embracing a balanced lifestyle and early preventive care, we can
              avoid many challenges. My message to all is simple: invest in your
              health today for a better tomorrow." – Dr. Akhil Agarwal
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center justify-center opacity-100 transition-opacity duration-300 lg:group-hover:opacity-0"
        >
          <p
            class="w-full rounded-full bg-white p-2 text-center text-[10px] font-semibold text-black md:text-[15px]"
          >
            Dr. Akhil Agarwal
          </p>
        </div>
      </div>

      <!-- Card for Dr. Sumiti Pareek (duplicate for zig-zag) -->
      <div
        class="group relative w-full translate-y-0 transform transition-transform duration-300 lg:-translate-y-10"
      >
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/mam%202.jpg"
          alt="Dr. Sumiti Pareek"
          class="w-full rounded-2xl shadow-lg"
        />
        <div class="hidden lg:block">
          <div
            class="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="text-lg">Dr. Sumiti Pareek</span>
            <p class="p-4 text-center text-white">
              Good health is the foundation of a fulfilling life. As healthcare
              professionals, we must prioritize patient-centered care, focusing
              not only on treatment but also on preventive measures. Together,
              we can create a healthier, more informed society by promoting
              wellness and compassion." – Dr. Sumiti Pareek
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center justify-center opacity-100 transition-opacity duration-300 lg:group-hover:opacity-0"
        >
          <p
            class="w-full rounded-full bg-white p-2 text-center text-[10px] font-semibold text-black md:text-[15px]"
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
