<template>
    <div class="ToDoComponent col-md-12 clearfix">
        <div class="ToDoCheckbox col-md-1 float-left">
            <input class="ToDoCheckboxInput" type="checkbox" name="" id="">
        </div>
        <div class="ToDoComponentDetails col-md-11 float-left">
            <h2 class="ToDoComponentDetail ToDoTitel"> {{ Titel }} </h2>
            <p class="ToDoComponentDetail ToDoBeschreibung"> {{ Beschreibung }} </p>
            <p class="ToDoComponentDetail ToDoDatum"> {{ Datum }} </p>
        </div>
        <div class="TodoIcon col-md-1 float-left">
            <i class="fa-solid fa-pen"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            Titel: {
                type: String,
                required: true
            },
            Beschreibung: {
                type: String,
                required: true
            },
            Datum: {
                type: Date,
                required: true
            }
        }
    }
</script>