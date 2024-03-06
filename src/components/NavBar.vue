<script>
import Box from './Box.vue'

export default {
  components: {
    Box
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
    }
  }
}
</script>

<template>
  <div id="container">
    <!-- Main Buttons -->
    <div class="text-center">
      <Box box-title="Heute" class="mainButtons" /><br>
      <Box box-title="Heute" class="mainButtons" /><br>
      <Box box-title="Geplant" class="mainButtons" /><br>
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
</template>
