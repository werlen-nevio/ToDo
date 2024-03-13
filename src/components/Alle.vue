<script setup>
    import ToDoComponent from './ToDoComponent.vue'
    import Datum from './Datum.vue'
</script>

<template>
    <Datum Datum="10.10.2023"/>
    <ToDoComponent Titel="Titel" Beschreibung="Beschreibung" Datum="20.03.2024 10:10" :ID="Number(1)"/>
</template>