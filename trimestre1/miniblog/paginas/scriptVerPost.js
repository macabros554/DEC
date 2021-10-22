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

        if (pedirComent.status===200) {
            let posts=JSON.parse(pedirComent.responseText);

            posts.forEach(post => {


                columna11.textContent=post.body;
    
                fila11.appendChild(columna11);
                tabla2.appendChild(fila11);
            });
            divTabla2.appendChild(tabla2);
        } else {
            console.log("no entra");
        }

        let barraDeTexto=document.createElement("input");
        barraDeTexto.type("textContent");
        let botonDeEnviar=document.createElement("input");
        botonDeEnviar.type("button");
        botonDeEnviar.name("Enviar");
        botonDeEnviar.addEventListener
        let selectorDePersonaje=document.createElement("select");
        selectorDePersonaje.name("Usuario");

        fila11.appendChild(barraDeTexto+selectorDePersonaje+botonDeEnviar);
        tabla2.appendChild(fila11);
        divTabla2.appendChild(tabla2);

})


}
iniciar2();
