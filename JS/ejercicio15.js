// Actividad: Verificar si la entrada del usuario es un número.
let entrada = prompt("Ingresa un número:");
if (isNaN(entrada)) {
    console.log("Error: No ingresaste un número válido.");
} else {
    console.log("Ingresaste el número: " + entrada);
}
