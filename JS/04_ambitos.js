'use strict' // este es el modo estricto 

// Ambitos en igles es scope, scope de las variables

// Ambito global.

let var1 =20;
// MUY MALA PRACTICA!!!
// NO SE ACCEDE NUNCA A LAS VARIABLES GLOBALES DESDE LAS FUNCIONES
function prueba() {
    console.log(var1)
}

prueba()


// Lo mismo con buenas practicas:

let var2 = 30

function pruebabien (x) {
    console.log(x)
}

pruebabien(var2)

// nevo en ES6 usar let en lugar de var.

function condicional() {
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
        console.log(data)
    }
    console.log(ext)
    // console.log(data) daria un error.
    
 }   

condicional()


let x = 12
 
function otraprueba () {
    let x = 23
    // x = 23
    console.log('Dentro de la funcion X vale', x)
    // Va a dar 23 en lugar de 12 porque al no definir 23 con let se convierte en el valor de x se convierte en global.
}

otraprueba()
console.log('Fuera de la funcion X vale', x)
