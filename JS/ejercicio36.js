// Actividad: Cambiar el texto de un párrafo al hacer clic en un botón.
document.getElementById("miBoton").addEventListener("click", () => {
    document.getElementById("miParrafo").textContent = "Texto cambiado con éxito.";
});
