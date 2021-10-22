const datos=window.location.search;
const urlParametros=new URLSearchParams(datos);
let idPost = urlParametros.get("id");

function iniciar1() {
    let pedirPosts=new XMLHttpRequest();
    pedirPosts.open('GET', 'http://localhost:3000/posts/'+idPost);
    pedirPosts.send();
    pedirPosts.addEventListener('load', function() {
        if (pedirPosts.status===200) {
            let posts=JSON.parse(pedirPosts.responseText);
            
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
           
            
        } else {
            console.log("no entra");
        }
})

}
iniciar1();

function iniciar2() {
    let pedirComent=new XMLHttpRequest();
    pedirComent.open('GET', 'http://localhost:3000/comments/?id='+idPost);
    pedirComent.send();
    pedirComent.addEventListener('load', function() {
        let divTabla2 = document.getElementById("elPost");
        let tabla2 = document.createElement("table");
        let fila11=document.createElement("tr");
        let columna11=document.createElement("td");
        let columna12=document.createElement("td");
        let columna13=document.createElement("td");
        
        if (pedirComent.status===200) {
            let posts=JSON.parse(pedirComent.responseText);

            posts.forEach(post => {


                columna11.textContent=post.body;
                columna12.textContent=post.postId;
    
                fila11.appendChild(columna11);
                fila11.appendChild(columna12);
                tabla2.appendChild(fila11);
            });
            divTabla2.appendChild(tabla2);
        } else {
            console.log("no entra");
        }

        let barraDeTexto=document.createElement("input");
        barraDeTexto.setAttribute("type","textContent");
        let botonDeEnviar=document.createElement("input");
        botonDeEnviar.setAttribute("type","button");
        botonDeEnviar.setAttribute("value","Enviar");
        botonDeEnviar.addEventListener("click",enviarComentario)
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

            let peticionExtra = new XMLHttpRequest();
            peticionExtra.open('POST', 'http://localhost:3000/comments/');
            peticionExtra.setRequestHeader("Content-type","application/json");
            peticionExtra.send(JSON.stringify(nuevoComentario));
            peticionExtra.addEventListener('load', function() {
                location.reload();
            })
        
        }
    


})


}
iniciar2();
