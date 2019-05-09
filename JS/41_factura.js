/**
 * Objeto facturas
 * 
 * definir la estructura de un objeto que almacene una factura
 * Las facturas estan formadas por:
 * -la informacion propia de la em presa (Nombre, direccion, telf., nif)
 * -La informacion del cliente (similar a la de la empresa)
 * -Una lista de elementos (descripcion, precio, cantidad)
 * -informacion basica de la factura (importe total, tipo de IVA, forma de pago)
 * Añadir metodo que calcule el importe total d ela factura
 * y actualice el valor de la propiedad correspondiente
 * añadir otro metodo que muestre el importe total de la factura por pantalla (en un formato HTML adecuado.)
 * 
 */

factura = {
    empresa: {nombre:'', direccion: '', telefono: '', NIF: ''},
    cliente: {nombre:'', direccion: '', telefono: '', NIF: ''},
    items: [
        {descripcion: '', precio: 20, cantidad: 12},
        {descripcion: '', precio: 24, cantidad: 10},
        {descripcion: '', precio: 34, cantidad: 7},
    ],
    importeTotal : 0,
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
        let msg = 'El importe'
        console.log(this.importeTotal.toFixed(2) + ' €')
    }


}