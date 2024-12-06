// Actividad: Contar las vocales en una palabra.
function contarVocales(palabra) {
    let vocales = palabra.match(/[aeiouáéíóúü]/gi);
    return vocales ? vocales.length : 0;
}
console.log("Número de vocales:", contarVocales("Hola mundo"));
