export function controller() {
    console.log ('controller cargado')

let formData = {}




let form_curso = document.querySelector('#form_curso')

form_curso.addEventListener('submit', onSubmit)

function onSubmit(ev) {
    console.log('formulario enviado')
    ev.preventDefault()
    let aControles = document.querySelectorAll(`[type="text"],
                                            [type="email"],
                                            [type="password"],
                                             textarea`)

    aControles.forEach(
        item => {formData[item.id] = item.value}
    ) 
    
    let aChecks = document.querySelectorAll('[type="checkbox"]')
    aChecks.forEach(item => formData[item.id] = item.checked)
    
    let aRadioSede = document.querySelectorAll('[name="sede"]')
    setRadio(aRadioSede, formData)

    let aSelects = document.querySelectorAll('select')
        
    aSelects.forEach (
        item => setSelect(item, formData)
    )


    console.log(aRadioSede) 
    console.log(formData)
    /* setTimeout (() => {
        form_curso.submit()
    }, 3000) */
    }
}

function setRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
              // data[item.name] = item.value // 1º opcion
              data[item.name] ={id: item.id, value: item.value}

               
            }
        }
    )
}
function  setSelect(select, data) {
    console.dir(select)
    data[select.name] = {
        clave: select[select.selectedIndex].value,
        nombre: select[select.selectedIndex].text
    }
}
function setConfirmar(data) {
    let dialog = document.querySelector('#confirmar')
    // dialog.open = true
    let datosOutput = document.querySelector('#datosOutput')
    datosOutput.innerHTML = data
    let cadena = `<ul>`

    for (const key in data) {
        
            const element = data[key];
            cadena += `<li>${key}: ${element} </li>`
        }
    cadena = `</ul>`
    datosOutput.innerHTML = cadena

    dialog.showModal()

    document.querySelector('btnConfirmar')
         .addEventListener('click', ()=>{
            dialog.close()
         })
    document.querySelector('btnNoconfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
        })
    
}