<script setup>
    import ToDoComponent from './ToDoComponent.vue';
</script>

<template>
      <ToDoComponent v-for="todo in filteredTodos" :key="todo.id" :Titel="todo.Titel" :Beschreibung="todo.Beschreibung" :Datum="todo.Datum" :ID="todo.id" :Finished="todo.Finished" :Kategorie="todo.Kategorie"/>
  </template>
  
  <script>
  import { useTodosStore } from '../Store/todoStore.js';
  
  export default {
    props: {
      search: {
        type: String,
        required: true,
      },
    },
    computed: {
      filteredTodos() {
        const todosStore = useTodosStore();
        return todosStore.todos.filter((todo) =>
          todo.Titel.toLowerCase().includes(this.search.toLowerCase()) ||
          todo.Beschreibung.toLowerCase().includes(this.search.toLowerCase()) ||
          todo.Datum.toLowerCase().includes(this.search.toLowerCase())
        );
      },
    },
  };
  </script>
  