<script setup>
    import ContentModal from './ContentModal.vue';
</script>

<template>
  <div class="Header col-md-12" style="min-height: 50px;">
    <div class="Title col-md-4 float-left">
      <h1 class="Title-Text">{{ Titel }}</h1>
    </div>
    <div class="col-md-4 float-right">
      <button @click="openModal()" class="btn btn-secondary float-right">+</button>
      <button class="Filter-btn btn btn-secondary float-right"><i class="fa-solid fa-filter"></i></button>
    </div>  
  </div>

  <ContentModal 
    :ID= "Number(0)"
  />
</template>

<script>
  export default {
    props: {
      Titel: {
        type: String,
        required: true
      }
    },
    methods: {
      openModal() {
        $('#Modal_0').modal('show');
      }
    }
  }
</script>