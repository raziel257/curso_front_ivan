// ES6 se utilizan let y const para declarar variables

let nombre //declarar
nombre = 'Pepe' //inicializar.

let edad = 35 // declaras e inicializas en la misma linea.

// Tipos de datos

//undefined
let data
mostrar(data) 

// strings
data = 'Hola ammigos'
mostrar(data) 

// numbers
data = 35
mostrar(data) 

// booleans
data = true
data = false
mostrar(data) 

// objet
data = { name: 'Pepe', age: 34}
mostrar(data) 

// objet tipo array
data = [23,45,78]
mostrar(data) 

// Es un tipo de objeto
function mostrar(input) {
    console.log('el dato recibido es',input)
    console.log('el tipo del dato es',typeof input)
    console.log('----------')
}

mostrar(mostrar)