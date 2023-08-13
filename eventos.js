function mostrarSaludo() {
    alert("Hola!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saludarBtn").onclick = mostrarSaludo;

    const divContainer = document.getElementById("btnContainer");

    divContainer.addEventListener("click", function(event) {
        alert("Hola! Soy el div");
        event.stopPropagation();
    });
});