//Declaramos lista de tareas
const displayTask = document.querySelector("#lista-tareas");
let list = [];
//Cargamos datos predeterminados
fetch("Act4.json")
.then(answer => {
    if (!answer.ok) throw new Error('Error al cargar JSON') 
    return answer.json();
})
.then(data => {
    list = data;
    let html = ``;
    data.forEach(item => {
        html += `<li data-id="${item.id}">${item.id}. ${item.tarea}</li>`;
    });

    displayTask.innerHTML = html;

}).catch(err => {
    console.log("ERROR",err);
});


//Convertir inputs
const BTNaddTask = document.querySelector("#btn-agregar");
const inputTask = document.querySelector("#nueva-tarea");
const deleteTask = document.querySelector("#btn-delete");

let id = 2; // Empieza de 2 porque ya hay 2 tareas

BTNaddTask.addEventListener('click',function () {

    if (inputTask.value == "") {
        alert("No puedes introducir valores vacios")
        return;
    } else {
    let stringValue = inputTask.value;

    id++;

    renderizar(id,stringValue);

        
    list.push({
        id: id,
        tarea: inputTask.value
    });
    }
    

    
});



function renderizar(id,stringValue) {
   let html = `<li data-id="${id}">${id}. ${stringValue}</li>`
    
    displayTask.innerHTML += html;

    inputTask.value = " "; 
}


deleteTask.addEventListener('click',function () {
    
});
