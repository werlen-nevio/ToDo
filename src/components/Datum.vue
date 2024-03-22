<template>
    <div class="ListDatum">
        <p class="ListDatumText">{{ formattedDate }}</p>
    </div>
    <div v-for="(todo, index) in filteredTodos" :key="index">
      <ToDoComponent :Titel="todo.Titel" :Beschreibung="todo.Beschreibung" :Datum="todo.Datum" :ID="todo.id" :Finished="todo.Finished" :Kategorie="todo.Kategorie"/>
    </div>
</template>

<script>
    export default {
        props: {
            Datum: {
                type: Date,
                required: true
            }
        },
        computed: {
            formattedDate() {
                const date = new Date(this.Datum);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}.${month}.${year}`;
            }
        }
    }
</script>

<script setup>
import { computed, defineProps } from 'vue';
import { useTodosStore } from '../Store/todoStore.js';
import ToDoComponent from './ToDoComponent.vue';

const props = defineProps(['Datum']);


const store = useTodosStore();

const filteredTodos = computed(() => {
  const today = new Date(props.Datum);
  const allTodos = store.todos;

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

let showFinished = JSON.parse(localStorage.getItem('showFinished'));
</script>