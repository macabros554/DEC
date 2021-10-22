let botonL1 = document.getElementById('Online');
let botonL2 = document.getElementById('Lenguage');
let botonL3 = document.getElementById('cookieEnabled');

let x;

botonL1.addEventListener('click',online);
botonL2.addEventListener('click',lenguage);
botonL3.addEventListener('click',cookies);

function online() {
    x = navigator.onLine;
    mostrar();
}

function lenguage() {
    x = navigator.language;
    mostrar();
}

function cookies() {
    x = navigator.cookieEnabled;
    mostrar();
}

function mostrar() {
    document.getElementById("demo").innerHTML = x;
}