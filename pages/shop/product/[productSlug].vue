<!-- <template>
  <div v-if="data" class="py-6 mt-10 text-black">
    <div
      class="grid grid-cols-8 lg:grid-cols-12 gap-x-3 lg:gap-x-4 gap-y-3 mx-3 relative"
    >
      <div class="col-span-8 lg:col-span-6 relative">
        <div class="sticky top-0 ">
          <ShopImages :title="data.title" :images="data.images" />
        </div>
      </div>
      <div class="col-span-8 lg:col-span-6 lg:px-3">
        <h1 class="uppercase text-4xl font-bold lg:text-5xl text-black mb-6">
          {{ data.title }}
        </h1>
        <p v-html="data.descriptionHtml" class="text-black text-sm mb-8"></p>
        <div class="mb-8">
          <h2 class="font-medium text-black">PRICE</h2>
          <p class="uppercase text-xl font-bold">
            {{ data.price?.currencyCode }} {{ data.price?.amount }}
          </p>
        </div>
        <div class="flex gap-5 flex-wrap items-center mb-8">
          <div
            class="border-black border w-1/4 py-3 px-4 flex items-center justify-between"
          >
            <button class="text-3xl">-</button>
            <p class="text-2xl">1</p>
            <button class="text-3xl">+</button>
          </div>
          <button
            class="bg-black text-white text-lg flex items-center flex-1 justify-center h-full py-4"
          >
            ADD TO CART
          </button>
          <ShopAddingToCartBtn :productId="data.id"/>
        </div>
        <div>
          <template v-for="key in accordionKeys">
            <div
              v-if="!!data[key.value]"
              class="collapse collapse-plus border-b-2 shadow-none rounded-none"
            >
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div class="collapse-title text-xl font-medium">
                <h3 class="font-medium uppercase">
                  {{ key.name }}
                </h3>
              </div>
              <div
                class="collapse-content"
                v-html="convertShopifyRichTextToHTML(data[key.value].value)"
              ></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProductData } from "~/shopify/productDetails";

const route = useRoute();
const productHandle = route.params.productSlug;

const data = ref(null);

const accordionKeys = [
  {
    name: "Safety information / Precaution",
    value: "safetyInformationAndPrecaution",
  },
  {
    name: "How to use?",
    value: "howToUse",
  },
  {
    name: "Key benefits",
    value: "keyBenefits",
  },
];

