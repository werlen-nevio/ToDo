<script setup>
    import Datum from './Datum.vue'

    const todos = JSON.parse(localStorage.getItem('todos'));
    const datumsArray = [];

    if (todos && Array.isArray(todos)) { // Überprüfe, ob todos nicht null ist und ein Array ist
        todos.forEach(todo => {
            if (todo.Datum && todo.Datum.trim() !== '') {
                const date = new Date(todo.Datum);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
                datumsArray.push(formattedDate);
            }
        });
    } else {
        console.error("No todos found in localStorage or todos is not an array");
    }

    const orderedDatumsArray = datumsArray.sort((a, b) => a.date - b.date);
</script>

<template>
    <div>
        <Datum v-for="(datum, index) in orderedDatumsArray" :key="index" :Datum="datum" />
    </div>
</template>
