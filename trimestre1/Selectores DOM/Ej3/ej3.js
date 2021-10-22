let boton = document.getElementById('boton');

boton.addEventListener("click",sangrar);

function sangrar() {
    let columna = document.getElementById('columna').value;
    let fila = document.getElementById('fila').value;

    let leerFila = document.getElementsByTagName('tr')[fila-1];
    let leerCelda = leerFila.getElementsByTagName('td')[columna-1];

    leerCelda.classList.add("rojo");
    
}