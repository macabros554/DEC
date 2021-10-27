const tareaPendiente = document.getElementById("tareaPendiente");
const tareaInProcess = document.getElementById("tareaInProcess");
const tareaFiniquitada = document.getElementById("tareaFiniquitada");
let textoTarea = document.getElementById("tarea");
let botonSubirTexto = document.getElementById("submitButton");
let botonBorrar = document.createElement("input");
botonBorrar.setAttribute("type","button");
botonBorrar.setAttribute("value","borrar");

let contador=0;
botonSubirTexto.addEventListener("click",rellenar);
botonBorrar.addEventListener("click",borrarTarea)

window.addEventListener('DOMContentLoaded',recargarLista);

function recargarLista(e) {

    contador=sessionStorage.length;
    
    for (let i = 0; i < sessionStorage.length; i++) {

        let divInterno=document.createElement("div");
        divInterno.setAttribute("id",i);
        divInterno.setAttribute("draggable",true);
        divInterno.setAttribute("ondragstart","drag(event)");
        divInterno.innerHTML=sessionStorage.getItem(i);
        tareaPendiente.appendChild(divInterno);
        
    }

}

function rellenar(e) {
    e.preventDefault();

    let divInterno=document.createElement("div");
    divInterno.setAttribute("id",contador);
    divInterno.setAttribute("draggable",true);
    divInterno.setAttribute("ondragstart","drag(event)");
    divInterno.innerHTML=textoTarea.value;
    tareaPendiente.appendChild(divInterno);
    
    sessionStorage.setItem(contador,textoTarea.value);
    contador++;

}

function borrarTarea() {
    sessionStorage.removeItem(botonBorrar.id)
    location.reload();
}








tareaPendiente.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

tareaPendiente.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

tareaPendiente.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

tareaInProcess.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

tareaInProcess.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

tareaInProcess.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

tareaFiniquitada.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

tareaFiniquitada.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

tareaFiniquitada.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})



tareaFiniquitada.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id
    
    switch (padre) {
        case 'tareaPendiente':
          console.log('tareaPendiente');
          tareaFiniquitada.appendChild(tareaPendiente.removeChild(element));
          break;
        case 'tareaInProcess':
          console.log('tareaInProcess');
          tareaFiniquitada.appendChild(tareaInProcess.removeChild(element));
          break;
      }
    })

    tareaInProcess.addEventListener('dragover', (e) => {
        e.preventDefault()
})
    tareaPendiente.addEventListener('dragover', (e) => {
        e.preventDefault()
})

tareaInProcess.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id
    
    switch (padre) {
        case 'tareaFiniquitada':
          console.log('tareaFiniquitada');
          tareaInProcess.appendChild(tareaFiniquitada.removeChild(element));
          break;
        case 'tareaInProcess':
          console.log('tareaPendiente');
          tareaInProcess.appendChild(tareaPendiente.removeChild(element));
          break;
      }
    })

    tareaFiniquitada.addEventListener('dragover', (e) => {
        e.preventDefault()
})
    tareaPendiente.addEventListener('dragover', (e) => {
        e.preventDefault()
})

tareaPendiente.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id
    
    switch (padre) {
        case 'tareaFiniquitada':
          console.log('tareaFiniquitada');
          tareaPendiente.appendChild(tareaFiniquitada.removeChild(element));
          break;
        case 'tareaInProcess':
          console.log('tareaInProcess');
          tareaPendiente.appendChild(tareaInProcess.removeChild(element));
          break;
      }
    })

    tareaFiniquitada.addEventListener('dragover', (e) => {
    e.preventDefault()
})
tareaInProcess.addEventListener('dragover', (e) => {
    e.preventDefault()
})

tareaInProcess.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaInProcess.appendChild(tareaPendiente.removeChild(element))
})
tareaInProcess.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaInProcess.appendChild(tareaFiniquitada.removeChild(element))
})

tareaPendiente.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaPendiente.appendChild(tareaInProcess.removeChild(element))
})
tareaPendiente.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaPendiente.appendChild(tareaFiniquitada.removeChild(element))
})

tareaFiniquitada.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaFiniquitada.appendChild(tareaInProcess.removeChild(element))
})
tareaFiniquitada.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    tareaFiniquitada.appendChild(tareaPendiente.removeChild(element))
})














/*let checkBox = document.createElement("input");
checkBox.setAttribute("type","checkBox");
let botonBorrar = document.createElement("input");
botonBorrar.setAttribute("type","button");
botonBorrar.setAttribute("value","borrar");*/