//DECLARAMOS ARRAYS DE STRINGS
const tareas = ["Estudiar BBDD", "Estudiar TS", "Ir al gym", "Estudiar Java"];
//DECLARAMOS DISPLAYS EN EL DOM
const displayList = document.getElementById('lista-tareas');
//Funcion de recorrido
const tourList = async () => {
    if (!displayList)
        return;
    let html = ``; //Elemento html
    html += `<ul>`;
    tareas.forEach((p) => {
        html += `
        <li class='list-group-item'>${p}</li>
        `;
    });
    html += `</ul>`;
    displayList.innerHTML += html;
};
//Cargara el elemento en cuanto cargue el documento
document.addEventListener('DOMContentLoaded', () => {
    tourList();
});
export {};
//# sourceMappingURL=Act3.js.map