<script setup>
    import ToDoComponent from './ToDoComponent.vue'
</script>

<template>
    <div class="ListDatum">
        <p class="ListDatumText">{{ formattedDate }}</p>
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
