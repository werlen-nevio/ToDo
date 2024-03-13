<template>
    <div class="modal fade" :id="'Modal_'+ ID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ToDo bearbeiten</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
                </button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="Titel">Titel *</label>
                        <input type="text" class="form-control" id="Titel" placeholder="Titel" :value="Titel">
                    </div>
                    <div class="form-group">
                        <label for="Beschreibung">Beschreibung *</label>
                        <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibung" :value="Beschreibung">
                    </div>
                    <div class="form-group">
                        <label for="Datum">Datum *</label>
                        <input type="datetime-local" class="form-control" id="Datum">
                    </div>
                    <div class="form-group">
                        <label for="Kategorie">Kategorie</label>
                        <select class="form-control" name="Kategorie" id="Kategorie">
                            <option value="0">---</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary">Speichern</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    Titel: {
      type: String,
      required: false
    },
    Beschreibung: {
      type: String,
      required: false
    },
    Datum: {
      type: String,
      required: false
    },
    ID: {
      type: Number,
      required: true
    }
  }
}
</script>  