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


window.onload = function () {

let datos = [1,2,3,4,5]
console.log(datos.map(cuadrados))

document.querySelector('#boton-saludar').onclick = saludar
document.querySelector('#boton-despedirse').onclick = despedirse
// document.querySelector('#button:nth-of-type').onclick = despedirse
document.querySelector('#div-raton').onmouseover = onMouseOver
document.querySelector('#div-raton').onmouseout = onMouseOut
}
