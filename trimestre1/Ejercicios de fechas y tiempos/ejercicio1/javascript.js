let accion1 = document.getElementById("selectFechaYHora");

let dias = [,'domingo','lunes','martes',"miercoles","jueves","viernes",'sabado'];
let meses = ['diciembre','enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre'];



accion1.addEventListener('click',mostrarFechaYHora);

function mostrarFechaYHora() {
    let fecha = document.getElementById("fecha1").value;
    let fechaFuncional = new Date(fecha);
    let minutos = fechaFuncional.getMinutes();
    let hora = fechaFuncional.getHours();
    if (fechaFuncional.getMinutes()<=9) {
        minutos= "0"+fechaFuncional.getMinutes();
    }
    if (fechaFuncional.getHours()<=9) {
        hora= "0"+fechaFuncional.getHours();
    }
    
    let mostrar = "Hoy es "+ dias[fechaFuncional.getDay()] +", "+ fechaFuncional.getDate() +" de "+ meses[fechaFuncional.getMonth()] 
    +" y son las "+ hora +":"+ minutos +" horas";
    document.getElementById("mensajeFecha").innerHTML = mostrar;
}
