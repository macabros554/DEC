let botonA = document.getElementById("Anadir");
let botonB = document.getElementById("Borrar");

let lista = document.getElementById("lista");
let listaLi = document.getElementsByTagName('li');


botonA.addEventListener("click",Anadir);
botonB.addEventListener("click",Borrar);

function Anadir() {
    let fila = document.createElement('li');
    let newElement = document.createTextNode(prompt("introduce el elemento a añadir"));
    fila.appendChild(newElement);
    lista.appendChild(fila);
}

function Borrar() {
    let posB = document.getElementById("posB");
    alert(posB);
    /*if (listaLi.length > posB) {
        alert("valido");
    }else{
        alert("no valido");
    }*/
    //lista.removeChild(listaLi[posB]);

}