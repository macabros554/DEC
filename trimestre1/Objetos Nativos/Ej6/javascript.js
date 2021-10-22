let botonA1 = document.getElementById('atras');
let botonA2 = document.getElementById('historial');
let botonA3 = document.getElementById('delante');

botonA1.addEventListener('click',paraAtras);
botonA2.addEventListener('click',paraDelante);
botonA3.addEventListener('click',posicionHistorial);

function paraAtras() {
    window.history.back();
}

function paraDelante() {
    window.history.forward();
}

function posicionHistorial() {
    window.history.go(-1);
}