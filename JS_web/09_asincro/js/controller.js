export function controller() {

    console.log ('Cargado controller')

    /** Nodos del DOM */

    let btnMostrar = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnLeer = document.querySelector('#btn-leer')

    /** manejadores de eventos */
    btnMostrar.addEventListener('click', mostrar)
    btnSaludar.addEventListener('click', saludar)
    btnLeer.addEventListener('click', leerDatos)

    function mostrar() {
        /* setTimeout(saludar,1000)

    function saludar() {
        console.log ('Hola amigo')
    } */

    setTimeout(()=> console.log('Item 1'),0)
   // console.log('Item 1')

    console.log('Item 2')
    setTimeout(()=> console.log('Item 3'),2000)
   // console.log('Item 3')

    console.log('Item 4')

    setTimeout(()=> console.log('Item 5'),1000)
    }

    function saludar() {
        console.log('Hola amigo')
        
    }

    function leerDatos() {
        let i 

        // Lectura sincrona
        // i = 33
        setTimeout(() => {
            i = 33
            mostrarDatos()
        }, 1000);
         // mostrarDatos()  si se queda aqui el resultado seria undefined
        
        function mostrarDatos() {
            console.log(i)
        }
    }

    

    

  
    
}