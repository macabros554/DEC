let accion1 = document.getElementById("selectFechaYHora");

let dias = ['domingo','lunes','martes',"miercoles","jueves","viernes",'sabado'];
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

accion1.addEventListener('click',mostrarFechaYHora);

function mostrarFechaYHora() {
    let fecha1 = document.getElementById("fecha1").value;
    let fechaFuncional1 = new Date(fecha1);
    let numero = document.getElementById("numero").value;
    let fecha2 = new Date(fechaFuncional1);
    fecha2.setDate(fechaFuncional1.getDate()+parseInt(numero));

    document.getElementById("mensajeFecha").innerHTML = `${fechaFuncional1.getDate()}<br>${fechaFuncional1}<br>${fecha2}`;
}