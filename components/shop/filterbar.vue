<template>
  <div class="  me-2 mb-4 py-2 px-2 m-2 rounded-md     ">   
    <div class="text-xl   font-medium">Type of Products</div>
    <div class="p-3 " >
      <div v-for="(item, index) in TypeOfProducts" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedTypeOfProducts"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>

  <div class="  me-2  mb-4 py-2 px-2 m-2 rounded-md     "> 
      
    <div class="   text-xl   font-medium ">Skin Concern</div>
    <div class="p-3  " >
      <div v-for="(item, index) in SkinConcern" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedSkinConcern"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>

  <div class="  me-2 mb-4  py-2 px-2 m-2 rounded-md     "> 
      
    <div class="   text-xl   font-medium ">Hair Concern</div>
    <div class="p-3  " >
      <div v-for="(item, index) in HairConcern" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedHairConcern"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>

  <div class="  me-2 mb-4  py-2 px-2 m-2 rounded-md     "> 
      
    <div class="   text-xl   font-medium ">Nutrition and Diet</div>
    <div class="p-3  " >
      <div v-for="(item, index) in NutrionAndDiet" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedNutrionAndDiet"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>

  <div class="  me-2  mb-4 py-2 px-2 m-2 rounded-md     "> 
      
    <div class="   text-xl   font-medium ">Pediatric</div>
    <div class="p-3  " >
      <div v-for="(item, index) in Pediatric" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedPediatric"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>

  <div class="  me-2  mb-4 py-2 px-2 m-2 rounded-md     "> 
      
    <div class="   text-xl   font-medium text-[#22423c]">Ingredient</div>
    <div class="p-3  " >
      <div v-for="(item, index) in Ingredent" :key="index">
        <label class="flex justify-start items-center mt-2">
          <input
            type="checkbox"
            :value="item"
            v-model="selectedIngredent"
            @change="updateQueryParams"
            class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
          />
          <p class="text-sm font-semiboldbold">{{ item }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Define data arrays
const TypeOfProducts = ref([
  "Product Type 1",
  "Product Type 2",
  "Product Type 3",
]);

const SkinConcern = ref(["Concern 1", "Concern 2", "Concern 3"]);

const HairConcern = ref(["Hair Concern 1", "Hair Concern 2", "Hair Concern 3"]);

const NutrionAndDiet = ref(["Diet 1", "Diet 2", "Diet 3"]);

const Pediatric = ref(["Pediatric 1", "Pediatric 2", "Pediatric 3"]);

const Ingredent = ref(["Ingredient 1", "Ingredient 2", "Ingredient 3"]);

// Define reactive arrays for selected items
const selectedTypeOfProducts = ref([]);
const selectedSkinConcern = ref([]);
const selectedHairConcern = ref([]);
const selectedNutrionAndDiet = ref([]);
const selectedPediatric = ref([]);
const selectedIngredent = ref([]);

// Method to update query parameters
const updateQueryParams = () => {
  const queryParams = {
    typeOfProducts: selectedTypeOfProducts.value.join(","),
    skinConcern: selectedSkinConcern.value.join(","),
    hairConcern: selectedHairConcern.value.join(","),
    nutrionAndDiet: selectedNutrionAndDiet.value.join(","),
    pediatric: selectedPediatric.value.join(","),
    ingredent: selectedIngredent.value.join(","),
  };

  // Build query string from queryParams object
  const queryString = new URLSearchParams(queryParams).toString();

  // Update URL with new query parameters
  const router = useRouter();
  router.push({ query: queryParams });

  console.log("Query Parameters:", queryString);
};
</script>

<style scoped>
p{
    color: #22423c;
}
</style>
