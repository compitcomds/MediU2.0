<script setup lang="ts">
import { cn } from "~/lib/utils";
import { Heart } from "lucide-vue-next";
import { toast } from "vue-sonner";

interface Props {
  as?: string;
  handle: string;
  type?: "product";
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  type: "product",
});

const userStore = useUserStore();

const isItemInWishlist = computed(() =>
  userStore.isItemInWishlist(props.handle, props.type),
);

const toggleFromWishlist = async () => {
  try {
    await userStore.toggleFromWishlist(props.handle, props.type);
  } catch (error: any) {
    toast.error(
      error.message ||
        `Unable to add/remove the item to wishlist right now. Please try again later.`,
    );
  }
};
</script>

<template>
  <component
    :is="as"
    :class="cn('', ($attrs.class as any) ?? '')"
    @mousedown="toggleFromWishlist()"
    :title="
      isItemInWishlist ? 'Remove item from wishlist' : 'Add item to wishlist'
    "
  >
    <slot
      ><Heart v-if="!isItemInWishlist" class="h-full w-full" /><Heart
        fill="currentColor"
        v-if="isItemInWishlist"
        class="h-full w-full"
      />
      <span class="sr-only">Wishlist Toggle Button</span></slot
    >
  </component>
</template>
