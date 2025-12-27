// Aquí es donde debes agregar tu código JavaScript

// DECLARAMOS VARIRABLES
let counterDisplay = document.querySelector("#counterValue");
let counter = 0;

// FUNCION PARA ACTUALIZAR PANTALLA
function actualizarPantalla() {
    counterDisplay.textContent = counter; 
}

// DECREMENTAR BOTON
document.querySelector("#decrementBtn").addEventListener("click", function () {
    counter--;
    actualizarPantalla();
});

// REINICIAR BOTON
document.querySelector("#resetBtn").addEventListener("click", function () {
    counter = 0;
    actualizarPantalla();
});

// REINICIAR BOTON
document.querySelector("#incrementBtn").addEventListener("click", function () {
    counter++;
    actualizarPantalla();
});

// 2. CALCULADORA BÁSICA

//DECLARAMOS VARIABLES
let fristName = document.querySelector("#num1");
let secondName = document.querySelector("#num2");
let operation = document.querySelector("#operation.value")
let result = 0;
let num1 = 0;
let num2 = 0;

function caclulatorOperator(fristName,secondName,operation) {
    
    let result = 0;
    fristName = num1;
    secondName = num2;

    if (operation == "") {
        alert("Necesitas seleccionar una operacion");
    } else if (operation == "add") {
        result =  num1 + num2;
    }else if (operation == "subtract") {
        result =  num1 - num2;
    }else if (operation == "multiply") {
        result = num1 * num2;
    }else if (operation == "divide") {
        result = num1 / num2;
    }

    return result;
}


document.querySelector("#calculateBtn").addEventListener("click", function () {

    result = caclulatorOperator(fristName,secondName,operation);

    document.querySelector(#calcResult)


});




//Obtenemos




// 3. LISTA DE TAREAS
// - Permite agregar nuevas tareas al hacer clic en addTaskBtn
// - Implementa la funcionalidad para marcar tareas como completadas
// - Implementa la funcionalidad para eliminar tareas
// - Usa event delegation para manejar los botones de las tareas dinámicas

// 4. BOTÓN ESPECIAL
// - Cambia el color de fondo del botón al hacer clic
// - Cambia el texto del botón al hacer clic
// - Alterna entre al menos 3 estados diferentes
// - Actualiza el contenido de specialBtnResult con el estado actual

// 5. TEMPORIZADOR
// - Inicia un temporizador que cuente hacia atrás desde el valor ingresado
// - Actualiza timerDisplay cada segundo
// - Detén el temporizador cuando llegue a 0 o cuando se haga clic en stopTimerBtn
// - Muestra un mensaje en timerResult cuando el temporizador finalice

// 6. DETECTOR DE CIERRE DE PÁGINA
// - Muestra un mensaje de confirmación cuando el usuario intente cerrar la página
// - Activa/desactiva esta funcionalidad con los botones correspondientes
// - Actualiza closeDetectionResult con el estado de la detección

// Función auxiliar para mostrar notificaciones
function showNotification(message, type = '') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification';

    if (type) {
        notification.classList.add(type);
    }

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}



// Código inicial para ayudarte a comenzar:

// CONTADOR - Te doy un ejemplo para empezar


// TODO: Añade event listeners para los botones del contador
// document.getElementById('incrementBtn').addEventListener('click', function() { ... });
// document.getElementById('decrementBtn').addEventListener('click', function() { ... });
// document.getElementById('resetBtn').addEventListener('click', function() { ... });

// CALCULADORA
// TODO: Añade event listener para el botón de calcular
// document.getElementById('calculateBtn').addEventListener('click', function() { ... });

// LISTA DE TAREAS
// TODO: Añade event listener para agregar tareas
// document.getElementById('addTaskBtn').addEventListener('click', function() { ... });

// También necesitarás event delegation para los botones dentro de las tareas

// BOTÓN ESPECIAL
// TODO: Añade event listener para el botón especial
// document.getElementById('specialBtn').addEventListener('click', function() { ... });

// TEMPORIZADOR
let timerInterval;
// TODO: Añade event listeners para los botones del temporizador

// DETECTOR DE CIERRE
// TODO: Añade event listeners para habilitar/deshabilitar la detección
// También necesitarás el evento beforeunload

// Ejemplo de cómo mostrar una notificación (puedes usarla en tus implementaciones)
showNotification('Página cargada. ¡Comienza a implementar JavaScript!');