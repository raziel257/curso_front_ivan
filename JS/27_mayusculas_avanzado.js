/**
 * Dada una cadena de caracteres, hay que indicar si esta formada:
 * -Solo por letras mayusculas.
 * -Solo por letras minusculas.
 * -O por la combinacion de ambas.
 */

 /**
  * Function probarCadena
  * @param cadena: string
  * @returns number
  * - 0 =Solo por letras mayusculas.
  * - 1 =Solo por letras minusculas.
  * - 2 =O por la combinacion de ambas.
  */
   
  
  function comoEsLaCadena(cadena = '') {
      let mensajes = [
          'La cadena esta formada por mayusculas',
          'La cadena esta formada por minusculas',
          'La cadena esta formada por ambas'
      ]
      console.log(mensajes[probarCadena(cadena)])
    


  function probarCadena(cadena = '') {
      let r = 2
      if (cadena === cadena.toUpperCase()) {
          r = 0
      } else if (cadena === cadena.toLowerCase()) {
          r = 1
      } 
       return r
  }
}
  /**
   *  function comoEsLaCadena
   *  @param: cadena : string
   *  @returns: void
   */

    (function prueba () {
       let texto 
    texto = 'A Dios pongo por testigo...'
    comoEsLaCadena(texto) 
    })()

    