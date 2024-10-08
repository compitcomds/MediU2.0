<template>
  <section class="pb-16 pt-10 relative">
    <div
      class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto grid grid-cols-12 gap-8"
    >
      <!-- Left Cart Section -->
      <div
        class="col-span-12 lg:col-span-8 max-h-[75vh] overflow-y-auto pr-4 custom-scrollbar"
      >
        <h2
          class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-[#28574E]"
        >
          Shopping Cart
        </h2>

        <div v-if="cart.items.length === 0">
          <nuxt-link
            to="/shop"
            class="group flex flex-col gap-y-5 w-1/2 mx-auto"
          >
            <img src="assets/images/empty-cart.webp" class="w-full" />
            <h2
              class="text-[#28574E] underline group-hover:no-underline text-center font-bold text-xl"
            >
              Continue shopping >
            </h2>
          </nuxt-link>
        </div>

        <!-- Cart Item Loop -->
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 gap-y-4 space-x-6"
        >
          <!-- Image -->
          <div class="col-span-12 lg:col-span-2">
            <img
              :src="item.image?.url || 'https://placehold.co/400x400/png'"
              :alt="item.image?.altText || item.title"
              class="max-lg:w-full lg:w-[250px] rounded-lg object-cover"
            />
          </div>

          <!-- Product Details -->
          <div class="col-span-12 lg:col-span-10">
            <div class="flex items-center justify-between mb-4">
              <h5
                class="font-manrope font-bold text-2xl capitalize text-[#28574E]"
              >
                {{ item.title }}
              </h5>
              <button
                @click="changeQuantity(item.lineId, 0)"
                :disabled="isUpdatingLineItemQuantity"
                class="text-red-500 border border-red-500 rounded-md py-0 px-1 disabled:cursor-not-allowed"
              >
                ✕
              </button>
            </div>
            <p class="text-gray-500">{{ item.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center">
                <button
                  @click="changeQuantity(item.lineId, item.quantity - 1)"
                  class="btn-minus rounded-lg text-[#28574E] disabled:animate-pulse disabled:cursor-not-allowed"
                  :disabled="isUpdatingLineItemQuantity"
                >
                  −
                </button>
                <p class="quantity-input bg-white text-[#28574E] rounded-lg">
                  {{ item.quantity }}
                </p>
                <button
                  @click="changeQuantity(item.lineId, item.quantity + 1)"
                  class="btn-plus rounded-lg text-[#28574E] disabled:animate-pulse disabled:cursor-not-allowed"
                  :disabled="isUpdatingLineItemQuantity"
                >
                  +
                </button>
              </div>
              <span class="text-2xl font-bold text-[#28574E]"
                >{{ item.cost.currencyCode }} {{ item.cost.amount }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side Summary Section -->
      <div class="col-span-12 lg:col-span-4 lg:sticky lg:top-0">
        <div class="bg-[#edf8f3] rounded-lg p-6">
          <h5 class="font-manrope font-semibold text-2xl mb-4 text-[#28574E]">
            Summary
          </h5>
          <div class="flex justify-between mb-2">
            <span class="text-[#28574E]">Subtotal</span>
            <span class="text-[#28574E] font-semibold"
              >{{ cart.subtotalAmount.currencyCode }}
              {{ cart.subtotalAmount.amount }}</span
            >
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-[#28574E]">Shipping</span>
            <span class="text-[#28574E] font-semibold"
              >{{ cart.subtotalAmount.currencyCode }} {{ shippingAmount }}</span
            >
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-[#28574E]">Tax Amount</span>
            <span class="text-[#28574E] font-semibold"
              >{{ cart.totalTaxAmount.currencyCode }}
              {{ cart.totalTaxAmount.amount }}</span
            >
          </div>
          <div class="flex justify-between border-t pt-4 mt-4">
            <span class="text-[#28574E] font-bold text-xl">Total</span>
            <span class="text-[#28574E] font-bold text-xl"
              >{{ cart.totalAmount.currencyCode }}
              {{ cart.totalAmount.amount }}</span
            >
          </div>

          <!-- Coupon Input -->
          <div class="mt-4">
            <input
              type="text"
              placeholder="Enter coupon code here"
              class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-600 bg-white"
            />
          </div>

          <!-- Upload Prescription Button -->
          <!-- <div v-if="requiresPrescription" class="mt-6">
            <label
              for="prescription-upload"
              class="w-full py-3 bg-[#28574E] px-10 text-white rounded-full font-semibold text-lg cursor-pointer flex items-center justify-center"
            >
              <input
                type="file"
                id="prescription-upload"
                @change="uploadPrescription"
                class="hidden"
                accept="image/*"
              />
              <span>{{
                prescriptionUploaded
                  ? "Prescription Uploaded"
                  : "Upload Prescription"
              }}</span>
            </label>
            <p v-if="!prescriptionUploaded" class="text-red-500 text-sm mt-2">
              Please upload your prescription before checkout.
            </p>
          </div> -->

          <!-- Checkout Button -->
          <div class="mt-4">
            <nuxt-link
              to="/checkout"
              class="block text-center w-full py-3 bg-[#28574E] px-10 text-white rounded-full font-semibold text-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              Check Out
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import getCartData from "~/shopify/cart/get-cart-data";
import updateLineItemQuantity from "~/shopify/cart/update-line-item-quantity";

const userStore = useUserStore();
const isUpdatingLineItemQuantity = ref(false);

const cart = ref<{
  items: any[];
  subtotalAmount: { currencyCode: string; amount: string };
  totalAmount: { currencyCode: string; amount: string };
  totalTaxAmount: { currencyCode: string; amount: string };
}>({
  items: [],
  subtotalAmount: { currencyCode: "", amount: "" },
  totalAmount: { currencyCode: "", amount: "" },
  totalTaxAmount: { currencyCode: "", amount: "" },
});

const shippingAmount = computed(() => {
  const cartValue = cart.value;
  return Math.round(
    parseFloat(cartValue.totalAmount.amount) -
      parseFloat(cartValue.subtotalAmount.amount) -
      parseFloat(cartValue.totalTaxAmount.amount)
  );
});

const changeQuantity = async (lineId: string, quantity: number) => {
  isUpdatingLineItemQuantity.value = true;
  try {
    const cartId = await userStore.getShopifyCartId();
    const updatedCart = await updateLineItemQuantity({
      quantity,
      lineId,
      cartId,
    });

    cart.value = { ...cart.value, ...updatedCart };
    const itemIndex = cart.value.items.findIndex(
      (item) => item.lineId === lineId
    );
    if (itemIndex !== -1) {
      if (quantity > 0) cart.value.items[itemIndex].quantity = quantity;
      else cart.value.items.splice(itemIndex, 1);
    }

    alert("Successfully updated the cart item quantity");
  } catch (error: any) {
    alert(error.message || "Unable to update the item's quantity");
  } finally {
    isUpdatingLineItemQuantity.value = false;
  }
};

onMounted(async () => {
  const data = await getCartData();
  if (data) {
    cart.value = data;
  }
});
</script>

<style scoped>
/* Global Styles */
.quantity-input {
  text-align: center;
  width: 50px;
  margin: 0 10px;
  border: 1px solid #000000;
  padding: 2px;
}

.btn-minus,
.btn-plus {
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 2px 5px 2px 5px;
  cursor: pointer;
}

.bg-gray-100 {
  background-color: #f7f7f7;
}

/* Hide scrollbar but keep scroll functionality */
.custom-scrollbar {
  scrollbar-width: none; /* Firefox */
}

.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
