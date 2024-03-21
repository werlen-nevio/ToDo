<script setup>
import { computed } from 'Vue'
import { useTodosStore } from '../Store/todoStore.js'
import Datum from './Datum.vue'

const todosStore = useTodosStore();

const orderedDatumsArray = computed(() => {
  const seenDates = new Set();
  return todosStore.todos
    .filter(todo => todo.Datum && todo.Datum.trim() !== '')
    .map(todo => {
      const date = new Date(todo.Datum);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
      if (!seenDates.has(formattedDate)) {
        seenDates.add(formattedDate);
        return formattedDate;
      }
      return null; // Exclude duplicate dates
    })
    .sort((a, b) => new Date(a) - new Date(b))
    .filter(date => date !== null); // Remove null values (duplicates)
});
</script>


<template>
  <div>
    <Datum v-for="datum in orderedDatumsArray" :key="datum" :Datum="datum" />
  </div>
</template>
