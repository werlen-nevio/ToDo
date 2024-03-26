import { defineStore } from 'pinia';

export const useLocalStorageStore = defineStore({
  id: 'localStorageStore',
  state: () => ({
    showFinished: localStorage.getItem('showFinished') === 'true' || false,
  }),
  getters: {
    getShowFinished() {
      return this.showFinished;
    },
  },
  actions: {
    change() {
      this.showFinished = !this.showFinished;
      localStorage.setItem('showFinished', this.showFinished);
    },
  },
});
