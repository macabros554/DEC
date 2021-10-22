let fromularioPost = document.getElementById("submitButtonPost");
let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let cuerpo = document.getElementById("cuerpo");
let boton = document.getElementById("submitButtonPost");

const formIsValid = {
    titulo: false,
    cuerpo: false,
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    validateForm();
});

titulo.addEventListener('change',(e)=> {
    if (e.target.value.trim().length > 6) formIsValid.cuerpo = true
    else formIsValid.cuerpo = false;
 });

 cuerpo.addEventListener('change',(e)=> {
    if (e.target.value.trim().length > 6) formIsValid.cuerpo = true
    else formIsValid.cuerpo = false;
});


const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) {
        form.submit()
 
        crearPost();
    }
    else alert('Form invalid');
}

function crearPost() {

    const nuevoPost = {
        titulo: nombre.value,
        cuerpo: telefono.value,
        autor: dni.value,
    }

    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/posts');
    peticion.setRequestHeader('Content-type', 'application/json');
    peticion.send(JSON.stringify(nuevoPost));
    peticion.addEventListener('load', function() {

})
}