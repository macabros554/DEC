let formulario = document.getElementById("form");
let nombre = document.getElementById("name");
let telefono = document.getElementById("telefono");
let dni = document.getElementById("dni");
let email = document.getElementById("email");
let boton = document.getElementById("submitButton");

const formIsValid = {
    nombre: false,
    telefono: false,
    dni: false,
    email: false,
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    validateForm();
});

dni.addEventListener('change',(e)=> {
    let expresion= /^[0-9]{8}[A-Z]{1}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.dni = true
    else formIsValid.dni = false;
 });

email.addEventListener('change',(e) => {
    if (e.target.value.trim().length > 6) formIsValid.email = true
    else formIsValid.email = false;
});

nombre.addEventListener('change',(e)=> {
    if (e.target.value.trim().length > 9) formIsValid.nombre = true
    else formIsValid.nombre = false;
});

telefono.addEventListener('change',(e)=> {
    let expresion= /^[1-9]{1}[0-9]{8}$/;
    if (expresion.test(e.target.value.trim())) formIsValid.telefono = true
    else formIsValid.telefono = false;
});

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) {
        form.submit()
 
        crearUsuario();
    }
    else alert('Form invalid');
}

function crearUsuario() {

    const usuario = {
        nombre: nombre.value,
        telefono: telefono.value,
        dni: dni.value,
        email: email.value,
    }

    const cadena3={method:"POST"}

    fetch('http://localhost:3000/users',{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
          'Content-Type': 'application/json'
        }})
      .then(data => {return data.json();})
      .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
      })
}