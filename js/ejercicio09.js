function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _angulo1;
    let _angulo2;
    let _angulo3;
    let _gradosRestantes;   // _180grados - _angulo1
    const _1grado = 1;      // 1°
    const _178grados = 178; // Máxima graduación del primer ángulo: 178° 1° 1°
    const _180grados = 180; // Grados totales de un triángulo

    // Establecer primer ángulo
    do {
        do {
            _angulo1 = parseFloat(prompt(`Ingresar los grados del primer ángulo.\nEl número debe ser entre 1° y 178°.`));
        
            if (isNaN(_angulo1)) {
                alert(`El caracter introducido no es un número.`);
            }
        } while (isNaN(_angulo1));

        if (_angulo1 < _1grado || _angulo1 > _178grados) {
            alert(`Debe ingresar un número entre 1 y 178.`);
        }
    } while (_angulo1 < _1grado || _angulo1 > _178grados);

    // Calcular grados restantes
    _gradosRestantes = ( _180grados - _angulo1 - _1grado );

    // Establecer segundo ángulo
    do {
        do {
            _angulo2 = parseFloat(prompt(`Ingresar los grados del segundo ángulo.\nEl número debe ser entre 1° y ${_gradosRestantes}.`));
        
            if (isNaN(_angulo2)) {
                alert(`El caracter introducido no es un número.`);
            }
        } while (isNaN(_angulo2));

        if (_angulo2 < _1grado || _angulo2 > _gradosRestantes) {
            alert(`Debe ingresar un número entre 1 y ${_gradosRestantes}.`);
        }
    } while (_angulo2 < _1grado || _angulo2 > _gradosRestantes);

    alert(`Los valores del primer y segundo ángulo fueron registrados correctamente.\n\nA continuación se calculará el tercer ángulo.`)

    // Cálculo del tercer ángulo
    _angulo3 = _180grados - _angulo1 - _angulo2;

    // Presentar resultados
    console.log(`El triángulo esta compuesto por los siguientes ángulos.\n\nPrimer ángulo: ${_angulo1}°\n\nSegundo ángulo: ${_angulo2}°\n\nTercer ángulo: ${_angulo3}°`);
}

document.getElementById("start09").onsubmit = iniciar;