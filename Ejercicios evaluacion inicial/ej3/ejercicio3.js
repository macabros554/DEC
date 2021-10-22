let provincias = document.getElementsByTagName("td");

let boton = document.getElementById("ordenar");
boton.addEventListener("click",Ordenar);

function Ordenar() {
    //alert(provincias[1].textContent);
    let POrdenadas = provincias.sort();
    console.log(POrdenadas);

}