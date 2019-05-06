let meses = {
    Enero: 'January',
    Febrero: 'February',
    Marzo: 'March',
    Abril: 'April',
    Mayo: 'May',
    Junio: 'June',
    Julio: 'July',
    Agosto: 'August',
    Septiembre: 'September',
    Octubre: 'October',
    Noviembre: 'November',
    Diciembre: 'December',
toString: function () {
    let output = ``
    for (const key in this) {
        const element = this[key];
        if (typeof element === 'function' ) {
             continue
            }
            output = output +  `EL mes ${key} en Ingles se escribe ${element}` + '\n'
   } 
   return output
},
mostrar: function() {
    console.log(this.toString())
}

}
meses.mostrar()