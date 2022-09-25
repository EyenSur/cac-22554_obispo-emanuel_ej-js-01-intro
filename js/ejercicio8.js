// Inicio
console.log(`Ejercicio #8`);

// Definir variables
let _numberA;
let _numberB;

// Presentar operaciones que se realizarán
console.log(`
Operaciones a realizar:\n
A + B = ¿?\n
A - B = ¿?\n
B - A = ¿?\n
A * B = ¿?\n
A / B = ¿?\n
B / A = ¿?
`);

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
alert(`Los valores de A y B han sido registrados.\n
A: ${_numberA}\n
B: ${_numberB}\n
A continuación se realizaran los cálculos pertinentes.`);

// Presentar el resultado de las operaciones
console.log(`
Resultados:\n
A + B = ${_numberA + _numberB}\n
A - B = ${_numberA - _numberB}\n
B - A = ${_numberB - _numberA}\n
A * B = ${_numberA * _numberB}\n
A / B = ${_numberA / _numberB}\n
B / A = ${_numberB / _numberA}
`);