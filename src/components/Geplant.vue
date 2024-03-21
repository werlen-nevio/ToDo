<script setup>
import { computed } from 'Vue'
import { useTodosStore } from '../Store/todoStore.js'
import Datum from './Datum.vue'

const todosStore = useTodosStore();

const orderedFutureDatumsArray = computed(() => {
  const now = new Date();
  const seenDates = new Set();
  return todosStore.todos
    .filter(todo => {
      if (!todo.Datum || todo.Datum.trim() === '') return false; // Ignore todos without Datum
      const date = new Date(todo.Datum);
      return date > now; // Only consider future dates
    })
    .map(todo => {
      const date = new Date(todo.Datum);
      const formattedDate = `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      if (!seenDates.has(formattedDate)) {
        seenDates.add(formattedDate);
        return { date: formattedDate, original: todo.Datum };
      }
      return null;
    })
    .filter(date => date !== null)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(item => item.original);
});
</script>


<template>
  <div>
    <Datum v-for="datum in orderedFutureDatumsArray" :key="datum" :Datum="datum" />
  </div>
</template>
