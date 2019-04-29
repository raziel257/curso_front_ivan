/**
 * Programa para calcular los numeros de la serie fibonacci por debajo de un valor dado (incluido)
 * 
 * Partiendo de 0 y 1 , cada elemento de la serie se calcula como la suma de los 2 anteriores.
 * 
 */

 /**
  * Function fibonacci
  * @param limite: number
  * @return : array[number]
  * 
  */

  function fibonacci(limite) {
      let i = 0
      let j = 1
      let serie =  [i]
      
     while (j <= limite) {
        let next = i + j
        // serie[serie.length] = <-- esta no es la forma de hacerlo, mejor lo de abajo. 
         i = j
         j = next
         serie.push(i)
         
     }   


      return serie
      }

      /**
  * Function fibonacci
  * @param limite: number
  * @return : array[number]
  * 
  */

   function fibonaccifor(limite) {
     /*  let i = 0
      let j = 1 */
      let serie = [0]

    /*  for (let index = 0; index < 50; index++) {
        let 
        // serie[serie.length] = <-- esta no es la forma de hacerlo, mejor lo de abajo. 
         i = j
         j = next
         
         if(j > limite) {
             break
         }  
         console.log(fibonaccifor(limite))
    }  es mejor con un while
    */ 
   let next
   for (let i = 0 ; j = 1; i< limite; i = j, j = next) {
       serie.push(j)
       next = i + j
       return serie
   }
   

} 
