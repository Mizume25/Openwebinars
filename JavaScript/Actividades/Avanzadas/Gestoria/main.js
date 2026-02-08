//Importamos modulos
import { inputStudents } from './ui.js'; 
import { startGestory } from './api.js';
 const studentTable = document.getElementById("table-body");
//FUNCION: INICIO
const init = async () => {
    try {
    //Inicializamos datos
    const list = await startGestory();

    //Comprobar
    if (!list) throw new Error ("No se ha recibido alumnos"); 
    
    //Renderizamos Primero por defecto
    inputStudents(list.Primero);

    } catch (error) {
        console.log(error)
        studentTable.innerHTML = `<h3>Ha habido un error</h3>`;
    }


}


//Default
(function Default() {
    init();
}());