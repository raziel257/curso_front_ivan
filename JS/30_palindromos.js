




function isPalin(cadena = '') {
    let r = true
    let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    let cadenaInversa= cadena.split(' ').reverse().join('').toLowerCase()
    //console.log(cadenaInversa)
    if (cadenaSinEspacios !== cadenaInversa) {r = false 
    }
        return r
    }
/* function esPalin2(cadena= '') {
    let r = true
    let cadenaInversa=cadena.split(' ').reverse().join()
    let cadenaInversa=cadena.split(' ').join(' ').toLowerCase().split(' ').reverse().join()
    console.log(cadenaInversa)
    if (cadena !== cadenaInversa) r = false
    return r
    }
    */
    (function () {
        let textos = [
            'Esto no es un palindromo',
            'A ti no, bonita.'
        ]
        for (let i = 0; i < textos.length; i++) {
            const texto = textos[i];
            console.log(isPalin(textos))
            
        }
        
    })()