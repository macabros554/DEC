const tareaPendiente = document.getElementById("tareaPendiente");
const tareaInProcess = document.getElementById("tareaInProcess");
const tareaFiniquitada = document.getElementById("tareaFiniquitada");
let textoTarea = document.getElementById("tarea");
let botonSubirTexto = document.getElementById("submitButton");
let botonBorrar = document.createElement("input");
botonBorrar.setAttribute("type","button");
botonBorrar.setAttribute("value","borrar");

botonSubirTexto.addEventListener("click",rellenar);
botonBorrar.addEventListener("click",borrarTarea)

let contador=0;

window.addEventListener('DOMContentLoaded',recargarLista);

function recargarLista(e) {

    contador=localStorage.length;
    
    for (let i = 0; i < localStorage.length; i++) {

        let divInterno=document.createElement("div");
        let tarea = JSON.parse(localStorage.getItem(i));
        divInterno.setAttribute("id",i);
        divInterno.setAttribute("draggable",true);
        divInterno.setAttribute("ondragstart","drag(event)");
        divInterno.innerHTML=tarea.mensaje;
        if (tarea.bloque==='tareaPendiente') {
            tareaPendiente.appendChild(divInterno);
        }else if (tarea.bloque==='tareaInProcess') {
            tareaInProcess.appendChild(divInterno);
        }else if (tarea.bloque==='tareaFiniquitada') {
            tareaFiniquitada.appendChild(divInterno);
        }

        
        
    }

}

function rellenar(e) {
    e.preventDefault();

    const datosDiv ={
        bloque:'tareaPendiente',
        mensaje:textoTarea.value
    }

    let divInterno=document.createElement("div");
    divInterno.setAttribute("id",contador);
    divInterno.setAttribute("draggable",true);
    divInterno.setAttribute("ondragstart","drag(event)");
    divInterno.innerHTML=textoTarea.value;
    tareaPendiente.appendChild(divInterno);
    
    localStorage.setItem(contador,JSON.stringify(datosDiv));
    contador++;

}

function borrarTarea() {
    localStorage.removeItem(botonBorrar.id)
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
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaInProcess';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaInProcess.appendChild(tareaPendiente.removeChild(element))
})
tareaInProcess.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaInProcess';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaInProcess.appendChild(tareaFiniquitada.removeChild(element))
})

tareaPendiente.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaPendiente';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaPendiente.appendChild(tareaInProcess.removeChild(element))
})
tareaPendiente.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaPendiente';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaPendiente.appendChild(tareaFiniquitada.removeChild(element))
})

tareaFiniquitada.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaFiniquitada';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaFiniquitada.appendChild(tareaInProcess.removeChild(element))
})
tareaFiniquitada.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    localStorage.removeItem(element);
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.bloque='tareaFiniquitada';
    localStorage.setItem(element.id,JSON.stringify(tarea));
    tareaFiniquitada.appendChild(tareaPendiente.removeChild(element))
})














/*let checkBox = document.createElement("input");
checkBox.setAttribute("type","checkBox");
let botonBorrar = document.createElement("input");
botonBorrar.setAttribute("type","button");
botonBorrar.setAttribute("value","borrar");*/