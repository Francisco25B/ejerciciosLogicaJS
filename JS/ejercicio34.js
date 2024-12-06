// Actividad: Crear una clase Estudiante que herede de Persona y tenga una propiedad grado.
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    mostrarGrado() {
        console.log(`Soy ${this.nombre} y estoy en el grado ${this.grado}.`);
    }
}

let estudiante1 = new Estudiante("Ana", 20, "10°");
estudiante1.saludar();
estudiante1.mostrarGrado();
