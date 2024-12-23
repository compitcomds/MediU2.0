<script setup lang="ts">
const { lineItems } = defineProps<{
  lineItems: any[];
}>();
</script>

<template>
  <ul class="space-y-6">
    <li
      v-for="item in lineItems"
      :key="item.title"
      class="flex items-start gap-5 rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        :src="
          item.variant?.image?.url ||
          `https://placehold.co/400x400/png?text=${item.title}`
        "
        :alt="item.variant?.image?.altText"
        class="w-12 rounded md:h-20 md:w-20"
      />
      <div class="flex-1">
        <p class="text-sm font-bold text-[#238878] md:text-base lg:text-xl">
          {{ item.title }}
        </p>
        <p class="text-xs text-gray-700 md:text-sm">
          Quantity: {{ item.quantity }}
        </p>
      </div>
      <div class="flex flex-col items-end">
        <p
          v-if="
            item.discountedTotalPrice.amount < item.originalTotalPrice.amount
          "
          class="text-gray-700 line-through"
        >
          Original: {{ item.originalTotalPrice.amount }}
          {{ item.originalTotalPrice.currencyCode }}
        </p>
        <p class="text-xs font-bold text-[#238878] lg:text-xl">
          Price:
          {{
            item.discountedTotalPrice.amount < item.originalTotalPrice.amount
              ? item.discountedTotalPrice.amount
              : item.originalTotalPrice.amount
          }}
          {{ item.discountedTotalPrice.currencyCode }}
        </p>
      </div>
    </li>
  </ul>
</template>
