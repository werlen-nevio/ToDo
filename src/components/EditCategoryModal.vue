<template>
  <div class="modal fade" :id="'Modal_Edit_Category' + categoryId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Kategorie bearbeiten</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="editCategoryName">Neuer Kategoriename *</label>
            <input type="text" class="form-control" id="editCategoryName" v-model="newCategoryName" placeholder="Neuer Name">
            <span v-if="!isCategoryNameValid()" class="text-danger">Kategoriename darf nicht leer sein.</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" :disabled="todosCountForCategory > 0" @click="deleteAndReload(categoryId)">Löschen</button>
          <button type="submit" class="btn btn-primary" @click="validateAndSaveCategory(categoryId)">Speichern</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from '../Store/categoryStore.js';
import { useTodosStore } from '../Store/todoStore.js';

export default {
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newCategoryName: '',
      todosCountForCategory: 0
    };
  },
  mounted() {
    this.countTodosForCategory();
    const todosStore = useTodosStore();
    this.unwatchTodos = todosStore.$subscribe((mutation, state) => {
      this.countTodosForCategory();
    });
  },
  beforeUnmount() {
    this.unwatchTodos();
  },
  methods: {
    isCategoryNameValid() {
      return this.newCategoryName.trim() !== '';
    },
    async countTodosForCategory() {
      const todosStore = useTodosStore();
      const todos = todosStore.getTodos();
      const todosForCategory = todos.filter(todo => todo.Kategorie === this.categoryId);
      this.todosCountForCategory = todosForCategory.length;
    },
    deleteAndReload(id) {
      if (this.todosCountForCategory === 0) {
        const categoriesStore = useCategoriesStore();
        categoriesStore.deleteCategory(id);
        $('#Modal_Edit_Category' + id).modal('hide');
        window.location.reload();
      }
    },
    validateAndSaveCategory(id) {
      if (this.isCategoryNameValid()) {
        const categoriesStore = useCategoriesStore();
        const categoryToUpdate = categoriesStore.categories.find(category => category.id === id);
        if (categoryToUpdate) {
          categoryToUpdate.Titel = this.newCategoryName;
          categoriesStore.saveCategories();
          $('#Modal_Edit_Category' + id).modal('hide');
        }
      }
    }
  }
};
</script>
