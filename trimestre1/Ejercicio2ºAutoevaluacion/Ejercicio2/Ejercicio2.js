let anadir = document.getElementById("anadir");
let borrar = document.getElementById("borrar");
let modificar = document.getElementById("modifi");

anadir.addEventListener("click",anadirEmp);
borrar.addEventListener("click",borrarEmp);
modificar.addEventListener("click",modificarEmp);

function anadirEmp() {

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;

    let losTr = document.getElementsByTagName("tr");
    let verdad = true;
    //let laTabla = document.getElementsByTagName("tablita");

    for (let i = 1; verdad && i < losTr.length; i++) {
        let element = losTr[i].querySelector("td:nth-child(2)");
        if (element.innerHTML==dni) {
            verdad=false;
        }
        
    }
    if (verdad==true) {
        document.getElementById("tablita").insertRow(-1).innerHTML = '<td>'+losTr.length+'</td><td>'+dni+'</td><td>'+nombre+'</td><td>'+apellidos+'</td>';
    }
}

function borrarEmp() {

    let dni = document.getElementById("dni").value;

    let losTd = document.querySelectorAll("td:nth-child(2)");
    let padre;
    let verdad = true;
    //let laTabla = document.getElementsByTagName("tablita");

    for (let i = 0; i < losTd.length; i++) {
        if (losTd[i].innerHTML==dni) {
            verdad=false;
            padre=losTd[i].parentNode;
            //parentNode es para sellecionar a este como padre
        }
        else if (verdad==false) {
            let emp = document.querySelectorAll("td:nth-child(1)")[i];
            emp.innerHTML = emp.innerHTML-1;
        }
        
    }
    if (verdad==false) {
        padre.remove();
    }
}

function modificarEmp() {

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;

    let losTr = document.getElementsByTagName("tr");
    let contador = 0;
    let verdad = true;
    //let laTabla = document.getElementsByTagName("tablita");

    for (let i = 1; verdad && i < losTr.length; i++) {
        let element = losTr[i].querySelector("td:nth-child(2)");
        if (element.innerHTML==dni) {
            verdad=false;
        }
        contador+=1;
    }
    if (verdad==false) {
        losTr[contador].querySelector("td:nth-child(3)").textContent = nombre;
        losTr[contador].querySelector("td:nth-child(4)").textContent = apellidos ;
    }
}