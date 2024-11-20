<template>
  <div class="mb-20 min-h-screen bg-gray-100 px-4 py-8 md:px-16 lg:mb-0">
    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
      <form
        @submit.prevent="submitOrder"
        class="h-full overflow-y-auto rounded-lg p-6 text-zinc-500 lg:col-span-2"
      >
        <!-- Contact Section -->
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Contact</h2>
          <div class="flex flex-col space-y-2">
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              class="w-full rounded-lg border border-gray-300 bg-white p-3"
              required
            />
            <label class="flex items-center space-x-2 text-sm">
              <input type="checkbox" class="custom-checkbox" />
              <span>Email me with news and offers</span>
            </label>
          </div>
        </div>

        <!-- Delivery Section -->
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Delivery</h2>
          <div class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                v-model="shipping.firstName"
                placeholder="First name (optional)"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
                required
              />
              <input
                type="text"
                v-model="shipping.lastName"
                placeholder="Last name"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
                required
              />
            </div>
            <input
              type="text"
              v-model="shipping.address"
              placeholder="Address"
              class="w-full rounded-lg border border-gray-300 bg-white p-3"
              required
            />
            <input
              type="text"
              v-model="shipping.phone"
              placeholder="Phone"
              class="w-full rounded-lg border border-gray-300 bg-white p-3"
              required
            />
            <div class="grid gap-4 md:grid-cols-3">
              <input
                type="text"
                v-model="shipping.city"
                placeholder="City"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
                required
              />
              <input
                type="text"
                v-model="shipping.state"
                placeholder="State"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
                required
              />
              <input
                type="text"
                v-model="shipping.pinCode"
                placeholder="PIN code"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
                required
              />
            </div>
            <input
              type="text"
              v-model="shipping.country"
              placeholder="Country"
              class="w-full rounded-lg border border-gray-300 bg-white p-3"
              required
            />
            <label class="flex items-center space-x-2 text-sm">
              <input type="checkbox" class="custom-checkbox" />
              <span>Save this information for next time</span>
            </label>
          </div>
        </div>

        <!-- Shipping Method Section -->
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">
            Shipping method
          </h2>
          <input
            type="text"
            placeholder="Enter your shipping address to view available shipping methods."
            class="w-full rounded-lg border border-gray-300 bg-white p-3"
          />
        </div>

        <!-- Payment Section -->
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Payment</h2>
          <div class="rounded-lg border border-[#238878]">
            <div
              class="flex items-center justify-between rounded-t-lg bg-[#f5f5f5] p-4"
            >
              <div class="text-lg font-semibold text-[#238878]">
                PhonePe Payment Gateway (UPI, Cards & NetBanking)
              </div>
              <div class="grid grid-cols-2 items-center space-x-2 xl:flex">
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg"
                  alt="UPI Logo"
                  class="h-8"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                  alt="Visa Logo"
                  class="h-8"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
                  alt="MasterCard Logo"
                  class="h-8"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/rupay.Bl62X6PG.svg"
                  alt="RuPay Logo"
                  class="h-8"
                />
                <!-- <span class="text-lg font-semibold text-[#238878]">+3</span> -->
              </div>
            </div>
            <div
              class="space-y-4 border-t border-[#238878] bg-[#f9f9f9] p-6 text-center"
            >
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-270.8 371 102 52"
                  class="zjrzY w-36"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
                  ></path>
                  <circle
                    cx="-255.5"
                    cy="376.5"
                    r="1.5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="-250.5"
                    cy="376.5"
                    r="1.5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="-245.5"
                    cy="376.5"
                    r="1.5"
                    fill="currentColor"
                  ></circle>
                </svg>
              </div>
              <p class="text-sm text-gray-700">
                After clicking "Pay now," you will be redirected to PhonePe
                Payment Gateway (UPI, Cards & NetBanking) to complete your
                purchase securely.
              </p>
            </div>
          </div>
        </div>

        <!-- Billing Address Section -->
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">
            Billing address
          </h2>
          <div class="flex flex-col space-y-4 text-[#238878]">
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                name="billing-address"
                value="same"
                v-model="billingAddressOption"
                class="custom-checkbox"
              />
              <span>Same as shipping address</span>
            </label>
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                name="billing-address"
                value="different"
                v-model="billingAddressOption"
                class="custom-checkbox"
              />
              <span>Use a different billing address</span>
            </label>
            <!-- Conditionally Render Billing Address Fields -->
            <div v-if="billingAddressOption === 'different'" class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  v-model="billing.firstName"
                  placeholder="First name (optional)"
                  class="w-full rounded-lg border border-gray-300 bg-white p-3"
                />
                <input
                  type="text"
                  v-model="billing.lastName"
                  placeholder="Last name"
                  class="w-full rounded-lg border border-gray-300 bg-white p-3"
                />
              </div>
              <input
                type="text"
                v-model="billing.address"
                placeholder="Address"
                class="w-full rounded-lg border border-gray-300 bg-white p-3"
              />
              <div class="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  v-model="billing.city"
                  placeholder="City"
                  class="w-full rounded-lg border border-gray-300 bg-white p-3"
                />
                <input
                  type="text"
                  v-model="billing.state"
                  placeholder="State"
                  class="w-full rounded-lg border border-gray-300 bg-white p-3"
                />
                <input
                  type="text"
                  v-model="billing.pinCode"
                  placeholder="PIN code"
                  class="w-full rounded-lg border border-gray-300 bg-white p-3"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Pay Now Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full rounded-lg bg-[#238878] py-3 font-semibold text-white transition duration-200 hover:bg-[#70ccbb] disabled:animate-pulse disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? "Submitting the details..." : "Pay now" }}
        </button>
      </form>

      <!-- Order Summary -->
      <div class="mt-4 rounded-lg bg-white p-6 lg:sticky lg:top-10 lg:h-fit">
        <h2 class="mb-4 text-2xl font-semibold text-[#238878]">
          Order Summary
        </h2>
        <div class="space-y-4">
          <div
            v-for="product in cart.items"
            :key="product.lineId"
            class="flex items-center space-x-4 text-[#238878]"
          >
            <img
              :src="product.image?.url || 'https://placehold.co/400x400/png'"
              :alt="product.image?.altText || product.title"
              class="h-16 w-16 rounded-lg"
            />
            <div class="flex-1">
              <h3 class="font-semibold">{{ product.title }}</h3>
              <p class="text-[#238878]">
                {{ product.cost.currencyCode }} {{ product.cost.amount }}
              </p>
            </div>
            <div class="mb-auto ml-auto">
              <p class="rounded-badge bg-gray-300 px-2 py-1 text-xs">
                {{ product.gstApplied }}% GST
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between text-lg text-[#238878]">
            <span>Subtotal</span>
            <span class="text-base"
              >{{ cart.subtotalAmount.currencyCode }}
              {{ cart.subtotalAmount.amount }}</span
            >
          </div>
          <div
            class="flex w-full items-center justify-between text-lg text-[#238878]"
          >
            <span class="w-1/2">Shipping Address</span>
            <span class="w-1/2 text-base">{{ shippingDetails }}</span>
          </div>
          <div class="flex items-center justify-between text-lg text-[#238878]">
            <span>Shipping Cost</span>
            <span v-if="shippingAmount >= 0" class="text-base"
              >{{ cart.subtotalAmount.currencyCode }} {{ shippingAmount }}</span
            >
            <span v-else class="text-base"
              >{{ cart.subtotalAmount.currencyCode }} 0.0</span
            >
          </div>
          <div class="flex items-center justify-between text-lg text-[#238878]">
            <span>Tax Amount</span>
            <span class="text-base"
              >{{ cart.totalTaxAmount.currencyCode }}
              {{ cart.totalTaxAmount.amount }}</span
            >
          </div>
          <div
            class="flex items-center justify-between text-xl font-semibold text-[#238878]"
          >
            <span>Total</span>
            <span
              >{{ cart.totalAmount.currencyCode }}
              {{ cart.totalAmount.amount }}</span
            >
          </div>
        </div>
        <!-- Upload Prescription Button -->
        <div v-if="requiresPrescription" class="mt-6">
          <label
            for="prescription-upload"
            class="flex w-full cursor-pointer items-center justify-center rounded-full bg-[#238878] px-10 py-3 text-lg font-semibold text-white"
          >
            <input
              type="file"
              id="prescription-upload"
              @change="uploadPrescription"
              class="hidden"
              accept="image/*"
            />
            Upload Prescription
          </label>
          <p v-if="!uploadedFilePreview" class="mt-2 text-sm text-red-500">
            Please upload your prescription before checkout.
          </p>
          <!-- Preview Box -->
          <div v-else class="relative mt-4">
            <img
              :src="uploadedFilePreview"
              alt="Image Preview"
              class="mt-2 h-auto w-full rounded-md"
            />
            <button
              class="absolute right-5 top-5 h-8 w-8 rounded-full bg-red-800 text-white"
              @click="removeUploadedPrescription"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { getUser } from "~/appwrite/auth";
import { uploadFileInAppwrite } from "~/appwrite/prescription-upload";
import updateCartBuyerDetails from "~/shopify/cart/cart-buyer-identity-update";
import getUserInfoForCheckout from "~/shopify/user/user-checkout";
import getCartData from "~/shopify/cart/get-cart-data";
import { type CartItemType } from "~/shopify/_types/cart";

const isSubmitting = ref(false);

const cart = ref<{
  items: CartItemType[];
  subtotalAmount: { currencyCode: string; amount: string };
  totalAmount: { currencyCode: string; amount: string };
  totalTaxAmount: { currencyCode: string; amount: string };
}>({
  items: [],
  subtotalAmount: { currencyCode: "", amount: "" },
  totalAmount: { currencyCode: "", amount: "" },
  totalTaxAmount: { currencyCode: "", amount: "" },
});

const router = useRouter();

const uploadedFilePreview = ref<any>(null);
const requiresPrescription = ref(false);
const uploadedFile = ref<null | File>(null);

const shippingAmount = computed(() => {
  const cartValue = cart.value;
  return Math.round(
    parseFloat(cartValue.totalAmount.amount) -
      parseFloat(cartValue.subtotalAmount.amount) -
      parseFloat(cartValue.totalTaxAmount.amount),
  );
});

let userData = null;
try {
  userData = await getUserInfoForCheckout();
} catch (error) {
  router.replace("/auth/login");
}

const userStore = useUserStore();

const email = ref(userData?.email || "");

const shipping = ref({
  firstName: userData?.defaultAddress?.firstName || userData?.firstName || "",
  lastName: userData?.defaultAddress?.lastName || userData?.lastName || "",
  address: userData?.defaultAddress?.address1 || "",
  city: userData?.defaultAddress?.city || "",
  state: userData?.defaultAddress?.province || "",
  pinCode: userData?.defaultAddress?.zip || "",
  phone: userData?.defaultAddress?.phone || userData?.phone || "",
  country: userData?.defaultAddress?.country || "",
});

const billingAddressOption = ref("same");

const billing = ref({
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
});

const shippingDetails = computed(() => {
  return `${shipping.value.address}, ${shipping.value.city}, ${shipping.value.state} - ${shipping.value.pinCode}`;
});

const uploadPrescription = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    uploadedFile.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedFilePreview.value = e.target?.result || null;
    };
    reader.readAsDataURL(file);
  }
};

