<template>
    <div class="bg-fuchsia-500">
        btn to add wishlist -- {{ productID }}
    </div>
</template>

<script>
export default {

  props: {
    productID: {
      type: String,
      required: true,
    },
    
  },
};
</script>


<style lang="scss" scoped>

</style>