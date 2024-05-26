import {defineStore} from 'pinia';
import axios from "axios";


interface StateType {
    ingredients: ReadonlyArray<number>;

}

export const BASE_URL = "https://norma.nomoreparties.space/api/"

export const useIngredientsStore = defineStore('ingredients', {
    state: () => ({
        ingredientsList: [],
    }),
    actions: {
        getIngredientsData() {
            axios.get(`${BASE_URL}ingredients`).then((res) => {
                this.ingredientsList = res.data
            })
        }
    }
})