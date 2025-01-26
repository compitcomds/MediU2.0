<template>
  <div>
    <button
      @click="addProductToCart"
      class="rounded-full bg-[#238878] p-2 px-3 py-3 text-xl font-semibold text-white shadow disabled:animate-pulse disabled:cursor-not-allowed"
      :disabled="isAddingProductToCart"
    >
      <div class="flex items-center justify-between gap-5 px-2">
        <img
          src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg"
          class="w-8 rounded-full border bg-white p-1"
        />
        <p>Add To Cart</p>
      </div>
    </button>
  </div>
</template>
<script setup lang="ts">
import { toast } from "vue-sonner";
import addToCart from "~/shopify/cart/add-to-cart";
import { useUserStore } from "~/stores/user-store";

// Define the props with types
interface Props {
  productId: string;
  quantity?: number;
}

const props = defineProps<Props>();

const userStore = useUserStore();
const isAddingProductToCart = ref(false);

const addProductToCart = async () => {
  if (!props.productId) return;
  isAddingProductToCart.value = true;

  try {
    const cartId = await userStore.getShopifyCartId();
    await addToCart({
      merchandiseId: props.productId,
      cartId,
      quantity: props.quantity,
    });
    toast.success("Successfully added to the cart.");
  } catch (error: any) {
    console.error(error);
    toast.error(error?.message || "Unable to add the product to cart", {
      richColors: true,
    });
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
