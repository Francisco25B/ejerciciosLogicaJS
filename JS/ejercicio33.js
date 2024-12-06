// Actividad: Crear una clase Persona con un método que salude.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona1 = new Persona("Juan", 25);
persona1.saludar();
