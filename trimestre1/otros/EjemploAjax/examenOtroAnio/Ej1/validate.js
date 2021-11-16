const form = document.getElementById('form');
const contrasenia = document.getElementById('password');
const nickname = document.getElementById('nickname');
const namec = document.getElementById('name');
const dni = document.getElementById('DNI');
const edad = document.getElementById('edad');
let boton = document.getElementById("submitButton");
let consultar = document.getElementById("consultar");
let ultimoLog = document.getElementById("ultimoLog");
let borrar = document.getElementById("borrar");
let tabla = document.getElementById("tabla");

consultar.addEventListener("click", ()=> {

    let linea= document.createElement("tr");
    let columna1= document.createElement("td");
    let columna2= document.createElement("td");
    let columna3= document.createElement("td");
    let columna4= document.createElement("td");
    let columna5= document.createElement("td");

    let usuario;
    usuario = JSON.parse(localStorage.getItem(nickname.value));
    if (usuario == null) {
        alert("Usuario no encontrado");
    }else{
        columna1.textContent=usuario.nickname;
        columna2.textContent=usuario.namec;
        columna3.textContent=usuario.contrasenia;
        columna4.textContent=usuario.dni;
        columna5.textContent=usuario.edad;

        linea.appendChild(columna1);
        linea.appendChild(columna2);
        linea.appendChild(columna3);
        linea.appendChild(columna4);
        linea.appendChild(columna5);

        tabla.appendChild(linea);
    }

});

ultimoLog.addEventListener("click",()=>{

    let linea= document.createElement("tr");
    let columna1= document.createElement("td");
    let columna2= document.createElement("td");
    let columna3= document.createElement("td");
    let columna4= document.createElement("td");
    let columna5= document.createElement("td");
    let keyDefault = localStorage.key(0);
    let usuarioDefault=JSON.parse(localStorage.getItem(keyDefault));
    let usuarioMasNuevo=usuarioDefault;

    for (let i = 0; i < localStorage.length-1; i++) {
        let key = localStorage.key(i);
        let key2 = localStorage.key(i+1);
        let usuario=JSON.parse(localStorage.getItem(key));
        let usuario2=JSON.parse(localStorage.getItem(key2));
        if (usuario.fechaAlta<usuario2.fechaAlta){
            usuarioMasNuevo=usuario2;
        }
    }

    columna1.textContent=usuarioMasNuevo.nickname;
    columna2.textContent=usuarioMasNuevo.namec;
    columna3.textContent=usuarioMasNuevo.contrasenia;
    columna4.textContent=usuarioMasNuevo.dni;
    columna5.textContent=usuarioMasNuevo.edad;

    linea.appendChild(columna1);
    linea.appendChild(columna2);
    linea.appendChild(columna3);
    linea.appendChild(columna4);
    linea.appendChild(columna5);

    tabla.appendChild(linea);

})

borrar.addEventListener("click",()=>{

    localStorage.removeItem(nickname.value);

});

let contador=0;

const formIsValid = {
    nickname: false,
    namec:false,
    contrasenia: false,
    dni: false,
    edad: false,
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    validateForm();
});

nickname.addEventListener('change',(e)=> {
    let expresion= /^[A-Za-z0-9]{4,20}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.nickname = true
    else formIsValid.nickname = false;
});
namec.addEventListener('change',(e)=> {
    let expresion= /^[A-Za-z]{3,16}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.namec = true
    else formIsValid.namec = false;
});

contrasenia.addEventListener('change',(e)=> {
    let expresion= /^[A-Za-z]{4,16}[0-9]{2,16}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.contrasenia = true
    else formIsValid.contrasenia = false;
});

dni.addEventListener('change',(e)=> {
    let expresion= /^[0-9]{8}[A-Z]{1}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.dni = true
    else formIsValid.dni = false;
});
edad.addEventListener('change',(e)=> {
    let expresion= /^[0-9]{6,8}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.edad = true
    else formIsValid.edad = false;
});



const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) {
        form.submit()
 
        crearguardado();
    }
    else alert('Form invalid');
}

function crearguardado() {

    let fechaAlta = new Date();

    const guardado = {
        nickname: nickname.value,
        namec:namec.value,
        contrasenia: contrasenia.value,
        dni: dni.value,
        edad: edad.value,
        fechaAlta: fechaAlta,
    }

    localStorage.setItem(nickname.value,JSON.stringify(guardado));
    contador++;
}