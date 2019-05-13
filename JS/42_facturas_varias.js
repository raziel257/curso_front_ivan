/**
 *Rehacemos el ejercicio, empleando una funcion constructora.
 *
 */

 function Factura (empresa, cliente, item, tipoIVA, formaDePago) {
     this.empresa = empresa
     this.cliente = cliente
     this.item = item
     this.tipoIVA = tipoIVA
     this.formaDePago = formaDePago
}

Factura.prototype.calculaImporte = function () {
    let iva = this.tipoIVA<1 ? 1+this.tipoIVA: this.tipoIVA  
    return this.items.map(item => item.precio *item.cantidad).reduce((a,b) => a+b)*iva
}
Factura.prototype.muestraImporte = function() {
    let msg = 'El importe total (IVA incluido) es' + this.calculaImporte().toFixed(2) + '€'
    console.log(msg)
}

function Empresa (nombre, direccion, telefono, NIF) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF

}
function Item(descripcion,precio,cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
    
}
 factura1 = new Factura(
    new Empresa('Black Mountain','Unknow','000777',''),
    new Empresa('USA','Norte America','111111',''),
    [ new Item( 'Libro 1', 20, 12),
      new Item('libro 2', 24.8,10),
      new Item('libro 3', 34.7, 7)],
      0.23, 
            'efectivo' )

    console.log(factura1)
    factura1.muestraImporte()  

 /*    {empresa: {nombre:'Black Mountain',
         direccion: 'Unknow',
          telefono: '000777',
           NIF: ''},
    {nombre:'USA',
         direccion: 'Norte America',
            telefono: '111111',
             NIF: ''}, 
             [{descripcion: '', precio: 20, cantidad: 12},
              {descripcion: '', precio: 24, cantidad: 10},
              {descripcion: '', precio: 34, cantidad: 7}] ,
             
            0.23, 
            'efectivo'           
) */
console.log(factura1)
/* factura = {
    empresa: {nombre:'Black Mountain',
     direccion: 'Unknow',
      telefono: '000777',
       NIF: ''},
    cliente: {nombre:'USA',
     direccion: 'Norte America',
      telefono: '111111',
       NIF: ''},
    items: [
        {descripcion: '', precio: 20, cantidad: 12},
        {descripcion: '', precio: 24, cantidad: 10},
        {descripcion: '', precio: 34, cantidad: 7},
    ],
    // importeTotal : 0,
    tipoIVA: 0.23,
    formaDePago: 'efectivo',
    calculaImporte: function() {
       let iva = this.tipoIVA<1 ? 1+this.tipoIVA: this.tipoIVA  
       return this.items.map(item => item.precio *item.cantidad).reduce((a,b) => a+b)*iva

    },
    actualizaImporte: function () {
        this.importeTotal = this.calculaImporte()
    },
    muestraImporte: function () {
        this.actualizaImporte()
        // let msg = 'El importe total (IVA incluido) es' + this.importeTotal.toFixed(2) + '€'
        let msg = 'El importe total (IVA incluido) es' + this.importeTotal.toFixed(2) + '€'
       // console.log(this.importeTotal.toFixed(2) + ' €')
       console.log(msg)
    }
}
factura.muestraImporte() */