// Actividad: Encontrar el valor máximo y mínimo en un array.
function maxMin(array) {
    return { max: Math.max(...array), min: Math.min(...array) };
}
console.log("Máximo y mínimo:", maxMin([1, 2, 3, 4, 5]));
