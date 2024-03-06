<script setup>
    import EditModal from './EditModal.vue';
</script>

<template>
    <div class="ToDoComponent col-md-12 clearfix">
      <div class="ToDoCheckbox col-md-1 float-left">
        <input class="ToDoCheckboxInput" type="checkbox" name="" id="">
      </div>
      <div class="ToDoComponentDetails col-md-11 float-left">
        <h2 class="ToDoComponentDetail ToDoTitel">{{ Titel }}</h2>
        <p class="ToDoComponentDetail ToDoBeschreibung">{{ Beschreibung }}</p>
        <p class="ToDoComponentDetail ToDoDatum">{{ Datum }}</p>
      </div>
      <div class="TodoIcon col-md-1 float-left">
        <button @click="openModal" class="btn-edit">
          <i class="fa-solid fa-pen"></i>
        </button>
      </div>
    </div>
  
    <EditModal />
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
      },
      ID: {
        type: Number,
        required: true
      }
    },
    methods: {
      openModal() {
        $('#myModal').modal('show');
      }
    }
  }
  </script>  