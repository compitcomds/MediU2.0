<template>
  <div>
    <button
      @click="addProductToCart"
      class="p-2 bg-gray-200 rounded-full shadow text-black disabled:cursor-not-allowed disabled:animate-pulse"
      :disabled="isAddingProductToCart"
    >
      <img src="https://ccdstest.b-cdn.net/Medi%20u/Bag.svg" class="w-8 p-1" />
    </button>
  </div>
</template>
<script setup lang="ts">
import addToCart from "~/shopify/cart/add-to-cart";
import { useUserStore } from "~/stores/user-store";

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
    alert("Successfully added to the cart.");
  } catch (error: any) {
    console.error(error);
    alert(error?.message || "Unable to add the product to cart");
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
