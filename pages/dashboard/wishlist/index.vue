<script setup lang="ts">
const userStore = useUserStore();
const { wishlist } = storeToRefs(userStore);
</script>

<template>
  <DashboardAttachSidenav>
    <div class="container mx-auto mb-28 px-4 py-8">
      <h1 class="mb-8 text-3xl font-bold text-gray-900">My Wishlist</h1>

      <div v-if="wishlist.length === 0" class="py-12 text-center">
        <p class="text-lg text-gray-600">Your wishlist is empty</p>
        <NuxtLink
          to="/shop"
          class="mt-4 inline-block rounded-md bg-[#238878] px-6 py-3 text-white transition-colors duration-200 hover:bg-[#1b6a5d]"
        >
          Browse Products
        </NuxtLink>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="handle in wishlist" :key="handle">
          <DashboardWishlistProduct
            v-if="handle.includes('product.')"
            :handle="handle.replace('product.', '')"
          />
        </template>
      </div>
    </div>
  </DashboardAttachSidenav>
</template>
