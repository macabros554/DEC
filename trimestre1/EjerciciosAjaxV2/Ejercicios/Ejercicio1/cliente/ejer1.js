let boton = document.getElementById("comprobar");

boton.addEventListener('click',(e)=>{

    e.preventDefault();
    let login = document.getElementById("login").value;
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio1/servidor/compruebaDisponibilidad.php')
    .then(data => {
        if (data.ok) {
            return data.text();
        }
        return Promise.reject(data);
    })
    .then(data => {
        if (data=='si') {
            alert(login+" esta registrado");
        }else{
            alert(login+" no estas registrado");
        }

    })
    .catch(err => console.error(err));
})

