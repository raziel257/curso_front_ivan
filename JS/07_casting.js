// Existen los operadores aritmeticos + - * / %, suma, resta, multiplicar, division y porcentaje (modulo)
// El casting es un proceso temporal de modificacion del tipo durante una operacion.

let x = 22
let nombre = 'Pepe'
let z = '2'

let division = x / z
console.log(division)
console.log(typeof z)

// NaN (NOT a NUMBER)
division = x / nombre // Es NaN porque lo estamos dividiendo por un nombre.
console.log(division) // Aqui lo muestra.
console.log(0/0) // Es NaN.
console.log (-1/0)

/* NaN equivale al concepto matematico de indeterminacion...
0 / n = 0
n / 0 = infinito
0 / 0 = NaN */

// Si quiero evitar indeterminaciones, he de validar los datos (comprobar que los datos cumplan los requisitos)

function dividir (x,y) {
if (isNaN(x) || isNaN(y)) {
    console.log('operadores invalidos')
    return
}    
console.log('La division da', x / y, '€') 
}
dividir(x,z) // Da los 11€
dividir(x,nombre) //Da operadores invalidos

/* Si hay strings tiene preferencia la concatenacion(es decir, la union de caracteres "culo+ nabo = culo, nabo. 22+2= 222" ) para evitarlo tenemos que forzar el casting.

console.log('la suma da', x+z)*/

console.log(parseFloat(x) +parseFloat(z))
console.log( Number(x) +Number(z))
console.log(+x + +z)

console.log(typeof z)
