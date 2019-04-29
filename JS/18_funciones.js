

//console.log(resta(6,3)) no va a funcionar porque las funciones asignadas no tienen hoisting lo que hace que no se alza y no se tiene en cuenta.


/**
 *Funcion declarada 
 *Existe "hoisting" (alzamiento)
 * @param  x : num 
 * @param  y : num
 * @returns : num
 */
function suma(x=0, y=0) {
    return x + y
    
}

/**
 * Funcion asignada.
 * 
 * Una funcion para JS es un dato de tipo objeto
 * 
 */

 let obj = {}
let resta = function (x = 0, y = 0) { 
    return x - y
}




/**
 * En ES6 aparecen las arrow (=>) function
 */

 // let producto = (x = 1, y = 1) => {return x * y}
 let producto = ( x= 1, y = 1) => x * y

 let cuadrado = x => x*x
 
 console.log(suma(4,6))
 console.log(resta(6,3)) 
 console.log(producto(4,7))
 console.log(cuadrado(6))