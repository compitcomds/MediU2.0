<template>
  <div class="mt-3">
    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium">Skin Concern</div>
      <div class="p-3">
        <div v-for="(item, index) in SkinConcern" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedSkinConcern"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>
    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium text-[#22423c]">Skin Ingredient</div>
      <div class="p-3">
        <div v-for="(item, index) in SkinIngredent" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedSkinIngredent"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>
    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium text-[#22423c]">Skin Care</div>
      <div class="p-3">
        <div v-for="(item, index) in SkinCare" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedSkinCare"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium">Hair Concern</div>
      <div class="p-3">
        <div v-for="(item, index) in HairConcern" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedHairConcern"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium text-[#22423c]">Hair Ingredient</div>
      <div class="p-3">
        <div v-for="(item, index) in Ingredent" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedIngredent"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>
    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium text-[#22423c]">Hair Care</div>
      <div class="p-3">
        <div v-for="(item, index) in HairCare" :key="index">
          <label class="mt-2 flex items-center justify-start">
            <input
              type="checkbox"
              :value="item.value"
              v-model="selectedHairCare"
              @change="updateQueryParams"
              class="checkbox me-3 rounded-md [--chkbg:#26504e] [--chkfg:white] checked:border-indigo-800"
            />
            <p class="text-sm text-[#22423c]">{{ item.name }}</p>
          </label>
        </div>
      </div>
    </div>

    <div class="m-2 mb-4 me-2 rounded-md border px-2 py-2">
      <div class="text-xl font-medium text-[#22423c]">Price</div>
      <div class="p-3">
        <ShopPriceSlider
          :min="min"
          :max="max"
          v-model:max-value="priceFilter.maxValue"
          v-model:min-value="priceFilter.minValue"
        />
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

const min = 0;
const max = 100000;
const priceFilter = ref({
  minValue: min,
  maxValue: max,
});

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

// const NutrionAndDiet = [
//   { name: "Diet 1", value: "diet-1" },
//   { name: "Diet 2", value: "diet-2" },
//   { name: "Diet 3", value: "diet-3" },
// ];

// const Pediatric = [
//   { name: "Pediatric 1", value: "pediatric-1" },
//   { name: "Pediatric 2", value: "pediatric-2" },
//   { name: "Pediatric 3", value: "pediatric-3" },
// ];

const Ingredent = [
  { name: "Minoxidil", value: "minoxidil" },
  { name: "Redensyl", value: "redensyl" },
  { name: "Capixyl", value: "capixyl" },
  { name: "Peptide", value: "peptide" },
  { name: "Carnitine", value: "carnitine" },
];
const SkinIngredent = [
  { name: "Vitamic C", value: "vitamin-c" },
  { name: "BHA / Salicylic Acid", value: "bha-salicylic-acid" },
  { name: "Retinoid", value: "retinoid" },
  { name: "Niacinamide", value: "niacinamide" },
  { name: "UV Filters", value: "uv-filters" },
  { name: "Ceramide", value: "ceramide" },
  { name: "Hyaluronic Acid", value: "hyaluronic-acid" },
];
const SkinCare = [
  { name: "Cleanser", value: "cleanser" },
  { name: "Toner", value: "toner" },
  { name: "Moisturize", value: "moisturize" },
  { name: "SPF", value: "spf" },
  { name: "Under Eye", value: "under-eye" },
  { name: "Roll On", value: "roll-on" },
];
const HairCare = [
  { name: "Shampoo", value: "shampoo" },
  { name: "Conditioner", value: "conditioner" },
  { name: "Mask", value: "mask" },
  { name: "Serum", value: "serum" },
];

const selectedSkinConcern = ref(
  ifStringMakeArray(route?.query?.["skin-concern"]),
);
const selectedHairConcern = ref(
  ifStringMakeArray(route?.query?.["hair-concern"]),
);
const selectedNutrionAndDiet = ref(
  ifStringMakeArray(route?.query?.["nutrition-and-diet"]),
);
const selectedPediatric = ref(ifStringMakeArray(route?.query?.["pediatric"]));
const selectedIngredent = ref(ifStringMakeArray(route?.query?.["ingredent"]));
const selectedSkinIngredent = ref(
  ifStringMakeArray(route?.query?.["skin-ingredent"]),
);
const selectedSkinCare = ref(ifStringMakeArray(route?.query?.["skin-care"]));
const selectedHairCare = ref(ifStringMakeArray(route?.query?.["hair-care"]));

const changeMinMaxPrice = useDebounceFn((newMinMax) => {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      min: newMinMax.minValue,
      max: newMinMax.maxValue,
    },
  });
}, 1000);

watch(
  () => priceFilter.value,
  (newFilter) => {
    changeMinMaxPrice(newFilter);
  },
  { deep: true, immediate: true },
);

const updateQueryParams = () => {
  const query = {
    "skin-concern": selectedSkinConcern.value,
    "hair-concern": selectedHairConcern.value,
    "nutrition-and-diet": selectedNutrionAndDiet.value,
    pediatric: selectedPediatric.value,
    ingredent: selectedIngredent.value,
    "skin-ingredent": selectedSkinIngredent.value,
    "skin-care": selectedSkinCare.value,
    "hair-care": selectedHairCare.value,
  };

  router.push({ path: route.path, query: { ...route.query, ...query } });
};
</script>
