<template>
  <div class="float-left">
    <div id="NavBar">
      <div class="text-center">
        <Box box-title="Alle" class="mainButtons" @click="navigateTo('Alle')" /><br>
        <Box box-title="Heute" class="mainButtons" @click="navigateTo('Heute')" /><br>
        <Box box-title="Geplant" class="mainButtons" @click="navigateTo('Geplant')" /><br>
      </div>
      <div>
        <Box v-for="(category, index) in categories" :key="index" :box-title="category.Titel" class="categoryButtons" @click="navigateToKat('Kategorie', category.id)"/><br>
        <Box box-title="+" class="categoryButtons" @click="openAddCategoryModal()" />
      </div>
      <div class="logoStyle">
        <img src="../img/logo.png" alt="logo" id="logo">
      </div>
    </div>
  </div>
  <div id="Content" class="Content col-md-1 float-left">
    <Content :Komponent="activeComponent" :KategorieID="KategorieID"/> </div>
    <AddCategoryModal />
    <EditCategoryModal v-for="(category, index) in categories" :key="index" :categoryId="category.id"></EditCategoryModal>
</template>

<script>
import { ref } from 'vue';
import Box from './Box.vue';
import Content from './Content.vue';
import AddCategoryModal from './AddCategoryModal.vue';
import EditCategoryModal from './EditCategoryModal.vue';
import { useCategoriesStore } from '../Store/categoryStore.js';

export default {
  components: {
    Box,
    Content,
    AddCategoryModal
  },
  setup() {
    const categoriesStore = useCategoriesStore();
    const activeComponent = ref('Alle');
    const KategorieID = ref(0);

    const navigateTo = (routeName) => {
      activeComponent.value = routeName;
    };

    const navigateToKat = (routeName, id) => {
      activeComponent.value = routeName;
      KategorieID.value = id;
    };

    const openAddCategoryModal = () => {
      $('#Modal_Add_Category').modal('show');
    };

    return {
      categories: categoriesStore.getCategories(),
      activeComponent,
      KategorieID,
      navigateTo,
      navigateToKat,
      openAddCategoryModal
    };
  }
};
</script>