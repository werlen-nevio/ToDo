<script setup>
  import { useRouter } from 'vue-router'; // Importiere das Router-Modul
  import Box from './Box.vue'
  import Content from './Content.vue'

  const router = useRouter(); // Initialisiere den Router

  const navigateTo = (routeName) => {
    router.push({ name: routeName }); // Navigiere zur angegebenen Route
  };
</script>

<script>
import Box from './Box.vue'
import Content from './Content.vue'

export default {
  components: {
    Box,
    Content
  },
  data() {
    return {
      categories: ['Kategorie 1']
    }
  },
  methods: {
    addCategory() {
      const newCategory = prompt('Bitte geben Sie den Namen der neuen Kategorie ein:')
      if (newCategory) {
        this.categories.push(newCategory)
      }
    },
    navigateTo(routeName) {
      router.push({ name: routeName });
    }
  }
}
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
        <Box box-title="+" class="categoryButtons" @click="addCategory" />
      </div>
      <!-- Logo -->
      <div class="logoStyle">
        <img src="../img/logo.png" alt="logo" id="logo">
      </div>
    </div>
  </div>
  <div id="Content" class="Content col-md-1 float-left">
    <Content :Komponent="'Heute'"/>
  </div>
</template>
