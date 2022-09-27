function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _a;
    let _b;
    let _temp;

    // Establecer los valores de A y B
    _a = parseInt(prompt(`Escribe un número entero para A:`));
    _b = parseInt(prompt(`Escribe un número entero para B:`));

    // Mostrar los valores de A y B
    alert(`Los valores para A y B fueron ingresados correctamente.`)
    console.log(`Los valores para A y B son:\nA) ${_a}\nB) ${_b}`)

    alert(`A continuación, los valores de A y B serán intercambiados.`)

    // Intercambiar los valores de A y B
    _temp = _a;
    _a = _b;
    _b = _temp;

    // Mostrar los nuevos valores de A y B
    console.log(`Los nuevos valores para A y B son:\nA) ${_a}\nB) ${_b}`)
}

document.getElementById("start05").onsubmit = iniciar;