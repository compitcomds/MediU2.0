<template>
  <div>
    <HomeMobileNav />

    <div
      :class="[
        'fixed left-0 z-50 hidden w-full bg-white shadow transition-all duration-300 lg:block',
        showNotification ? 'top-[0px] lg:top-[0px]' : 'top-0',
        { 'navbar-hidden': !isNavbarVisible },
      ]"
    >
      <div class="h-10">
        <HomeSearch />
      </div>

      <div
        :class="[
          'fixed left-0 hidden w-full bg-[#238878] shadow lg:block',
          showNotification ? 'top-[80px]' : 'top-[80px]',
          { 'navbar-hidden': !isNavbarVisible },
        ]"
        class="nav-items transition-top"
      >
        <HomeNavItem />
      </div>
    </div>

    <div :style="{ paddingTop: contentPadding + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const showNotification = ref(true); // Control notification bar visibility

const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

const windowWidth = ref(0);

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
});

const contentPadding = computed(() => {
  if (windowWidth.value > 1024) {
    if (showNotification.value) {
      return 150;
    } else {
      return 120;
    }
  } else if (windowWidth.value > 768) {
    if (showNotification.value) {
      return 160;
    } else {
      return 100;
    }
  } else {
    if (showNotification.value) {
      return 80;
    } else {
      return 80;
    }
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

<style scoped>
/* Nav Items */
.nav-items {
  height: 40px;
  /* Adjust based on the actual height of your nav items */
}

/* Hide navbar on scroll */
.navbar-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

/* Smooth transitions for position adjustments */
.transition-all {
  transition:
    top 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

/* Add a custom class for controlling the transition on 'top' property */
.transition-top {
  transition: top 0.1s ease-in-out;
  /* Adjust the duration here */
}
</style>
