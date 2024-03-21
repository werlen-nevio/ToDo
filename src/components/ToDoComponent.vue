<script setup>
  import ContentModal from './ContentModal.vue';
</script>

<template>
  <div class="ToDoComponent col-md-12 clearfix">
    <div class="ToDoCheckbox col-md-1 float-left">
      <input class="ToDoCheckboxInput" type="checkbox" :checked="Finished" @change="toggleStatus">
    </div>
    <div class="ToDoComponentDetails col-md-11 float-left">
      <h2 class="ToDoComponentDetail ToDoTitel">{{ Titel }}</h2>
      <p class="ToDoComponentDetail ToDoBeschreibung">{{ Beschreibung }}</p>
      <p class="ToDoComponentDetail ToDoDatum">{{ formatDate(Datum) }}</p>
    </div>
    <div class="TodoIcon col-md-1 float-left">
      <button @click="openModal" class="btn-edit">
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>
  </div>

  <ContentModal 
    :Titel="Titel"
    :Beschreibung="Beschreibung"
    :Datum="Datum"
    :ID="ID"
    :Kategorie="Kategorie"
  />
</template>

<script>
export default {
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
    Finished: {
      type: Boolean,
      required: true
    },
    Kategorie: {
      type: Number,
      required: true
    }
  },
  methods: {
    openModal() {
      $('#Modal_' + this.ID).modal('show');
    },
    toggleStatus(event) {
      // Aktualisiere den Status im localstorage
      const todos = JSON.parse(localStorage.getItem('todos'));
      const updatedTodos = todos.map(todo => {
        if (todo.id === this.ID) {
          todo.Finished = event.target.checked;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('de-DE', options);
    }
  }
}
</script>
