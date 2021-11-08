let boton = document.getElementById("comprobar");
let unDiv = document.getElementById("disponibilidad");

boton.addEventListener('click',(e)=>{

    e.preventDefault();
    let login = document.getElementById("login").value;
    
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio2/servidor/compruebaDisponibilidadXML.php')
    .then(data => {
        if (data.ok) {
            return data.text();
        }
        return Promise.reject(data);
    })
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        let disponibilidad = xml.getElementsByTagName('disponible');
        let respuesta = disponibilidad[0].children;
        let opciones = xml.getElementsByTagName('login');
        if (disponibilidad=="si") {
            alert(login+" usuario valido");
        }else{
            alert(login+" login no valido una una de las opcione que aparecen por consola");
            respuesta2(opciones);

        }

    })
    .catch(err => console.error(err));
})


function respuesta2(dato) {
    for (let i = 0; i < dato.length; i++) {
    console.log(dato[i]);
    unDiv.appendChild(dato[i]);
    }
   
} 