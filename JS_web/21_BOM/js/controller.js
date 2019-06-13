export function controller() {
    console.log('controller cargado')
    const btnProbar = document.querySelector('#btnProbar')

    btnProbar.addEventListener('click', onClickProbar)

    document.querySelector('#btnLocalizar')

    function onClickProbar() {
         // window.prompt()
        let handler = window.open()
        handler.location.assign('http://google.com')
        window.setTimeout(() => {
            handler.close()
        },2000)
        console.log()

        let handtime = setTimeout(() => {}, 2000)
        clearTimeout(handtime)

        let handInterval = setInterval(() => {}, 2000)
        clearInterval(handInterval)
    }
}