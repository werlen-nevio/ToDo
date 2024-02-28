<script>
import Box from './Box.vue'

export default {
  components: {
    Box
  }
}
</script>

<template>
  <div class="mainStyle text-center">
    <Box box-title="Heute" class="mainButtons" /><br>
    <Box box-title="Heute" class="mainButtons" /><br>
    <Box box-title="Geplant" class="mainButtons" /><br>
  </div>
  <div class="mainStyle">
    <p>Kategorien</p>
    <Box box-title="Kategorie 1" class="categoryButtons" /><br>
    <Box box-title="+" class="categoryButtons" />

  </div>
  <div class="logoStyle">
    <img src="../img/logo.png" alt="logo" id="logo">
  </div>
</template>