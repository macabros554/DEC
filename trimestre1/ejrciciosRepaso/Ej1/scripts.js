let theBox = document.getElementById('box');

theBox.addEventListener("mouseenter",cambiarVerde)
theBox.addEventListener("mouseleave",cambiarRojo)
theBox.addEventListener("mousedown",pulsarCaja)
theBox.addEventListener("mouseup",desPulsarCaja)

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