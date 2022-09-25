// inicio
console.log(`Ejercicio #7`)

// Definir variables
let _tAncho;        // Ancho del terreno
let _tLargo;        // Largo del terreno
let _mPrecio;       // Precio del metro cuadrado (m^2)
let _tPerim;        // Perímetro del terreno = 2*tAncho + 2*tLargo
let _tArea;         // Area del terreno = tAncho * tLargo
let _tPrecio;       // Precio del terreno = _mPrecio * _tArea
let _mAlambre;      // Metros de alambre = _tPerim * _tVueltas
const _nVueltas = 3;// Número de vueltas al terreno
const _n2 = 2;      // Número 2 utilizado en el cálculo del perímetro

// Establecer los valores de las variables
_tAncho = parseFloat(prompt(`¿Cuántos metros de ancho tiene el terreno?`));

_tLargo = parseFloat(prompt(`¿Cuántos metros de largo tiene el terreno?`));

_mPrecio = parseFloat(prompt(`¿Cuántos vale un metro cuadrado en este terreno?`));

// Mensaje para indicar que los valores fueron recibidos
alert(`Valores recibidos.\nCalculando datos.`);

// Cálculo de datos
_tPerim = parseFloat( ( _n2 * _tAncho ) + ( _n2 * _tLargo ) );

_tArea = parseFloat( _tAncho * _tLargo );

_tPrecio = parseFloat( _mPrecio * _tArea );

_metroAlambre = parseFloat( _tPerim * _nVueltas );

// Presentar datos
console.log(`
Ancho del terreno: ${_tAncho} mts\n
Largo del terreno: ${_tLargo} mts\n
Área del terreno: ${_tArea} m^2\n
Perímetro del terreno: ${_tPerim} mts\n
Metros de alambre: ${_mAlambre} mts\n
Precio del metro^2: $${_mPrecio}\n
Precio del terreno: $${_tPrecio}
`);