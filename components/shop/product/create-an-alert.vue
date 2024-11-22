<template>
  <div>
    <button
      @click="toggleDialog"
      class="flex items-center gap-3 rounded-full bg-[#383e42] p-2 px-6 py-3 text-xl font-semibold text-white shadow disabled:animate-pulse disabled:cursor-not-allowed"
    >
      <BellRing /> <span>Create An Alert</span>
    </button>
  </div>

  <div
    v-if="isDialogOpen"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <div
      @click="closeDialog"
      class="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"
    ></div>
    <div
      class="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg lg:max-w-lg"
    >
      <h3 class="mb-4 text-2xl font-bold text-[#383e42]">Create An Alert</h3>

      <!-- Success Message -->
      <div v-if="isSubmitted" class="mt-5 text-center">
        <p
          class="flex flex-col items-center justify-center gap-3 text-2xl font-bold text-[#238878]"
        >
          <MailCheck :size="35" />
          Email submitted successfully!
        </p>
        <button
          @click="closeDialog"
          class="mx-auto mt-4 flex items-center gap-3 rounded-l-full rounded-r-full bg-[#383e42] px-6 py-2 text-xl font-semibold text-white shadow disabled:animate-pulse disabled:cursor-not-allowed"
        >
          Close
        </button>
      </div>

      <!-- Email Input Form -->
      <form v-else @submit.prevent="submitEmail">
        <label for="create-an-alert-email" class="mb-2 block">Email</label>
        <input
          id="create-an-alert-email"
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-[#238878]"
          required
        />
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full rounded-lg bg-[#238878] py-2 font-semibold text-white hover:bg-[#1d6f63] focus:outline-none disabled:cursor-not-allowed disabled:opacity-80"
        >
          <span
            v-if="isSubmitting"
            class="flex items-center justify-center gap-2 text-center"
            >Submitting <Loader
          /></span>
          <span v-else>Submit</span>
        </button>
      </form>

      <button
        @click="closeDialog"
        class="absolute right-5 top-5 text-[#383e42] hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BellRing, MailCheck } from "lucide-vue-next";
import createProductAlertForUser from "~/appwrite/utils/create-an-alert";

const props = defineProps<{ productId: string; variantId: string }>();

const isDialogOpen = ref(false);
const email = ref("");
const isSubmitted = ref(false);
const isSubmitting = ref(false);

const submitEmail = async () => {
  isSubmitting.value = true;
  try {
    await createProductAlertForUser({
      productId: props.productId.replace("gid://shopify/Product/", ""),
      productVariantId: props.variantId.replace(
        "gid://shopify/ProductVariant/",
        "",
      ),
      emailToNotify: email.value,
    });
    isSubmitted.value = true;
  } catch (error: any) {
    alert(error.message);
    console.log(error);
  } finally {
    isSubmitting.value = false;
  }
};

// Function to close the dialog
const closeDialog = () => {
  isDialogOpen.value = false;
};

const toggleDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
