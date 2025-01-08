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
              <CheckoutSelectState v-model:model-value="shipping.state" />

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
      <CheckoutOrderSummary
        :shipping-details="shippingDetails"
        v-model:requires-prescription="requiresPrescription"
        v-model:uploaded-file="uploadedFile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { getUser } from "~/appwrite/auth";
import { uploadFileInAppwrite } from "~/appwrite/prescription-upload";
import updateCartBuyerDetails from "~/shopify/cart/cart-buyer-identity-update";
import getUserInfoForCheckout from "~/shopify/user/user-checkout";

const isSubmitting = ref(false);

const router = useRouter();

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

const showErrorIfNotExists = (vars: any) => {
  for (const key of Object.keys(vars)) {
    console.log(key, vars[key]);
    if (!vars[key] || (typeof vars[key] === "string" && !vars[key].trim())) {
      throw new Error(`Please enter a valid value for ${key}`);
    }
  }
};

const requiresPrescription = ref(false);
const uploadedFile = ref<null | File>(null);

const addUserIdentityToCart = async () => {
  const cartId = await userStore.getShopifyCartId();
  const userEmail = email.value;
  const { firstName, lastName, address, city, phone, pinCode, state, country } =
    shipping.value;
  showErrorIfNotExists(shipping.value);
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
