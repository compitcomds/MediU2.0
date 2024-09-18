<template>
    <div>
        this is [category]/[productSlug] shop page like hair , skin , baby care
        
        {{ productHandle }}/{{ category }}
    </div>
</template>

<script setup>
const route = useRoute();
const productHandle = route.params.productSlug;
const category = route.params.category
console.log(productHandle)
</script>