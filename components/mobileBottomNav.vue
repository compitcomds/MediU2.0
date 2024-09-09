<template>
  <div class="block lg:hidden">
    <div class="btm-nav bg-slate-300 flex justify-around items-center p-4">
      <nuxt-link
        to="/"
        exact-active-class="active"
        class="flex items-center justify-center w-12 h-12"
      >
        <UIcon name="i-heroicons-home" class="w-5 h-5" />
      </nuxt-link>
      <nuxt-link
        to="/shop"
        exact-active-class="active"
        class="flex items-center justify-center w-12 h-12"
      >
        <UIcon name="i-heroicons-building-storefront" class="w-5 h-5" />
      </nuxt-link>
      <nuxt-link
        to="/testing"
        exact-active-class="active"
        class="flex items-center justify-center w-12 h-12"
      >
        <UIcon name="i-heroicons-shopping-cart" class="w-5 h-5" />
      </nuxt-link>
      <nuxt-link
        to="/profile"
        exact-active-class="active"
        class="flex items-center justify-center w-12 h-12"
      >
        <UIcon name="i-heroicons-user-circle" class="w-5 h-5" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind styles applied directly in the template */
.active {
  @apply text-blue-500; /* Example active color */
}
</style>
