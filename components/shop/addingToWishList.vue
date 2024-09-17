<template>
  <button
    @click="removeProductFromWishlist"
    class="bg-blue-100 text-black px-5 py-2"
  >
    {{
      wishlist.includes(props.productId)
        ? "Remove from wishlist"
        : "Add To Wishlist"
    }}
    -- {{ props.productId }}
  </button>
</template>

<script setup>
const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const { wishlist, toggleProductIdFromWishlist } = useUserStore();

const removeProductFromWishlist = () => {
  toggleProductIdFromWishlist(props.productId);
};
</script>

<style scoped></style>
