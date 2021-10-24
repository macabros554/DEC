let pedirPosts=new XMLHttpRequest();
pedirPosts.open('GET', 'http://localhost:3000/posts');
pedirPosts.send();
pedirPosts.addEventListener('load', function() {
    if (pedirPosts.status===200) {
        let posts=JSON.parse(pedirPosts.responseText);
        let divTabla = document.getElementById("tabla");
        let tabla = document.createElement("table");

        posts.forEach(post => {
            let fila=document.createElement("tr");
            let columna1=document.createElement("td");
            let columna2=document.createElement("td");
            let columna3=document.createElement("td");
            let ver=document.createElement("button");
            let borrar=document.createElement("button");
            
            ver.appendChild(document.createTextNode("Ver"));
            ver.setAttribute("id",post.id);
            ver.setAttribute("name","Ver");
            borrar.appendChild(document.createTextNode("Borrar"));
            borrar.setAttribute("id",post.id);
            borrar.setAttribute("name","Borrar");
            
            columna1.textContent=post.title;
            columna2.textContent=post.author;
            columna3.appendChild(ver);
            columna3.appendChild(borrar);
            
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            fila.appendChild(columna3);
            tabla.appendChild(fila);
            
        });
        divTabla.appendChild(tabla);
    } else {
        console.log("no entra");
    }
})


tablita=document.getElementById("tabla");
let peticionNueva=new XMLHttpRequest();
tabla.addEventListener("click",(e)=> {
    if(e.target.name=="Ver"){
        //window.location.href = `http://localhost:3000/posts/${e.target.id}`;
        window.location.href = 'verPost.html?id='+e.target.id;

    }else if (e.target.name=="Borrar") {
        peticionNueva.open('DELETE', `http://localhost:3000/posts/${e.target.id}`);
        peticionNueva.send();
    }
})


