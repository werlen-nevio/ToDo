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
  const KatTitel = ref('');

  // Watcher für props.KategorieID
  watch(() => props.KategorieID, (newValue, oldValue) => {
    Kategorien.value = categoryStore.categories.filter(category => category.id === newValue);
    if (Kategorien.value.length > 0) {
      KatTitel.value = Kategorien.value[0].Titel;
    } else {
      KatTitel.value = '';
    }
  });

  // Watcher für categoryStore.categories
  watch(categoryStore.categories, (newCategories, oldCategories) => {
    if (props.KategorieID !== null && props.KategorieID !== undefined) {
      const updatedCategory = newCategories.find(category => category.id === props.KategorieID);
      if (updatedCategory) {
        KatTitel.value = updatedCategory.Titel;
      }
    }
  }, { deep: true }); // Tiefe Überwachung, um Änderungen in den verschachtelten Objekten zu erkennen
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
      <Kategorie :KategorieID="KategorieID" />
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