const removeUploadedPrescription = () => {
  uploadedFile.value = null;
  uploadedFilePreview.value = null;
};

const addUserIdentityToCart = async () => {
  const cartId = await userStore.getShopifyCartId();
  const userEmail = email.value;
  const { firstName, lastName, address, city, phone, pinCode, state, country } =
    shipping.value;
  await updateCartBuyerDetails(cartId, userEmail, {
    firstName,
    lastName,
    address1: address,
    city,
    province: state,
    country,
    phone,
    zip: pinCode,
  });
};

const submitOrder = async () => {
  if (!!requiresPrescription.value && !uploadedFile.value) {
    alert(
      "Some items in your cart requires prescription. Please add that first.",
    );
    return;
  }
  isSubmitting.value = true;
  try {
    const userCartId = await userStore.getShopifyCartId();
    const appwriteUser = await getUser();

    await addUserIdentityToCart();
    const prescriptionUrl = !!uploadedFile.value
      ? await uploadFileInAppwrite(uploadedFile.value)
      : null;

    const { data } = await axios.post("/api/checkout", {
      cart: userCartId,
      userId: appwriteUser.$id,
      prescriptionUrl,
    });
    if (data?.url) {
      window.location.href = data.url;
      return;
    }

    console.log(data);

    throw new Error(
      data.error ||
        "Some error occured while processing the details. Please try again later.",
    );
  } catch (error: any) {
    alert(error.message);
    console.error(error);
  }
  isSubmitting.value = false;
};

onMounted(async () => {
  const data = await getCartData();
  if (data) {
    cart.value = data;
  }
});

watch(
  () => cart.value.items,
  (newItems) => {
    requiresPrescription.value =
      newItems?.some((item) => item.requiresPrescription) || false;
  },
  { deep: true, immediate: true },
);

watch(billingAddressOption, (newVal) => {
  if (newVal === "same") {
    billing.value = { ...billing.value, ...shipping.value };
  } else {
    billing.value = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
    };
  }
});
</script>

<style scoped>
.custom-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border: 2px solid #d1d5db;
  /* Tailwind gray-300 */
  border-radius: 0.25rem;
  /* Rounded corners */
  appearance: none;
  /* Remove default styles */
  outline: none;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #238878;
  /* Custom green color */
  border-color: #238878;
}

.custom-checkbox:checked::after {
  content: "";
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.25rem;
  background-color: white;
  border-radius: 0.125rem;
}
</style>
