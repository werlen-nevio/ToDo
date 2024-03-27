<template>
  <div>
    <div v-for="(todo, index) in filteredTodos" :key="index">
      <ToDoComponent :Titel="todo.Titel" :Beschreibung="todo.Beschreibung" :Datum="todo.Datum" :ID="todo.id" :Finished="todo.Finished" :Kategorie="todo.Kategorie"/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTodosStore } from '../Store/todoStore.js';
import { useLocalStorageStore } from '../Store/useLocalStorageStore.js';
import ToDoComponent from './ToDoComponent.vue';

const store = useTodosStore();
const localStorageStore = useLocalStorageStore();

const filteredTodos = computed(() => {
  const today = new Date();
  const allTodos = store.todos;
  const showFinished = localStorageStore.getShowFinished;

  return allTodos.filter(todo => {
    const todoDate = new Date(todo.Datum);
    if (!showFinished) {
      return (
        today.getFullYear() === todoDate.getFullYear() &&
        today.getMonth() === todoDate.getMonth() &&
        today.getDate() === todoDate.getDate() &&
        !todo.Finished
      );
    } else {
      return (
        today.getFullYear() === todoDate.getFullYear() &&
        today.getMonth() === todoDate.getMonth() &&
        today.getDate() === todoDate.getDate()
      );
    }
  });
});
</script>
