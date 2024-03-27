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
      <b-button @click="openModal" variant="primary"></b-button>
    </div>
    <b-modal ref="myModalRef" :id="'Modal_' + ID" title="Edit Content">
      <ContentModalEdit
        :Titel="Titel"
        :Beschreibung="Beschreibung"
        :Datum="Datum"
        :ID="ID"
        :Kategorie="Kategorie"
        :Finished="Finished"
      />
    </b-modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import ContentModalEdit from './ContentModal_edit.vue';
import { useTodosStore } from '../Store/todoStore.js';

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
  components: {
    ContentModalEdit
  },
setup(props) {
  const myModalRef = ref(null);
  const ID = ref(props.ID);

  const openModal = () => {
    myModalRef.value.show();
  };

  const toggleStatus = (event) => {
    const todosStore = useTodosStore();
    const updatedTodos = todosStore.todos.map(todo => {
      if (todo.id === ID.value) {
        todo.Finished = event.target.checked;
      }
      return todo;
    });
    todosStore.todos = updatedTodos;
    todosStore.saveTodos();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const optionsWithTime = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    const optionsWithoutTime = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };

    const timePresent = dateString.includes('T');

    if (timePresent) {
      return date.toLocaleDateString('de-DE', optionsWithTime);
    } else {
      return date.toLocaleDateString('de-DE', optionsWithoutTime);
    }
  };

  return { myModalRef, openModal, toggleStatus, formatDate };
}
}
</script>
