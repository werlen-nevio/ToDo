<script>
import Box from './Box.vue'

export default {
  components: {
    Box
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
      <Box box-title="Kategorie 1" class="categoryButtons" /><br>
      <Box box-title="+" class="categoryButtons" /><br>
    </div>
    <!-- Logo -->
    <div class="logoStyle">
      <img src="../img/logo.png" alt="logo" id="logo">
    </div>
  </div>
</template>