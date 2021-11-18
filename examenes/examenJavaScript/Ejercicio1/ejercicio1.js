let form = document.getElementById("formulario");
let nombre = document.getElementById("name");
let apellido = document.getElementById("apellido");
let login = document.getElementById("login");
let contrasenia = document.getElementById("contrasenia");
let nacimiento = document.getElementById("nacimiento");
let edad = document.getElementById("edad");
let registrar = document.getElementById("submitButton");
let borrar = document.getElementById("borrar");
let consultar = document.getElementById("consultar");
let ultimo = document.getElementById("ultimo");
let tabla = document.getElementById("sugerencias");
let tablaUsuario = document.getElementById("usuario");

const formIsValid = {
    nombre:false,
    apellido:false,
    contrasenia:false,
    login:false,
    nacimiento:false
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
});

nombre.addEventListener('change',(e)=>{
    fetch(`https://intranetjacaranda.es/pruebaJS/arrayNombres.php?nombre=${nombre}`)
    .then(response =>{
        if(response.ok){
            return response;
        }return Promise.reject(response);
    })
    .then(datos => 
        console.log(datos))
        
    .catch(err => { console.log('Error en la petición HTTP: '+err.message);})

    let expresion= /^[A-Za-z]{3,16}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.nombre = true
    else formIsValid.nombre = false;
})

apellido.addEventListener('change',(e)=> {
    let expresion= /^[A-Za-z]{3,16}\s[A-Za-z]{3,16}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.apellido = true
    else formIsValid.apellido = false;
});

login.addEventListener('change',(e)=>{
    fetch("https://intranetjacaranda.es/pruebaJS/checkLogin.php",{
        method:'POST'
    })
    .then(response =>{
        if(response.ok){
            return response;
        }return Promise.reject(response);
    })
    .then(datos => 
        console.log(datos))
        
    .catch(err => { console.log('Error en la petición HTTP: '+err.message);})



    let expresion= /^[A-Za-z0-9]{3,16}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.login = true
    else formIsValid.login = false;
})

contrasenia.addEventListener('change',(e)=> {
    let expresion= /^[A-Za-z]{3,16}[0-9]{2,8}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.contrasenia = true
    else formIsValid.contrasenia = false;
});

nacimiento.addEventListener('change',(e)=> {
    let fechaAct=new Date;
    let modificarFecha= new Date(nacimiento.value);
    console.log((fechaAct.getFullYear()-modificarFecha.getFullYear()));
    if ((fechaAct.getFullYear()-modificarFecha.getFullYear())>=18) formIsValid.nacimiento = true
    else formIsValid.nacimiento = false;

    edad.innerHTML=(fechaAct.getFullYear()-modificarFecha.getFullYear());
});

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) {
        form.submit()
 
        guardarDatos();
    }
    else alert('Form invalid');
}

function guardarDatos() {
    let fechaAlta = new Date();

    const guardado = {
        nombre:nombre.value,
        apellido:apellido.value,
        contrasenia:contrasenia.value,
        login:login.value,
        nacimiento:nacimiento.value,
        fechaAlta:fechaAlta
    }

    localStorage.setItem(login.value,JSON.stringify(guardado));
    
}

borrar.addEventListener("click",(e)=>{
    localStorage.removeItem(login.value);
})



function generarTabla() {
    let linea= document.createElement("tr");
    let columna1= document.createElement("td");
    let columna2= document.createElement("td");
    let columna3= document.createElement("td");
    let columna4= document.createElement("td");
    let columna5= document.createElement("td");
    let columna6= document.createElement("td");

    columna1.textContent='nombre';
    columna2.textContent='apellido';
    columna3.textContent='contrasenia';
    columna4.textContent='login';
    columna5.textContent='nacimiento';
    columna6.textContent='fechaAlta';

    linea.appendChild(columna1);
    linea.appendChild(columna2);
    linea.appendChild(columna3);
    linea.appendChild(columna4);
    linea.appendChild(columna5);
    linea.appendChild(columna6);

    tablaUsuario.appendChild(linea);
    
}

consultar.addEventListener("click",(e)=>{
    
    let linea= document.createElement("tr");
    let columna1= document.createElement("td");
    let columna2= document.createElement("td");
    let columna3= document.createElement("td");
    let columna4= document.createElement("td");
    let columna5= document.createElement("td");
    let columna6= document.createElement("td");

    let usuario = JSON.parse(localStorage.getItem(login.value));
    if (usuario == null) {
        alert("Usuario no encontrado");
    }else{
        generarTabla()
        columna1.textContent=usuario.nombre;
        columna2.textContent=usuario.apellido;
        columna3.textContent=usuario.contrasenia;
        columna4.textContent=usuario.login;
        columna5.textContent=usuario.nacimiento;
        columna6.textContent=usuario.fechaAlta;

        linea.appendChild(columna1);
        linea.appendChild(columna2);
        linea.appendChild(columna3);
        linea.appendChild(columna4);
        linea.appendChild(columna5);
        linea.appendChild(columna6);

        tablaUsuario.appendChild(linea);
    }
})

ultimo.addEventListener("click",(e)=>{
    generarTabla();
    let linea= document.createElement("tr");
    let columna1= document.createElement("td");
    let columna2= document.createElement("td");
    let columna3= document.createElement("td");
    let columna4= document.createElement("td");
    let columna5= document.createElement("td");
    let columna6= document.createElement("td");

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
    
    columna1.textContent=usuarioMasNuevo.nombre;
    columna2.textContent=usuarioMasNuevo.apellido;
    columna3.textContent=usuarioMasNuevo.contrasenia;
    columna4.textContent=usuarioMasNuevo.login;
    columna5.textContent=usuarioMasNuevo.nacimiento;
    columna6.textContent=usuarioMasNuevo.fechaAlta;

    linea.appendChild(columna1);
    linea.appendChild(columna2);
    linea.appendChild(columna3);
    linea.appendChild(columna4);
    linea.appendChild(columna5);
    linea.appendChild(columna6);
    
    tablaUsuario.appendChild(linea);


})








