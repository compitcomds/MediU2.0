<template>
  <div class="rounded-lg bg-white p-8 text-[#238878]">
    <h2 class="mb-6 text-center text-2xl font-bold">Summary</h2>
    <p class="mb-6 text-center">Your appointment booking summary</p>

    <!-- Customer Details -->
    <div v-if="formData" class="mb-8 text-center">
      <h3 class="text-lg font-bold">Patient</h3>
      <p class="text-lg">{{ formData.firstName }} {{ formData.lastName }}</p>
    </div>

    <!-- Service Section -->
    <div
      v-if="service"
      class="mb-6 grid grid-cols-2 border-b border-gray-300 pb-6 text-center"
    >
      <div>
        <h4 class="mb-2 text-sm font-semibold text-gray-500">Service</h4>
        <p class="text-lg">{{ service.title }}</p>
      </div>
      <div>
        <h4 class="mb-2 text-sm font-semibold text-gray-500">Date & Time</h4>
        <p class="text-lg">To be confirmed</p>
      </div>
    </div>

    <!-- Total Amount Payable Section -->
    <div
      v-if="service"
      class="mb-6 flex items-center justify-between border-b border-gray-300 pb-4 text-lg font-bold"
    >
      <span class="text-[#238878]">Total Amount Payable</span>
      <span class="text-red-500">₹{{ service.price }}</span>
    </div>

    <!-- Action Buttons -->
    <div class="text-end">
      <button
        @click="proceedToPayment"
        :disabled="isSubmitting"
        class="rounded bg-[#238878] px-6 py-2 text-white hover:bg-[#5c998e] disabled:animate-pulse disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? "Proceeding to payment..." : "Confirm Booking" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import consultancyImageUpload from "~/appwrite/consultancy/consultancy-upload";
import axios from "axios";
import { getUser } from "~/appwrite/auth";
import { toast } from "vue-sonner";

const router = useRouter();

const consultancyStore = useConsultancyStore();

if (!consultancyStore.step1.$id) router.replace("/consultancy/services");
if (!consultancyStore.step2.email) router.replace("/consultancy/basic-details");

const formData = ref(consultancyStore.step2 || {});
const service = consultancyStore.step1;
const isSubmitting = ref(false);

const proceedToPayment = async () => {
  isSubmitting.value = true;
  const { $id } = consultancyStore.step1;
  const { email, firstName, lastName, note, phone, image } =
    consultancyStore.step2;
  if (!$id || !email || !firstName || !lastName || !phone) {
    toast.error(
      "Please provide all the details to proceed with consultation.",
      {
        richColors: true,
      },
    );
    router.replace("/consultancy");
    return;
  }

  try {
    const appwriteUser = await getUser();
    const consultancyUrl = !!image ? await consultancyImageUpload(image) : null;
    const { data } = await axios.post("/api/consultancy/checkout", {
      email,
      firstName,
      lastName,
      note,
      phone,
      consultancy: $id,
      image: consultancyUrl,
      userId: appwriteUser.$id,
    });

    if (data?.url) {
      window.location.href = data.url;
      return;
    }

    throw new Error(
      data.error ||
        "Some error occured while processing the details. Please try again later.",
    );
  } catch (error: any) {
    toast.error(
      error.message ||
        "An error occurred while proceeding to payment. Please try again later.",
      { richColors: true },
    );
    console.error(error);
  }
  isSubmitting.value = false;
};

useHead({
  title: "Consultancy - Summary - Mediu",
  meta: [
    { name: "description", content: "Consultancy - Summary" },
    { name: "og:title", content: "Consultancy - Summary - Mediu" },
    { name: "og:description", content: "Consultancy - Summary" },
    { name: "keywords", content: `Mediu, Consultancy, health, wellness` },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
