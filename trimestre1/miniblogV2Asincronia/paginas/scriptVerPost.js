const datos=window.location.search;
const urlParametros=new URLSearchParams(datos);
let idPost = urlParametros.get("id");
const cadena={method:"GET"}
//preguntar porque si pongo directamente el metodo no funciona
fetch('http://localhost:3000/posts/'+idPost,cadena)
  .then(data => data.json())
  .then(data => iniciar1(data));

function iniciar1(posts) {
            
    let divTabla1 = document.getElementById("titulito");
    let tabla1 = document.createElement("table");

    let fila1=document.createElement("tr");
    let fila2=document.createElement("tr");
    let columna1=document.createElement("td");
    let columna2=document.createElement("td");

    columna1.textContent=posts.title;
    columna2.textContent=posts.body;

    fila1.appendChild(columna1);
    fila2.appendChild(columna2);
    tabla1.appendChild(fila1);
    tabla1.appendChild(fila2);

    divTabla1.appendChild(tabla1);
}

const cadena2={method:"GET"}

fetch('http://localhost:3000/comments/?id='+idPost,cadena2)
  .then(data => data.json())
  .then(data => iniciar2(data));
  

function iniciar2(posts) {

    let divTabla2 = document.getElementById("elPost");
    let tabla2 = document.createElement("table");
    let fila11=document.createElement("tr");
    let columna11=document.createElement("td");
    let columna12=document.createElement("td");
    let columna13=document.createElement("td");

    
    posts.forEach(post => {

        columna11.textContent=post.body;
        columna12.textContent=post.postId;

        fila11.appendChild(columna11);
        fila11.appendChild(columna12);
        tabla2.appendChild(fila11);
    });
    divTabla2.appendChild(tabla2);

        let barraDeTexto=document.createElement("input");
        barraDeTexto.setAttribute("type","textContent");
        let botonDeEnviar=document.createElement("input");
        botonDeEnviar.setAttribute("type","button");
        botonDeEnviar.setAttribute("value","Enviar");
        botonDeEnviar.addEventListener("click",enviarComentario);
        let selectorDePersonaje=document.createElement("select");

        const peticionParaElSelect = new XMLHttpRequest();
        peticionParaElSelect.open('GET', 'http://localhost:3000/users/');
        peticionParaElSelect.send();
        peticionParaElSelect.addEventListener('load', function() {
            let users=JSON.parse(peticionParaElSelect.responseText);
            for (let index = 0; index < users.length; index++) {
                const element = users[index];
                let opcion=document.createElement("option");
                opcion.textContent=element.nombre;
                selectorDePersonaje.appendChild(opcion);
            }
            columna11.appendChild(document.createTextNode("Author del new post"));
            columna11.appendChild(selectorDePersonaje);
        })

        columna12.appendChild(barraDeTexto);
        columna13.appendChild(botonDeEnviar);
        fila11.appendChild(columna11);
        fila11.appendChild(columna12);
        fila11.appendChild(columna13);
        tabla2.appendChild(fila11);

        divTabla2.appendChild(tabla2);
        


        function enviarComentario() {



            let texto = document.getElementsByTagName("textContent")[0];
            let user = document.getElementsByTagName("select")[0].value;

            const nuevoComentario = {
                body: texto,
                author: user,
                idPost: idPost
            }

            const cadena3={method:"POST"}

            fetch('http://localhost:3000/comments/',{
                method: 'POST', // or 'PUT'
                body: JSON.stringify(nuevoComentario),
                headers:{
                  'Content-Type': 'application/json'
                }})
              .then(data => {return data.json();})
              .catch(err => {
                console.log('Error en la petición HTTP: '+err.message);
              })
              
              }

}

