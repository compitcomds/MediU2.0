<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
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
      <h1 class="text-center text-4xl font-bold">Logging you in...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { checkIfNewOauthUser } from "~/appwrite/auth";

const router = useRouter();
const route = useRoute();

const processOAuthUser = async () => {
  console.log("Runnig....");
  try {
    await checkIfNewOauthUser();
    await refreshNuxtData(["user"]);
    console.log("redirecting to...", route.query?.back || "/dashboard");
    router.replace(route.query?.back || "/dashboard");
  } catch (error: any) {
    console.log(error.message);
    router.replace("/auth/login");
  }
};

onMounted(async () => {
  await processOAuthUser();
});

useHead({
  title: "OAuth - Mediu",
  meta: [
    { name: "description", content: "OAuth" },
    { name: "og:title", content: "OAuth - Mediu" },
    { name: "og:description", content: "OAuth" },
  ],
});
</script>
