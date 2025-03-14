<template>
  <section class="relative pb-16 pt-10 lg:pt-14">
    <div
      class="mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-4 md:px-5 lg:px-6"
    >
      <div class="col-span-12 pr-4 lg:col-span-8">
        <h2
          class="mb-8 text-center text-4xl font-bold leading-10 text-[#238878]"
        >
          Shopping Cart
        </h2>

        <div v-if="cart.items.length === 0">
          <nuxt-link
            to="/shop"
            class="group mx-auto flex w-1/2 flex-col gap-y-5"
          >
            <img src="assets/images/empty-cart.webp" class="w-full" />
            <h2
              class="text-center text-xl font-bold text-[#238878] underline group-hover:no-underline"
            >
              Continue shopping >
            </h2>
          </nuxt-link>
        </div>

        <!-- Cart Item Loop -->
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="relative mb-8 grid grid-cols-12 gap-y-4 space-x-6 rounded-3xl border-2 border-gray-200 p-4 lg:p-8"
        >
          <!-- Image -->
          <div class="col-span-12 lg:col-span-2">
            <nuxt-link :to="`/shop/product/${item.handle}`">
              <img
                :src="item.image?.url || 'https://placehold.co/400x400/png'"
                :alt="item.image?.altText || item.title"
                class="max-lg:w-full rounded-lg object-cover lg:w-[250px]"
              />
            </nuxt-link>
          </div>

          <!-- Product Details -->
          <div class="col-span-12 lg:col-span-10">
            <div class="mb-4 flex items-center justify-between">
              <h5
                class="font-manrope text-2xl font-bold capitalize text-[#238878]"
              >
                <nuxt-link
                  :to="`/shop/product/${item.handle}`"
                  class="hover:underline"
                >
                  {{ item.title }}
                </nuxt-link>
              </h5>
              <button
                @click="changeQuantity(item.lineId, 0)"
                :disabled="isUpdatingLineItemQuantity"
                class="absolute right-4 top-4 rounded-md border border-red-500 px-1 py-0 text-red-500 disabled:cursor-not-allowed lg:static"
                title="Remove product from cart"
              >
                <X />
                <span class="sr-only">Remove product from cart</span>
              </button>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div
                class="relative flex h-10 w-36 items-center justify-between gap-2 overflow-clip rounded-md border border-gray-600 bg-white text-black md:w-48"
              >
                <button
                  @click="changeQuantity(item.lineId, item.quantity - 1)"
                  class="block h-full px-2 disabled:animate-pulse"
                  :disabled="isUpdatingLineItemQuantity"
                >
                  <Minus />
                </button>

                <p>{{ item.quantity }}</p>
                <button
                  class="block h-full px-2 disabled:animate-pulse"
                  @click="changeQuantity(item.lineId, item.quantity + 1)"
                  :disabled="isUpdatingLineItemQuantity"
                >
                  <Plus />
                </button>
              </div>
              <span class="text-2xl font-bold text-[#238878]"
                >{{ item.cost.currencyCode }} {{ item.cost.amount }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side Summary Section -->
      <div class="col-span-12 lg:sticky lg:top-0 lg:col-span-4">
        <div class="rounded-lg bg-[#edf8f3] p-6">
          <h5 class="font-manrope mb-4 text-2xl font-semibold text-[#238878]">
            Summary
          </h5>
          <div class="mb-2 flex justify-between">
            <span class="text-[#238878]">Subtotal</span>
            <span class="min-w-fit font-semibold text-[#238878]">
              {{ formatAmountToINR(totalAmount - taxAmount || 0) }}</span
            >
          </div>
          <div class="mb-4 flex justify-between">
            <span class="text-[#238878]">Shipping</span>
            <span
              v-if="shippingAmount > 0"
              class="min-w-fit font-semibold text-[#238878]"
              >{{
                formatAmountToINR(parseFloat(cart.subtotalAmount.amount) || 0)
              }}
            </span>
            <span v-else class="min-w-fit font-semibold text-[#238878]"
              >{{ formatAmountToINR(0) }}
            </span>
          </div>
          <div class="mb-4 flex justify-between">
            <span class="text-[#238878]">Tax Amount</span>
            <span class="min-w-fit font-semibold text-[#238878]">
              {{ formatAmountToINR(taxAmount || 0) }}</span
            >
          </div>
          <div v-if="walletAmount > 0" class="mb-4">
            <p class="mb-1 flex justify-between">
              <span class="text-[#238878]">Wallet</span>
              <span class="min-w-fit font-semibold text-[#238878]">{{
                formatAmountToINR(walletAmountUsed)
              }}</span>
            </p>
            <p class="flex justify-between text-xs">
              <span class="text-[#15574c]">Total Wallet Amount</span>
              <span class="min-w-fit font-semibold text-[#15574c]">{{
                formatAmountToINR(walletAmount)
              }}</span>
            </p>
          </div>
          <div v-if="discountApplied > 0" class="mb-4 flex justify-between">
            <span class="text-[#238878]">Total Discount</span>
            <span class="min-w-fit font-semibold text-[#238878]">
              {{ formatAmountToINR(subTotalAmount - totalAmount) }}</span
            >
          </div>
          <div class="mt-4 flex justify-between border-t pt-4">
            <p>
              <span class="text-xl font-bold text-[#238878]">Total</span>
            </p>
            <p>
              <span class="min-w-fit text-xl font-bold text-[#238878]">{{
                formatAmountToINR(totalAmount - walletAmountUsed)
              }}</span>
              <br />
              <span
                v-if="walletAmount > 0"
                class="block w-full min-w-fit text-end text-xs font-bold text-[#238878] line-through"
                >{{ formatAmountToINR(totalAmount) }}</span
              >
            </p>
          </div>

          <!-- Coupon Input -->
          <form
            v-if="cart.discountCodes.length === 0 || editDiscountCode"
            class="mt-4 flex items-center gap-2"
            @submit.prevent="applyDiscount"
          >
            <input
              type="text"
              v-model="discountCode"
              placeholder="Enter coupon code here"
              class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-600"
            />
            <button
              type="submit"
              :disabled="applyingDiscount"
              class="rounded-lg border border-[#238878] px-3 py-2 text-black hover:bg-[#238878] hover:text-white disabled:animate-pulse disabled:cursor-not-allowed"
            >
              {{ applyingDiscount ? "Applying" : "Apply" }}
            </button>
          </form>
          <div
            v-else
            class="mt-4 flex items-center justify-between gap-2 rounded-badge bg-[#238878] px-5 py-2 text-white"
          >
            <p class="text-white">
              Applied
              <span class="font-bold">{{ cart.discountCodes[0].code }}</span>
            </p>
            <button type="button" @click="allowEditDiscountMode"><X /></button>
          </div>

          <div class="mt-4">
            <nuxt-link
              to="/checkout"
              class="block w-full rounded-full bg-[#238878] px-10 py-3 text-center text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Check Out
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CartWishlist />
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import getCartData from "~/shopify/cart/get-cart-data";
import updateLineItemQuantity from "~/shopify/cart/update-line-item-quantity";
import applyDiscountCode from "~/shopify/cart/apply-discount";
import { X, Plus, Minus } from "lucide-vue-next";
import getUserWallet from "~/appwrite/utils/get-wallet";

const userStore = useUserStore();
const isUpdatingLineItemQuantity = ref(false);

const walletAmount = ref(0);

const { cart } = useCart();

const discountCode = ref("");
const applyingDiscount = ref(false);
const editDiscountCode = ref(false);

const totalAmount = computed(() =>
  parseFloat(cart.value?.totalAmount.amount || "0"),
);
const subTotalAmount = computed(() =>
  parseFloat(cart.value?.subtotalAmount.amount || "0"),
);
const discountApplied = computed(() =>
  calculateDiscountApplied(subTotalAmount.value, totalAmount.value),
);
const walletAmountUsed = computed(() =>
  Math.min(
    walletAmount.value,
    !!cart.value && cart.value.items.length > 0 ? totalAmount.value - 1 : 0,
  ),
);
const shippingAmount = computed(() => {
  const cartValue = cart.value;
  return Math.round(
    totalAmount.value -
      subTotalAmount.value -
      parseFloat(cartValue?.totalTaxAmount?.amount || "0"),
  );
});
const taxAmount = computed(() => {
  const cartValue = cart.value;
  return calculateTaxApplied(cartValue?.items || [], discountApplied.value);
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
      (item) => item.lineId === lineId,
    );
    if (itemIndex !== -1) {
      if (quantity > 0) cart.value.items[itemIndex].quantity = quantity;
      else cart.value.items.splice(itemIndex, 1);
    }

    toast.success("Successfully updated the cart item quantity");
  } catch (error: any) {
    toast.error("Unable to update the item's quantity", { richColors: true });
  } finally {
    isUpdatingLineItemQuantity.value = false;
  }
};

const allowEditDiscountMode = () => {
  editDiscountCode.value = true;
};

const applyDiscount = async () => {
  applyingDiscount.value = true;
  try {
    await applyDiscountCode(discountCode.value);
  } catch (error: any) {
    toast.error(error.message, { richColors: true });
  } finally {
    const data = await getCartData();
    if (data) cart.value = data;
    discountCode.value = "";
    applyingDiscount.value = false;
  }
};

onMounted(async () => {
  const data = await getCartData();
  if (data) cart.value = data;

  const wallet = await getUserWallet();
  walletAmount.value = wallet.amount;
});

useHead({
  title: "Cart - Mediu",
  meta: [
    { name: "description", content: "Cart" },
    { name: "og:title", content: "Cart - Mediu" },
    { name: "og:description", content: "Cart" },
  ],
});
</script>
