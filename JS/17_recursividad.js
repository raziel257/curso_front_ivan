/**
 * Programa de calculo del factorial de un numero
 * 
 */

 /**
  * function factorial
  * @param num: number
  * @returns: num
  * 
  * Se calcula el producto de num por todos los inferiores a el hasta el 1.
  * Es decir el producto de 1 por todos los superiores a el hasta llegar a num.
  */



 function factorial(num) {
    if (num <= 0 || parseInt(num) !==num) {
  throw ` Los numeros negativos no tienen factorial`    // entraria el 0 y los negativos
        
    } else if ( num === 0) {
        return 1
    }
    /* let r = 1
    for (let i = 1; i <= num; i++)  {
        r = r * i
        
    } */ 
    let r
    if ( num === 1) {
     r = num * factorial(num-1)
    } else if (num > 170) {
        throw `No puedo calcular numeros tan grandes `
    }
    return num * factorial(num-1) // le mandas a ejecutar la funcion factorial
}
let n = 0

try {
    console.log(factorial(n))
} catch (error) {
    console.log (error)
}
