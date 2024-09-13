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

<script setup>
import { ref } from 'vue';
import addToCart from '~/shopify/cart/add-to-cart';
import { useUserStore } from '~/stores/user-store';

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const userStore = useUserStore();
const isAddingProductToCart = ref(false);

const addProductToCart = async () => {
  if (!props.productId) return;
  isAddingProductToCart.value = true;
  try {
    await addToCart({
      merchandiseId: props.productId,
      cartId: await userStore.getShopifyCartId(),
    });
    alert('Successfully added to the cart.');
  } catch (error) {
    alert('Unable to add the product to cart');
    console.error(error);
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
