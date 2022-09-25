// Inicio
console.log(`Ejercicio #3.`)

// Definir variables
let _nota1; // Biología
let _nota2; // Matemática
let _nota3; // Historia
let _promedio; // ( _n1 + _n2 + _n3 ) / _materias
const _materias = 3;

_nota1 = parseFloat(prompt(`Nota de Biología:`));
console.log(`La nota de biología es: ${_nota1}`);

_nota2 = parseFloat(prompt(`Nota de Matemática:`));
console.log(`La nota de matemática es: ${_nota2}`);

_nota3 = parseFloat(prompt(`Nota de Historia:`));
console.log(`La nota de historia es: ${_nota3}`);

_promedio = parseFloat(( _nota1 + _nota2 + _nota3 ) / _materias);

console.log(`El promedio es: ${_promedio}`);