let data = 20
data = 30

console.log(data)

const DATA = 25
// DATA = 50 daria un error porque le estamos cambiando el valora una constante.

console.log(DATA)

const user = {
    name: 'Pepe',
    edad: 25
}


// JAVA / C#... etc, son lenguajes orientados a objetos, basados en clases.
// user1 = new user()

//JS es un lenguaje orientado basado en prototipos y objetos literales.

user.altura =179
user.name = 'carlos'

// user = 23 esta linea da error porque user ya esta definido como const.

console.log (user)
console.log (user.name)
console.log (user.edad)