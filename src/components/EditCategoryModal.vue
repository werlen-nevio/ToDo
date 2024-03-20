<template>
  <div class="modal fade" id="Modal_Edit_Category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Kategorie bearbeiten</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="saveCategory">
          <div class="modal-body">
            <div class="form-group">
              <label for="editCategoryName">Neuer Kategoriename *</label>
              <input type="text" class="form-control" id="editCategoryName" v-model="newCategoryName" placeholder="Neuer Name">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteCategory(categoryId)">Löschen</button>

            <button type="submit" class="btn btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from '../Store/categoryStore.js'; // Importiere den Pinia-Speicher

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
    };
  },
  methods: {
    saveCategory() {
      if (this.newCategoryName.trim() !== '') {
        const store = useCategoriesStore(); // Zugriff auf den Pinia-Speicher
        store.editCategory({ id: this.categoryId, name: this.newCategoryName }); // Bearbeiten der Kategorie im Store
        this.newCategoryName = ''; // Clear the input field after saving
        $('#Modal_Edit_Category').modal('hide'); // Close the modal after saving
      }
    },
    deleteCategory() {
      const store = useCategoriesStore(); // Zugriff auf den Pinia-Speicher
      store.deleteCategory(this.categoryId); // Löschen der Kategorie im Store
      $('#Modal_Edit_Category').modal('hide'); // Close the modal after deleting
    }
  }
};
</script>
