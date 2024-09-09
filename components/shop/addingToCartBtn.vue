<template>
    <div>
        <div class="p-2 bg-orange-400 ">
          click to add to cart btn
        {{ productID }}
        <br>
        {{ cartID }}
      </div>
    </div>
  </template>
  
  <script>
  export default {

    props: {
      productID: {
        type: String,
        required: true,
      },
      cartID: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  