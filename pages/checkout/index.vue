<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 md:px-16 mb-20 lg:mb-0">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      <!-- Scrollable Form Section -->
      <form
        @submit.prevent="submitOrder"
        class="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg h-full overflow-y-auto"
      >
        <!-- Contact Section -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">Contact</h2>
          <div class="flex flex-col space-y-2">
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              class="w-full p-3 border border-gray-300 rounded-lg bg-white"
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
          <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">Delivery</h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                v-model="shipping.firstName"
                placeholder="First name (optional)"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                required
              />
              <input
                type="text"
                v-model="shipping.lastName"
                placeholder="Last name"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                required
              />
            </div>
            <input
              type="text"
              v-model="shipping.address"
              placeholder="Address"
              class="p-3 border border-gray-300 rounded-lg w-full bg-white"
              required
            />
            <input
              type="text"
              v-model="shipping.phone"
              placeholder="Phone"
              class="p-3 border border-gray-300 rounded-lg w-full bg-white"
              required
            />
            <!-- <input type="text" v-model="shipping.apartment" placeholder="Apartment, suite, etc. (optional)"
                              class="p-3 border border-gray-300 rounded-lg w-full bg-white" /> -->
            <div class="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                v-model="shipping.city"
                placeholder="City"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                required
              />
              <input
                type="text"
                v-model="shipping.state"
                placeholder="State"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                required
              />
              <input
                type="text"
                v-model="shipping.pinCode"
                placeholder="PIN code"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                required
              />
            </div>
            <input
              type="text"
              v-model="shipping.country"
              placeholder="Country"
              class="p-3 border border-gray-300 rounded-lg w-full bg-white"
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
          <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">
            Shipping method
          </h2>
          <input
            type="text"
            placeholder="Enter your shipping address to view available shipping methods."
            class="w-full p-3 border border-gray-300 rounded-lg bg-white"
          />
        </div>

        <!-- Payment Section -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">Payment</h2>
          <div class="border border-[#28574e] rounded-lg">
            <div
              class="flex justify-between items-center bg-[#f5f5f5] p-4 rounded-t-lg"
            >
              <div class="text-lg font-semibold text-[#28574e]">
                PhonePe Payment Gateway (UPI, Cards & NetBanking)
              </div>
              <div class="xl:flex items-center grid grid-cols-2 space-x-2">
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
                <!-- <span class="text-lg font-semibold text-[#28574e]">+3</span> -->
              </div>
            </div>
            <div
              class="p-6 text-center bg-[#f9f9f9] border-t border-[#28574e] space-y-4"
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
          <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">
            Billing address
          </h2>
          <div class="flex flex-col space-y-4 text-[#28574e]">
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
              <div class="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  v-model="billing.firstName"
                  placeholder="First name (optional)"
                  class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                />
                <input
                  type="text"
                  v-model="billing.lastName"
                  placeholder="Last name"
                  class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                />
              </div>
              <input
                type="text"
                v-model="billing.address"
                placeholder="Address"
                class="p-3 border border-gray-300 rounded-lg w-full bg-white"
              />
              <!-- <input type="text" v-model="billing.apartment"
                                  placeholder="Apartment, suite, etc. (optional)"
                                  class="p-3 border border-gray-300 rounded-lg w-full bg-white" /> -->
              <div class="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  v-model="billing.city"
                  placeholder="City"
                  class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                />
                <input
                  type="text"
                  v-model="billing.state"
                  placeholder="State"
                  class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                />
                <input
                  type="text"
                  v-model="billing.pinCode"
                  placeholder="PIN code"
                  class="p-3 border border-gray-300 rounded-lg w-full bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Pay Now Button -->
        <button
          type="submit"
          class="w-full bg-[#28574e] text-white py-3 rounded-lg font-semibold hover:bg-[#70ccbb] transition duration-200"
        >
          Pay now
        </button>
      </form>

      <!-- Order Summary Section -->
      <div
        class="bg-white p-6 rounded-lg shadow-lg lg:sticky lg:top-8 lg:h-fit"
      >
        <h2 class="text-2xl font-semibold mb-4 text-[#28574e]">
          Order Summary
        </h2>
        <div class="space-y-4">
          <div
            v-for="product in products"
            :key="product.id"
            class="flex items-center space-x-4 text-[#28574e]"
          >
            <img
              :src="product.image"
              alt="Product Image"
              class="w-16 h-16 rounded-lg"
            />
            <div>
              <h3 class="font-semibold">{{ product.name }}</h3>
              <p class="text-[#28574e]">₹{{ product.price }}</p>
            </div>
          </div>
          <div class="flex justify-between items-center text-lg text-[#28574e]">
            <span>Subtotal</span>
            <span>₹{{ subtotal }}</span>
          </div>
          <div
            class="flex justify-between w-full items-center text-lg text-[#28574e]"
          >
            <span class="w-1/2">Shipping Address</span>
            <span class="w-1/2">{{ shippingDetails }}</span>
          </div>
          <div class="flex justify-between items-center text-lg text-[#28574e]">
            <span>Shipping Cost</span>
            <span>₹{{ shippingCost }}</span>
          </div>
          <div
            class="flex justify-between items-center font-semibold text-xl text-[#28574e]"
          >
            <span>Total</span>
            <span>₹{{ total }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { getUser } from "~/appwrite/auth";
import updateCartBuyerDetails from "~/shopify/cart/cart-buyer-identity-update";
import getUserInfoForCheckout from "~/shopify/user/user-checkout";

const userData = await getUserInfoForCheckout();

const contact = ref("");
const email = ref(userData?.email || "");

const shipping = ref({
  firstName: userData?.defaultAddress?.firstName || userData.firstName,
  lastName: userData?.defaultAddress?.lastName || userData.lastName,
  address: userData?.defaultAddress?.address1 || "",
  city: userData?.defaultAddress?.city || "",
  state: userData?.defaultAddress?.province || "",
  pinCode: userData?.defaultAddress?.zip || "",
  phone: userData?.defaultAddress?.phone || userData.phone || "",
  country: userData?.defaultAddress?.country || "",
});

const billingAddressOption = ref("same");

const billing = ref({
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  pinCode: "",
});

const products = ref([
  {
    id: 1,
    name: "Bontess Pro",
    price: 1225,
    image:
      "https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277",
  },
]);

const shippingCost = ref(50); // Example shipping cost

const shippingDetails = computed(() => {
  return `${shipping.value.address}, ${shipping.value.city}, ${shipping.value.state} - ${shipping.value.pinCode}`;
});

const subtotal = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0);
});

const total = computed(() => {
  return subtotal.value + shippingCost.value;
});

watch(billingAddressOption, (newVal) => {
  if (newVal === "same") {
    billing.value = { ...billing.value, ...shipping.value };
  } else {
    billing.value = {
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      pinCode: "",
    };
  }
});

const userStore = useUserStore();

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

// Submit order function
const submitOrder = async () => {
  try {
    const userCartId = await userStore.getShopifyCartId();
    const appwriteUser = await getUser();
    await addUserIdentityToCart();

    const { data } = await axios.post("/api/checkout", {
      cart: userCartId,
      userId: appwriteUser.$id,
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
    alert(error.message);
    console.error(error);
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
  background-color: #28574e;
  /* Custom green color */
  border-color: #28574e;
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
