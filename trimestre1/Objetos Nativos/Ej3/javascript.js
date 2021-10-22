let botonS1 = document.getElementById('sacarInfo');
let botonM1 = document.getElementById('modificarURLAS');
let botonM2 = document.getElementById('modificarURLRE');
let botonR1 = document.getElementById('recargar');

botonS1.addEventListener('click',sacarInfo);
botonM1.addEventListener('click',modificarURLAS);
botonM2.addEventListener('click',modificarURLRE);
botonR1.addEventListener('click',recargar);

function sacarInfo() {
    var x = location.href;
    document.getElementById("demo").innerHTML = x;
}

function modificarURLAS() {
    location.assign("https://www.w3schools.com/");
}

function modificarURLRE() {
    location.replace("https://www.w3schools.com/");
}

function recargar() {
    location.reload(true);
}