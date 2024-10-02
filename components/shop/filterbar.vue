<template>
  <div class="mt-3">
    <!-- <div
      v-if="!!props.hideProductType"
      class="me-2 mb-4 py-2 px-2 m-2 rounded-md border"
    >
      <div class="text-xl font-medium">Type of Products</div>
      <div class="p-3">
        <div v-for="(item, index) in TypeOfProducts" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedTypeOfProducts"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div> -->

    <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md border">
      <div class="text-xl font-medium">Skin Concern</div>
      <div class="p-3">
        <div v-for="(item, index) in SkinConcern" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedSkinConcern"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md border">
      <div class="text-xl font-medium">Hair Concern</div>
      <div class="p-3">
        <div v-for="(item, index) in HairConcern" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedHairConcern"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md border">
      <div class="text-xl font-medium">Nutrition and Diet</div>
      <div class="p-3">
        <div v-for="(item, index) in NutrionAndDiet" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedNutrionAndDiet"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md border">
      <div class="text-xl font-medium">Pediatric</div>
      <div class="p-3">
        <div v-for="(item, index) in Pediatric" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedPediatric"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="me-2 mb-4 py-2 px-2 m-2 rounded-md border">
      <div class="text-xl font-medium text-[#22423c]">Ingredient</div>
      <div class="p-3">
        <div v-for="(item, index) in Ingredent" :key="index">
          <label class="flex justify-start items-center mt-2">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedIngredent"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm font-semiboldbold">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  hideProductType: {
    type: Boolean,
    default: false,
  },
});

// const TypeOfProducts = [
//   { name: "Hair", value: "hair" },
//   { name: "Skin", value: "skin" },
//   { name: "Baby Care", value: "baby-care" },
// ];

const SkinConcern = [
  { name: "Acne & Acne Scar", value: "acne-and-ance-scar" },
  { name: "Aging", value: "aging" },
  { name: "Dehydration", value: "dehydration" },
  { name: "Damaged & Sensitive Skin", value: "damaged-and-sensitive-skin" },
  { name: "Under Eye Darkness", value: "under-eye-darkness" },
  { name: "Under Arm Darkness", value: "under-arm-darkness" },
  { name: "Stretch Marks", value: "stretch-marks" },
  { name: "Pigmentation", value: "pigmentation" },
  { name: "Oiliness", value: "oiliness" },
  { name: "Lip (Cracked/Darkness)", value: "lip-cracked-or-darkness" },
];

const HairConcern = [
  { name: "Dandruff", value: "dandruff" },
  { name: "Hairfall", value: "hairfall" },
  { name: "Hair Thinning", value: "hair-thinning" },
  { name: "Damaged & Fizzy Hair", value: "damaged-and-fizzy-hair" },
  { name: "Bald Patches", value: "bald-patches" },
  { name: "Dull Hair", value: "dull-hair" },
  { name: "Oily Scalp", value: "oily-scalp" },
];

const NutrionAndDiet = [
  { name: "Diet 1", value: "diet-1" },
  { name: "Diet 2", value: "diet-2" },
  { name: "Diet 3", value: "diet-3" },
];

const Pediatric = [
  { name: "Pediatric 1", value: "pediatric-1" },
  { name: "Pediatric 2", value: "pediatric-2" },
  { name: "Pediatric 3", value: "pediatric-3" },
];

const Ingredent = [
  { name: "Ingredient 1", value: "ingredient-1" },
  { name: "Ingredient 2", value: "ingredient-2" },
  { name: "Ingredient 3", value: "ingredient-3" },
];

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
    selectedSkinConcern: selectedSkinConcern.value,
    selectedHairConcern: selectedHairConcern.value,
    selectedNutrionAndDiet: selectedNutrionAndDiet.value,
    selectedPediatric: selectedPediatric.value,
    selectedIngredent: selectedIngredent.value,
  };

  router.push({ path: route.path, query: { ...route.query, ...query } });
};
</script>

<style scoped>
p {
  color: #22423c;
}
</style>
