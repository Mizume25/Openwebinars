//REPASO DE CONCEPTOS GENERALES Y CLAVES DE ACT 1

//DECLARAMOS VARIABLES
let DisplayCounter = document.querySelector("#contador-valor");
let addValueCounter = document.querySelector("#contador-incrementar");
let resetValueCounter = document.querySelector("#contador-resetear");
let reduceValueCounter = document.querySelector("#contador-decrementar");

let counter = 0;

//VISTA
function UpdateCounter() {
    DisplayCounter.textContent = counter;
}

//ACCIONES DE LOS BOTONES

//INCREMENTAMOS VALOR
addValueCounter.addEventListener("click", function () {
     counter++;
     UpdateCounter()
     
})

//RESETEAR VALOR
resetValueCounter.addEventListener("click",function () {
     counter = 0;
     UpdateCounter()
     
})

//RESTAR VALOR
reduceValueCounter.addEventListener("click",function () {
     counter--;
     UpdateCounter()
  
    
})




//DECLARAMOS VARIARBLES
//INPUTS INICIALES
const FisrtNumberImput = document.querySelector("#calculadora-num1");
const SecondNumberImput = document.querySelector("#calculadora-num2");

//OPERAR RESULTADO
const OperationAdd = document.querySelector("#calculadora-sumar");
const OperatationRest = document.querySelector("#calculadora-restar");
const OperationMulti = document.querySelector("#calculadora-multiplicar");
const OperationDiv = document.querySelector("#calculadora-dividir");
//MOSTRAR RESULTADO
const ShowResult = document.querySelector("#calculadora-resultado");


function ShowResultFinal(result) {
    ShowResult.textContent = result;
    FisrtNumberImput.value = "";
    SecondNumberImput.value = "";
}

//SUMAR
OperationAdd.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 + num2;
        ShowResultFinal(result);
    }


});

//RESTAR
OperatationRest.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 - num2;

        ShowResultFinal(result);
    }


});

//MULTIPLICAR
OperationMulti.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "") {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 * num2;

        ShowResultFinal(result);
    }


});


//DIVIDIR
OperationDiv.addEventListener("click", function () {
    let num1 = Number(FisrtNumberImput.value);
    let num2 = Number(SecondNumberImput.value);

    if (String(FisrtNumberImput.value) == "" && String(FisrtNumberImput.value) == "" ) {
        alert("Necesitas introducir valores que operar");
        return;
    } else {

        let result = num1 / num2;

        ShowResultFinal(result);
    }


});


//DECLARAR VARIABLES
const newTaskInput = document.querySelector("#tarea-nueva");
const addNewTaskBtn = document.querySelector("#tarea-agregar");
const tareasLista = document.querySelector("#tareas-lista");

// Contadores
const counterAllTask = document.querySelector("#tareas-total");
const counterPendingTask = document.querySelector("#tareas-pendientes");
const counterCompletedTask = document.querySelector("#tareas-completadas");

// ACCIÓN: Agregar nueva tarea
addNewTaskBtn.addEventListener("click", function() {
    let task = newTaskInput.value.trim();
    
    if (task === "") {
        alert("Debes introducir una tarea para asignar");
        return;
    }
    
    // 1. Crear nuevo elemento <li> para la tarea
    const nuevaTarea = document.createElement("li");
    nuevaTarea.className = "tarea-item";
    
    // 2. Crear span para el texto
    const tareaTexto = document.createElement("span");
    tareaTexto.className = "tarea-texto";
    tareaTexto.textContent = task;
    
    // 3. Crear contenedor de acciones
    const tareaAcciones = document.createElement("div");
    tareaAcciones.className = "tarea-acciones";
    
    // 4. Crear botón COMPLETAR
    const btnCompletar = document.createElement("button");
    btnCompletar.className = "btn-completar btn-small";
    btnCompletar.innerHTML = '<i class="fas fa-check"></i>';
    
    // 5. Crear botón ELIMINAR
    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar btn-small";
    btnEliminar.innerHTML = '<i class="fas fa-trash"></i>';
    
    // 6. Agregar eventos a los botones de ESTA tarea
    btnCompletar.addEventListener("click", function() {
        // Marcar esta tarea específica como completada
        tareaTexto.classList.toggle("completada");
        
        // Cambiar icono según estado
        if (tareaTexto.classList.contains("completada")) {
            btnCompletar.innerHTML = '<i class="fas fa-undo"></i>';
            btnCompletar.title = "Marcar como pendiente";
        } else {
            btnCompletar.innerHTML = '<i class="fas fa-check"></i>';
            btnCompletar.title = "Completar tarea";
        }
        
        actualizarContadores();
    });
    
    btnEliminar.addEventListener("click", function() {
        // Eliminar ESTA tarea específica
        nuevaTarea.remove();
        actualizarContadores();
    });
    
    // 7. Ensamblar todo
    tareaAcciones.appendwChild(btnCompletar);
    tareaAcciones.appendChild(btnEliminar);
    
    nuevaTarea.appendChild(tareaTexto);
    nuevaTarea.appendChild(tareaAcciones);
    
    // 8. Agregar a la lista
    tareasLista.appendChild(nuevaTarea);
    
    // 9. Limpiar input
    newTaskInput.value = "";
    newTaskInput.focus();
    
    // 10. Actualizar contadores
    actualizarContadores();
});

// Función para actualizar contadores
function actualizarContadores() {
    const todasTareas = document.querySelectorAll(".tarea-item");
    const tareasCompletadas = document.querySelectorAll(".tarea-texto.completada");
    const tareasPendientes = todasTareas.length - tareasCompletadas.length;
    
    counterAllTask.textContent = `Total: ${todasTareas.length}`;
    counterPendingTask.textContent = `Pendientes: ${tareasPendientes}`;
    counterCompletedTask.textContent = `Completadas: ${tareasCompletadas.length}`;
}


//DECLARAR VARIABLES
const stateMoodIcon = document.querySelector("#estado-animo-icono");
const DisplayDescriptionMood = document.querySelector("#estado-animo-texto");
const ChangeMoodBtn = document.querySelector("#estado-animo-btn");


ChangeMoodBtn.addEventListener("click", function () {
     stateMoodIcon.className = "";
     let MoodRandom = Math.floor(Math.random() * 3);
     
     if (MoodRandom == 0) {
        HappyMood();
     } else if(MoodRandom == 1){
        AngryMood();
     } else if (MoodRandom == 2){
        NeutreMood();
     }

    
});


function HappyMood() {
    stateMoodIcon.className = "";
    stateMoodIcon.classList.add("fas","fa-smile")
    DisplayDescriptionMood.textContent = "";
    DisplayDescriptionMood.textContent = "Happy"
}

function AngryMood() {
    stateMoodIcon.className = "";
    stateMoodIcon.classList.add("fas","fa-angry")
    DisplayDescriptionMood.textContent = "";
    DisplayDescriptionMood.textContent = "Angry"
}

function NeutreMood() {
    stateMoodIcon.className = "";
    stateMoodIcon.classList.add("fas","fa-meh")
    DisplayDescriptionMood.textContent = "";
    DisplayDescriptionMood.textContent = "Neutre"
}


