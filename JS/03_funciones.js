function suma(x, y) {
    let r = x + y
    return r
}

function mostrar (texto) {
    console.log (texto)
}

let number1 = 23
let number2 = 20
// esto daria error console.log(r)
let result = suma(number1, number2)
mostrar( result )

// No se cumple la separacion de intereses o conceptos.
function sumarmal(x, y) {
    let r = x + y
    console.log(r)

}
console.log(suma(23, 20));

sumarmal(2.5)

