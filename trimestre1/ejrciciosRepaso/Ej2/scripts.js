let theBox = document.getElementById('box');
let theText = document.getElementById('texto');

theBox.addEventListener("mouseenter",cambiarVerde)
theBox.addEventListener("mouseleave",cambiarRojo)
theBox.addEventListener("mousedown",pulsarCaja)
theBox.addEventListener("mouseup",desPulsarCaja)

theText.addEventListener("keydown",pulsarTecla)
theText.addEventListener("keyup",desPulsarTecla)

function cambiarVerde() {
    theBox.classList.add("verde");
}

function cambiarRojo() {
    theBox.classList.remove("verde");
    theBox.classList.add("rojo");
}

function pulsarCaja() {
    console.log("Has pulsado la caja.");
}

function desPulsarCaja() {
    console.log("Has soltado el	botón izquierdo	dentro de la caja.");
}

function pulsarTecla() {
    console.log("Has pulsado una tecla.");
}

function desPulsarTecla() {
    console.log("Has soltado una tecla.");
}

function letrita(event) {
    const key = event.key;
    console.log("Presionada: " + key);
}