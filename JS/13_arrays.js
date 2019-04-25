let numeros = [1, 2, 4, 6]
let amigos =['pepe', 'rosa', 'juan']
let deTodo =[1, 45, 'perro', 'gato', true,{nombre: 'ramon', edad: 23}]

console.log(deTodo)

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    console.log(`Hola ${element}`)
    
}

/**
 * 
 * Programa que compruebe si un nombre ha sido usado alguna vez por un rey de España
 */

/**
 * function isRey
 * @param : string
 * @returns : boolean
 */
function isRey(params) {
     let reyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'Jose', 'Amadeo', 'Alfonso', 'Juan Carlos']
     for (let i = 0; i < reyes.length; i++) {
         const rey = reyes[i];
         if (rey.toLowerCase() === name.toLowerCase()) {
             return true
         }
         
     }
     return false
}

/**
 * function mostrar
 * @param name: string
 * @returns: void
 * 
 */
function mostrar(name) {
    let i = 1
    let mensajes = [
        `El nombre ${name} ha sido usado por un rey de España`,
        `Ningun rey de España se ha llamado nunca ${name}`
    ]
    if (isRey(name)) {
        i = 0
    }

    console.log(mensajes[i])
}

let name = `bernanrdo`
mostrar(name)
