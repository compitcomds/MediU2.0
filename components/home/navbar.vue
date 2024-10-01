<template>
  <div>
    <!-- Notification Bar (removable) -->
    <HomeMobileNav />
    <div
      v-if="showNotification"
      class="notification-bar transition-all duration-300 fixed top-0 left-0 w-full z-50 hidden lg:block"
    >
      <button
        @click="showNotification = false"
        class="absolute text-black w-full"
      >
        <HomeNotification />
      </button>
    </div>

    <!-- Wrapper for Search Bar and Navbar Items -->
    <div
      :class="[
        'transition-all duration-300 fixed w-full left-0 z-50 bg-white shadow hidden lg:block',
        showNotification ? 'top-[0px] lg:top-[40px]' : 'top-0',
        { 'navbar-hidden': !isNavbarVisible },
      ]"
    >
      <!-- Search Bar -->
      <div class="search-bar">
        <HomeSearch />
      </div>

      <!-- Navbar Items -->
      <!-- Navbar Items -->
      <div
        :class="[
          'fixed w-full left-0  shadow bg-[#28574e] hidden lg:block',
          showNotification ? 'top-[80px] lg:top-[120px]' : 'top-[80px]',
          { 'navbar-hidden': !isNavbarVisible },
        ]"
        class="nav-items transition-top"
      >
        <HomeNavItem />
      </div>
    </div>

    <!-- Main Content -->
    <div :style="{ paddingTop: contentPadding + 'px' }">
      <!-- Your main content goes here -->
      <!-- This ensures the main content is not overlapped by the navbar -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// State to control visibility of the notification bar
const showNotification = ref(true); // Control notification bar visibility

// State for controlling navbar visibility on scroll
const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

// Reactive variable to track window width for responsive design
const windowWidth = ref(0);

// Set initial window width on client-side only
onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
});

// Compute padding for main content to avoid overlapping
const contentPadding = computed(() => {
  // Adjust the content padding based on the notification and nav bar visibility and screen width
  if (windowWidth.value > 1024) {
    // Desktop
    if (showNotification.value) {
      return 150; // Height with notification bar, search bar, and nav items (adjust to fit design)
    } else {
      return 120; // Height without the notification bar (adjust to fit design)
    }
  } else if (windowWidth.value > 768) {
    // Tablet
    if (showNotification.value) {
      return 160; // Adjusted height for tablet view
    } else {
      return 100; // Adjusted height for tablet view
    }
  } else {
    // Mobile
    if (showNotification.value) {
      return 80; // Adjusted height for mobile view
    } else {
      return 80; // Adjusted height for mobile view
    }
  }
});

// Handle scroll functionality
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;

  // Hide the navbar when scrolling down, show it when scrolling up
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

// Handle window resize functionality
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Scroll and resize event listener setup
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
/* Notification Bar */
.notification-bar {
  height: 40px; /* Adjust this height based on the actual height of your notification bar */
}

/* Search Bar */
.search-bar {
  height: 40px; /* Adjust this height based on your actual search bar height */
}

/* Nav Items */
.nav-items {
  height: 40px; /* Adjust based on the actual height of your nav items */
}

/* Hide navbar on scroll */
.navbar-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

/* Smooth transitions for position adjustments */
.transition-all {
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
/* Add a custom class for controlling the transition on 'top' property */
.transition-top {
  transition: top 0.1s ease-in-out; /* Adjust the duration here */
}
</style>
