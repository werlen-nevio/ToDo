<template>
    <div class="modal fade" :id="'Modal_'+ ID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="ID != 0" class="modal-title" id="exampleModalLabel">ToDo bearbeiten</h5>
                    <h5 v-else class="modal-title" id="exampleModalLabel">ToDo hinzufügen</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="Titel">Titel *</label>
                        <input type="text" class="form-control" id="Titel" placeholder="Titel" :value="Titel">
                    </div>
                    <div class="form-group">
                        <label for="Beschreibung">Beschreibung *</label>
                        <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibung" :value="Beschreibung">
                    </div>
                    <div class="form-group">
                        <label for="Datum">Datum *</label>
                        <input type="datetime-local" class="form-control" id="Datum">
                    </div>
                    <div class="form-group">
                        <label for="Kategorie">Kategorie</label>
                        <select class="form-control" name="Kategorie" id="Kategorie">
                            <option value="0">---</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-if="ID != 0" class="btn btn-primary">Speichern</button>
                    <button v-else data-dismiss="modal" @click="addTodo()" class="btn btn-primary">Hinzufügen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTodosStore } from '../Store/todoStore.js'; // Import the store

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
    }
  },
  setup() {
    const store = useTodosStore();

    const addTodo = () => {
      const newTodo = {
        id: store.todos.length + 1,
        Titel: $("#Titel").val(),
        Beschreibung: $("#Beschreibung").val(),
        Datum: $("#Datum").val(),
        Kategorie: 0,
        Finished: false
      };

      store.addTodo(newTodo);
    };

    return {
      store,
      addTodo,
    };
  },
};
</script>
