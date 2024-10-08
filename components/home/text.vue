<template>
  <div class="hidden lg:block bg-white py-12">
    <div
      class="flex flex-col md:flex-row w-full justify-between items-start text-[#285742] px-6 xl:px-[150px] gap-8 lg:gap-16"
    >
      <!-- Left column: Heading -->
      <p
        class="w-full md:w-1/2 text-5xl font-semibold font-serif leading-tight tracking-wide text-[#183D2D] mb-6 md:mb-0 self-stretch"
      >
        Superior Health Services with MediU: Your Trusted Care Provider
      </p>
      
      <!-- Right column: Paragraph -->
      <p
        class="w-full md:w-1/2 text-xl font-light font-serif text-[#285742] leading-relaxed self-stretch flex items-center"
      >
        At MediU, we deliver exceptional, patient-centered care through
        innovative treatments and compassionate support. Our expert team of
        healthcare professionals provides personalized solutions, ensuring your
        well-being at every step. With modern facilities and a commitment to
        excellence, MediU is your trusted healthcare partner. Experience superior
        care with a focus on quality, trust, and innovation.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Enhanced visual aesthetics */

p {
  margin-bottom: 1.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1.25;
  letter-spacing: -0.015em;
  transition: transform 0.3s ease-in-out;
}

.text-xl {
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

/* Ensure both columns have equal heights */
.self-stretch {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-5xl:hover {
  transform: scale(1.05);
  color: #183d2d;
}

.text-xl:hover {
  color: #183d2d;
}

@media (min-width: 1024px) {
  .text-5xl {
    font-size: 3.75rem;
  }
}

@media (min-width: 1280px) {
  .text-5xl {
    font-size: 3rem;
  }
}

.bg-white {
  background-color: #f7f9f7;
}

.bg-white:hover {
  background-color: #eaf2ea;
}
</style>
