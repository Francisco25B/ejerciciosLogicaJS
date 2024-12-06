// Actividad: Validar que un formulario tenga todos sus campos llenos antes de enviarlo.
document.getElementById("miFormulario").addEventListener("submit", (event) => {
    let campos = document.querySelectorAll("#miFormulario input");
    let todosLlenos = Array.from(campos).every(campo => campo.value.trim() !== "");
    if (!todosLlenos) {
        event.preventDefault();
        alert("Por favor, llena todos los campos.");
    }
});
