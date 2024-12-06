// Actividad: Eliminar el último elemento de una lista ul al hacer clic en un botón.
document.getElementById("eliminarElemento").addEventListener("click", () => {
    let lista = document.getElementById("miLista");
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
});
