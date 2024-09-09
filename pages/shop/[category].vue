<template>
    <div>
        this is [category] shop page like hair , skin , baby care {{ category }}
        <ShopFilterbar :category="category" />
        
    </div>
</template>

<script setup>
import Filterbar from '~/components/shop/filterbar.vue';

const route = useRoute();
const category = route.params.category;

console.log(category)
</script>