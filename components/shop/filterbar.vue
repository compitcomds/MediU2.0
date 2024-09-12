<template>
  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium">Type of Products</div>
    <div class="p-3">
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

  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium">Skin Concern</div>
    <div class="p-3">
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

  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium">Hair Concern</div>
    <div class="p-3">
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

  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium">Nutrition and Diet</div>
    <div class="p-3">
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

  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium">Pediatric</div>
    <div class="p-3">
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

  <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md">
    <div class="text-xl font-medium text-[#22423c]">Ingredient</div>
    <div class="p-3">
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

const router = useRouter();
const route = useRoute();

const shopStore = useShopStore();

const TypeOfProducts = ["Product Type 1", "Product Type 2", "Product Type 3"];
const SkinConcern = ["Concern 1", "Concern 2", "Concern 3"];
const HairConcern = ["Hair Concern 1", "Hair Concern 2", "Hair Concern 3"];
const NutrionAndDiet = ["Diet 1", "Diet 2", "Diet 3"];
const Pediatric = ["Pediatric 1", "Pediatric 2", "Pediatric 3"];
const Ingredent = ["Ingredient 1", "Ingredient 2", "Ingredient 3"];

const selectedTypeOfProducts = ref(
  ifStringMakeArray(route?.query?.selectedTypeOfProducts)
);
const selectedSkinConcern = ref(
  ifStringMakeArray(route?.query?.selectedSkinConcern)
);
const selectedHairConcern = ref(
  ifStringMakeArray(route?.query?.selectedHairConcern)
);
const selectedNutrionAndDiet = ref(
  ifStringMakeArray(route?.query?.selectedNutrionAndDiet)
);
const selectedPediatric = ref(
  ifStringMakeArray(route?.query?.selectedPediatric)
);
const selectedIngredent = ref(
  ifStringMakeArray(route?.query?.selectedIngredent)
);

const updateQueryParams = () => {
  const query = {
    selectedTypeOfProducts: selectedTypeOfProducts.value,
    selectedSkinConcern: selectedSkinConcern.value,
    selectedHairConcern: selectedHairConcern.value,
    selectedNutrionAndDiet: selectedNutrionAndDiet.value,
    selectedPediatric: selectedPediatric.value,
    selectedIngredent: selectedIngredent.value,
  };

  router.push({ query, path: "/shop" });

  shopStore.updateSHopifyProductsQuery(convertQueryParamsToQueryString(query));
};
</script>

<style scoped>
p {
  color: #22423c;
}
</style>
