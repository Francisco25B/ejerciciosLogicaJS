// Actividad: Buscar un valor en un array y mostrar su posición.
let frutas = ["manzana", "pera", "plátano"];
let buscar = "pera";
let indice = frutas.indexOf(buscar);
if (indice !== -1) {
    console.log("El valor está en la posición:", indice);
} else {
    console.log("El valor no se encontró en el array.");
}
