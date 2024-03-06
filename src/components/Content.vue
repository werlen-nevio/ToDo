<script setup>
  import Header from './Header.vue'
  import Heute from './Heute.vue'
  import Geplant from './Geplant.vue'
  import Alle from './Alle.vue'
  import Kategorie from './Kategorie.vue'
</script>

<template>
  <div class="Content">
    <Header :Titel="Komponent" />
      <div v-if="Komponent === 'Heute'">
        <Heute />
      </div>
    <div v-else-if="Komponent === 'Geplant'">
      <Geplant />
    </div>
    <div v-else-if="Komponent === 'Alle'">
      <Alle />
    </div>
    <div v-else>
      <Kategorie ID="1"/>
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