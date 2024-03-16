<template>
    <div>
      <div v-for="(todo, index) in filteredTodos" :key="index">
        <ToDoComponent :Titel="todo.Titel" :Beschreibung="todo.Beschreibung" :Datum="todo.Datum" :ID="todo.id"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import ToDoComponent from './ToDoComponent.vue';
  
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  
  const filteredTodos = todos.filter(todo => {
    const today = new Date();
    const todoDate = new Date(todo.Datum);
  
    return (
      today.getFullYear() === todoDate.getFullYear() &&
      today.getMonth() === todoDate.getMonth() &&
      today.getDate() === todoDate.getDate()
    );
  });
  </script>
  