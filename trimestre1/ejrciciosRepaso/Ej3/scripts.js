let letra=document.getElementById("texto");

letra.addEventListener("keypress",letrita)

function letrita(event) {
    const key = event.key;
    console.log("Presionada: " + key);
}