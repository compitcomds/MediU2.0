<template>
  <header>
    <HomeMobileNav />

    <div
      :class="[
        'fixed left-0 top-[0px] z-50 hidden w-full bg-white shadow transition-all duration-300 ease-in-out lg:top-[0px] lg:block',
        { '-translate-y-full opacity-0': !isNavbarVisible },
      ]"
    >
      <HomeSearch />

      <div
        :class="[
          'fixed left-0 top-[80px] hidden w-full bg-[#238878] shadow lg:block',
          { '-translate-y-full opacity-0': !isNavbarVisible },
        ]"
        class="h-10 transition-all duration-100 ease-in-out"
      >
        <HomeNavItem />
      </div>
    </div>
  </header>
</template>

<script setup>
const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

const windowWidth = ref(0);

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
});

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;

  if (
    currentScrollPosition > lastScrollPosition &&
    currentScrollPosition > 50
  ) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }

  lastScrollPosition = currentScrollPosition;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped></style>
