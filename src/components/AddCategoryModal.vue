<template>
    <div class="modal fade" :class="{ 'show': addCategoryModal }" id="Modal_Add_Category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Kategorie hinzufügen</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
            </button>
          </div>
          <form @submit.prevent="addKategorie">
            <div class="modal-body">
              <div class="form-group">
                <label for="Titel">Kategoriename *</label>
                <input type="text" class="form-control" v-model="titel">
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Speichern</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useCategoryStore } from '../stores/categoryStore';
  
  export default {
    setup() {
      const categoryStore = useCategoryStore();
  
      const addCategoryModal = computed(() => categoryStore.addCategoryModal);
      const titel = ref('');
  
      const addKategorie = () => {
        if (titel.value.trim() !== '') {
          categoryStore.addKategorie(titel.value);
          titel.value = ''; // Clear the input field after saving
          addCategoryModal.value = false; // Close the modal after saving
        }
      };
  
      return {
        addCategoryModal,
        titel,
        addKategorie,
      };
    }
  };
  </script>
  