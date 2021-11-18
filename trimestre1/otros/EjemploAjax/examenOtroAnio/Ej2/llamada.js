let boton = document.getElementById('boton');
let nombres = document.getElementById('select');


boton.addEventListener('click',(e)=>{
    //ENLACE DEL QUE QUEREMOS SACAR LOS DATOS
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        if(response.ok){
            //LE DECIMOS QUE ES JSON, SINO SERIA TEXT
            return response.json();
        }return Promise.reject(response);
    })
    .then(datos => 
        // console.log(datos))
        //NOS MANDA A IMPRIMIRSELECTOR Y LE MANDAMOS LOS OBJETOS DATOS QUE ES TODO LO QUE NOS DA 
        //EL FETCH
        imprimirSelector(datos))
    .catch(err => { console.log('Error en la petición HTTP: '+err.message);})
})

function imprimirSelector(datos){
    //RECORREMOS LOS DATOS Y CREAMOS UNA OPCION POR CADA OBJETO, OBTENIENDO SU NOMBRE
    datos.forEach(dato => {
        let opcion = document.createElement('option');
        opcion.textContent=dato.name;
        opcion.setAttribute('id', dato.id);
        nombres.appendChild(opcion);
    });
}

nombres.addEventListener('click',(e)=>{

    //Indicamos que lo que buscamos coincida con lo que buscamos
    if(e.target.matches('option')){
        //creamos una variable para meter la id del usuario seleccionado
        let usuarioID = e.target.id;
        //console.log(usuarioID);
        let urlUsuarioConcreto = 'https://jsonplaceholder.typicode.com/users/'+usuarioID    ;
        fetch(urlUsuarioConcreto)
            .then(response =>{
                if(response.ok){
                    return response.json();
                }return Promise.reject(response);
            })
            // .then(datos => console.log(datos)) es un objeto
            .then(datos =>{
            //console.log(datos);
            mostrarTabla(datos);
            })
            .catch(err => { console.log('Error en la petición HTTP: '+err.message);})
    }

})

function mostrarTabla(elUsuario) {
    let tabla = document.getElementById("tabla");
    let datosUsuario = Object.values(elUsuario);
    let laKey = Object.keys(elUsuario);

    for (let i = 0; i < laKey.length; i++) {
        let linea= document.createElement("tr");
        let columna1= document.createElement("td");

        if (i==4 || i==7) {

        }else{
            columna1.textContent=datosUsuario[i];
            linea.appendChild(columna1);
            tabla.appendChild(linea);
        }

        
    }

    




}