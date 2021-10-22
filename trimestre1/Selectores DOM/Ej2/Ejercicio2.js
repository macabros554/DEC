let boton = document.getElementById("enlace");
let elExtra = document.getElementById('adicional');

boton.addEventListener("click",cambiarClase);

function cambiarClase() {
    elExtra.classList.remove('oculto');
    boton.classList.add('oculto');
}

/*function cambiarClase() {
    elExtra.classList.toggle('oculto');
    boton.classList.toggle('oculto');
    //Con este si no existe lo añade y si existe lo elimina
}*/

