export class Eventos {
    constructor () {
        this.msg = [
            'Hola desde una clase en un fichero ES6',
            'Adios desde una clase en un fichero ES6',
            'El raton entro mano',
            'El raton salio wey'
        ]
        this.manejarDOM()
        this.asignarListeners()
    }
    manejarDOM() {
        this.nodos = {
            botonSaludar: document.querySelector('#boton-saludar'),
            botonDespedirse: document.querySelector('#boton-despedirse'),
            divraton: document.querySelector('#div-raton')
            
        } 
        /* this.botonSaludar = document.querySelector('#boton-saludar'),
        this.botonDespedirse = document.querySelector('#boton-despedirse'),
        this.divraton = document.querySelector('#div-raton') */ //!!! otra forma de hacerlo para evitar los nodos asociado al de abajo.
    }
    asignarListeners() {
        
        this.nodos.botonSaludar.addEventListener('click',this.saludar.bind(this))
        this.nodos.botonDespedirse.addEventListener('click',this.despedirse.bind(this))
        this.nodos.divraton.addEventListener('mouseover',this.onMouseOver.bind(this))
        this.nodos.divraton.addEventListener('mouseout',this.onMouseOut.bind(this)) 
        /* this.botonSaludar.addEventListener('click',this.saludar.bind(this))
        this.botonDespedirse.addEventListener('click',this.despedirse.bind(this))
        this.divraton.addEventListener('mouseover',this.onMouseOver.bind(this))
        this.divraton.addEventListener('mouseout',this.onMouseOut.bind(this)) */ ////!!! otra forma de hacerlo para evitar los nodos asociado al de arriba.
    }
    saludar() {
        console.log(this.msg[0])
    }
    despedirse () {
        console.log(this.msg[1])
    }
    onMouseOver() {
        console.log(this.msg[2])
    }
    onMouseOut() {
        console.log(this.msg[3])
    }
}