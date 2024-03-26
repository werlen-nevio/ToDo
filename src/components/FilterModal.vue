<template>
    <div class="modal fade" id="FilterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="ShowFinished">Abgeschlossene anzeigen</label>
              <input type="checkbox" class="form-control ShowFinished" id="ShowFinished" v-model="showFinished" @change="handleChange">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useLocalStorageStore } from '../Store/useLocalStorageStore.js';
  
  export default defineComponent({
    setup() {
      const localStorageStore = useLocalStorageStore();
  
      const showFinished = localStorageStore.showFinished;
  
      const handleChange = (event) => {
        localStorageStore.change(event.target.checked);
      };
  
      return { showFinished, handleChange };
    },
  });
  </script>
  