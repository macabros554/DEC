//crear option
let boton = document.getElementById("boton");
let selector= document.getElementById("select");

boton.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => {
        if(response.ok){
            return response.text();
        }
        return Promise.reject(response)
    })
    .then(datos=> {
        
        datos.forEach(usuarios => {
            let opciones= document.createElement("option");
            opciones.textContent=usuarios.name;
            selector.appendChild(opciones);
        });
    })
    .catch(response => console.log("Error: " + response.error))
})

