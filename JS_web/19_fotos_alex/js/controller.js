import { ajax } from "./ajax.js";

export function controller() {

    // Variables de estado

    const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    const URL_USERS = "https://randomuser.me/api/?results=10"
    let aFotos = []
    const itemActual = 0

    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar 
    let aBtnBorrar

    getFotos(URL_USERS)
    

    
  //  ajax(URL, 'GET', getFotos )

    /* fetch(URL).then(
        (response) => response.json()
    ).then(
        (datos) => {console.log(datos)}
    )
 */

    

    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)

    function getFotos(url){
    fetch(URL)
    .then(response => response.json())
    .then(response => {
       console.log(aFotos)
       aFotos = response  
       renderFotos()
    })
    }

    /*  "albumId": 1,
    */   
    function renderFotos(response) {
        console.log(response)
        let sectionFigures = document.querySelector('#figures')
        let html = ''
        JSON.parse(response)     
            .forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


    function onAdd () {
        console.log('Añadiendo')
    }

    function onModify(ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.id)
    }
}