function main() {
    let cadena = 'Hola amigo'
    let alumno = {
        saludar: function() {}
    }
    // let alumno = new Object()
    let users = ['Zipri','Chino','Sindi']
    // let users = new Array()
    console.log(typeof users)
    // EN OTROS LENGUAJES toLowerCase(cadena)
   
    
    console.log(cadena.toLocaleLowerCase())
    
    // let cadenaTemp = new String()
    console.log(cadena.length)
    let aCadena = cadena.split(' ')
    let cadenaSinEpacios = aCadena.join('')
    
    cadena = cadena.toUpperCase().split(' ').join('')
    console.log(cadena)



    let url = 'https://www.cife.es/alumnos'
    
    let urlTemp = url.slice(url.indexOf('//')+2)
    console.log(urlTemp)
    urlTemp = urlTemp.slice(0, url.indexOf('/') )
    console.log(urlTemp)

    let aUrl = url.split('/')
    console.log(aUrl[1].slice(2))               
    
   console.log(url[12]) 
    
 }   
    main()