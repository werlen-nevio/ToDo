<script setup>
  import Box from './Box.vue'
  import Content from './Content.vue'
  import AddCategoryModal from './AddCategoryModal.vue'
</script>

<template>
  <div class="float-left">
    <div id="NavBar">
      <!-- Main Buttons -->
      <div class="text-center">
        <Box box-title="Alle" class="mainButtons" @click="navigateTo('Alle')" /><br>
        <Box box-title="Heute" class="mainButtons" @click="navigateTo('Heute')" /><br>
        <Box box-title="Geplant" class="mainButtons" @click="navigateTo('Geplant')" /><br>
      </div>
      <!-- Category Buttons -->
      <div>
        <p>Kategorien</p>
        <Box v-for="(category, index) in categories" :key="index" :box-title="category" class="categoryButtons" /><br>
        <Box box-title="+" class="categoryButtons" @click="openAddCategoryModal()" />
      </div>
      <!-- Logo -->
      <div class="logoStyle">
        <img src="../img/logo.png" alt="logo" id="logo">
      </div>
    </div>
  </div>
  <div id="Content" class="Content col-md-1 float-left">
    <Content :Komponent="activeComponent"/> <!-- Pass activeComponent as Komponent prop -->
  </div>
  <AddCategoryModal />
</template>

<script>
export default {
  components: {
    Box,
    Content
  },
  data() {
    return {
      categories: ['Kategorie 1'],
      activeComponent: 'Alle' // Default component
    }
  },
  methods: {
    navigateTo(routeName) {
      this.activeComponent = routeName; // Set the active component
    },
    openAddCategoryModal() {
      // Open the modal
      $('#Modal_Add_Category').modal('show');
    }
  }
}
</script>