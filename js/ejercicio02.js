// Inicio
console.log(`Ejercicio #2`);

// Definir variables
let _userNumber;
let _oppositeNumber;
let _inverseNumber;
const _numberOne = 1;
const _numberZero = 0;

// Establecer el número de '_userNumber'
_userNumber = prompt(`Escribe un número entero.`);

// Mensaje en caso de no ser número entero
if (_userNumber % 1 != 0) {

    // En la consola
    console.log(`El número no es un entero.\nLos decimales fueron truncados para este ejercicio.`);

    // En un popup
    alert(`El número no es un entero.\nLos decimales fueron truncados para este ejercicio.`)
}

// Truncar los decimales del número
_userNumber = parseInt(_userNumber)

// Obtener el número opuesto
_oppositeNumber = (_numberZero - _userNumber);

// Obtener el número inverso
_inverseNumber = (_numberOne / _userNumber);

// Presentar los números en la consola
console.log (
`Tu número es: ${_userNumber}\nEl opuesto es: ${_oppositeNumber}\nEl número inverso es: ${_inverseNumber}
`)

// Presentar los números un popup
alert (`
Tu número es: ${_userNumber}\nEl opuesto es: ${_oppositeNumber}\nEl número inverso es: ${_inverseNumber}
`)