import { defineStore } from 'pinia';
import EditCategoryModal from '../components/EditCategoryModal.vue';
import AddCategoryModal from '../components/AddCategoryModal.vue';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    editCategoryModal: false,
    addCategoryModal: false,
    category: null,
  }),
  actions: {
    openEditCategoryModal() {
      this.editCategoryModal = true;
    },
    closeEditCategoryModal() {
      this.editCategoryModal = false;
    },
    openAddCategoryModal() {
      this.addCategoryModal = true;
    },
    closeAddCategoryModal() {
      this.addCategoryModal = false;
    },
    setCategory(category) {
      this.category = category;
    },
  },
  getters: {
    getCategory() {
      return this.category;
    },
  },
  // Hier kannst du weitere Mutations, Actions und Getter definieren, wenn nötig
});
