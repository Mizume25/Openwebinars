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
const InputTask = document.querySelector("#taskInput");                     //Espacio donde se escribe la taea
const buttonAddTask = document.querySelector("#addTaskBtn");                //Botton para agregar tarea
const DisplaytaskPending = document.querySelector("#span1");                //Espacio de tareas pendientes
const DisplaytaskCompleted = document.querySelector("#span2")               //Espacio de tareas completadas
const CompletedTaskBtn = document.querySelector(".complete-btn");           //Complentar tarea
const RemovePendingTaskBtn = document.querySelector(".delete-btn1"); 
const RemoveCompletedTaskBtn = document.querySelector(".delete-btn2");      //Eliminar Tarea
const UndoTaskBtn = document.querySelector(".undo-btn");                    //Deshacer Tarea




//ACCIONES

//AGREGAR TAREA
buttonAddTask.addEventListener("click", function(){

    //DECLARAMOS EL VALOR IMPUT COMO UN STRING
    let task = String(InputTask.value);

    //COMPROBAMOS VALORES VACIOS
    if (task == "") {
        alert("Necesitas introducir una tarea")
    } else {
    
    //MOVEMOS ELEMTNOS
    DisplaytaskPending.textContent = task; 
    
    //MOFICAMOS HTML DE TEXTO
    InputTask.value = "";  
    }

});


//COMPLETAR TAREAS
CompletedTaskBtn.addEventListener("click", function (){

    // Obtener el texto del span pendiente
    let task = DisplaytaskPending.textContent;
    
    // Verificar si hay tarea pendiente
    if (task.trim() === "") {
        alert("No hay tarea pendiente para completar");
        return;
    }
    
    // Mover el texto al span completado
    DisplaytaskCompleted.textContent = task;
    
    // Limpiar el span pendiente
    DisplaytaskPending.textContent = "";


});

//DESHACER TAREA
UndoTaskBtn.addEventListener("click", function (){

    // Obtener el texto del span pendiente
    let task = DisplaytaskCompleted.textContent;
    
    // Verificar si hay tarea completada
    if (task.trim() === "") {
        alert("No hay tarea completada para deshacer");
        return;
    }
    
    // Mover el texto al span completado
    DisplaytaskPending.textContent = task;
    
    // Limpiar el span pendiente
    DisplaytaskCompleted.textContent = "";


});

//ELIMINAR TARES PENDIENTES
RemovePendingTaskBtn.addEventListener("click",function(){

    // Obtener el texto del span pendiente
    let task = DisplaytaskPending.textContent;
    
    // Verificar si hay tarea pendiente
    if (task.trim() === "") {
        alert("No hay tarea pendiente por eliminar");
        return;
    }
    
    // Eliminamos la tarea
    DisplaytaskPending.textContent = "";

});


//ELIMINAR TARES COMPLETADAS
RemoveCompletedTaskBtn.addEventListener("click",function(){

    // Obtener el texto del span pendiente
    let task = DisplaytaskCompleted.textContent;
    
    // Verificar si hay tarea pendiente
    if (task.trim() === "") {
        alert("No hay tarea completa por eliminar");
        return;
    }
    
    // Eliminamos la tarea
    DisplaytaskCompleted.textContent = "";

});



// 4. BOTÓN ESPECIAL

//DECLARAMOS VARIABLES
const SpecialBtn = document.querySelector("#specialBtn");
const stateMood = document.querySelector("#mood");
const ChangesMood = document.querySelector(".resultDiff");
let counterTwo = 0;

//FUNCION QUE CAMBIA EL TEXTO Y LA CLASSE 
function UpdateStateMood(counterTwo) {
    
    if (counterTwo == 1) {
    stateMood.textContent = "Buen Humor"
    ChangesMood.classList.remove("resultDiff")  
    ChangesMood.classList.add("buen-humor")  

    } else if (counterTwo == 2){

    stateMood.textContent = "Mal humor"
    ChangesMood.classList.remove("buen-humor")  
    ChangesMood.classList.add("mal-humor")  
    } else if (counterTwo == 3) {

    stateMood.textContent = "Humor Triste"
    ChangesMood.classList.remove("mal-humor")  
    ChangesMood.classList.add("humor-Triste") 

    } else if (counterTwo == 4) {
    stateMood.textContent = "Estado de animo no definido"

    ChangesMood.classList.remove("humor-Triste")  
    ChangesMood.classList.add("resultDiff") 
    }
    


}
//FUNCION QUE MIDE EL CONTADOR
SpecialBtn.addEventListener("click", function () {
    counterTwo++;
    
    if (counterTwo < 5) {
        UpdateStateMood(counterTwo);
    } else {
        counterTwo = 1;  // Reiniciar a 1, no a 0
        UpdateStateMood(counterTwo);  // ¡IMPORTANTE! Actualizar el estado
    }
});






// 5. TEMPORIZADOR

//DECLARAMOS VARIABLES
const timeingImput = document.querySelector("#timerInput");
const starTimeOutbtn = document.querySelector("#startTimerBtn");
const stopTimeOutbtn = document.querySelector("#stopTimerBtn");
const DisplayTime = document.querySelector("#timerDisplay");
const DisplayTimeResult = document.querySelector("#timerResult");


starTimeOutbtn.addEventListener("click", function () {
    
    // 1. OBTENER el tiempo del input (esto te faltaba)
    let time = Number(timeingImput.value);
    
    // 2. Validar
    if (time <= 0) {
        alert("Ingresa un tiempo válido");
        return;
    }
    
    // 3. Guardar el intervalo en una variable GLOBAL para poder pararlo
    if (window.miIntervalo) {
        clearInterval(window.miIntervalo); // Parar cualquier temporizador previo
    }
    
    // 4. Iniciar el temporizador
    window.miIntervalo = setInterval(function() {
        // Calcular minutos y segundos actuales
        let minutos = Math.floor(time / 60);
        let segundos = time % 60;
        
        // Mostrar
        DisplayTime.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        
        // Reducir tiempo
        time--;
        
        // Detener cuando llegue a 0
        if (time < 0) {
            clearInterval(window.miIntervalo);
            DisplayTime.textContent = "00:00";
            DisplayTime.style.color = "red";
            alert("¡TIEMPO!");
        }
    }, 100);

});

//ACCIONES
stopTimeOutbtn.addEventListener("click", function () {
    stopTimeOutbtn.removeAttribute("disabled");
    clearInterval(miIntervalo);
    miIntervalo = null; // Importante: limpiar la referencia
})


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




showNotification('Página cargada. ¡Comienza a implementar JavaScript!');