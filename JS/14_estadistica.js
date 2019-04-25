/*   function suma(x=0, y=0) {
     return Number(x) + Number (y)
  }

  // ES6 spread operator (agrupador)
  function sumaPlus(x= 0, y= 0, ...otros) {
      if (otros) {
          console.log ( `Sin usar`, otros)
      }
      return number(x) + number (y)
  }

  console.log(suma('2','5'))

  console.log(suma(2))

  console.log(suma(2,5,6,8)) */
  /**
 * Progarma de calculo de estadisticos como la media aritmetica.
 * Que es la suma de los elementos / por el numero de elementos.
 */

 /**
  * funcion mediaAr
  * @param datos: array , tambien funciona con una lista 
  * @returns: number
  */

  function mediaAr (datos= [], ...masDatos) {
      if (!Array.isArray(datos)) {
          // NO es un array
          datos = [datos]
          datos = datos.concat(masDatos)
      }
      console.log (datos)
      let r = 0
      // let sumatorio = 0
      for (let i = 0; i < datos.length; i++) {
          const element = datos[i];
          r = r + element
          // sumatorio = sumatorio + element
          // sumatorio += element   es igual a lo de arriba, pero abreviado. 
          
      }
        // r = sumatorio / datos.length
        // console.log(datos.length) es un log para verificar
        r = r / datos.length
        return r
    }

    let numeros =[3,4,6,4,6,2,5]
    console.log (mediaAr(numeros))

    console.log (mediaAr(3,4,6,4,6,2,5))



