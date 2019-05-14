function saludar() {
    console.log('Hola desde una funcion en un fichero JS')
    
}
function despedirse () {
    console.log('Adios desde un fichero JS')
}

function onMouseOver() {
    console.log('El raton entro')
    
}

function onMouseOut() {
    console.log('El raton salio')
    
}

function cuadrados (item) {return item * item}

// window.addEventListener('load')

function main() {
    let datos = [1,2,3,4,5]
    console.log(datos.map(cuadrados)) 
    document.querySelector('#boton-saludar').addEventListener('click',saludar)
    document.querySelector('#boton-saludar').addEventListener('click',despedirse)
    document.querySelector('#boton-saludar').addEventListener('mouseover',onMouseOver)
    document.querySelector('#boton-saludar').addEventListener('mouseout',onMouseOut) 
}
document.addEventListener('DOMContentLoaded',main) /* {
     let datos = [1,2,3,4,5]
    console.log(datos.map(cuadrados)) 
    document.querySelector('#boton-saludar').addEventListener('click',saludar)
    document.querySelector('#boton-saludar').addEventListener('click',despedirse)
    document.querySelector('#boton-saludar').addEventListener('mouseover',onMouseOver)
    document.querySelector('#boton-saludar').addEventListener('mouseout',onMouseOut)
}) */
// window.onload = function () {

/* let datos = [1,2,3,4,5]
console.log(datos.map(cuadrados))

document.querySelector('#boton-saludar').addEventListener('click',saludar)
// document.querySelector('#boton-despedirse').onclick = saludar "diferente forma de hacerlo"
document.querySelector('#boton-saludar').addEventListener('click',despedirse)
// document.querySelector('#boton-despedirse').onclick = despedirse "diferente forma de hacerlo"
// document.querySelector('#button:nth-of-type').onclick = despedirse "diferente forma de hacerlo"
document.querySelector('#boton-saludar').removeEventListener('click',despedirse)
document.querySelector('#boton-saludar').addEventListener('mouseover',onMouseOver)
// document.querySelector('#div-raton').onmouseover = onMouseOver "diferente forma de hacerlo"
document.querySelector('#boton-saludar').addEventListener('mouseout',onMouseOut)
// document.querySelector('#div-raton').onmouseout = onMouseOut "diferente forma de hacerlo"
} */
