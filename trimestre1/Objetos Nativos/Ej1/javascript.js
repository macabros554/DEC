let botonC1 = document.getElementById('crearV');
let botonV1 = document.getElementById('moverV');
let botonR1 = document.getElementById('rediV');
let botonCR1 = document.getElementById('cerrarV');
let ventana;

botonC1.addEventListener('click',crearVentana);
botonCR1.addEventListener('click',cerrarVentana);
botonV1.addEventListener('click',moverVentana);
botonR1.addEventListener('click',redimencionarVentana);

function crearVentana() {
    ventana = window.open( "","","width=200, height=100");
    ventana.document.write("<h1>Hola mundo</h1>");
}

function moverVentana() {
    ventana.moveBy(200,200);
}

function redimencionarVentana() {
    ventana.resizeTo(500,500);
}

function cerrarVentana() {
    ventana.close();
}