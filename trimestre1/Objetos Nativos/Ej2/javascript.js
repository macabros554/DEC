let botonA1 = document.getElementById('anclas');
let botonF1 = document.getElementById('formularios');
let botonI1 = document.getElementById('imagenes');
let botonT1 = document.getElementById('titulo');
let botonU1 = document.getElementById('ulModifi');
let botonT2 = document.getElementById('vtitulo');
let x;

botonA1.addEventListener('click',tirarAncla);
botonF1.addEventListener('click',tirarFormulario);
botonI1.addEventListener('click',tirarImagenes);
botonT1.addEventListener('click',cambiarTitulo);
botonU1.addEventListener('click',ultimaModificacion);
botonT2.addEventListener('click',titulo);

function ultimaModificacion() {
    x = document.lastModified;
    mostrar();
}

function titulo() {
    x = document.title;
    mostrar();
}

function tirarAncla() {
    x = document.anchors;
    mostrar();
}

function tirarFormulario() {
    x = document.forms["uno"];
    mostrar();
}

function tirarImagenes() {
    x = document.images;
    mostrar();
}

function cambiarTitulo() {
    document.title = "error 404";
}

function mostrar() {
    document.getElementById("demo").innerHTML = x;
}