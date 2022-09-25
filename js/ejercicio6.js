// Inicio
console.log(`Ejercicio #6`);

// Definir variables
let _itemNombre;
let _itemCantidad;
let _itemPrecio;
let _itemGanancia;
let _porcVentas;
let _salarioFinal;
const _salario = 14000;
const _porcentaje = 0.16;

// Ingresar el nombre del producto
_itemNombre = String(prompt(`Ingresa el nombre del producto.`));

// Ingresar el precio del producto
_itemPrecio = parseFloat(prompt(`Ingresa el precio del producto.`));

// Ingresar la cantidad vendida del producto
_itemCantidad = parseInt(prompt(`Ingresa la cantidad vendida del producto.`));

// Calcular ganancias
_itemGanancia = ( _itemCantidad * _itemPrecio );

// Calcular el porcentaje de las ventas que el vendedor recibira
_porcVentas = ( _itemGanancia * _porcentaje );

// Calcular el salario final del vendedor
_salarioFinal = ( _salario + _porcVentas );

// Presentar datos
console.log(`
Producto Vendido: ${_itemNombre}\n
Cantidad Vendida: ${_itemCantidad}\n
Precio del Producto: ${_itemPrecio}\n
Salario del Empleado: ${_salarioFinal}\n
`)