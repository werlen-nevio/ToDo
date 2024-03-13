<template>
    <div class="modal fade" id="Modal_Add_Category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Kategorie hinzufügen</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fa-solid fa-x"></i></span>
                </button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="Titel">Kategoriename *</label>
                        <input type="text" class="form-control" id="Titel" placeholder="Titel" value="Titel">
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