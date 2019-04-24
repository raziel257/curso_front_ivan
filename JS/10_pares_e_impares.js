  /*  Explicacion tipo de strings
 let cadena = 'Hola mundo'
 cadena = "hola mundo"
 // ES6 Aparecen un nuevo mmodo de cadena: template string
cadena = `
Hola
 Mundo`

 let user = 'Pepe'
 cadena = 'Hola' + user + ', que tal estas'
 cadena = `hola ${user}, qué tal estás?`
console.log(cadena) */
 
 
 
 /**
 * Programa que calcula si un numero es par o impar
 * y muestra el resultado en consola.
 */

 /**
  * function calculaQueES
  * @param num: number
  * @returns: number
  * Posibles valores
  *     0 pares
  *     1 impares
  */

  function calculaQueES(num) {
      return num % 2
  }

 /**
  * function isPar
  * @param num: number
  * @returns: boolean
  * Posibles valores
  *     true pares
  *     false impar
  */
 function isPar(num) {
     return !(num % 2)
     
 }

 function isImPar(num) {
    return !!(num % 2)
    
}

/**
 * function mostrar
 * @param r: boolean // sera true si el numero es par
 * @param num: number
 * @returns: void
 * 
 */

 /* function mostrar(isPar, num) {
     let mensajes = [
      `El numero ${num} es impar`,
      `El numero ${num} es par`   
     ]
     if (isPar) {
         console.log(mensajes[1])

     } else {
         console.log(mensajes[0])
     } 
     
 } */

 function mostrar (isPar, num) {
    let mensajes = [
     `El numero ${num} es par`,
     `El numero ${num} es impar`
        
    ]
    /* let i = 1
    if (isPar) {
        i = 0

    } else {
        i = 1  
    } */
    let i = (isPar) ? 0 : 1
    console.log(mensajes[i])
}
let number = 23
number = 28
mostrar(isPar(number), number)


/**
 * Function mostrar 2
 * @param code: number // sera 0 si es par y 1 si es impar
 * @param num: number
 * @returns: void
 */


 ///////////////////////////////
 ///VERSION FINAL!!!

function mostrar (code, num) {
    let mensajes = [
        `El numero ${num} es par`,
        `El numero ${num} es impar`
           
       ]
       console.log(mensajes[code])

}

let numero = 25
numero = 30
numero = 'pepe'
mostrar (numero % 2, numero)


 