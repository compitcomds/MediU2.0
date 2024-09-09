<template>
    MAKE A FUNCTION THAT LOAD A SHOP CARD 30 EACH TIME AND AS THE USER REACH AT END THNEXT 30 WILL WE RENDER
    <div>
        <ShopFilterbar/>     
    </div>


    <div>
            <ShopCard :productDetails="products"/>
    </div>
    
</template>

<script setup>
import { fetchProducts } from "~/shopify/products";
const { products } = await fetchProducts();

</script>