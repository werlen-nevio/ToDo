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
import { ref } from 'vue';
import Box from './Box.vue';
import Content from './Content.vue';
import AddCategoryModal from './AddCategoryModal.vue';
import { useCategoriesStore } from '../Store/categoryStore.js';
import { useRouter } from 'vue-router';

export default {
  components: {
    Box,
    Content,
    AddCategoryModal
  },
  setup() {
    const categoriesStore = useCategoriesStore();
    const activeComponent = ref('Alle'); // Initial active component

    const navigateTo = (routeName) => {
      activeComponent.value = routeName;
    };

    const openAddCategoryModal = () => {
      $('#Modal_Add_Category').modal('show');
    };

    return {
      categories: categoriesStore.getCategories(),
      activeComponent,
      navigateTo,
      openAddCategoryModal
    };
  }
};
</script>