export function controller() {
    console.log('controller cargado')

    
      
    let mig = true
    let aBotones = document.querySelectorAll('.button')
    aBotones.forEach (item => {
        item.addEventListener('click', onClickImg)
    
    document.querySelector('#imgMig')
    .addEventListener('.click', onClickImg)
})
    function onClickImg(ev) {
        let nodoImg = 
        console.log(ev.target.previusElementSibiling)
        
        
        
        
        /* if (mig) {
            ev.target.src = './assets/rammstein.jpg'
        } else {
            ev.target.src = './assets/MIG_31.png'
        }
        mig = !mig */
    }
}
