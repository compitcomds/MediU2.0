<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-blue-500 p-4 text-white">
      <img :src="data.featuredImage.url" alt="" srcset="" />
      <div v-for="item in data.images" :key="item.id">
        <img :src="item.url" alt="" srcset="" />
      </div>
    </div>
    <div class="bg-green-500 p-4 text-white ">
    {{ data.title }} <br />
    <div v-html="data.descriptionHtml"></div>

    options -- {{ data.options }} <br />
    <hr>
    <div v-html="convertShopifyRichTextToHTML(data.keyBenefits?.value)" ></div><br /> <hr>
    <div v-html="convertShopifyRichTextToHTML(data.howToUse?.value)" ></div><br /> <hr>
    <div v-html="convertShopifyRichTextToHTML(data.safetyInformationAndPrecaution?.value)" ></div><br /> <hr>
    <div v-html="convertShopifyRichTextToHTML(data.otherInfo?.value)" ></div><br /> <hr>
    

    avilable -- {{ !data.currentlyNotInStock }} <br />
    qty -- {{ data.quantityAvailable }} <br />
    {{ data.price.currencyCode }}
    {{ data.price.amount }}
    <br /> 
    <hr>
    expire at -- 
    </div>
  </div>
  <!-- <div class="w-full bg-slate-500 h-16"></div>


  <div>
    {{ productHandle }}
    <hr />
    =
    {{ data.title }} <br />
    {{ data.descriptionHtml }} <br />
    {{ data.options }} <br />
    {{ data.featuredImage }} <br />
    {{ data.images }} <br />
    {{ data.keyBenefits }} <br />
    {{ data.howToUse }} <br />
    {{ data.safetyInformationAndPrecaution }} <br />
    {{ data.otherInfo }} <br />
    {{ !data.currentlyNotInStock }} <br />
    qty -- {{ data.quantityAvailable }} <br />
    {{ data.price.currencyCode }}
    {{ data.price.amount }}
    <br /> -->
  <!-- {{ data }} -->
  <ShopAddingToCartBtn :productId="data.id" cartID="#cartid" />
    <!--<ShopAddingToWishList :productId="data.productId" cartID="#cartid" />
    <ShopSharebtn
      :productLink="`http://localhost:3000/shop/product/${data.handle}`"
    />
  </div> -->
</template>

<script setup>
import { getProductData } from "~/shopify/productDetails";

const route = useRoute();
const productHandle = route.params.productSlug;

const data = await getProductData(productHandle);


function convertJsonToHtml(data) {
  // Check if data is valid and has the expected structure
  if (!data || data.type !== 'root' || !Array.isArray(data.children)) {
    throw new Error('Invalid data format');
  }

  // Helper function to process children nodes recursively
  function processNode(node) {
    switch (node.type) {
      case 'paragraph':
        return `<p>${node.children.map(processNode).join('')}</p>`;
      case 'text':
        return node.value;
      default:
        return '';
    }
  }

  // Process the root node and return the HTML
  return data.children.map(processNode).join('');
}
// const keyBenifites = convertJsonToHtml(data.keyBenefits);
// const howtouse = convertJsonToHtml(data.howToUse);
// const safetryInfo = convertJsonToHtml(data.safetyInformationAndPrecaution);
// const OtherInformations = convertJsonToHtml(data.otherInfo);
</script>

<style></style>
