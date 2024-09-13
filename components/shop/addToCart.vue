<template>
  <div>
    <button
      @click="addProductToCart"
      class="relative h-[40px] w-full overflow-hidden rounded-full border border-[#28574E] bg-white text-[#28574E] hover:shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-[#28574E] before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-[#28574E] after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4"
      :disabled="isAddingProductToCart"
    >
      
      <span
        class="relative z-10"
      >
        {{ testStore.count }}
        {{ isAddingProductToCart ? "Adding..." : "Add To Cart" }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import addToCart from "~/shopify/cart/add-to-cart";
import { useUserStore } from "~/stores/user-store";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const isAddingProductToCart = ref(false);

const testStore = useTestStore();

const userStore = useUserStore();
// console.log(await userStore.getShopifyCartId());

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
