(function (){
let hoy = new Date()
console.log(hoy)

let fecha = new Date(123456)
console.log(fecha)
console.log(fecha.getFullYear())

let nacimiento = new Date(1977,4,2,)
console.log(nacimiento.toLocaleString()) 
console.log(nacimiento.toLocaleTimeString())
console.log(nacimiento.toLocaleDateString())
console.log(nacimiento.toDateString())
console.log(nacimiento.getDay())
console.log(fechaEnEspañolToString(nacimiento))


})()

/**
 * Mostrar fecha como "dia de semana,  dia de mes de año"
 */
/**
 * fechaEnEspañolToString
 * @param fecha: Date
 * @return: string
 */

 function fechaEnEspañolToString(fecha = new Date()) {
     const aDias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
     const aMeses = ['enero', 'febrero', 'marzo' ,'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
     let fechaToString = ''
     fechaToString += aDias[fecha.getDay()] + ', '
     fechaToString += fecha.getDate() + ' de '
     fechaToString += aMeses[fecha.getMonth()] + ' de ' 
     fechaToString += fecha.getFullYear()
     return fechaToString

}

Date.prototype.toStringEnEspañol