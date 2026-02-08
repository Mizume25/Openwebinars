//Importamos modulos
import { inputStudents, changeCourse, modifyCol, nullNav, restoreCol,
     activeBTNaddStudent,activeBTNeditStudent} from './ui.js'; 
import { startGestory } from './api.js';
import { changeOPT,orderStudent } from './service.js';
const studentTable = document.getElementById("table-body");
let modificado = false;
let form = false;
let listStudent = [];
const navLinks = document.querySelectorAll('#mainNav .nav-link');
const formContent = document.getElementById("form-container");
const selectOrder = document.getElementById("filter-materia");
//FUNCION: INICIO
const main = async () => {
    try {
    //Inicializamos datos
    const list = await startGestory();

    //Comprobar
    if (!list) throw new Error ("No se ha recibido alumnos"); 
    
    
    inputStudents(list.Primero);

    listStudent = Object.values(list).flat()

    
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
    changeOPT(e, listStudent); 
};

document.getElementById("OPT1").addEventListener('click', handleOptClick);
document.getElementById("OPT2").addEventListener('click', handleOptClick);
document.getElementById("OPT3").addEventListener('click', handleOptClick);


// EVENTO: Abrir Formulario
document.getElementById("btn-add-ui").addEventListener('click', () => {
    activeBTNaddStudent(); // Esto inyecta el HTML
    form = true;
});

// EVENTO DELEGADO: Cerrar Formulario
// Ponemos el vigilante en el CONTENEDOR, no en el botón directamente
formContent.addEventListener('click', (e) => {
    // Si el clic fue en el botón de cerrar (comprobamos el ID)
    if (e.target.id === "closeForm") {
        formContent.innerHTML = ""; // Limpiamos
        form = false;
        console.log("Formulario cerrado con éxito");
    }
});


// EVENTO: Abrir Formulario
document.getElementById("btn-edit-ui").addEventListener('click', () => {
    activeBTNeditStudent(); // Esto inyecta el HTML
    form = true;
});

// EVENTO DELEGADO: Cerrar Formulario
// Ponemos el vigilante en el CONTENEDOR, no en el botón directamente
formContent.addEventListener('click', (e) => {
    // Si el clic fue en el botón de cerrar (comprobamos el ID)
    if (e.target.id === "closeForm") {
        formContent.innerHTML = ""; // Limpiamos
        form = false;
        console.log("Formulario cerrado con éxito");
    }
});


// El evento se aplica al SELECT, no a los items
selectOrder.addEventListener('change', (e) => {
    const listaOrdenada = orderStudent(e, listStudent);
    inputStudents(listaOrdenada);
});

