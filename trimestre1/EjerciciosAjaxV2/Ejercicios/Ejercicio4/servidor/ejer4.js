let listaProvincias=document.getElementById("listaProvincias");

fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio4/servidor/cargaProvinciasXML.php')
.then(data => {
    if (data.ok) {
        return data.text();
    }
    return Promise.reject(data);
})
.then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    let provincias = xml.getElementsByTagName('provincias');

    

    for (let i = 0; i < provincias.length; i++) {
        console.log(provincias[i]);
        
        let opcion = document.createElement("option");
        opcion=provincias[i];
        listaProvincias.appendChild(opcion);
    }
})
.catch(err => console.error(err));