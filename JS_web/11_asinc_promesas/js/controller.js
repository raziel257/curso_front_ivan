export function controller() {

    console.log ('Cargado controller')

    /** Nodos del DOM */
   const btnPedir = document.querySelector('#btn-Pedir')
   const output = document.querySelector('#output')
   const btnSaludar = document.querySelector('#btn-Saludar')
   const btnSaludarES = document.querySelector('#btn-Saludar-17')
   const btnusers = document.querySelector('#btn-users')
    

    /** Manejadores de eventos */

    btnPedir.addEventListener('click', onPedir)
    btnSaludar.addEventListener('click', onSaludar)
    btnSaludarES.addEventListener('click', onSaludarAwait)
    btnusers.addEventListener('click', onusers)

    /* let aDatos = [1,2,3,4,5]
    aDatos.map( (item, i, array) => item * i) */

    /**
     * Una promise (promesa en castellano) es un objeto nativo desde ES6
     * que representa la terminacion o fracaso eventual de una funcion asincrona.
     * 
     * Una promesa es un objeto devuelto desde una funcion al cual encadenas funciones callback
     * en vez de pasar funciones callback a una funcion.
     */

    function completarPedido() {
        return new Promise( (resolve,reject) => {
        setTimeout( () => {
           if (Math.random() > 0.3) { // 70% simulamos aciertos
                resolve('Toma tu hamburguesa')
        } else { // el otro 30% simulamos errores
                reject('Lo siento, no quedan hamburguesas')
           }
        }, 2000 )
    })
        
    }

    /* msgAfterTimeout =  */

    /* function msgAfterTimeout(msg, nombre, tiempo,cb) {
        setTimeout(function () {
            cb(msg, nombre);
        }, tiempo);
    }; */

    function onPedir() {
          
       completarPedido()
       .then( (datos)=> {
              output.innerHTML += '<li>' + datos + '</li>'
       } )
       .catch( (error)=> {
              output.innerHTML += '<li>' + error + '</li>'
       } )
      }
     
    function msgAfterTimeout(msg, nombre, tiempo) {
        return new Promise( (resolve) => {
            setTimeout(()=>{
                resolve([msg, nombre])
            }, tiempo)
        })
    }

    /* function onSaludar() {
        msgAfterTimeout('Juanito', 'Pepito', 3500)
        .then (([msg, nombre]) => { 
        let saludo =(`Hola ${nombre}!`)
        let quienSoy = msg
        console.log(saludo)
        return msgAfterTimeout (msg, saludo, 500)
    }).then (([quienSoy, saludo])=>{
        console.log(`${saludo}, soy ${quienSoy}`)
    })} */

    /* msgAfterTimeout('Juanito', 'Pepito', 3500, (msg, nombre) => {
    let saludo =(`Hola ${nombre}!`)
    let quienSoy = msg
    console.log(saludo)
    msgAfterTimeout(msg, saludo, 500, (quienSoy, saludo) => {
        console.log(`${saludo}, soy ${quienSoy}`)
    }) */
    
    function onSaludar() {
        msgAfterTimeout('Juanito', 'Pepito', 3500)
        .then( (datos) => { 
        let saludo =(`Hola ${datos[1]}!`)
        let quienSoy = datos[0]
        console.log(saludo)
        return msgAfterTimeout (quienSoy, saludo, 500)
    }).then ((datos)=>{
        console.log(`${datos[1]}, soy ${datos[0]}`)
    })}
     
    /**
     * En ES 2017 aparece async / await
     */ 


    async function onSaludarAwait () {
        let datos = []
        datos = await msgAfterTimeout('Juanito', 'Pepito', 3500)
        let saludo =(`Hola ${datos[1]}!`)
        let quienSoy = datos[0]
        console.log(saludo)
        datos = await msgAfterTimeout (quienSoy, saludo, 500)
        console.log(`${datos[1]}, soy ${datos[0]}`)
    }
    

    function onusers() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then((Response)=>{return Response.json()})
        .then( (data =>{console.dir(data)}))
        
    }
}    
