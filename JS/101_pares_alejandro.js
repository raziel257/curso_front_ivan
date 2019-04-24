/* // Tipos de Strings
let cadena = 'Hola Mundo'
cadena = "Hola Mundo"
// ES6 aparecen los template string
cadena = `
Hola 
Mundo
`
let user = 'Pepe'
cadena = 'Hola ' + user + ', que tal estas'
cadena = `Hola ${user}, que tal estas`
console.log(cadena) */

/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 * 
 */

 /**
  * Function calculaQueEs
  * @param num: number
  * @returns: number
  * Posibles valores
  *     0 pares
  *     1 impares
  *     2 numeros decimales
  *     3 no numeros (NaN)
  * */
 
 function  calculaQueEs(num) {
     let r
     if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
         // esto no seria un numero
         r = 3
     } else if (parseInt(num) != num) {
         // es un nmero decimal
         r = 2
     } else {
         r = num % 2
     }
    
     return r

}


/**
* Function isPar
* @param num: number
* @returns: boolean
* Posibles valores
*    true pares
*    false impar
*/

function isPar(num) {
    return !(num % 2)
}

function isImpar(num) {
    return !!(num % 2)
}

/**
 * Function mostrar
 * @param isPar: bolean // sera true si el numero es PAR
 * @param num: number
 * @returns: void
 * 
 */

/*   function mostrar(isPar, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ] 
    if (isPar) {
      console.log(mensajes[0])
    } else {
      console.log(mensajes[1])
    }
} */

function mostrar(isPar, num) {
  let mensajes = [
      `El número ${num} es par`,
      `El número ${num} es impar`
  ] 
  /* let i = 1
  if (isPar) {
    i = 0
  }  */
  let i = (isPar(num)) ? 0 : 1
  console.log(mensajes[i])
}

/**
 * Function mostrar2
 * @param code: mumber // sera 0 sies par y 1 si es impar
 * @param num: number
 * @returns: void
*/

let number = 0
number = 28
number = 'Pepe'
number = 0
mostrar(isPar(number), number)

////////////////////////////////////////////////////
// Version final

function mostrar2 (code, num) {
  let mensajes = [
      `El número ${num} es par`,
      `El número ${num} es impar`,
      `El numero ${num} es decimal, que no es ni par ni impar`,
      `El valor ${num} no es un numero`,
  ] 
  console.log(mensajes[code])
}

let numero = 0
numero = 25
numero = 30
numero = 'Pepe'
numero = 3.3
numero = {}
numero = []
numero = false
numero = true
//console.log(typeof numero === 'Boolean')
//mostrar2(numero % 2, numero)  
//mostrar2(calculaqueEs(numero),(numero))

// Control de errores o excepciones.



/* try {
  // NoExiste()
  let x = 3
  throw 'probando un error'
} catch (error) {
  console.log('lo siento ha habido un error, error')
} */


function  calculaQueEs(num) {
  let r
  if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
    throw 'el valor no es un numero'
      } else if (parseInt(num) != num) {
    throw 'El valor es un numero decimal'
      
  } else {
      r = num % 2
  }
 
  return r