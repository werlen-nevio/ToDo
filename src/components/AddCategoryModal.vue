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
                        <input type="text" class="form-control" v-model="titel">
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click.prevent="addKategorie()" class="btn btn-primary">Speichern</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titel: ''
        };
    },
    methods: {
        addKategorie() {
            const categories = JSON.parse(localStorage.getItem('categories')) || [];

            const newCategory = {
                "id": categories.length + 1,
                "name": this.titel
            };

            categories.push(newCategory);

            this.titel = '';

            // Modal schliessen

            console.log(categories);

            localStorage.setItem('categories', JSON.stringify(categories));
        }
    }
};
</script>