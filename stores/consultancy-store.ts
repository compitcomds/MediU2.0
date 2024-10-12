import { defineStore } from "pinia";

type Step1DataType = {
  category: string;
  id: string;
  title: string;
  descriptionHtml: string;
  price: { amount: string; currencyCode: string };
  productId: string;
  tags: string[];
};

type Step2DataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
};

export const useConsultancyStore = defineStore("consultancy-store", {
  state: (): { step1: Step1DataType; step2: Step2DataType } => ({
    step1: {
      category: "",
      id: "",
      title: "",
      descriptionHtml: "",
      price: { amount: "", currencyCode: "" },
      productId: "",
      tags: [],
    },
    step2: {
      email: "",
      firstName: "",
      lastName: "",
      note: "",
      phone: "",
    },
  }),
  getters: {
    service(state) {
      return CONSULTANCY_SERVICES.find(
        (service) => service.value === state.step1.category
      );
    },
  },
  actions: {
    setSelectedConsultancyProduct(product: Step1DataType) {
      this.step1 = product;
    },
    setBasicDetails(details: Step2DataType) {
      this.step2 = details;
    },
  },
});

export const CONSULTANCY_SERVICES = [
  {
    id: 1,
    name: "Dandruff",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "dandruff",
  },
  {
    id: 2,
    name: "Hairfall",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "hairfall",
  },
  {
    id: 3,
    name: "Hair Thinning",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "hair-thinning",
  },
  {
    id: 4,
    name: "Damaged & Fizzy Hair",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "damaged-fizzy-hair",
  },
  {
    id: 5,
    name: "Bald Patches",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "bald-patches",
  },
  {
    id: 6,
    name: "Dull Hair",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "dull-hair",
  },
  {
    id: 7,
    name: "Oily Scalp",
    duration: 60,
    price: 1000,
    category: "Hair",
    value: "oily-scalp",
  },
  {
    id: 8,
    name: "Acne & Acne Scar",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "acne-acne-scar",
  },
  {
    id: 9,
    name: "Aging",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "aging",
  },
  {
    id: 10,
    name: "Dehydration",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "dehydration",
  },
  {
    id: 11,
    name: "Damaged & Sensitive Skin",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "damaged-sensitive-skin",
  },
  {
    id: 12,
    name: "Under Eye Darkness",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "under-eye-darkness",
  },
  {
    id: 13,
    name: "Under Arm Darkness",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "under-arm-darkness",
  },
  {
    id: 14,
    name: "Stretch Marks",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "stretch-marks",
  },
  {
    id: 15,
    name: "Pigmentation",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "pigmentation",
  },
  {
    id: 16,
    name: "Oiliness",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "oiliness",
  },
  {
    id: 17,
    name: "Lip(Cracked/Darkness)",
    duration: 30,
    price: 500,
    category: "Skin",
    value: "lip-cracked-darkness",
  },
];
