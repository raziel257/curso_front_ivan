// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
    get edad () {
        return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    amigos: [],
    set nuevoAmigo(amigo) {
      this.amigos.push(amigo);
    }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)

/**
 * En JAVA , C#...
 * 
 * class persona {
 * private edad
 * }
 * 
 * p1 = new Persona()
 * p1.edad = 23 // ERROR!!!
 * console.log(p1.edad) // ERROR!!!
 */