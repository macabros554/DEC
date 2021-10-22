let botonA1 = document.getElementById('altura');
let botonA2 = document.getElementById('anchura');
let botonC1 = document.getElementById('color');
let botonA3 = document.getElementById('alturaT');
let botonA4 = document.getElementById('anchuraT');


botonA1.addEventListener('click',AlturaDispo);
botonA2.addEventListener('click',AnchuraDispo);
botonC1.addEventListener('click',ProfundiColor);
botonA3.addEventListener('click',AlturaTotal);
botonA4.addEventListener('click',AnchuraTotal);

function AlturaDispo() {
    x = screen.availHeight;
    mostrar();
    
}

function AnchuraDispo() {
    x = screen.availWidth;
    mostrar();
}

function ProfundiColor() {
    x = screen.colorDepth;
    mostrar();
}

function AlturaTotal() {
    x = screen.height;
    mostrar();
}

function AnchuraTotal() {
    x = screen.width;
    mostrar();
}

function mostrar() {
    document.getElementById("demo").innerHTML = x;
}