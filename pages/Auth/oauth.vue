<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="flex flex-col justify-center items-center gap-5">
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
      <h1 class="text-center font-bold text-4xl">Logging you in...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { checkIfNewOauthUser } from "~/appwrite/auth";

const router = useRouter();

try {
  await checkIfNewOauthUser();
  router.replace("/dashboard");
} catch (error) {
  router.replace("/auth/login");
}
</script>

<style lang="scss" scoped></style>
