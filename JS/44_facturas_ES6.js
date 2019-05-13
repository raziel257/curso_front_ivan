function Factura (empresa, cliente, items, tipoIVA, formaPago) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
}



class Empresa {
        constructor(nombre, direccion, telefono, NIF) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF
    }
}

class Item {
    constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
    }
            
    
    
}

class factura {
    constructor (empresa, cliente, items, tipoIVA, formaPago) {
        this.empresa = empresa
        this.cliente = cliente
        this.items = items
        this.tipoIVA = tipoIVA
        this.formaPago = formaPago
    }
    addItem = function(item = new Item()) {
        this.items.push(item)
    
    }
    calculaImporte = function() {
        let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
        return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva 
    }
    muestraImporte = function () {
        let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
        console.log(msg)
    }
}

const miEmpresa = new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874')
const cliente1 = new Empresa('Libros Tuatalug', 'c/ Marques de ', '917256983', 'M-64584741')

const item1 = new Item('Libro 1', 20, 12)
const item2 = new Item('Libro 2', 24.8, 10)
const item3 = new Item('Libro 3', 34.7, 7)
const factura1 = new Factura(
    new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874'),
    new Empresa('Libros Tuatalug', 'c/ Marques de ', '917256983', 'M-64584741'), 
    [   new Item('Libro 1', 20, 12),
        new Item('Libro 2', 24.8, 10),
        new Item('Libro 3', 34.7, 7)],
    0.23,
    'efectivo'
)


console.log(factura1)
factura1.muestraImporte()