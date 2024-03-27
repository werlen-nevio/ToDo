<template>
  <div>
    <button @click="showModal = true" class="btn-edit">
      <i class="fa-solid fa-pen"></i>
    </button>

    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div id="ModalTitel">
          <h2>ToDo bearbeiten <span @click="closeModal" class="close">&times;</span></h2>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="editedTitel">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" v-model="editedBeschreibung"></textarea>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input type="datetime-local" class="form-control" id="date" v-model="editedDatum">
          </div>
          <button @click="saveChanges" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      editedTitel: this.Titel,
      editedBeschreibung: this.Beschreibung,
      editedDatum: this.Datum
    };
  },
  props: {
    Titel: {
      type: String,
      required: true
    },
    Beschreibung: {
      type: String,
      required: true
    },
    Datum: {
      type: String,
      required: true
    },
    ID: {
      type: Number,
      required: true
    }
  },
  methods: {
    saveChanges() {
      // Hier können Sie Ihre Logik zum Speichern der Änderungen einfügen
      this.showModal = false; // Modal schließen, nachdem die Änderungen gespeichert wurden
    },
    closeModal() {
      this.showModal = false; // Modal schließen
    }
  }
};
</script>

<style scoped>
#description{
  color: black;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #6c757d;
  margin: 15% auto;
  margin-top: 10%;
  padding: 20px;
  border: none;
  width: 50%;
}

.close {
  color: black;
  text-shadow: none;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
