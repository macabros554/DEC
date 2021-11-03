const lista = document.getElementById('lista');
fetch('http://joadelvia.loc/generaContenidos2.php')
.then(response => {
    if (response.ok) {
        return response.text();
    }
    return Promise.reject(response);
})
.then(datos =>{
    const parser = new DOMParser();
    const xml = parser.parseFromString(datos, "application/xml");
    let frases = xml.getElementsByTagName('frase');
    for (let i = 0; i < frases.length; i++) {
        let frase = frases[i];
        let fraseList = document.createElement('li');
        fraseList.textContent = frase.textContent;
        lista.appendChild(fraseList);
        
    }
})
.catch(response => console.log("Error: " + response.message))