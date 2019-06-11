import { ajax } from "./ajax.js";

export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const aFotos = []
    ajax(URL, 'GET', getFotos)

    function getFotos(response) {
        console.log(response)
        
    }
}