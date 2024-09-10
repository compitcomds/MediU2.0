<template>
  <div>
    <button
      @click="addProductToCart"
      class="p-2 bg-white rounded-full shadow text-black disabled:cursor-not-allowed disabled:animate-pulse"
      :disabled="isAddingProductToCart"
    >
    <img
                    src="https://ccdstest.b-cdn.net/Medi%20u/add-to-basket.svg"
                    class="w-8 p-1"
                  />
    </button>
  </div>
</template>

<script setup>
import addToCart from "~/shopify/cart/add-to-cart";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const isAddingProductToCart = ref(false);

const store = useUserStore();

const addProductToCart = async () => {
  if (!props.productId) return;
  isAddingProductToCart.value = true;
  try {
    await addToCart({ merchandiseId: props.productId });
    alert("Successfully added to the cart.");
  } catch (error) {
    alert("Unable to add the product to cart");
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
