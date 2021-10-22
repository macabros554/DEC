document.querySelector('#enlace').addEventListener('click',cambiarClase)

function cambiarClase() {
    elExtra.classList.remove('oculto');
    boton.classList.add('oculto');
}