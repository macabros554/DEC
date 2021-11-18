let boton = document.getElementById("comprobar");
let unDiv = document.getElementById("disponibilidad");

boton.addEventListener('click',(e)=>{

    e.preventDefault();
    let login = document.getElementById("login").value;
    
    let formData = new FormData();
    formData.append('login',login);
    let disponibilidad = document.getElementById('disponible');
    let respuesta = document.createElement("h3");
    let lista = document.getElementById('alternativas');
    
    
    
    
    
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio2/servidor/compruebaDisponibilidadXML.php',{
        method:'POST',
        body: formData
    })
    .then(data => {
        if (data.ok) {
            return data.text();
        }
        return Promise.reject(data);
    })
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        let resp = xml.getElementById('disponible')[0].textContent;
        console.log(disponibilidad);

        if (disponibilidad=='no'){
            respuesta.textContent = "El usuario esta registrado en la base de datos";
            const xml = parser.parseFromString(data, "application/xml");
            let alternetivas = xml.getElementsByTagName('login');
            let valor = document.getElementById('login');

            for (let i = 0; i < alternetivas.length; i++) {
                let alternativa = alternetivas[i];
                let alternativasLista = document.createElement('li');
                let enlace = document.createElement('a');
                enlace.addEventListener('login',cambiarLogin);
                alternativasLista.appendChild(enlace);
                let nuevoLogin = alternativa.textContent;
                lista.appendChild(alternativasLista);
                
            }


        }else if (disponibilidad=="si") {
            respuesta.textContent = "El usuario no esta en la vase de datos";
        }else{
            respuesta.textContent = "the void";
        }
        disponibilidad.appendChild(respuesta);
    })
    .catch(err => console.error(err));
})


function respuesta2(dato) {
    for (let i = 0; i < dato.length; i++) {

        console.log(dato[i]);
        unDiv.appendChild(dato[i]);
    }
   
} 