<template>
  <div>
    <button @click="showModal = true" class="btn-edit">
      <i class="fa-solid fa-pen"></i>
    </button>

    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div id="ModalTitel">
          <h2>ToDo bearbeiten <span @click="closeModal" class="close">&times;</span></h2>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="title">Titel *</label>
            <input type="text" class="form-control" id="title" v-model="editedTitel">
          </div>
          <div class="form-group">
            <label for="description">Beschreibung *</label>
            <textarea class="form-control" id="description" v-model="editedBeschreibung"></textarea>
          </div>
          <div class="form-group">
            <label for="date">Datum *</label>
            <input type="datetime-local" class="form-control" id="date" v-model="editedDatum">
          </div>
          <div class="form-group">
            <label for="Kategorie">Kategorie *</label>
            <select class="form-control" name="Kategorie" id="Kategorie" v-model="selectedCategory">
              <option value="0">---</option>
              <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id === Kategorie">{{ category.Titel }}</option>
            </select>
          </div>
          <button @click="saveChanges" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCategoriesStore } from '../Store/categoryStore.js';
import { useTodosStore } from '@/Store/todoStore';

export default {
  data() {
    return {
      showModal: false,
      editedTitel: this.Titel,
      editedBeschreibung: this.Beschreibung,
      editedDatum: this.Datum,
      categories: [],
      selectedCategory: this.Kategorie
    };
  },
  props: {
    Titel: {
      type: String,
      required: true
    },
    Beschreibung: {
      type: String,
      required: true
    },
    Datum: {
      type: String,
      required: true
    },
    ID: {
      type: Number,
      required: true
    },
    Kategorie: {
      type: Number,
      required: true
    },
    Finished: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    saveChanges() {
      if (!this.isFormValid()) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        return;
      }

      const updatedTodo = {
        Titel: this.editedTitel,
        Beschreibung: this.editedBeschreibung,
        Datum: this.editedDatum,
        id: this.ID,
        Kategorie: this.selectedCategory,
        Finished: this.Finished
      };

      this.todosStore.editTodo(updatedTodo);

      this.showModal = false;
    },
    closeModal() {
      this.showModal = false;
    },
    isFormValid() {
      return this.editedTitel.trim() !== '' &&
             this.editedBeschreibung.trim() !== '' &&
             this.editedDatum.trim() !== '';
    }
  },
  setup() {
    const categoriesStore = useCategoriesStore();
    const todosStore = useTodosStore();

    const categories = categoriesStore.getCategories();
    return { categories, todosStore };
  }
};
</script>

<style scoped>
#description {
  color: black;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #6c757d;
  margin: 15% auto;
  margin-top: 30px;
  padding: 20px;
  border: none;
  width: 50%;
}

.close {
  color: black;
  text-shadow: none;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
