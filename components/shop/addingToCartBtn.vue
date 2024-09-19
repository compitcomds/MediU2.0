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
import { ref } from 'vue';
import addToCart from '~/shopify/cart/add-to-cart';
import { useUserStore } from '~/stores/user-store';

interface Props {
  productId: string;
}
const props = defineProps<Props>();

const userStore = useUserStore();
const isAddingProductToCart = ref(false);

const addProductToCart = async () => {
  if (!props.productId) return;
  isAddingProductToCart.value = true;

  try {
    const cartId = await userStore.getShopifyCartId(); 
    if (cartId) {
      await addToCart({
        merchandiseId: props.productId,
        cartId,
      });
      alert('Successfully added to the cart.');
    } else {
      throw new Error('No cart ID found');
    }
  } catch (error) {
    console.error('Failed to add product to cart', error);
    alert('Unable to add the product to cart');
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>


<style scoped>
/* Add styles here if needed */
</style>
