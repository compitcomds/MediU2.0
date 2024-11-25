<template>
  <div>
    <button
      @click="addProductToCart"
      class="text-red rounded-full hover:before:bg-redborder-[#238878] relative h-[40px] w-full overflow-hidden border border-[#238878] bg-white px-3 text-[#238878] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#238878] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
      :disabled="isAddingProductToCart"
    >
      <span class="relative z-10">
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
    alert("Successfully added to the cart.");
  } catch (error) {
    alert("Unable to add the product to cart");
    console.error(error);
  } finally {
    isAddingProductToCart.value = false;
  }
};
</script>

<style scoped></style>
