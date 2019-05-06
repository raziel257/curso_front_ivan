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

vuelo.mostrar = function (obj = this)  {
    for (const key in obj) {
       
            const element = obj[key];
            if (typeof element === 'function' ) {
                 continue
                }
            if (typeof element !== 'object' ) {
            console.log( `La propiedad ${key} vale ${element}`)  
           // obj.mostrar(element)
        }
            else {
                console.log( `La propiedad ${key} vale...`)
                
            }
        }
}

// console.log (typeof vuelo.mostrar)

vuelo.mostrar()


/**
 * @param : object
 * @returns : string
 */
vuelo.toString = function (obj = this)  {
    let output = ''
    for (const key in obj) {
            const element = obj[key];
            if (typeof element === 'function' ) {
                 continue
                }
            if (typeof element === 'object' ) {
                output = output + `La propiedad ${key} vale...` + '\n'
                output = output + obj.toString(element)
        }
            else {
               
                output = output +  `La propiedad ${key} vale ${element}` + '\n'
            }
        }
        return output
}
// vuelo.toString()


vuelo.mostrarFinal = function () {
    console.log(this.toString())
}
vuelo.mostrarFinal()