console.log('Instanciado el controller')

// 1. Nodos del DOM
this.nodosDOM()

// 2.Manejadores de eventos
this.eventListeners ()

// variables de stado
this.animalSeleccionado
this.aAnimales =  this.readStorageAnimales()

// presentar datos inicialmente
this.actualizarView()


nodosDOM() 
this.inAnimal = document.querySelector('#inAnimal')
this.btnAdd = document.querySelector('#btnAdd')
this.btnClear = document.querySelector('#btnClear')
this.lista = document.querySelector('.lista')
this.tabla = document.querySelector('.tabla')
this.dlgConfirmarBorrado = document.querySelector('#dlgConfirmarBorrado')
this.btnBorrarSi = document.querySelector('#btnBorrarSi')
this.btnBorrarNo = document.querySelector('#btnBorrarNo')
this.dlgConfirmarBorradoTodos = document.querySelector('#dlgConfirmarBorradoTodos')
this.btnBorrarSiTodos = document.querySelector('#btnBorrarSiTodos')
this.btnBorrarNoTodos = document.querySelector('#btnBorrarNoTodos')


// 2.Manejadores de eventos
eventListeners () {
this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
this.btnAdd.addEventListener('click', this.addAnimal.bind(this))
this.btnClear.addEventListener('click', this.clearAnimales.bind(this))

// presentar datos inicialmente
this.aAnimales =  this.readStorageAnimales()
this.crearLista()
this.crearTabla()

this.aEraser = document.querySelectorAll('.borrar')
this.aEraser.forEach( 
    item => item.addEventListener(
        'click', this.avisarBorrado.bind(this),
        )
    )
this.btnClear.addEventListener('click', this.avisarBorradoTodos.bind(this))
/* btnBorrarSi = addEventListener('click', this.borrarAnimal.bind(this))
btnBorrarNo = addEventListener('click', this.borrarAnimal.bind(this)) */

this.btnBorrarSi.addEventListener('click', this.borrarAnimal.bind(this))
this.btnBorrarNo.addEventListener('click', this.borrarAnimal.bind(this))
this.btnBorrarSiTodos.addEventListener('click', this.clearAnimales.bind(this))
this.btnBorrarNoTodos.addEventListener('click', this.clearAnimales.bind(this))
}

// Manejadores de eventos

addAnimal() {
if (this.inAnimal.value) {
    this.aAnimales.push(this.inAnimal.value.toLowerCase())
    this.inAnimal.value = ''
}
console.log(this.aAnimales)
this.saveStorageAnimales()
this.crearLista()
this.crearTabla()
this.actualizarView()
}

clearAnimales() {
this.aAnimales = []
this.crearTabla()
this.crearLista()
this.removeStorageAnimales() 
avisarBorradoTodos(ev) {
this.dlgConfirmarBorradoTodos.open = true;
//this.dlgConfirmarBorradoTodos.showModal();
}

avisarBorrado(ev) {

let btnBorrarSi = document.querySelector('#btnBorrarSi')
let btnBorrarNo = document.querySelector('#btnBorrarNo')

btnBorrarSi = addEventListener('click', this.borrarAnimal.bind(this))
btnBorrarNo = addEventListener('click', this.borrarAnimal.bind(this))
clearAnimales(ev) {
if (ev.target.id == 'btnBorrarSiTodos') {   
    this.aAnimales = []
    this.removeStorageAnimales() 
    this.actualizarView()
}
this.dlgConfirmarBorradoTodos.open = false;
//this.dlgConfirmarBorradoTodos.close()
}

console.log('Abrir modal')
console.dir(ev.target)
avisarBorrado(ev) {
this.animalSeleccionado = ev.target.dataset.index
this.dlgConfirmarBorrado.open = true;
//this.dlgConfirmarBorrado.showModal();
}

borrarAnimal(ev) { 
console.log('Borrar modal')  
console.dir(ev.target)
if (ev.target.id == 'btnBorrarSi') {
    this.aAnimales.splice(ev.target.dataset.index,1)
if (ev.target.id == 'btnBorrarSi') {    
    this.aAnimales.splice(this.animalSeleccionado,1)
    this.saveStorageAnimales()
    this.crearLista()
    this.crearTabla()
    this.actualizarView()
}
this.dlgConfirmarBorrado.open = false;
//this.dlgConfirmarBorrado.close()
}

// Métodos que completan el UI

actualizarView() {
this.crearLista()
this.crearTabla()
this.ajustarBorradores()
}

crearLista() {
let lista = '<ul>'
this.aAnimales.forEach( (item,i) => lista += `<li>${item} <i data-index="${i}" class="borrar far fa-trash-alt"></i></li>`)
lista += '</ul>'
this.lista.innerHTML = lista
//this.lista = document.querySelector('.lista')
//this.aEraser = document.querySelectorAll('.borrar')
//this.aEraser.forEach( item => item.addEventListener('click', this.avisarBorrado.bind(this)))
}

crearTabla() {
let tabla = '<table>'
this.aAnimales.forEach( (item, i) => tabla += `<tr><td>${item} <i data-index=${i} class="borrar far fa-trash-alt"></i></td></tr>`)
tabla += '</table>'
this.tabla.innerHTML = tabla
//this.tabla = document.querySelector('.tabla') 
//this.aEraser = document.querySelectorAll('.borrar')
//this.aEraser.forEach( item => item.addEventListener('click', this.avisarBorrado.bind(this)))
}

ajustarBorradores() {
this.aEraser = document.querySelectorAll('.borrar')
this.aEraser.forEach( 
    item => item.addEventListener(
        'click', this.avisarBorrado.bind(this),
    )
)
this.aItems = document.querySelectorAll('.animal-item')
}


// Persistencia en localStorage

saveStorageAnimales() {
window.localStorage.setItem('animales', JSON.stringify(this.aAnimales))}