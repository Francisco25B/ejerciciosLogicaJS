// Actividad: Determinar si una palabra es un palíndromo.
let palabra = prompt("Ingresa una palabra:");
let palabraInvertida = palabra.split("").reverse().join("");
if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}
