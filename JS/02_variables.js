
// ES6 se utilizan let y const para declarar variables

let nombre //declarar
nombre = 'Pepe' //inicializar.

let edad = 35 // declaras e inicializas en la misma linea.

// Tipos de datos
/* En otros lenguajes hay declaracion explicita y obligatoria de tipos.
int x -> seria una variable x de tipo entero sin valor.
En JS los tipos son 
-debiles: que no se declaran explicitamente: son IMPLICITOS al valor. (NO PUEDEN CAMBIAR)
-dinamicos: pueden cambiar. 
*/
//undefined
let data
console.log(data)
console.log(typeof data) 

// A- datos primitivos.

// strings
data = 'Hola ammigos'
console.log(data)
console.log(typeof data) 

// numbers
data = 35
console.log(data)
console.log(typeof data)

// booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// B- datos referenciados.

// objet
data = { name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// objet tipo array
data = [23,45,78]
console.log(data)
console.log(typeof data)

// Es un tipo de objeto
function mostrar() {}

console.log(mostrar)
console.log(typeof mostrar)