/**
 * Notacion literal o JSON
 */

 //user1 = new Usuario
 //user2 = new Usuario

let user1 = {
    nombre: 'Pepe',
    edad: 24,
    isAlumno: true,
    direccion: {
        Calle: 'Pez',
        num: '3',
        poblacion: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años, mí estatura es de ${this.altura} Cm.`)
    },
    altura : 179 
}

// let user1 = new Object()
// user1.nombre ='pepe'

let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'José'
user1.curso = 'Back'

user1.saludar()