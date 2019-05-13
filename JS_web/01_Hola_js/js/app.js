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
let datos = [1,2,3,4,5]
console.log(datos.map(cuadrados))
