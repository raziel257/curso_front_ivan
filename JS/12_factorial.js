// Contador:
// for (let i = 0; empiezas de 0 porque es el origen
// i < 5; hay que poner 5 para que muestre del 1 al 5
// i++) { aquilos plus significan que lo muestre de uno en uno.
// console.log(i+1)} muestra el resultado. 

//    for (let i = 0; i < 5;i++) {console.log(i+1) }

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
      if (num <= 0) {
          // entraria el 0 y los negativos
          return 0
      }
      let r = 1
      for (let i = 1; i <= num; i++)  {
          r = r * i
          
      } 
      return r
  }
/* usar if / else y un solo return */
  function factorial2(num){
     let r = 1
     if (num <= 0) {

     }else {
        for (let i = 1; i <= num; i++)  {
            r = r * i
            
        } 

     }
     return r

  }
  let number = 0
  
  //number = 'pepe'
  console.log(factorial(number))

  number = 0
  number= -4
  number = 5
  
  console.log(factorial2(number))

  

 