<template>
  <div>
    <button
      @click="addProductToCart"
      class="group relative min-h-[40px] rounded-full w-full overflow-hidden border border-[#287542] bg-white text-[#287542] transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#287542] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#287542] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
      :disabled="isAddingProductToCart"
    >
      <span
        class="absolute inset-0 z-10 flex items-center justify-center group-hover:text-white"
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
