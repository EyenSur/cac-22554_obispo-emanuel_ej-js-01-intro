function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _varA;
    let _varB;
    let _temp;

    // Establecer los valores de A y B
    _varA = parseInt(prompt(`Escribe un número entero para A:`));
    _varB = parseInt(prompt(`Escribe un número entero para B:`));

    // Mostrar los valores de A y B
    alert(`Los valores para A y B fueron ingresados correctamente.`)
    console.log(`Los valores para A y B son:\nA) ${_varA}\nB) ${_varB}`)

    alert(`A continuación, los valores de A y B serán intercambiados.`)

    // Intercambiar los valores de A y B
    _temp = _varA;
    _varA = _varB;
    _varB = _temp;

    // Mostrar los nuevos valores de A y B
    console.log(`Los nuevos valores para A y B son:\nA) ${_varA}\nB) ${_varB}`)
}

document.getElementById("start05").onsubmit = iniciar;