//Importamos modulos
import * as ui from './ui.js'; 
import * as api from './api.js'; 
import * as sr from './service.js'
const studentTable = document.getElementById("table-body");
let modificado = false;
let form = false;
let listStudent = [];
const navLinks = document.querySelectorAll('#mainNav .nav-link');
const formContent = document.getElementById("form-container");
const selectOrder = document.getElementById("filter-materia");
const navMain = document.querySelector(".container");
//FUNCION: INICIO
const main = async () => {
    try {
    //Inicializamos datos
    const list = await api.startGestory();

    //Comprobar
    if (!list) throw new Error ("No se ha recibido alumnos"); 
    
    
    ui.renderT(list.Primero);

    listStudent = Object.values(list).flat()
    
    ui.renderCourse(list);

    } catch (error) {
        console.log(error)
        studentTable.innerHTML = `<h3>Ha habido un error</h3>`;
    }


}


//Evento: Muestra alumnos de primer año
(async function initApp() {
    main();
    
})();

navMain.addEventListener("click",(e) =>{
    if (e.target.id === "c1" || e.target.id === "c2" || e.target.id === "c3" ||e.target.id === "c4") {
        ui.restoreCol();
        modificado = false;

    }
})

//Evento: Clica Optativas y muestra y carga datos de optativas
const handleOptClick = (e) => {
    if (!modificado) {
        ui.nullNav();    
        ui.modifyCol();  
        modificado = true;
    }   
    
    const listOPT = sr.filterOPT(e, listStudent);
    
    ui.renderOPT(listOPT);
};

document.getElementById("OPT1").addEventListener('click', handleOptClick);
document.getElementById("OPT2").addEventListener('click', handleOptClick);
document.getElementById("OPT3").addEventListener('click', handleOptClick);


// EVENTO: Abrir Formulario de añadir
document.getElementById("btn-add-ui").addEventListener('click', () => {
    ui.addBTN(); // Esto inyecta el HTML
    form = true;
});

// EVENTO: Abrir Formulario de editar
document.getElementById("btn-edit-ui").addEventListener('click', () => {
    ui.editBTN(); // Esto inyecta el HTML
    form = true;
});

// EVENTO: Cierra el formulario
formContent.addEventListener('click', (e) => {
    if (e.target.id === "closeForm") {
        formContent.innerHTML = ""; 
        form = false;
        console.log("Formulario cerrado con éxito");
    }
});




