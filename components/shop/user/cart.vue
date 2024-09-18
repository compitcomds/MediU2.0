<template>
  <div>
    <ul class="">
      <li class="flex gap-x-10" style="gap: 10px" v-for="item in cartItems">
        <div>
          <img
            :src="
              item?.image?.url ||
              `https://placehold.co/500x500/png?text=${item.title}`
            "
            :alt="item?.image?.altText || `${item.title} | Image`"
            class="max-w-sm aspect-square h-auto"
          />
        </div>
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.cost.currencyCode }} {{ item.cost.amount }}</p>
          <p>Item id: {{ item.id }}</p>
          <p>
            <nuxt-link :to="`/shop/product/${item.handle}`"
              >Product Link: {{ item.handle }}</nuxt-link
            >
          </p>
          <p>Line Id: {{ item.lineId }}</p>
          <p>Quantity Selected: {{ item.quantity }}</p>
          <p>
            Quantity Available: {{ item.quantityAvailable }}, Backorder:
            {{ item.currentlyNotInStock }}
          </p>
          <p>
            {{
              item.selectedOptions
                .map((option) => `${option.name}: ${option.value}`)
                .join(" ")
            }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import getCartData from "~/shopify/cart/get-cart-data";

const cartItems = ref([]);

try {
  const { items } = await getCartData();
  cartItems.value = items;
  console.log(items);
} catch (error) {
  alert("Error occured");
}
</script>

<style scoped></style>
