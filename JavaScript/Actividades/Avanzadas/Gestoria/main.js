//Importamos modulos
import { inputStudents, changeCourse, modifyCol, nullNav, restoreCol, activeBTNaddStudent,closeForm } from './ui.js'; 
import { startGestory } from './api.js';
import { changeOPT } from './service.js';
const studentTable = document.getElementById("table-body");
let modificado = false;
let nav = true;
let lisStudent = [];
const navLinks = document.querySelectorAll('#mainNav .nav-link');

//FUNCION: INICIO
const main = async () => {
    try {
    //Inicializamos datos
    const list = await startGestory();

    //Comprobar
    if (!list) throw new Error ("No se ha recibido alumnos"); 
    
    
    inputStudents(list.Primero);

    lisStudent = Object.values(list).flat()

    
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (modificado) {
                    restoreCol();    
                    modificado = false; 
                }
               
            });
        });
    
    changeCourse(list);

    } catch (error) {
        console.log(error)
        studentTable.innerHTML = `<h3>Ha habido un error</h3>`;
    }


}


//Evento: Muestra alumnos de primer año
(async function initApp() {
    main();
})();


//Evento: Clica Optativas y muestra y carga datos de optativas
const handleOptClick = (e) => {
    if (!modificado) {
        nullNav();    
        modifyCol();  
        modificado = true;
    }   
    changeOPT(e, lisStudent); 
};

document.getElementById("OPT1").addEventListener('click', handleOptClick);
document.getElementById("OPT2").addEventListener('click', handleOptClick);
document.getElementById("OPT3").addEventListener('click', handleOptClick);

document.getElementById("btn-add-ui").addEventListener('click',activeBTNaddStudent);

