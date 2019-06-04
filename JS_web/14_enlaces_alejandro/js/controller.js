export function controller () {
    let i = 0

    // Procedimiento habitual

// 1. Referencia a los Nodos del DOM que me interesan

const aNodosEnlaces = document.querySelectorAll('.social-menu a')
console.log(aNodosEnlaces)
const lista = document.querySelector('.social-menu')
const pulsador = document.querySelector('#pulsador')
const div = document.querySelector('div')
const section = document.querySelector('section')
const listaInicial = lista.outerHTML
console
// 2. Definir los manejadores de eventos

aNodosEnlaces.forEach( nodo =>  nodo.addEventListener('click', onClick, false) )
pulsador.addEventListener('click', pulsarA )
div.addEventListener('click', pulsarDiv)
section.addEventListener('click', pulsarSection)

// 3. Implemantar los manejadores de eventos

function onClick (ev) {
    i++
    // ev.stopPropagation()
    // console.dir(ev.target)
    let nodoA = event.currentTarget
    nodoA.outerHTML = nodoA.innerHTML + `Ops! no dispongo de ${nodoA.title}<br>`
    // ev.target.outerHTML = `Ops! no dispongo de ${ev.target.id}<br>`
    if (i == 5) {
        lista.outerHTML += `
        <div id= "extra" class="social menu"> 
        <p> JA JA JA... Capull@, no tengo de esas mierdas
        <img src= "./assets/fuck.gif">
        <audio source="./assets/risas.mp3">
        </div>`

    }

    }

    function pulsarA() {
        console.log('Pulsado a')
        
    }
    function pulsarDiv(ev) {
        ev.stopPropagation()
        console.log('Pulsado div')

    }
    function pulsarSection() {
        console.log('Pulsado section')

    }
}