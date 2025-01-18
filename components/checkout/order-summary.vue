<template>
  <div class="mt-4 rounded-lg bg-white p-6 lg:sticky lg:top-10 lg:h-fit">
    <h2 class="mb-4 text-2xl font-semibold text-[#238878]">Order Summary</h2>
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
      <p class="flex items-center justify-between text-lg text-[#238878]">
        <span>Subtotal</span>
        <span class="text-base"
          >{{ cart.subtotalAmount.currencyCode }}
          {{ (totalAmount - taxAmount).toFixed(2) }}</span
        >
      </p>
      <p class="flex items-center justify-between text-lg text-[#238878]">
        <span>Shipping Cost</span>
        <span v-if="shippingAmount > 0" class="text-base"
          >{{ cart.subtotalAmount.currencyCode }} {{ shippingAmount }}</span
        >
        <span v-else class="text-base"
          >{{ cart.subtotalAmount.currencyCode }} 0.0</span
        >
      </p>
      <p class="flex items-center justify-between text-lg text-[#238878]">
        <span>Tax Amount</span>
        <span class="text-base"
          >{{ cart.totalTaxAmount.currencyCode }}
          {{ taxAmount.toFixed(2) }}</span
        >
      </p>
      <p
        v-if="discountApplied > 0"
        class="flex items-center justify-between text-lg text-[#238878]"
      >
        <span>Total Discount</span>
        <span class="text-base">
          {{ cart.totalAmount.currencyCode }}
          {{ subTotalAmount - totalAmount }}</span
        >
      </p>
      <p
        v-if="walletAmount > 0"
        class="flex items-center justify-between text-lg text-[#238878]"
      >
        <span>Wallet Amount Used</span>
        <span class="text-base"
          >{{ cart.totalTaxAmount.currencyCode }} {{ walletAmountUsed }}</span
        >
      </p>

      <p
        class="flex items-center justify-between text-xl font-semibold text-[#238878]"
      >
        <span>Total</span>
        <span
          >{{ cart.totalAmount.currencyCode }}
          {{ totalAmount - walletAmountUsed }}</span
        >
      </p>
    </div>
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
          required
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
          <X />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import getUserWallet from "~/appwrite/utils/get-wallet";
import { type CartItemType } from "~/shopify/_types/cart";
import getCartData from "~/shopify/cart/get-cart-data";

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

const uploadedFilePreview = ref<any>(null);

const requiresPrescription = defineModel<boolean>("requiresPrescription", {
  default: false,
});
const uploadedFile = defineModel<null | File>("uploadedFile", {
  default: null,
});

const walletAmount = ref(0);
const totalAmount = computed(() => parseFloat(cart.value.totalAmount.amount));
const subTotalAmount = computed(() =>
  parseFloat(cart.value.subtotalAmount.amount),
);
const discountApplied = computed(() =>
  calculateDiscountApplied(subTotalAmount.value, totalAmount.value),
);
const walletAmountUsed = computed(() =>
  Math.min(walletAmount.value, totalAmount.value - 1),
);
const shippingAmount = computed(() => {
  const cartValue = cart.value;
  return Math.round(
    parseFloat(cartValue.totalAmount.amount) -
      parseFloat(cartValue.subtotalAmount.amount) -
      parseFloat(cartValue.totalTaxAmount.amount),
  );
});

const taxAmount = computed(() => {
  const cartValue = cart.value;
  return calculateTaxApplied(cartValue.items, discountApplied.value);
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

onMounted(async () => {
  const data = await getCartData();
  if (data) cart.value = data;

  const wallet = await getUserWallet();
  walletAmount.value = wallet.amount;
});

watch(
  () => cart.value.items,
  (newItems) => {
    requiresPrescription.value =
      newItems?.some((item) => item.requiresPrescription) || false;
  },
  { deep: true, immediate: true },
);
</script>
