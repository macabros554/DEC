let enlaces = document.querySelectorAll('a');
let parrafos = document.querySelectorAll('p');
let contEnlaces = document.querySelectorAll('a[href="http://prueba/"]');
let respuesta = 'El numero de enlaces de la pagina son= ' + enlaces.length + "<br> <br>";
respuesta = respuesta + 'El penultimo enlace apunta a: ' + document.querySelector('a:nth-last-child(2)') + "<br><br>";
respuesta = respuesta + 'El enlace algo prueba se repite: ' + contEnlaces.length + " veces <br><br>";
respuesta = respuesta + 'El tercer parrafo tiene= ' + document.querySelectorAll('p:nth-child(3) a').length + " enlaces <br>";

document.write(respuesta);