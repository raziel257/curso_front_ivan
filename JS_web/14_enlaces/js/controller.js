export function controller ( {
    
    // Procedimiento habitual

    // 1. Referencia a los Nodos del DOM que me interesan
    const aNodosEnlaces = document.querySelectorAll('#')
   /*  const aNodosRespuesta = document.querySelectorAll('.respuesta') */

    
    // 2. Definir los manejadores de eventos

    aNodosEnlaces.forEach( (item) => { item.addEventListener('click', onClick) })
 // 3. Implemantar los manejadores de eventos
})