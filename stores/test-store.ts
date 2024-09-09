import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
