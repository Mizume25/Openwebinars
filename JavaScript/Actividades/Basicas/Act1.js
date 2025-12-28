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
// Seleccionar elementos del DOM (HTML)
const firstNumberInput = document.querySelector("#num1"); // Input del primer número
const secondNumberInput = document.querySelector("#num2"); // Input del segundo número
const operationSelect = document.querySelector("#operation"); // Selector de operación
const calculateBtn = document.querySelector("#calculateBtn"); // Botón de calcular
const resultDisplay = document.querySelector("#calcResult"); // Div donde mostrar resultado

// Función para realizar cálculos
function calculateOperation(num1, num2, operation) {
    // num1 y num2 son números ya convertidos
    // operation es el valor string del select (ej: "add", "subtract")
    
    let result = 0;
    
    // Validar si no se seleccionó operación
    if (operation === "") {
        alert("Necesitas seleccionar una operación");
        return "Error: Selecciona operación";
    }
    
    // Realizar la operación correspondiente
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        // Validar división entre cero
        if (num2 === 0) {
            return "Error: División entre cero";
        }
        result = num1 / num2;
    }
    
    return result;
}

// Función para mostrar el resultado en pantalla
function showResult(resultValue) {
    // Mostrar el resultado en el div #calcResult
    resultDisplay.textContent = `Resultado: ${resultValue}`;
}

// Evento click del botón calcular
calculateBtn.addEventListener("click", function() {
    // 1. Obtener valores de los inputs como strings
    const firstValueStr = firstNumberInput.value;
    const secondValueStr = secondNumberInput.value;
    
    // 2. Convertir strings a números (float para decimales)
    const num1 = parseFloat(firstValueStr);
    const num2 = parseFloat(secondValueStr);
    
    // 3. Obtener la operación seleccionada
    const operation = operationSelect.value;
    
    // 4. Validar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos en ambos campos");
        return; // Detener ejecución si hay error
    }
    
    // 5. Realizar cálculo
    const result = calculateOperation(num1, num2, operation);
    
    // 6. Mostrar resultado
    showResult(result);
});


// 3. LISTA DE TAREAS

//DECLARACIONES
const InputTask = document.querySelector("#taskInput");                   //Espacio donde se escribe la taea
const buttonAddTask = document.querySelector("#addTaskBtn");                //Botton para agregar tarea
const DisplaytaskPending = document.querySelector("span");            //Espacio de tareas pendientes
const DisplaytaskCompleted = document.querySelector("span")  //Espacio de tareas completadas
const CompletedTaskBtn = document.querySelector(".complete-btn"); 
const RemoveTaskBtn = document.querySelector(".delete-btn");
const UndoTaskBtn = document.querySelector(".undo-btn");

function UpdateTask() {
    DisplaytaskPending.textContent = String(InputTask.value); 
    InputTask.value = "";  
}


//ACCIONES

//AGREGAR TAREA
buttonAddTask.addEventListener("click", function(){
    UpdateTask();
});

// Cuando creas una nueva tarea, agregas este event listener a su botón "Completar"
completeBtn.addEventListener("click", function() {
    const taskItem = this.closest(".task-item"); // El DIV completo
    const taskSpan = taskItem.querySelector("span"); // El SPAN con el texto
    
    // Ahora puedes modificar taskSpan si necesitas
    // Pero para completar solo necesitas:
    taskItem.classList.add("completed");
    this.textContent = "Deshacer";
});



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