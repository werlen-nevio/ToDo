<!-- EditCategoryModal.vue -->
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
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Abbrechen</button>
            <button type="submit" class="btn btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCategoryName: ''
    };
  },
  methods: {
    saveCategory() {
      if (this.newCategoryName.trim() !== '') {
        this.$emit('editCategory', this.newCategoryName);
        this.newCategoryName = ''; // Clear the input field after saving
        $('#Modal_Edit_Category').modal('hide'); // Close the modal after saving
      }
    }
  }
};
</script>
