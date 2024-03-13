<!-- NavBar.vue -->
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
        <Box v-for="(category, index) in categories" :key="index" :box-title="category" class="categoryButtons" @click="openEditCategoryModal(index)" /><br>
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
  <EditCategoryModal @editCategory="editCategory" />
</template>

<script>
import Box from './Box.vue'
import Content from './Content.vue'
import AddCategoryModal from './AddCategoryModal.vue'
import EditCategoryModal from './EditCategoryModal.vue' // Importiere EditCategoryModal

import { useRouter } from 'vue-router';

const router = useRouter();

export default {
  components: {
    Box,
    Content,
    AddCategoryModal,
    EditCategoryModal
  },
  data() {
    return {
      categories: this.loadCategoriesFromLocalStorage() || ['Kategorie 1'],
      activeComponent: 'Alle' // Default component
    }
  },
  methods: {
    navigateTo(routeName) {
      this.activeComponent = routeName; // Set the active component
    },
    openAddCategoryModal() {
      // Open the modal for adding a new category
      $('#Modal_Add_Category').modal('show');
    },
    openEditCategoryModal(index) {
      // Open the modal for editing a category
      this.editingCategoryIndex = index;
      $('#Modal_Edit_Category').modal('show');
    },
    editCategory(newName) {
      // Edit the category with the new name
      if (newName && newName.trim() !== '') {
        this.categories[this.editingCategoryIndex] = newName.trim();
        localStorage.setItem('categories', JSON.stringify(this.categories));
      }
    },
    loadCategoriesFromLocalStorage() {
      return JSON.parse(localStorage.getItem('categories'));
    }
  }
}
</script>
