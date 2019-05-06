let vuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        time: '2004-09-22 14:55',
        claveIATA: 'SYD',
        place: {
          ciudad: 'Sydney',
          pais: 'Australia'  
        }
        
        },
    arrival: {
        time: '2004-09-23 10:42',
        claveIATA: 'LAX',
        ciudad: 'Los Angeles',
    } 
}

let datos = 'departure'
// let datos = 'arrival'

// Notacion por puntos.
console.log (vuelo)
console.log (vuelo.departure) // solo muestra departure.
// Notacion por corchetes, permitepermite usar variables para los nombres de propiedades.
console.log (vuelo['number']) // igual forma de mostrar una propiedad.
console.log (vuelo[datos]) // asi invoca el valor datos,


let users = ['Pepe','Rosa','Juan','Maria']
console.log(users)

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`Hola ${user}`)
}

/* for (const key in vuelo) {
     
        const element = vuelo[key];

        if (typeof element != 'object' ) {
        console.log( `La propiedad ${key} vale ${element}`)
      } else {
          for (const key in element) {
              
                  const item = element[key];
                  console.log( `La propiedad ${key} vale ${item}`)
              
          }
      }  
    
} */

function mostrarObjeto (obj) {
    for (const key in obj) {
       
            const element = obj[key];
            if (typeof element != 'object' ) {
            console.log( `La propiedad ${key} vale ${element}`)  
            }
            else {
                console.log( `La propiedad ${key} vale...`)
                mostrarObjeto(element)
            }
        }
}
mostrarObjeto(vuelo)