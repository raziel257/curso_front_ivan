let datos = []
// let datos = new Array()
datos = [1,2,3,5,7,9]


function numeroAlAzar100() {
    return parseInt(Math.random()*100)
     }
    
     /**
      * Crea un array de n aleatorios, como minimo 1
      * function aleatorios
      * @param: limite: number
      * @returns: array[number]
      * 
      */

      function aleatorios(limite = 1) {
          let r = []
          for (let i = 0; i < limite; i++) {
               r[i] = numeroAlAzar100()
              }

          return r
          
      }
      console.log(aleatorios(12))
      
      function prueba() {
          let datos = [1,70,7,5,9]
          let masDatos = [1,4,6]
          let arrayFinal = datos.concat(masDatos)
          console.log(datos)
          console.log(arrayFinal)
          
          
          //  temp = datos // copiar referencias
          
          let temp = datos.slice(0)// CLONAR UN ARRAY
         // temp.sort() ordena alfabeticamente
          temp.sort( (a, b )=>  a-b) // ordena numericamente
          console.clear()
          console.log('temp')
          console.log(temp)
          console.log('datos')
          console.log(datos)

      }

      prueba()
    