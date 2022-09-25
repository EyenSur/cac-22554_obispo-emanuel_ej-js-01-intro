// Inicio
console.log(`Ejercicio #5`);

// Definir variables
let _a;
let _b;
let _tempA;
let _tempB;

// Establecer los valores de A y B
_a = parseInt(prompt(`Escribe un número entero para A:`));
_b = parseInt(prompt(`Escribe un número entero para B:`));

// Mostrar los valores de A y B
alert(`Valores para A y B recibidos.`)
console.log(`Los valores para A y B son:\n ${_a} y ${_b}`)

alert(`Los valores de A y B serán intercambiados.`)

// Guardar los valores de A y B en variables temporales
_tempA = _a;
_tempB = _b;

// Asignar nuevos valores para A y B
_a = _tempB;
_b = _tempA;

// Mostrar los nuevos valores de A y B
console.log(`Los nuevos valores para A y B son:\n ${_a} y ${_b}`)