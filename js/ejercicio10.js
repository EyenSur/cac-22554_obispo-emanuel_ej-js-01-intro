// Inicio
console.log(`Ejercicio #9`);
let _start;
_start = document.getElementById("start");

function proccess(e) {

    e.preventDefault();

    // Definir variables
    let _inv1;
    let _inv2;
    let _inv3;
    let _perc1;
    let _perc2;
    let _perc3;
    let _invTotal;
    const _n100 = 100;

    // Establecer el monto del primer inversor
    do {
        _inv1 = parseInt(prompt(`Ingresar el monto del primer inversor.`));

        if (isNaN(_inv1)) {
            alert(`El caracter introducido no es un número.`);
        }
    } while (isNaN(_inv1));

    if (_inv1 % 1 != 0) {
        console.log(`El número no es un entero.\nLos decimales serán truncados.`);
    }

    // Establecer el monto del segundo inversor
    do {
        _inv2 = parseInt(prompt(`Ingresar el monto del segundo inversor.`));

        if (isNaN(_inv2)) {
            alert(`El caracter introducido no es un número.`);
        }
    } while (isNaN(_inv2));

    if (_inv2 % 1 != 0) {
        console.log(`El número no es un entero.\nLos decimales serán truncados.`);
    }

    // Establecer el monto del segundo inversor
    do {
        _inv3 = parseInt(prompt(`Ingresar el monto del tercer inversor.`));

        if (isNaN(_inv3)) {
            alert(`El caracter introducido no es un número.`);
        }
    } while (isNaN(_inv3));

    if (_inv3 % 1 != 0) {
        console.log(`El número no es un entero.\nLos decimales serán truncados.`);
    }

    // Mensaje
    alert(`Los montos de los inversores fueron registrados correctamente.\nA continuación se calcularán los datos.`)

    // Calcular monto total de la inversión
    _invTotal = _inv1 + _inv2 + _inv3;

    // Calcular porcentajes
    /* Regla de 3 simple.
    _invTotal ====  _n100
    _inv#     ====  ¿? */

    _perc1 = (_inv1 * _n100) / _invTotal;
    _perc2 = (_inv2 * _n100) / _invTotal;
    _perc3 = (_inv3 * _n100) / _invTotal;

    _perc1 = Math.floor(_perc1 * _n100) / _n100;
    _perc2 = Math.floor(_perc2 * _n100) / _n100;
    _perc3 = Math.floor(_perc3 * _n100) / _n100;

    // Presentar datos
    console.log(`Inversor N°1: $${_inv1} (${_perc1}%)\n\nInversor N°2: $${_inv2} (${_perc2}%)\n\nInversor N°3: $${_inv3} (${_perc3}%)\n\nMonto total de la inversión: $${_invTotal}`);
}

_start.onsubmit = proccess;