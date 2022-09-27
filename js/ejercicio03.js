function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _trim1;     // Primer trimestre
    let _trim2;     // Segundo trimestre
    let _trim3;     // Tercer trimestre
    let _promedio;  // ( _trim1 + _trim2 + _trim3 ) / _trimestre
    const _trimestre = 3;

    _trim1 = parseFloat(prompt(`Ingresar la nota del primer trimestre.`));
    console.log(`La nota del primer trimestre es: ${_trim1}`);

    _trim2 = parseFloat(prompt(`Ingresar la nota del segundo trimestre.`));
    console.log(`La nota del segundo trimestre es: ${_trim2}`);

    _trim3 = parseFloat(prompt(`Ingresar la nota del tercer trimestre.`));
    console.log(`La nota del tercer trimestre es: ${_trim3}`);

    _promedio = parseFloat(( _trim1 + _trim2 + _trim3 ) / _trimestre);

    console.log(`El promedio es: ${_promedio}`);
}

document.getElementById("start03").onsubmit = iniciar;