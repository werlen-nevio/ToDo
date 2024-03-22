<script setup>
    import ContentModal from './ContentModal.vue';
    import FilterModal from './FilterModal.vue';
    import SearchModal from './SearchModal.vue';
</script>

<template>
  <SearchModal />
  <div class="Header col-md-12" style="min-height: 50px;">
    <div class="Title col-md-4 col-sm-4 float-left">
      <h1 class="Title-Text">{{ Titel }}</h1>
    </div>
    <div class="float-left">
      &nbsp;
      <button v-if="KategorieID != 0" @click="openEditCatModal(KategorieID)" class="btn btn-secondary float-right">
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>
    <div class="col-md-4 float-right">
      <button @click="openAddModal()" class="btn btn-secondary float-right">+</button>
      <button @click="openFilterModal()" class="Filter-btn btn btn-secondary float-right"><i class="fa-solid fa-filter"></i></button>
      <button @click="openSearchModal()" class="Filter-btn btn btn-secondary float-right"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button @click="showNavBar()" id="showNavBar" class="Filter-btn btn btn-secondary float-right"><i class="fa-solid fa-bars"></i></button>
    </div>  
  </div>

  <ContentModal 
    :ID= "Number(0)"
  />
  <FilterModal />
</template>

<script>
  export default {
    props: {
      Titel: {
        type: String,
        required: true
      },
      KategorieID: {
        type: Number,
        required: true
      }
    },
    methods: {
      openAddModal() {
        $('#Modal_0').modal('show');
      },
      openFilterModal() {
        $('#FilterModal').modal('show');
      },
      openSearchModal() {
        $('#SearchModal').modal('show');
      },
      showNavBar() {
        $('#NavBar').toggle();
      },
    }
  }
</script>