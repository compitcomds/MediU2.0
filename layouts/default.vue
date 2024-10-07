<template>
  <div class="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
    <header>
      <HomeNavbar />
    </header>

    <main class="flex-grow container mx-auto px-4 lg:px-0">
      <div v-if="!isLoading">
        <div v-if="!preventAccess">
          <slot />
        </div>
        <div v-else class="my-20 max-w-lg mx-auto bg-blue-50 rounded-lg shadow-md p-8 text-center space-y-6">
          <!-- Movable Icon with Hover Effect -->
          <div class="flex justify-center mb-4 transform transition-transform duration-300 hover:translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </div>
        
          <!-- Header Text -->
          <h2 class="text-2xl font-semibold text-blue-800">Authentication Required</h2>
        
          <!-- Instructions Text -->
          <p class="text-md text-gray-700">
            To access this content, please
            <nuxt-link to="/auth/login" class="text-blue-700 font-medium hover:underline focus:outline-none">
              Login
            </nuxt-link>
            or
            <nuxt-link to="/auth/register" class="text-blue-700 font-medium hover:underline focus:outline-none">
              Sign Up
            </nuxt-link>.
          </p>
        
          <!-- Additional Information -->
          <p class="text-sm text-gray-500">
            If you encounter any issues, our support team is here to help. Reach out for assistance anytime.
          </p>
        </div>
        
      </div>

      <div v-else class="flex items-center justify-center my-40">
        <div class="animate-spin text-[#28574e]">
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
        <h1 class="text-center text-3xl font-bold my-8 text-[#28574e]">Loading...</h1>
      </div>
    </main>

    <footer>
      <SiteFooter class="hidden lg:block bg-gray-800 text-white py-6" />
    </footer>

    <div class="lg:hidden fixed bottom-0 w-full z-10">
      <MobileBottomNav />
    </div>
  </div>
</template>


<script setup lang="ts">
import { getUser } from "~/appwrite/auth";

const route = useRoute();

const preventAccess = ref(false);
const isLoading = ref(false);

const LOGIN_REQUIRED_ROUTES = ["/checkout", "/dashboard"];

const blockUnauthenticatedUser = async (pathname: string) => {
  preventAccess.value = false;
  isLoading.value = true;
  for (const loginRequiredRoute of LOGIN_REQUIRED_ROUTES) {
    if (pathname.includes(loginRequiredRoute)) {
      try {
        const user = await getUser();
      } catch (error) {
        preventAccess.value = true;
      }
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
