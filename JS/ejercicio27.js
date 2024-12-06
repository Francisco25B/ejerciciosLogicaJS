// Actividad: Calcular el promedio de los elementos de un array.
function promedio(array) {
    let suma = array.reduce((total, num) => total + num, 0);
    return suma / array.length;
}
console.log("El promedio es:", promedio([1, 2, 3, 4, 5]));
