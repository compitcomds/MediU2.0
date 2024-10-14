<template>
  <div class="bg-white p-8 rounded-lg text-[#28574e]">
    <h2 class="text-2xl font-bold mb-6 text-center">Summary</h2>
    <p class="text-center mb-6">Your appointment booking summary</p>

    <!-- Customer Details -->
    <div v-if="formData" class="text-center mb-8">
      <h3 class="font-bold text-lg">Patient</h3>
      <p class="text-lg">{{ formData.firstName }} {{ formData.lastName }}</p>
    </div>

    <!-- Service Section -->
    <div
      v-if="service"
      class="grid grid-cols-2 text-center border-b border-gray-300 pb-6 mb-6"
    >
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Service</h4>
        <p class="text-lg">{{ service.title }}</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-500 mb-2">Date & Time</h4>
        <p class="text-lg">To be confirmed</p>
      </div>
    </div>

    <!-- Total Amount Payable Section -->
    <div
      v-if="service"
      class="flex justify-between items-center text-lg font-bold border-b border-gray-300 pb-4 mb-6"
    >
      <span class="text-[#28574e]">Total Amount Payable</span>
      <span class="text-red-500">₹{{ service.price.amount }}</span>
    </div>

    <!-- Action Buttons -->
    <div class="text-end">
      <button
        @click="proceedToPayment"
        :disabled="isSubmitting"
        class="bg-[#28574e] text-white px-6 py-2 rounded hover:bg-[#5c998e] disabled:cursor-not-allowed disabled:animate-pulse"
      >
        {{ isSubmitting ? "Proceeding to payment..." : "Confirm Booking" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import createShopifyCart from "~/shopify/cart/create-cart";
import addToCart from "~/shopify/cart/add-to-cart";
import updateCartBuyerDetails from "~/shopify/cart/cart-buyer-identity-update";
import updateCartNote from "~/shopify/cart/update-cart-note";
import consultancyImageUpload from "~/appwrite/consultancy-upload";
import axios from "axios";
import { getUser } from "~/appwrite/auth";

const router = useRouter();

const consultancyStore = useConsultancyStore();

if (!consultancyStore.step1.category || !consultancyStore.step1.id)
  router.replace("/consultancy/services");
if (!consultancyStore.step2.email) router.replace("/consultancy/basic-details");

const formData = ref(consultancyStore.step2 || {});
const service = consultancyStore.step1;
const isSubmitting = ref(false);

const addUserIdentityToCart = async (cartId: string) => {
  const { email, firstName, lastName, phone } = consultancyStore.step2;
  await updateCartBuyerDetails(cartId, email, {
    firstName,
    lastName,
    address1: "",
    city: "",
    province: "",
    country: "India",
    phone,
    zip: "",
  });
};

const proceedToPayment = async () => {
  isSubmitting.value = true;
  const { id } = consultancyStore.step1;
  const { email, firstName, lastName, note, phone, image } =
    consultancyStore.step2;
  if (!id || !email || !firstName || !lastName || !phone) {
    alert("Please provide all the details to proceed with consultation.");
    router.replace("/consultancy");
    return;
  }

  try {
    const appwriteUser = await getUser();
    const newCart = await createShopifyCart();
    await addToCart({
      cartId: newCart.id,
      merchandiseId: id,
      dontAddToNavbarCart: true,
    });
    await addUserIdentityToCart(newCart.id);
    if (note) await updateCartNote(newCart.id, note);

    const consultancyUrl = !!image ? await consultancyImageUpload(image) : null;

    const { data } = await axios.post("/api/checkout", {
      cart: newCart.id,
      userId: appwriteUser.$id,
      prescriptionUrl: consultancyUrl,
      type: "consultancy",
    });
    if (data?.url) {
      window.location.href = data.url;
      return;
    }

    console.log(data);

    throw new Error(
      data.error ||
        "Some error occured while processing the details. Please try again later."
    );
  } catch (error: any) {
    alert(
      error.message ||
        "An error occurred while proceeding to payment. Please try again later."
    );
    console.error(error);
  }
  isSubmitting.value = false;
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
