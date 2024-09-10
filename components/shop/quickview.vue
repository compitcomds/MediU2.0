<template>
  <!-- <div>
    <UButton label="QUICK VIEW" @click="isOpen = true" />

    <UModal v-model="isOpen" :transition="false">
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
      <div class="p-4">
        <img :src="props.singleProduct.image ||  productData.images[0].url || 'https://placehold.co/600x400'"  alt="" srcset="" >
        <hr>
        <div class="flex space-x-4 overflow-x-auto">
            <div v-for="(productImage, index) in productData.images" :key="index">
              <img :src="productImage.url" alt="" class="h-20 w-20 object-cover">
            </div>
        </div>

        <div >
          {{ props.singleProduct.title || productData.title }} <br> 
          {{ props.singleProduct.id || productData.id }} <br> 
            <hr>
            {{ props.singleProduct.descriptionHtml || productData.descriptionHtml }} <br> 
            {{ props.singleProduct.price || productData.price}}   <br> 

        </div>

        

         <hr>
         <div v-if="productData.options" >
            <div v-if="productData.options[0]?.name !== 'Title'">
                {{ productData.options || ""}}
            </div>
        </div>
        <div v-else>
            loading
        </div>
      <pre>

         {{ productData }}

        </pre> 

         <hr>
         <ShopAddingToCartBtn :productId="singleProduct.id" cartID="#cartid" />
        
          

         <ShopAddingToWishList :productID="singleProduct.id" />
         <ShopSharebtn :productLink="`http://localhost:3000/shop/product/${singleProduct.handle}`" />

      </div>
      
    </UModal>
  </div> -->
</template>
<script setup lang="ts">
import { getProductData } from "~/shopify/productDetails";
const isOpen = ref(false);
// for solving an error for not geting open the model or not defaluti function make an *product define*
const productData = ref({});

const props = defineProps({
  singleProduct: {
    type: Object,
    required: true,
  },
});

// Watch for changes to `isOpen`
watch(isOpen, async (newValue) => {
  if (newValue) {
    try {
      const data = await getProductData(props.singleProduct.handle);
      productData.value = data; // Update reactive variable
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
});
</script>
