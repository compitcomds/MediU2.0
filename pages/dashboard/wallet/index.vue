<template>
  <DashboardAttachSidenav>
    <div class="mb-20 mt-10 flex w-full flex-col items-center lg:mt-0">
      <h2
        class="mb-10 text-3xl font-semibold uppercase tracking-wide md:text-5xl"
      >
        Wallet Balance
      </h2>
      <div
        class="relative flex flex-col items-center gap-4 rounded-lg bg-[#238878] text-white shadow-lg"
      >
        <Wallet class="h-[450px] max-h-[90vw] w-[450px] max-w-[90vw]" />
        <div
          class="absolute left-[18%] top-[52%] text-3xl font-extrabold md:text-5xl"
        >
          {{ formattedAmount }}
        </div>
      </div>
    </div>
  </DashboardAttachSidenav>
</template>

<script setup lang="ts">
import { Wallet } from "lucide-vue-next";
import getUserWallet from "~/appwrite/utils/get-wallet";
const wallet = await getUserWallet();

const formattedAmount = computed(() => formatAmountToINR(wallet.amount));

useHead({
  title: "Wallet - Mediu",
  meta: [
    { name: "description", content: "Wallet" },
    { name: "og:title", content: "Wallet - Mediu" },
    { name: "og:description", content: "Wallet" },
  ],
});
</script>
