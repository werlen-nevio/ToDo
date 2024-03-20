<template>
  <div class="modal fade" :class="{ 'show': editCategoryModal }" id="Modal_Edit_Category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <!-- Add a button to delete the category -->
            <!-- <button type="button" class="btn btn-primary" data-delete="modal">Löschen</button> -->
            <button type="submit" class="btn btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCategoryStore } from '../stores/categoryStore';

export default {
  setup() {
    const categoryStore = useCategoryStore();

    const editCategoryModal = computed(() => categoryStore.editCategoryModal);
    const newCategoryName = ref('');

    const saveCategory = () => {
      if (newCategoryName.value.trim() !== '') {
        categoryStore.saveCategory(newCategoryName.value);
        newCategoryName.value = ''; // Clear the input field after saving
        editCategoryModal.value = false; // Close the modal after saving
      }
    };

    return {
      editCategoryModal,
      newCategoryName,
      saveCategory,
    };
  }
};
</script>
