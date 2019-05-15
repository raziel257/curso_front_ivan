export function controller () {

    console.log('Controller cargado')

    let nombre = ''
    let msginicial = ''
    /**Nodos del DOM */
    const inNombre = document.querySelector('#in-nombre')
    const btnBorrar = document.querySelector('#btn-borrar')
    const output = document.querySelector('#output')

    msginicial = output.innerHTML + ' '

    /** Asignar manejadores de eventos */

    inNombre.addEventListener('input', oninputNombre)
    btnBorrar.addEventListener('click', borrar)
    
    function oninputNombre () {
        nombre = inNombre.value
        output.innerHTML = msginicial + nombre.toUpperCase()
        
    }
    function borrar () {
        inNombre.value = ''
        oninputNombre()
    }
    
}