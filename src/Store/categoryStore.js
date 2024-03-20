import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: JSON.parse(localStorage.getItem('categories')) || [],
  }),
  actions: {
    addCategory(newCategory) {
      this.categories.push(newCategory);
      this.saveCategories();
    },
    editCategory(updatedCategory) {
      const categoryIndex = this.categories.findIndex(category => category.id === updatedCategory.id);
      if (categoryIndex !== -1) {
        this.categories[categoryIndex] = updatedCategory;
        this.saveCategories();
      }
    },
    deleteCategory(id) {
      this.categories = this.categories.filter(category => category.id !== id);
      this.saveCategories();
    },
    getCategories() {
      return this.categories;
    },
    saveCategories() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
  },
});