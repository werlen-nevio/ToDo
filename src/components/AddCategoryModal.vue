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
        <form>
          <div class="modal-body">
            <div class="form-group">
              <label for="Titel">Kategoriename *</label>
              <input type="text" class="form-control" v-model="titel">
            </div>
          </div>
          <div class="modal-footer">
            <button data-dismiss="modal" @click="addKategorie()" class="btn btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'; // Importiere ref und computed
import { useCategoriesStore } from '../Store/categoryStore.js'; // Importiere den Pinia-Speicher

export default {
  setup() {
    const categoryStore = useCategoriesStore(); // Zugriff auf den Pinia-Speicher

    const addCategoryModal = computed(() => categoryStore.addCategoryModal);
    const titel = ref('');

    const addKategorie = () => {
      const newKategorie = {
        id: categoryStore.categories.length + 1,
        Titel: titel.value
      };

      categoryStore.addCategory(newKategorie);
      titel.value = '';
    };

    return {
      addCategoryModal,
      titel,
      addKategorie,
    };
  },
};
</script>
