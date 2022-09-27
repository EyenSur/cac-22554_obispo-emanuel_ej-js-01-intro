function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _userNumber;
    let _oppositeNumber;
    let _inverseNumber;
    const _n1 = 1;
    const _n0 = 0;

    // Establecer el número de '_userNumber'
    _userNumber = prompt(`Escribe un número entero.`);

    // Mensaje en caso de no ser número entero
    if (_userNumber % 1 != _n0) {

        // En la consola
        console.log(`El número no es un entero.\nLos decimales fueron truncados para este ejercicio.`);

        // En un popup
        alert(`El número no es un entero.\nLos decimales fueron truncados para este ejercicio.`)
    }

    // Truncar los decimales del número
    _userNumber = parseInt(_userNumber)

    // Obtener el número opuesto
    _oppositeNumber = (_n0 - _userNumber);

    // Obtener el número inverso
    _inverseNumber = (_n1 / _userNumber);

    // Presentar los números en la consola
    console.log (`Tu número es: ${_userNumber}\nEl opuesto es: ${_oppositeNumber}\nEl número inverso es: ${_inverseNumber}
    `)

    // Presentar los números un popup
    alert (`Tu número es: ${_userNumber}\nEl opuesto es: ${_oppositeNumber}\nEl número inverso es: ${_inverseNumber}
    `)
}

document.getElementById("start02").onsubmit = iniciar;