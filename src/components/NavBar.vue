<template>
  <div class="float-left">
    <div id="NavBar">
      <div class="text-center">
        <Box box-title="Alle" class="mainButtons" @click="navigateTo('Alle')" /><br>
        <Box box-title="Heute" class="mainButtons" @click="navigateTo('Heute')" /><br>
        <Box box-title="Geplant" class="mainButtons" @click="navigateTo('Geplant')" /><br>
      </div>
      <div>
        <p>Kategorien</p>
        <Box v-for="(category, index) in categories" :key="index" :box-title="category.Titel" class="categoryButtons"/><br>
        <Box box-title="+" class="categoryButtons" @click="openAddCategoryModal()" />
      </div>
      <div class="logoStyle">
        <img src="../img/logo.png" alt="logo" id="logo">
      </div>
    </div>
  </div>
  <div id="Content" class="Content col-md-1 float-left">
    <Content :Komponent="activeComponent" /> </div>
  <AddCategoryModal />
</template>

<script>
import Box from './Box.vue'
import Content from './Content.vue'
import AddCategoryModal from './AddCategoryModal.vue'
import { useCategoriesStore } from '../Store/categoryStore.js'; // Adjust path as needed
import { useRouter } from 'vue-router';

const router = useRouter();

export default {
  components: {
    Box,
    Content,
    AddCategoryModal
  },
  setup() {
    // Access categories and store methods from Pinia
    const categoriesStore = useCategoriesStore();

    return {
      categories: categoriesStore.getCategories(),
      activeComponent: 'Alle', // Default component
      // Other methods (navigateTo, openAddCategoryModal, etc.) remain the same
      navigateTo(routeName) {
        this.activeComponent = routeName;
      },
      openAddCategoryModal() {
        $('#Modal_Add_Category').modal('show');
      },
      editCategory(newName) {
        // Edit the category with the new name using the store (updated)
        categoriesStore.editCategory({ name: newName.trim() }); // Assuming category has a "name" property
      }
    };
  }
};
</script>
