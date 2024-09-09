<template>
    <div>
        {{ productHandle }}
        <hr>
         {{ data.title }} <br>
         {{ data.descriptionHtml }} <br>
         {{ data.options }} <br>
         {{ data.featuredImage }} <br>
         {{ data.images }} <br>
         {{ data.keyBenefits }} <br>
         {{ data.howToUse }} <br>
         {{ data.safetyInformationAndPrecaution }} <br>
         {{ data.otherInfo }} <br>
         {{ ! data.currentlyNotInStock }} <br>
        qty -- {{ data.quantityAvailable }} <br>
         {{ data.price.currencyCode }}
         {{ data.price.currencyCode }}
         {{ data.currentlyNotInStock }} <br>
         <!-- {{ data }} -->
         <ShopAddingToCartBtn :productID="data.id" cartID="#cartid" />
         <ShopAddingToWishList :productID="data.id" cartID="#cartid" />

    </div>
</template>

<script setup>
import { getProductData } from '~/shopify/productDetails';

const route = useRoute();
const productHandle = route.params.productSlug;


const data = await getProductData(productHandle);
console.log(data)


</script>