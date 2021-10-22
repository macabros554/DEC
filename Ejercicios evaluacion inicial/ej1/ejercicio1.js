let boton = document.getElementById("botoncito");

boton.addEventListener("click",AnadirOrReemplazar);

function AnadirOrReemplazar() {
    
    let posicion=document.getElementById("Posicion").value;
    let equipo=document.getElementById("Equipo").value;
    let puntos=document.getElementById("Puntos").value;

    let fila=document.getElementsByTagName("tr")[posicion];


    let fila1 = fila.children[1];
    let fila2= fila.children[2];

    fila1.textContent=equipo;
    fila2.textContent=puntos;
}