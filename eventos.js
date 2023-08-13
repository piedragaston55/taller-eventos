function mostrarSaludo() {
    alert("Hola!");
}
document.getElementById("saludarBtn").onclick = mostrarSaludo;

const divContainer = document.getElementById("btnContainer");

divContainer.addEventListener("click", function() {
    alert("Hola! Soy el div");
});