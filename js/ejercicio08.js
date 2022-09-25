// Inicio
console.log(`Ejercicio #8`);
let _start;
_start = document.getElementById("start");

function proccess(e) {

    e.preventDefault();

    // Definir variables
    let _numberA;
    let _numberB;

    // Presentar operaciones que se realizarán
    console.log(`Operaciones a realizar:\n\nA + B = ¿?\n\nA - B = ¿?\n\nB - A = ¿?\n\nA * B = ¿?\n\nA / B = ¿?\n\nB / A = ¿?`);

    // Establecer el valor de la variable A
    do {
        _numberA = parseInt(prompt(`Ingresar el valor de A`));

        if (isNaN(_numberA)) {
            alert(`El caracter introducido no es un número.`);
        }
    } while (isNaN(_numberA));

    if (_numberA % 1 != 0) {
        console.log(`El número no es un entero.\nLos decimales serán truncados.`);
    }

    // Establecer el valor de la variable B
    do {
        _numberB = parseInt(prompt(`Ingresar el valor de B`));

        if (isNaN(_numberB)) {
            alert(`El caracter introducido no es un número.`);
        }
    } while (isNaN(_numberB));

    if (_numberB % 1 != 0) {
        console.log(`El número no es un entero.\nLos decimales serán truncados.`);
    }

    // Mensaje
    alert(`Los valores de A y B han sido registrados.\n\nA: ${_numberA}\n\nB: ${_numberB}\n\nA continuación se realizaran los cálculos pertinentes.`);

    // Presentar el resultado de las operaciones
    console.log(`Resultados:\n\nA + B = ${_numberA + _numberB}\n\nA - B = ${_numberA - _numberB}\n\nB - A = ${_numberB - _numberA}\n\nA * B = ${_numberA * _numberB}\n\nA / B = ${_numberA / _numberB}\n\nB / A = ${_numberB / _numberA}`);
}

_start.onsubmit = proccess;