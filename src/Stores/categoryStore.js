import {editCategoryModal} from '../components/EditCategoryModal.vue';
import {addCategoryModal} from '../components/AddCategoryModal.vue';
import { defineStore } from 'pinia';

export const categoryStore = defineStore('categoryStore', {
    state: () => ({
        editCategoryModal: false,
        addCategoryModal: false,
        category: null,
    }),
})