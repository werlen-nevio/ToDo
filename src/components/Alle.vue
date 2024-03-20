<script setup>
import { computed } from 'vue'
import { useTodosStore } from '../Store/todoStore.js'
import Datum from './Datum.vue'

const todosStore = useTodosStore();

const orderedDatumsArray = computed(() => {
  return todosStore.todos
    .filter(todo => todo.Datum && todo.Datum.trim() !== '')
    .map(todo => {
      const date = new Date(todo.Datum);
      return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    })
    .sort((a, b) => new Date(a) - new Date(b));
});
</script>

<template>
  <div>
    <Datum v-for="(datum, index) in orderedDatumsArray" :key="index" :Datum="datum" />
  </div>
</template>
