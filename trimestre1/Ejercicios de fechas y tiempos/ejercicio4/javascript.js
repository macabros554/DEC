let mostrar = document.getElementById("mensajeFecha");

let fechaFuncional = new Date();

setInterval(() => {

    fechaFuncional.setSeconds(fechaFuncional.getSeconds()+1);

    mostrar = `Hoy es ${fechaFuncional.getDate()}-${fechaFuncional.getMonth()}-${fechaFuncional.getUTCFullYear()} y son las 
    ${fechaFuncional.getHours()}:${fechaFuncional.getMinutes()}:${fechaFuncional.getSeconds()} horas`;

    document.getElementById("mensajeFecha").innerHTML = mostrar;
}, 1000);