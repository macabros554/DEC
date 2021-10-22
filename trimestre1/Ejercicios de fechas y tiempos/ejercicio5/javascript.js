let mostrar;
let accion = document.getElementById("botoncito");
let posponer = document.getElementById("botoncito2");
let detener = document.getElementById("botoncito3");

let fechaFuncional = new Date();


accion.addEventListener('click',empezar);

function empezar() {
    let fechaAlarma = document.getElementById("fecha1").value;
    let fechaAlarmaFuncional = new Date(fechaAlarma);
    setInterval(() => {

        fechaFuncional.setSeconds(fechaFuncional.getSeconds()+1);
    
        mostrar = `Hoy es ${fechaFuncional.getDate()}-${fechaFuncional.getMonth()}-${fechaFuncional.getUTCFullYear()} y son las 
        ${fechaFuncional.getHours()}:${fechaFuncional.getMinutes()}:${fechaFuncional.getSeconds()} horas`;
    
        document.getElementById("mensajeFecha").innerHTML = mostrar;
    
        if (fechaFuncional==fechaAlarmaFuncional) {
            console.log("hora alcanzada");
        }
    }, 1000);
}

