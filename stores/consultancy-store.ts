import { defineStore } from "pinia";

type Step1DataType = {
  $id: string;
  title: string;
  descriptionHtml: string;
  price: number;
  tags: string[];
};

type Step2DataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
  image?: File | null;
};

export const useConsultancyStore = defineStore("consultancy-store", {
  state: (): { step1: Step1DataType; step2: Step2DataType } => ({
    step1: {
      $id: "",
      title: "",
      descriptionHtml: "",
      price: 0,
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
      return state.step1;
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
