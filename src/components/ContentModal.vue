<template>
  <div class="modal fade" :id="'Modal_'+ ID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 v-if="ID !== 0" class="modal-title" id="exampleModalLabel">ToDo bearbeiten</h5>
                  <h5 v-else class="modal-title" id="exampleModalLabel">ToDo hinzufügen</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
                  </button>
              </div>
              <div class="modal-body">
                  <div class="form-group">
                      <label for="Titel">Titel *</label>
                      <input type="text" class="form-control" id="Titel" placeholder="Titel" v-model="localTitel">
                  </div>
                  <div class="form-group">
                      <label for="Beschreibung">Beschreibung *</label>
                      <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibung" v-model="localBeschreibung">
                  </div>
                  <div class="form-group">
                      <label for="Datum">Datum *</label>
                      <input type="datetime-local" class="form-control" id="Datum" v-model="localDatum">
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
                  <button v-if="ID !== 0" class="btn btn-primary">Speichern</button>
                  <button v-else data-dismiss="modal" @click="addTodo()" class="btn btn-primary">Hinzufügen</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
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
      required: true
    }
  },
  setup(props) {
    const store = useTodosStore();
    const categoriesStore = useCategoriesStore();
    let localTitel = ref(props.Titel || '');
    let localBeschreibung = ref(props.Beschreibung || '');
    let localDatum = ref(props.Datum || '');

    const addTodo = () => {
      const newTodo = {
        id: store.todos.length + 1,
        Titel: localTitel.value,
        Beschreibung: localBeschreibung.value,
        Datum: localDatum.value,
        Kategorie: selectedCategory.value,
        Finished: false
      };

      store.addTodo(newTodo);
    };

    const categories = categoriesStore.getCategories();

    const selectedCategory = ref(props.Kategorie || 0);

    return {
      store,
      addTodo,
      localTitel,
      localBeschreibung,
      localDatum,
      categories,
      selectedCategory
    };
  },
};
</script>
