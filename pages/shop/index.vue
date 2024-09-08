<template>
    <div>
        <h1>
            this is shop page
            <ShopCard :productDetails="products"/>
        </h1>
    </div>
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";
const { products } = await fetchProducts();

</script>