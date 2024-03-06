<script setup>
  import Header from './Header.vue'
  import Heute from './Heute.vue'
</script>

<template>
  <div class="Content">
    <Header :Titel="Komponent" />
      <div v-if="Komponent === 'Heute'">
        <Heute />
      </div>
    <div v-else>
      <!-- Hier kommt der Inhalt, der angezeigt wird, wenn Komponent nicht gleich 'test' ist -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      Komponent: {
        type: String,
        required: true
      }
    }
  }
</script>