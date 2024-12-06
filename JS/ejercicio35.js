// Actividad: Crear un objeto que represente una calculadora con métodos básicos.
let calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : "No se puede dividir entre 0"
};

console.log("Suma:", calculadora.sumar(6, 4));
console.log("Resta:", calculadora.restar(6, 4));
console.log("Multiplicación:", calculadora.multiplicar(6, 4));
console.log("División:", calculadora.dividir(6, 4));
