import { defineStore } from "pinia";

type Step1SelfAssessmentForm = {
  name: string;
  sex: string;
  age: string;
  pregnancyStatus: string;
  breastfeeding: string;
  concern: string;
};

type Step2SelfAssessmentForm = {
  condition: string;
  name?: string;
};

type Step3SelfAssessmentForm = {
  problem: string;
  name?: string;
};

type SelfAssessmentForm = {
  step1: Step1SelfAssessmentForm;
  step2: Step2SelfAssessmentForm;
  step3: Step3SelfAssessmentForm;
};

export const useSelfAssessmentStore = defineStore("self-assessment-store", {
  state: (): SelfAssessmentForm => ({
    step1: {
      name: "",
      sex: "",
      age: "",
      pregnancyStatus: "",
      breastfeeding: "",
      concern: "",
    },
    step2: {
      condition: "",
      name: "",
    },
    step3: {
      problem: "",
      name: "",
    },
  }),
  actions: {
    updateStep1Form(form: Step1SelfAssessmentForm) {
      this.step1 = form;
    },
    updateStep2Form(form: Step2SelfAssessmentForm) {
      this.step2 = form;
    },
    updateStep3Form(form: Step3SelfAssessmentForm) {
      this.step3 = form;
    },
  },
});
