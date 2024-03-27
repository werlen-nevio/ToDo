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
              <input type="text" class="form-control" v-model="titel" :class="{ 'is-invalid': !isTitelValid }">
              <div v-if="!isTitelValid" class="invalid-feedback">Bitte geben Sie einen Kategoriennamen ein.</div>
            </div>
          </div>
          <div class="modal-footer">
            <button data-dismiss="modal" @click="addKategorie()" :disabled="!isTitelValid" class="btn btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useCategoriesStore } from '../Store/categoryStore.js';

export default {
  setup() {
    const categoryStore = useCategoriesStore();

    const addCategoryModal = computed(() => categoryStore.addCategoryModal);
    const titel = ref('');
    const isTitelValid = computed(() => titel.value.trim() !== '');

    const addKategorie = () => {
      if (isTitelValid.value) {
        const newKategorie = {
          id: categoryStore.categories.length + 1,
          Titel: titel.value
        };

        categoryStore.addCategory(newKategorie);
        titel.value = '';
        $('#Modal_Add_Category').modal('hide');
      }
    };

    return {
      addCategoryModal,
      titel,
      isTitelValid,
      addKategorie,
    };
  },
};
</script>
