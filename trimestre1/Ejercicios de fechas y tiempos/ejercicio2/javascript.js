let accion1 = document.getElementById("selectFechaYHora");

let dias = ['domingo','lunes','martes',"miercoles","jueves","viernes",'sabado'];
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];



accion1.addEventListener('click',mostrarFechaYHora);

function mostrarFechaYHora() {
    let fecha = document.getElementById("fecha1").value;
    let fechaFuncional = new Date(fecha);
    let diasDelMes=31;
    let cont = 0;
    let contDia=fechaFuncional.getDay();
    let mostrar = meses[fechaFuncional.getMonth()] + " " + fechaFuncional.getFullYear() + "<br>";


    if (fechaFuncional.getMonth()==1) {
        diasDelMes=28;
        if (fechaFuncional.getFullYear()%4==0) {
            diasDelMes=29
        }
    }else if (fechaFuncional.getMonth()==0 || fechaFuncional.getMonth()==3 || fechaFuncional.getMonth()==5 || fechaFuncional.getMonth()== 6 
    || fechaFuncional.getMonth()==8 || fechaFuncional.getMonth()==9 || fechaFuncional.getMonth()==10) {
        diasDelMes=30
    }
    
    for (let i = 0; i < diasDelMes; i++) {
        cont = cont+1;
        mostrar=mostrar +cont+"("+dias[contDia]+")"+ ', ';
        contDia= contDia+1;
        if (contDia>=7) {
            contDia=0;
        }
        
    }
    

    document.getElementById("calendario").innerHTML = mostrar;
}
