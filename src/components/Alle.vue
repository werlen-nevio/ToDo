<script setup>
    import Datum from './Datum.vue'
</script>

<template>
    <div>
        <Datum v-for="(datum, index) in orderedDatumsArray" :key="index" :Datum="datum" />
    </div>
</template>


<script>
const todos = JSON.parse(localStorage.getItem('todos'));

const datumsArray = [];

todos.forEach(todo => {
    if (todo.Datum && todo.Datum.trim() !== '') {
        const date = new Date(todo.Datum);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
        datumsArray.push(formattedDate);
    }
});

const orderedDatumsArray = datumsArray.sort((a, b) => a.date - b.date);
</script>
