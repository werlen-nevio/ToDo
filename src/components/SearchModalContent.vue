<template>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.Titel }}
        <p>{{ todo.Beschreibung }}</p>
        <p>{{ todo.Datum }}</p>
      </li>
    </ul>
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
  