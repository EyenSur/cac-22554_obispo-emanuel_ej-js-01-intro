function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Declarar variables
    let _userName;

    // Obtener el valor de 'userName'
    _userName = String(prompt("Ingrese su nombre."));

    // Mostrar un mensaje en la consola
    console.log(`¡Bienvenido ${_userName}!`)

    // Mostrar un mensaje en la página web
    alert(`¡Bienvenido ${_userName}!`);
}

document.getElementById("start01").onsubmit = iniciar;