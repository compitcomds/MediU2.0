<template>
  <div class="mb-20 min-h-screen bg-gray-100 px-4 py-8 md:px-16 lg:mb-0">
    <div
      @submit.prevent="submitOrder"
      class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3"
    >
      <form
        @submit.prevent="submitOrder"
        class="h-full overflow-y-auto rounded-lg text-zinc-500 lg:col-span-2 lg:p-6"
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
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="mb-6">
            <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Payment</h2>
            <CheckoutSelectPaymentMethod
              v-model:model-value="selectedPaymentMethod"
            />
          </div>

          <!-- Pay Now Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-lg bg-[#238878] py-3 font-semibold text-white transition duration-200 hover:bg-[#70ccbb] disabled:animate-pulse disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? "Submitting the details..." : "Submit Order" }}
          </button>
        </div>
      </form>

      <CheckoutOrderSummary
        :shipping-details="shippingDetails"
        v-model:requires-prescription="requiresPrescription"
        v-model:uploaded-file="uploadedFile"
        class="mb-10"
      />

      <div class="lg:hidden">
        <div class="mb-6">
          <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Payment</h2>
          <CheckoutSelectPaymentMethod
            v-model:model-value="selectedPaymentMethod"
          />
        </div>

        <!-- Pay Now Button -->
        <button
          type="submit"
          @click="submitOrder"
          :disabled="isSubmitting"
          class="w-full rounded-lg bg-[#238878] py-3 font-semibold text-white transition duration-200 hover:bg-[#70ccbb] disabled:animate-pulse disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? "Submitting the details..." : "Submit Order" }}
        </button>
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

const selectedPaymentMethod = ref<"online" | "cash">("online");

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

const proceedWithOnlinePayment = async ({
  userCartId,
  userId,
  prescriptionUrl,
}: {
  userId: string;
  userCartId: string;
  prescriptionUrl: string | null;
}) => {
  const { data } = await axios.post("/api/checkout", {
    cart: userCartId,
    userId: userId,
    prescriptionUrl: prescriptionUrl,
  });

  if (data?.url) {
    window.location.href = data.url;
    return;
  }

  throw new Error(
    data.error ||
      "Some error occured while processing the details. Please try again later.",
  );
};

const submitOrder = async () => {
  if (!!requiresPrescription.value && !uploadedFile.value) {
    alert(
      "Some items in your cart requires prescription. Please add that first.",
    );
    return;
  }
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  try {
    const userCartId = await userStore.getShopifyCartId();
    const appwriteUser = await getUser();

    await addUserIdentityToCart();
    const prescriptionUrl = !!uploadedFile.value
      ? await uploadFileInAppwrite(uploadedFile.value)
      : null;

    if (selectedPaymentMethod.value === "online") {
      await proceedWithOnlinePayment({
        userCartId,
        prescriptionUrl: prescriptionUrl,
        userId: appwriteUser.$id,
      });
      return;
    } else {
      alert("COD WILL BE AVAILABLE SOON... ;)");
    }
  } catch (error: any) {
    alert(error.message);
    console.error(error);
  } finally {
    setTimeout(() => {
      isSubmitting.value = false;
    }, 300);
  }
};
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
