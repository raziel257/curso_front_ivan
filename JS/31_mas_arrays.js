let nombres = ['Pepe', 'Juan', 'Bernadette', 'Penelope', 'Eustaquia']

// Slice es una funcion inmutable
console.log(nombres.slice(0,3))

// Splice es una funcion mutable

let newNombres = nombres.splice(0,1)
console.clear ()
console.log(nombres)
console.log(newNombres)


// Colas y pilas - Todas son mutables

nombres.push() // Añade al final
nombres.pop() // Quita al final

nombres.shift() // Permite quitar el primero
nombres.unshift() // Añadir al principio

nombres.push('Aurora')
// nombres [nombres.length] = 'Aurora' es lomismo de arriba pero mas cutre.