/**
 * Presentar los numeros primos del 1 al N
 */

 /**
  * function isPrimo
  * @param num: number
  * @returns: boolean
  */

  function isPrimo(num) {
     let r = true
     // if ( num == 0) 
     if (!num){
        return false
     } //else if ( num == 1)


     for (let i = 2; i < num; i++) {
         
        // if(num % i == 0){
        if( !(num % i) ) {
             // No es primo
             return false         
        }
    }
    return r
    }

  let number = 11
  
console.log(isPrimo(number))

/**
 * function listaPrimos
 * @param limite: number
 * @returns: array[number]
 */
function listaPrimos (limite) {
    let primos = []
    for (let i = 0; i <= limite ; i++) {
       if(isPrimo(i)) {
          // primos[primos.length] =i abajo esta abreviado
           primos.push(i)
       }
        
    }

    return primos
}
console.log('Los primos son', listaPrimos(100).join(', '))