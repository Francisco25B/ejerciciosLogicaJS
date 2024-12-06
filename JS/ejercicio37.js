// Actividad: Añadir un nuevo elemento li a una lista ul al hacer clic en un botón.
document.getElementById("agregarElemento").addEventListener("click", () => {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    document.getElementById("miLista").appendChild(nuevoElemento);
});
