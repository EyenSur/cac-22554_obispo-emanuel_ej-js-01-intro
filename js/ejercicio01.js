// Inicio
console.log(`Ejercicio #1`);

// Declarar variables
let _userForm;
let _userName;

// Obtener el valor de 'userForm'
_userForm = document.getElementById("mainForm");

// Establecer el contenido de la función 'proccess()'
function proccess(e) {
    
    e.preventDefault();

    // Obtener el valor de 'userName'
    _userName = document.getElementById("inputName").value;

    // Mostrar un mensaje en la consola
    console.log(`¡Bienvenido ${_userName}!`)

    // Mostrar un mensaje en la página web
    alert(`¡Bienvenido ${_userName}!`);
    
}

// Establecer la activación de la función 'proccess()'
_userForm.onsubmit = proccess;