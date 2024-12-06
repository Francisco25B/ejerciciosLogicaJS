// Actividad: Crear una función que reciba un callback para imprimir un mensaje.
function ejecutarCallback(callback) {
    callback();
}
ejecutarCallback(() => console.log("Callback ejecutado con éxito."));
