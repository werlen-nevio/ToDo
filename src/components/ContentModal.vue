<template>
  <div class="modal fade" :id="'Modal_'+ ID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">ToDo hinzufügen</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
                  </button>
              </div>
              <div class="modal-body">
                  <div class="form-group">
                      <label for="Titel">Titel *</label>
                      <input type="text" class="form-control" id="Titel" placeholder="Titel" v-model="localTitel" :class="{ 'is-invalid': !isTitelValid && addClicked }">
                      <div v-if="!isTitelValid && addClicked" class="invalid-feedback">Bitte geben Sie einen Titel ein.</div>
                  </div>
                  <div class="form-group">
                      <label for="Beschreibung">Beschreibung *</label>
                      <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibung" v-model="localBeschreibung" :class="{ 'is-invalid': !isBeschreibungValid && addClicked }">
                      <div v-if="!isBeschreibungValid && addClicked" class="invalid-feedback">Bitte geben Sie eine Beschreibung ein.</div>
                  </div>
                  <div class="form-group">
                      <label for="Datum">Datum *</label>
                      <input type="datetime-local" class="form-control" id="Datum" v-model="localDatum" :class="{ 'is-invalid': !isDatumValid && addClicked }">
                      <div v-if="!isDatumValid && addClicked" class="invalid-feedback">Bitte geben Sie ein Datum ein.</div>
                  </div>
                  <div class="form-group">
                      <label for="Kategorie">Kategorie</label>
                      <select class="form-control" name="Kategorie" id="Kategorie" v-model="selectedCategory">
                          <option value="0">---</option>
                          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.Titel }}</option>
                      </select>
                  </div>
              </div>
              <div class="modal-footer">
                  <button @click="addClicked = true; addTodo()" class="btn btn-primary">Hinzufügen</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useTodosStore } from '../Store/todoStore.js';
import { useCategoriesStore } from '../Store/categoryStore.js';

export default {
  props: {
    Titel: {
      type: String,
      required: false
    },
    Beschreibung: {
      type: String,
      required: false
    },
    Datum: {
      type: String,
      required: false
    },
    ID: {
      type: Number,
      required: true
    },
    Kategorie: {
      type: Number,
      required: false
    }
  },
  setup(props) {
    const store = useTodosStore();
    const categoriesStore = useCategoriesStore();
    const localTitel = ref(props.Titel || '');
    const localBeschreibung = ref(props.Beschreibung || '');
    const localDatum = ref(props.Datum || '');
    const selectedCategory = ref(props.Kategorie || 0);
    const addClicked = ref(false);

    const isTitelValid = computed(() => localTitel.value.trim() !== '');
    const isBeschreibungValid = computed(() => localBeschreibung.value.trim() !== '');
    const isDatumValid = computed(() => localDatum.value.trim() !== '');

    const addTodo = () => {
      if (!isTitelValid.value || !isBeschreibungValid.value || !isDatumValid.value) {
        return;
      }

      const newTodo = {
        id: store.todos.length + 1,
        Titel: localTitel.value,
        Beschreibung: localBeschreibung.value,
        Datum: localDatum.value,
        Kategorie: selectedCategory.value,
        Finished: false
      };

      store.addTodo(newTodo);

      localTitel.value = '';
      localBeschreibung.value = '';
      localDatum.value = '';
      selectedCategory.value = 0;
      $(`#Modal_${props.ID}`).modal('hide');
    };

    const categories = categoriesStore.getCategories();

    return {
      store,
      addTodo,
      localTitel,
      localBeschreibung,
      localDatum,
      categories,
      selectedCategory,
      isTitelValid,
      isBeschreibungValid,
      isDatumValid,
      addClicked
    };
  },
};
</script>