onMounted(async () => {
  try {
    const product = await getProductData(productHandle);
    data.value = product;
    product.images;
    console.log(product.images);
    console.log(product);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});
</script>

<style scoped>

</style> 


 -->


<template>

  <!-- <div v-if="data" class="py-6 mt-10 text-black">
    <div class="grid grid-cols-8 lg:grid-cols-12 gap-x-3 lg:gap-x-4 gap-y-3 mx-3 relative">

      <div class="col-span-8 lg:col-span-6 relative">
        <div class="sticky top-0" ref="imageContainer">
          <div id="img-container" class="relative overflow-hidden rounded-lg shadow-lg  bg-slate-500">
            <ShopImages :title="data.title" :images="data.images" />
          </div>
        </div>
      </div>

      
      <div class="col-span-8 lg:col-span-6 lg:px-3">
       
        <h1 class="uppercase text-4xl font-bold lg:text-5xl text-black mb-6">
          {{ data.title }}
        </h1>

       
        <p v-html="data.descriptionHtml" class="text-gray-700 text-sm mb-8 leading-relaxed"></p>

        
        <div class="mb-8">
          <h2 class="font-medium text-gray-900">PRICE</h2>
          <p class="uppercase text-2xl font-bold text-gray-800">
            {{ data.price?.currencyCode }} {{ totalPrice }}
          </p>
        </div>

        
        <div class="flex gap-5 flex-wrap items-center mb-8">
          <div class="border-gray-400 border w-1/4 py-3 px-4 flex items-center justify-between rounded-lg">
            <button @click="decreaseQuantity" class="text-3xl">-</button>
            <p class="text-2xl">{{ quantity }}</p>
            <button @click="increaseQuantity" class="text-3xl">+</button>
          </div>

          
          <button
            class="bg-purple-600 text-white text-lg flex items-center justify-center flex-1 h-full py-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            ADD TO CART
          </button>

         
          <ShopAddingToCartBtn :productId="data.id"/>
        </div>

        
        <div>
          <template v-for="key in accordionKeys">
            <div
              v-if="!!data[key.value]"
              class="collapse collapse-plus border-b-2 shadow-none rounded-none"
            >
              <input type="checkbox" class="collapse-toggle" />
              <div class="collapse-title text-xl font-medium">
                <h3 class="font-medium uppercase">{{ key.name }}</h3>
              </div>
              <div
                class="collapse-content"
                v-html="convertShopifyRichTextToHTML(data[key.value].value)"
              ></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div> -->
  <div class="mx-20 my-5">
    {{data}}
    <div v-if="data">
      <div class="grid grid-cols-5 gap-4 md:grid-cols-5">

        <div class="col-span-5 md:col-span-2  ">
          <div class="flex justify-center items-center border rounded-md mb-3 bg-emerald-50 border-gray-200 p-2">
            <img :src="data?.featuredImage.url " alt="" srcset="" class="rounded object-cover">
          </div>
          <div class="flex w-full bg-slate-200 gap-2 px-2 py-1 ">
            <div v-for="(item,index) in data.images" :key="item.url">
              <img :src=item.url alt="" srcset="" class="border border-cyan-300 h-32 w-32 object-cover rounded ">
            </div>
          </div>
        </div>
  
        <div class="col-span-5 md:col-span-3 bg-green-500 ">
          <div>{{data.title}}</div>
          <div>Treats Active Acne | Unclogs Pores</div>
          <div class="flex">
            <div>4.7</div>
            <div class="flex gap-5">
              <div>tick icon</div>
              <div class="flex gap-2">
                <div>icon-verified Ratings</div>
                <div>verified Ratings</div>
              </div>
            </div>
          </div>
          <div v-if="true"> <!-- for salse-->
            <div>Special Price</div>
            <div class="flex">
              actual price
            </div>
            <div>
              price
            </div>
            <div>
              percentage discount%
            </div>
  
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      asd
      </div>
  </div>
</template>

<script setup>
  import { getProductData } from "~/shopify/productDetails";
  import { onMounted, ref, computed } from 'vue';

  const route = useRoute();
  const productHandle = route.params.productSlug;

  const data = ref({});
  const quantity = ref(1);  // Initialize the quantity

  // Computed property for total price
  const totalPrice = computed(() => {
    return (data.value.price?.amount * quantity.value).toFixed(2);
  });

  const accordionKeys = [
    {
      name: "Safety information / Precaution",
      value: "safetyInformationAndPrecaution",
    },
    {
      name: "How to use?",
      value: "howToUse",
    },
    {
      name: "Key benefits",
      value: "keyBenefits",
    },
  ];


    try {
      const product = await getProductData(productHandle);
      data.value = product;
      setupImageZoom();
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  

  const setupImageZoom = () => {
    var options2 = {
      fillContainer: true,
      offset: { vertical: 0, horizontal: 10 },
    };
    new ImageZoom(document.getElementById("img-container"), options2);
  };

  // Methods to increase/decrease quantity
  const increaseQuantity = () => {
    if (quantity.value < 5) {
      quantity.value++;
    }
  };

  const decreaseQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--;
    }
  };
</script>

<style scoped>
  /* Optional: Custom Styles for additional creativity */
  .collapse .collapse-title {
    cursor: pointer;
  }

  .collapse .collapse-title:hover {
    color: #6b46c1;
    /* Hover effect for accordion title */
  }
</style>