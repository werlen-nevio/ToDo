<script setup>
import { computed, ref, defineProps, watch } from 'vue';
import { useTodosStore } from '../Store/todoStore.js'
import Datum from './Datum.vue'

const props = defineProps({
  KategorieID: {
    type: String,
    required: false
  }
});

const todosStore = useTodosStore();
const KategorieID = ref(props.KategorieID);

const orderedDatumsArray = computed(() => {
  const seenDates = new Set();
  return todosStore.todos
    .filter(todo => todo.Kategorie == KategorieID.value)
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

watch(() => props.KategorieID, (newKategorieID, oldKategorieID) => {
  KategorieID.value = newKategorieID;
});
</script>

<template>
  <div>
    <Datum v-for="datum in orderedDatumsArray" :key="datum" :Datum="datum" />
  </div>
</template>
