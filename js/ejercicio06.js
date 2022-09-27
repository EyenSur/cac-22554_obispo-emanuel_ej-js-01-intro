function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

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
    console.log(`Producto Vendido: ${_itemNombre}\n\nCantidad Vendida: ${_itemCantidad}\n\nPrecio del Producto: ${_itemPrecio}\n\nSalario del Empleado: ${_salarioFinal}
    `)
}

document.getElementById("start06").onsubmit = iniciar;