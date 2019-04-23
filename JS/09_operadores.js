// Asignacion

let x = 23
// x = x+1
x++
// x= x-1
x--

//Aritmeticos
let y=2
let r
r= x+y //25
r= x-y //21
r= x*y //46
r= x/y //11.5
r= parseInt(x/y) //11

// r= Math.round,  redondea contable.
// r= Math.floor,  redondeo a la baja.
// r= Math.ceil, redondeo al alta.
r= x%y 
console.log('Resultado', r)

y=2
y += 3
// y = y + 3 , es lo mismo de arriba.
y -= 3
// y = y - 3 , lo mismo de arriba.

// Operadores ternario
let edad = 15
let i
if (x >= 18) {
    i = 0
} else {
    i=1
}
edad = 25
i=(edad >= 18)?0:1
console.log('indice', i)

// Objetos en Notacion JSON
let user = {
    nombre: 'Pepe',
    edad: 23
}
console.log(user.nombre)

// Arrays
let numeros = [12, 45, 67]
let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']
console.log(usuarios[0])
usuarios[usuarios.length] = 'Ramon'
usuarios[usuarios.length] = 'Carolina'
usuarios[100] = 'Ernesto'
console.log( usuarios.length)

// Mensajes al usuario.
let mensajes =[
    'Bienvenido al casino',
    'No se admiten menores de edad'
]
console.log(mensajes[i])



    

