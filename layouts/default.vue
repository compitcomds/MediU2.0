<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-gray-50 text-gray-800"
  >
    <header>
      <HomeNavbar />
    </header>

    <main class="flex-grow">
      <div v-if="!isLoading">
        <slot />
      </div>

      <div v-else class="flex min-h-[50vh] items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-5">
          <div class="animate-spin text-[#238878]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-loader-circle"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </div>
          <h1 class="text-center text-4xl font-bold">Loading...</h1>
        </div>
      </div>
    </main>

    <div class="fixed bottom-0 z-10 w-full lg:hidden">
      <MobileBottomNav />
    </div>
  </div>

  <SiteFooter class="hidden lg:block" />

  <MobileBottomNav />
</template>

<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const route = useRoute();
const router = useRouter();
const isLoading = ref(false);

const LOGIN_REQUIRED_ROUTES = ["/checkout", "/dashboard", "/consultancy"];

const blockUnauthenticatedUser = async (pathname: string) => {
  isLoading.value = true;
  for (const loginRequiredRoute of LOGIN_REQUIRED_ROUTES) {
    if (!pathname.includes(loginRequiredRoute)) continue;
    try {
      await getUser();
    } catch (error) {
      router.replace("/auth/login");
      break;
    }
  }
  isLoading.value = false;
};

watch(() => route.fullPath, blockUnauthenticatedUser, {
  deep: true,
  immediate: true,
});
</script>
<style scoped>
.auth-message {
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9fafb; /* Light background */
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 400px; /* Centering effect */
}

.auth-title {
  font-size: 1.5rem; /* Larger font for emphasis */
  font-weight: 700; /* Bold */
  color: #374151; /* Dark gray */
  margin-bottom: 1rem; /* Spacing below title */
}

.auth-text {
  font-size: 1rem; /* Standard text size */
  color: #4b5563; /* Medium gray for readability */
}

.auth-link {
  color: #3b82f6; /* Blue for links */
  text-decoration: none; /* No underline */
  font-weight: 600; /* Slightly bold */
}

.auth-link:hover {
  text-decoration: underline; /* Underline on hover */
  color: #1e40af; /* Darker blue on hover */
}
</style>
