<script setup lang="ts">
import { useUserStore } from "~/stores/user-store";
import { cn } from "~/lib/utils";
import { toast } from "vue-sonner";
import addToCart from "~/shopify/cart/add-to-cart";

const props = withDefaults(
  defineProps<{
    as?: string;
    productId: string;
    quantity?: number;
    redirectToCart?: boolean;
    deactivate?: boolean;
  }>(),
  {
    as: "button",
  },
);

const userStore = useUserStore();
const router = useRouter();
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
    if (props.redirectToCart) {
      router.push("/cart");
    }
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

<template>
  <component
    :is="props.as"
    :class="
      cn(
        `flex items-center justify-between gap-5 rounded-full bg-[#238878] px-5 py-3 text-xl font-semibold text-white shadow disabled:cursor-not-allowed disabled:opacity-70 ${isAddingProductToCart ? 'animate-pulse' : ''}`,
        $attrs.class as string,
      )
    "
    :disabled="isAddingProductToCart || props.deactivate"
    @click="addProductToCart"
  >
    <slot
      ><BagSVG />
      <p>Add To Cart</p>
    </slot>
  </component>
</template>
