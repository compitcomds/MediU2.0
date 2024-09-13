<template>
  <div>
    <button
      @click="addProductToCart"
      class="group font-semibold hover:bg-[#287542] hover:text-white min-h-[40px] rounded-full w-full overflow-hidden border-2 border-[#287542] bg-white "
      :disabled="isAddingProductToCart"
    >
      
        <!-- {{ testStore.count }} -->
        {{ isAddingProductToCart ? "Adding..." : "Add To Cart" }}
        
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
