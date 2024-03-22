<script setup>
  import { defineProps, ref, watch } from 'vue';
  import Header from './Header.vue';
  import Heute from './Heute.vue';
  import Geplant from './Geplant.vue';
  import Alle from './Alle.vue';
  import Kategorie from './Kategorie.vue';
  import { useCategoriesStore } from '../Store/categoryStore.js';

  const props = defineProps(['Komponent', 'KategorieID']);
  const categoryStore = useCategoriesStore();

  const Kategorien = ref([]);

  let KatTitel = '';

  watch(() => props.KategorieID, (newValue, oldValue) => {
    Kategorien.value = categoryStore.categories.filter(category => category.id === newValue);
    KatTitel = Kategorien._value[0].Titel;
  });
</script>

<template>
  <div class="Content">
    <div v-if="Komponent === 'Kategorie'">
      <Header :Titel="KatTitel" :KategorieID="KategorieID"/>
    </div>
    <div v-else>
      <Header :Titel="Komponent" KategorieID="0"/>
    </div>
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
      <Kategorie :ID="KategorieID" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      Komponent: {
        type: String,
        required: true
      },
      KategorieID: {
        type: String,
        required: false
      }
    }
  }
</script>
